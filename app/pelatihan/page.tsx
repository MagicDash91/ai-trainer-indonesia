import type { Metadata } from "next"
import Link from "next/link"
import { PROGRAMS } from "@/lib/programs"

const SITE_URL = "https://aitrainerindonesia.id"
const MICHAEL_URL = "https://michaelwiryaseputra.com"

export const metadata: Metadata = {
  title: "Program Pelatihan AI — Generative AI, RAG & Agentic AI",
  description:
    "Program pelatihan AI hands-on di Indonesia: Agentic AI korporat, bootcamp RAG, fine-tuning LLM & LLMOps, dan fondasi AI/ML engineering — untuk tim & individu.",
  alternates: { canonical: `${SITE_URL}/pelatihan` },
}

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Program Pelatihan AI oleh Michael Wiryaseputra",
  numberOfItems: PROGRAMS.length,
  itemListElement: PROGRAMS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: p.name,
      description: p.summary,
      serviceType: "AI training",
      areaServed: "Indonesia",
      provider: { "@id": `${MICHAEL_URL}/#person` },
    },
  })),
}

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Program Pelatihan", item: `${SITE_URL}/pelatihan` },
  ],
}

export default function Pelatihan() {
  return (
    <div className="max-w-[860px] mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <section>
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Program Pelatihan AI
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed max-w-[720px]">
          Pelatihan AI hands-on yang dibawakan{" "}
          <a href={MICHAEL_URL} target="_blank" rel="noopener noreferrer">
            Michael Wiryaseputra
          </a>{" "}
          — AI/ML Engineer &amp; trainer berbasis di Semarang. Setiap program bersifat build-along:
          peserta pulang membawa aplikasi AI yang mereka bangun sendiri, dalam bahasa Indonesia
          maupun Inggris, untuk tim korporat maupun individu.
        </p>
      </section>

      <section className="mt-10 space-y-6">
        {PROGRAMS.map((p) => (
          <div key={p.slug} className="entry-card">
            <h2 className="text-xl font-bold m-0">{p.name}</h2>
            <p className="mt-2 leading-relaxed text-[var(--muted)]">{p.summary}</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-sm">
              {p.topics.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="mt-4 grid gap-1 text-sm">
              <p>
                <strong>Untuk:</strong> {p.audience}
              </p>
              <p>
                <strong>Format:</strong> {p.format}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-10">
        <p className="text-sm">
          <Link href="/trainer/michael-wiryaseputra">
            Lihat profil &amp; kredensial lengkap trainer →
          </Link>
        </p>
        <p className="mt-1 text-sm">
          <Link href="/">Bandingkan dengan trainer &amp; bootcamp AI lain di Indonesia</Link>
        </p>
      </section>

      <section className="mt-10 entry-card">
        <h2 className="text-xl font-bold">Diskusikan kebutuhan pelatihan tim Anda</h2>
        <p className="mt-2 text-[var(--muted)]">
          Setiap program dikustomisasi sesuai use case dan industri Anda.
        </p>
        <a
          href={MICHAEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white font-medium no-underline"
        >
          Hubungi Michael Wiryaseputra →
        </a>
      </section>
    </div>
  )
}
