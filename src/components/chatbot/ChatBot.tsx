"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Download,
  Home,
  Mail,
  MessageCircle,
  Phone,
  RotateCcw,
  Search,
  X,
} from "lucide-react";
import { Isotipo } from "@/components/ui/Isotipo";
import { resolveNode, ROOT_NODE, whatsappLink, type ChatAnswers, type ChatOption } from "@/lib/chatbot/flow";
import { searchChat } from "@/lib/chatbot/search";
import { cn } from "@/lib/utils";

type Entry = { id: number; from: "bot" | "user"; text: string };
type View = { type: "node"; nodeId: string } | { type: "search"; query: string };
type ChatState = { history: Entry[]; view: View; answers: ChatAnswers; stack: View[] };

const STORAGE_KEY = "gm-chatbot-v1";
const TEASER_KEY = "gm-chatbot-teaser";
const EMPTY_STATE: ChatState = { history: [], view: { type: "node", nodeId: ROOT_NODE }, answers: {}, stack: [] };

function loadState(): ChatState {
  if (typeof window === "undefined") return EMPTY_STATE;
  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    return stored ? { ...EMPTY_STATE, ...(JSON.parse(stored) as ChatState) } : EMPTY_STATE;
  } catch {
    return EMPTY_STATE;
  }
}

function viewContent(view: View, answers: ChatAnswers): { messages: string[]; options: ChatOption[] } {
  if (view.type === "node") return resolveNode(view.nodeId, answers);
  const results = searchChat(view.query);
  if (results.length === 0) {
    return {
      messages: [`No encontré resultados para “${view.query}”.`, "Prueba con otra palabra o elige una opción:"],
      options: [
        { label: "¿Qué bomba necesito?", next: "selector" },
        { label: "Hablar con ingeniería", next: "cotizar-1" },
        { label: "Preguntar por WhatsApp", kind: "whatsapp", href: whatsappLink(`Hola, busco información sobre: ${view.query}`) },
      ],
    };
  }
  return {
    messages: [`Esto encontré para “${view.query}”:`],
    options: results.map((result) => ({ label: result.label, next: result.next })),
  };
}

const OPTION_ICONS = {
  internal: ArrowRight,
  external: ArrowUpRight,
  download: Download,
  phone: Phone,
  email: Mail,
  whatsapp: MessageCircle,
} as const;

