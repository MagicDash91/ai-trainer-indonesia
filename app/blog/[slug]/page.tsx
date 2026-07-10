import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllPosts, getPost, type Block } from "@/lib/posts"

const SITE_URL = "https://aitrainerindonesia.id"
const MICHAEL_URL = "https://michaelwiryaseputra.com"

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  const url = `${SITE_URL}/blog/${post.slug}`
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: ["Michael Wiryaseputra"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="text-2xl md:text-3xl font-bold mt-12 mb-4 leading-snug">
          {block.text}
        </h2>
      )
    case "h3":
      return (
        <h3 key={i} className="text-xl font-bold mt-8 mb-3 leading-snug">
          {block.text}
        </h3>
      )
    case "p":
      return (
        <p key={i} className="text-[var(--muted)] leading-relaxed mb-5">
          {block.text}
        </p>
      )
    case "ul":
      return (
        <ul key={i} className="list-disc pl-6 space-y-2 text-[var(--muted)] mb-6">
          {block.items.map((it, j) => (
            <li key={j} className="leading-relaxed">
              {it}
            </li>
          ))}
        </ul>
      )
    case "code":
      return (
        <figure key={i} className="mb-6">
          <pre className="rounded-xl bg-[#0f172a] border border-[var(--border)] p-4 overflow-x-auto text-sm leading-relaxed">
            <code className="font-mono text-slate-100 whitespace-pre">{block.code}</code>
          </pre>
          {block.caption && (
            <figcaption className="text-xs text-[var(--muted)] mt-2">{block.caption}</figcaption>
          )}
        </figure>
      )
    case "image":
      return (
        <figure key={i} className="mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.src}
            alt={block.alt}
            loading="lazy"
            className="rounded-xl border border-[var(--border)] w-full"
          />
          {block.caption && (
            <figcaption className="text-xs text-[var(--muted)] mt-2 text-center">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )
    case "cta":
      return (
        <div key={i} className="my-8 entry-card">
          <p className="leading-relaxed mb-4">{block.text}</p>
          <a
            href={MICHAEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white text-sm font-semibold no-underline"
          >
            Hubungi Michael Wiryaseputra
          </a>
        </div>
      )
    default:
      return null
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const url = `${SITE_URL}/blog/${post.slug}`
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "id",
    keywords: post.tags.join(", "),
    image: `${SITE_URL}/logo.jpg`,
    author: { "@id": `${MICHAEL_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  }
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  }

  return (
    <div className="max-w-[760px] mx-auto px-6 pt-12 pb-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Link href="/blog" className="text-sm">
        ← Kembali ke blog
      </Link>

      <article className="mt-6">
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 bg-[var(--accent-soft)] text-[var(--accent)] rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-black leading-tight mb-3">{post.title}</h1>
          <div className="text-sm text-[var(--muted)]">
            Oleh{" "}
            <a href={MICHAEL_URL} target="_blank" rel="noopener noreferrer" className="font-medium">
              Michael Wiryaseputra
            </a>{" "}
            · {formatDate(post.date)} · {post.readingTime}
          </div>
        </header>

        <div>{post.body.map((block, i) => renderBlock(block, i))}</div>
      </article>

      <section className="mt-12 pt-8 border-t border-[var(--border)]">
        <h2 className="text-xl font-bold">Baca juga</h2>
        <p className="mt-3">
          <Link href="/">Perbandingan trainer &amp; bootcamp AI terbaik di Indonesia</Link>
        </p>
        <p className="mt-1">
          <Link href="/trainer/michael-wiryaseputra">
            Profil &amp; kredensial Michael Wiryaseputra (AI/ML Engineer &amp; trainer)
          </Link>
        </p>
      </section>
    </div>
  )
}
