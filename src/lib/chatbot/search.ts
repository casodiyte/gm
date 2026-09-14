import { SEARCH_INDEX, type SearchEntry } from "@/lib/chatbot/flow";

const STOPWORDS = new Set([
  "para", "por", "con", "los", "las", "del", "una", "uno", "unos", "unas", "que", "quiero", "necesito",
  "tienen", "tiene", "hay", "sobre", "como", "donde", "cual", "cuales", "mas", "muy", "este", "esta",
  "informacion", "info", "hola", "buenas", "buenos", "dias", "tardes", "favor", "ustedes", "venden",
]);

export const normalize = (value: string) =>
  value.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

const tokenize = (value: string) =>
  normalize(value)
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length >= 3 && !STOPWORDS.has(token));

// Singular aproximado para que "bombas", "sellos" o "lodos" encuentren "bomba", "sello", "lodo".
const stem = (token: string) => (token.length > 4 && token.endsWith("s") ? token.slice(0, -1) : token);

const prepared = SEARCH_INDEX.map((entry) => ({
  entry,
  label: normalize(entry.label),
  terms: new Set(tokenize(`${entry.label} ${entry.terms}`).map(stem)),
}));

// Las palabras que aparecen en muchas entradas ("bomba", "equipo") pesan menos que las específicas ("lodo", "tsurumi").
const documentFrequency = new Map<string, number>();
for (const { terms } of prepared) {
  for (const term of terms) documentFrequency.set(term, (documentFrequency.get(term) ?? 0) + 1);
}
const weightOf = (term: string) => Math.log((prepared.length + 1) / ((documentFrequency.get(term) ?? 0) + 1)) + 0.1;

/** Búsqueda por coincidencia de palabras (sin IA). Devuelve las entradas más relevantes del índice. */
export function searchChat(query: string, limit = 6): SearchEntry[] {
  const tokens = tokenize(query).map(stem);
  if (tokens.length === 0) return [];
  const phrase = normalize(query).trim();

  const scored = prepared
    .map(({ entry, label, terms }) => {
      let score = 0;
      for (const token of tokens) {
        if (terms.has(token)) {
          score += weightOf(token);
        } else if (token.length >= 4) {
          const prefixMatch = [...terms].find((term) => term.startsWith(token));
          if (prefixMatch) score += weightOf(prefixMatch) * 0.5;
        }
      }
      if (phrase.length >= 4 && label.includes(phrase)) score += 3;
      return { entry, score };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) return [];
  const threshold = scored[0].score * 0.45;
  const seen = new Set<string>();
  return scored
    .filter((result) => result.score >= threshold)
    .filter(({ entry }) => (seen.has(entry.next) ? false : (seen.add(entry.next), true)))
    .slice(0, limit)
    .map(({ entry }) => entry);
}