export function ChatBot() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<ChatState>(loadState);
  const [typing, setTyping] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [query, setQuery] = useState("");
  const idRef = useRef(state.history.reduce((max, entry) => Math.max(max, entry.id), 0));
  const launcherRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // El almacenamiento puede estar bloqueado; el asistente sigue funcionando sin persistencia.
    }
  }, [state]);

  // Invitación discreta una sola vez por sesión.
  useEffect(() => {
    let seen = false;
    try {
      seen = window.sessionStorage.getItem(TEASER_KEY) === "1";
    } catch {
      seen = true;
    }
    if (seen) return;
    const timer = window.setTimeout(() => setTeaser(true), 7000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const scroller = scrollRef.current;
    if (scroller) scroller.scrollTo({ top: scroller.scrollHeight, behavior: "smooth" });
  }, [state.history, typing, open]);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  /** Muestra la respuesta del asistente para una vista, con una breve pausa de "escribiendo". */
  const goTo = useCallback((view: View, options: { userText?: string; answers?: ChatAnswers; pushCurrent?: boolean; resetStack?: boolean } = {}) => {
    const nextId = () => {
      idRef.current += 1;
      return idRef.current;
    };
    window.clearTimeout(timerRef.current);
    setState((prev) => {
      const answers = options.answers ?? prev.answers;
      const history = options.userText
        ? [...prev.history, { id: nextId(), from: "user" as const, text: options.userText }]
        : prev.history;
      const stack = options.resetStack ? [] : options.pushCurrent ? [...prev.stack, prev.view] : prev.stack;
      return { ...prev, answers, history, stack };
    });

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setTyping(true);
    timerRef.current = window.setTimeout(() => {
      setTyping(false);
      setState((prev) => {
        const { messages } = viewContent(view, prev.answers);
        return {
          ...prev,
          view,
          history: [...prev.history, ...messages.map((text) => ({ id: nextId(), from: "bot" as const, text }))],
        };
      });
    }, reduceMotion ? 0 : 380);
  }, []);

  const openChat = () => {
    setOpen(true);
    setTeaser(false);
    try {
      window.sessionStorage.setItem(TEASER_KEY, "1");
    } catch {
      // sin persistencia
    }
    if (state.history.length === 0) goTo({ type: "node", nodeId: ROOT_NODE }, { resetStack: true });
  };

  const closeChat = useCallback(() => {
    setOpen(false);
    window.requestAnimationFrame(() => launcherRef.current?.focus());
  }, []);

  const restart = () => {
    setState({ ...EMPTY_STATE, history: [] });
    goTo({ type: "node", nodeId: ROOT_NODE }, { resetStack: true });
  };

  const handleOption = (option: ChatOption) => {
    if ("next" in option) {
      goTo(
        { type: "node", nodeId: option.next },
        {
          userText: option.label,
          answers: option.set ? { ...state.answers, ...option.set } : undefined,
          pushCurrent: true,
          resetStack: option.next === ROOT_NODE,
        },
      );
      return;
    }
    if (option.kind === "internal") {
      router.push(option.href);
      if (window.matchMedia("(max-width: 639px)").matches) closeChat();
      return;
    }
    if (option.kind === "phone" || option.kind === "email") {
      window.location.assign(option.href);
      return;
    }
    window.open(option.href, "_blank", "noopener,noreferrer");
  };

  const goBack = () => {
    const previous = state.stack[state.stack.length - 1];
    if (!previous) return;
    setState((prev) => ({ ...prev, stack: prev.stack.slice(0, -1) }));
    goTo(previous, { userText: "Volver" });
  };

  const submitSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const text = query.trim();
    if (!text) return;
    setQuery("");
    goTo({ type: "search", query: text }, { userText: text, pushCurrent: true });
  };

  // Escape cierra; el foco se mantiene dentro del panel mientras está abierto.
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeChat();
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>("button:not([disabled]), input, a[href]"));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    window.requestAnimationFrame(() => panelRef.current?.querySelector<HTMLElement>("input")?.focus({ preventScroll: true }));
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, closeChat]);

  const { options } = viewContent(state.view, state.answers);
  const atRoot = state.view.type === "node" && state.view.nodeId === ROOT_NODE;

  return (
    <>
      {/* Invitación */}
      {teaser && !open && (
        <div className="fixed bottom-24 right-6 z-[90] flex max-w-[16rem] items-start gap-2 rounded-2xl rounded-br-sm bg-white p-4 text-sm text-[var(--color-ink)] shadow-[0_18px_50px_rgba(0,46,95,0.22)]">
          <button type="button" onClick={openChat} className="text-left font-medium leading-snug">
            ¿Buscas un equipo o una cotización? Te ayudo en segundos.
          </button>
          <button
            type="button"
            onClick={() => {
              setTeaser(false);
              try {
                window.sessionStorage.setItem(TEASER_KEY, "1");
              } catch {
                // sin persistencia
              }
            }}
            aria-label="Cerrar invitación"
            className="-mr-1 -mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full text-[var(--color-steel)] hover:bg-[var(--color-mist)]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Botón flotante */}
      <button
        ref={launcherRef}
        type="button"
        onClick={open ? closeChat : openChat}
        aria-expanded={open}
        aria-controls="gm-chatbot"
        aria-label={open ? "Cerrar asistente" : "Abrir asistente de GM"}
        className={cn(
          "fixed bottom-6 right-6 z-[90] grid h-14 w-14 place-items-center rounded-full bg-[var(--color-ink)] text-white shadow-[0_14px_40px_rgba(0,46,95,0.35)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brass)] focus-visible:ring-offset-2",
          open && "max-sm:hidden",
        )}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!open && <span className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full border-2 border-white bg-[var(--color-brass)]" aria-hidden="true" />}
      </button>

      {/* Panel */}
      {open && (
        <div
          id="gm-chatbot"
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="Asistente de GM Corporativo Industrial"
          className="fixed inset-0 z-[95] flex flex-col overflow-hidden bg-white shadow-[0_30px_90px_rgba(0,20,45,0.35)] sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[min(640px,calc(100vh-8rem))] sm:w-[400px] sm:rounded-2xl"
        >
          <header className="flex items-center gap-3 bg-[var(--color-ink)] px-4 py-3 text-white">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
              <Isotipo variant="dark" className="w-6" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-heading text-lg font-semibold uppercase leading-none tracking-wide">Asistente GM</p>
              <p className="mt-1 text-xs text-white/65">Respuestas inmediatas · Ingeniería por WhatsApp</p>
            </div>
            <button type="button" onClick={restart} aria-label="Reiniciar conversación" className="grid h-9 w-9 place-items-center rounded-full text-white/80 hover:bg-white/10 hover:text-white">
              <RotateCcw className="h-4 w-4" />
            </button>
            <button type="button" onClick={closeChat} aria-label="Cerrar asistente" className="grid h-9 w-9 place-items-center rounded-full text-white/80 hover:bg-white/10 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </header>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-[var(--color-mist)] px-4 py-5" aria-live="polite">
            {state.history.map((entry) => (
              <div key={entry.id} className={cn("flex", entry.from === "user" ? "justify-end" : "justify-start")}>
                <p
                  className={cn(
                    "max-w-[85%] whitespace-pre-line px-4 py-2.5 text-sm leading-relaxed",
                    entry.from === "user"
                      ? "rounded-2xl rounded-br-sm bg-[var(--color-ink)] text-white"
                      : "rounded-2xl rounded-bl-sm bg-white text-[var(--color-ink)] shadow-sm",
                  )}
                >
                  {entry.text}
                </p>
              </div>
            ))}

            {typing && (
              <div className="flex" aria-label="El asistente está escribiendo">
                <span className="flex gap-1 rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm">
                  {[0, 1, 2].map((dot) => (
                    <span key={dot} className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--color-steel)]" style={{ animationDelay: `${dot * 120}ms` }} />
                  ))}
                </span>
              </div>
            )}

            {!typing && (
              <div className="space-y-2 pt-1">
                {options.map((option) => {
                  const Icon = "next" in option ? ChevronRight : OPTION_ICONS[option.kind];
                  const isAction = !("next" in option);
                  return (
                    <button
                      key={`${option.label}-${"next" in option ? option.next : option.href}`}
                      type="button"
                      onClick={() => handleOption(option)}
                      className={cn(
                        "flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-2.5 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brass)]",
                        isAction
                          ? "border-[var(--color-brass)]/40 bg-[var(--color-brass)]/10 text-[var(--color-ink)] hover:bg-[var(--color-brass)] hover:text-white"
                          : "border-[var(--color-steel)]/20 bg-white text-[var(--color-ink)] hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white",
                      )}
                    >
                      <span>{option.label}</span>
                      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                    </button>
                  );
                })}

                {!atRoot && (
                  <div className="flex gap-2 pt-1">
                    {state.stack.length > 0 && (
                      <button type="button" onClick={goBack} className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-[var(--color-steel)] hover:bg-white hover:text-[var(--color-ink)]">
                        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Volver
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => goTo({ type: "node", nodeId: ROOT_NODE }, { userText: "Menú principal", resetStack: true })}
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-[var(--color-steel)] hover:bg-white hover:text-[var(--color-ink)]"
                    >
                      <Home className="h-3.5 w-3.5" aria-hidden="true" /> Menú principal
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <form onSubmit={submitSearch} className="flex items-center gap-2 border-t border-[var(--color-steel)]/15 bg-white p-3">
            <label htmlFor="gm-chatbot-search" className="sr-only">Buscar por palabra clave</label>
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-steel)]" aria-hidden="true" />
              <input
                id="gm-chatbot-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Escribe: lodos, sellos, Tsurumi…"
                autoComplete="off"
                className="h-11 w-full rounded-full border border-[var(--color-steel)]/25 bg-[var(--color-mist)] pl-9 pr-4 text-sm text-[var(--color-ink)] outline-none placeholder:text-[var(--color-steel)] focus:border-[var(--color-brass)] focus:ring-2 focus:ring-[var(--color-brass)]/20"
              />
            </div>
            <button type="submit" aria-label="Buscar" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--color-ink)] text-white hover:bg-[var(--color-brass)] disabled:opacity-40" disabled={!query.trim()}>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
