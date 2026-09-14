import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft } from "lucide-react";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog-data";
import { SITE } from "@/lib/site-data";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const description = post.content[0].replace(/\*\*/g, "").slice(0, 155);
  return {
    title: post.title,
    description,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description,
      type: "article",
      url: `${SITE.url}/blog/${post.slug}`,
      images: [{ url: post.fallbackImage, alt: post.title }],
    },
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-28 pb-24 bg-[var(--color-paper)] min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          
          <Link 
            href="/blog"
            className="inline-flex items-center font-sans font-medium text-[var(--color-steel)] hover:text-[var(--color-brass)] transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al blog
          </Link>

          <header className="mb-12">
            <div className="flex items-center text-[var(--color-steel)] font-mono text-sm mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}
              </time>
            </div>
            
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-[var(--color-ink)] uppercase mb-8 leading-tight">
              {post.title}
            </h1>
          </header>

          <div className="relative w-full aspect-[16/9] mb-12 corner-brackets">
            <Image
              src={post.fallbackImage}
              alt={post.title}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg prose-slate max-w-none text-[var(--color-ink)]/80 font-sans">
            {post.content.map((paragraph, idx) => {
              // Simple markdown parser for bold text in the mock data
              const boldRegex = /\*\*(.*?)\*\*/g;
              const formattedParagraph = paragraph.split(boldRegex).map((part, i) => 
                i % 2 === 1 ? <strong key={i} className="font-heading font-semibold text-[var(--color-ink)]">{part}</strong> : part
              );
              
              return (
                <p key={idx} className="mb-6 leading-relaxed">
                  {formattedParagraph}
                </p>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
