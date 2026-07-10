import Link from "next/link"
import type { Metadata } from "next"
import { getAllPosts } from "@/lib/posts"

const SITE_URL = "https://aitrainerindonesia.id"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artikel seputar memilih trainer AI, bootcamp AI, dan pelatihan Generative AI / Agentic AI di Indonesia.",
  alternates: { canonical: `${SITE_URL}/blog` },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <div className="max-w-[760px] mx-auto px-6 py-12">
      <h1 className="text-3xl font-extrabold">Blog</h1>
      <p className="mt-3 text-[var(--muted)] leading-relaxed">
        Artikel seputar memilih trainer AI, bootcamp AI, dan pelatihan Generative AI / Agentic AI
        di Indonesia.
      </p>

      {posts.length === 0 ? (
        <div className="entry-card mt-8">
          <p className="text-[var(--muted)]">
            Belum ada artikel — kembali lagi segera. Sementara itu, lihat{" "}
            <Link href="/">perbandingan trainer &amp; bootcamp AI</Link> atau{" "}
            <Link href="/tentang">metodologi</Link> kami.
          </p>
        </div>
      ) : (
        <div className="mt-8 space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block no-underline">
              <article className="entry-card">
                <h2 className="text-xl font-bold m-0 text-[var(--foreground)]">{post.title}</h2>
                <p className="mt-2 text-[var(--muted)] leading-relaxed">{post.description}</p>
                <p className="mt-3 text-sm text-[var(--muted)]">
                  {formatDate(post.date)} · {post.readingTime}
                </p>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
