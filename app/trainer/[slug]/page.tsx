import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getAllTrainerSlugs, getTrainerDetail } from "@/lib/trainer-detail"

const SITE_URL = "https://aitrainerindonesia.com"

export function generateStaticParams() {
  return getAllTrainerSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const t = getTrainerDetail(slug)
  if (!t) return {}
  const url = `${SITE_URL}/trainer/${t.slug}`
  return {
    title: { absolute: t.metaTitle },
    description: t.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "profile",
      url,
      title: t.metaTitle,
      description: t.metaDescription,
      images: [{ url: t.photo, alt: t.photoAlt }],
    },
  }
}

export default async function TrainerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const t = getTrainerDetail(slug)
  if (!t) notFound()

  const url = `${SITE_URL}/trainer/${t.slug}`

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${t.portfolioUrl}/#person`,
    name: t.name,
    url: t.portfolioUrl,
    mainEntityOfPage: url,
    image: `${SITE_URL}${t.photo}`,
    jobTitle: ["AI/ML Engineer", "Bootcamp Trainer", "Corporate AI Trainer"],
    description: t.summary,
    nationality: "Indonesian",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Semarang",
      addressRegion: "Central Java",
      addressCountry: "ID",
    },
    knowsLanguage: ["Indonesian", "English"],
    knowsAbout: t.expertise,
    worksFor: t.teaching.map((e) => ({ "@type": "Organization", name: e.org })),
    sameAs: [t.portfolioUrl, t.linkedinUrl],
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: t.name, item: url },
    ],
  }

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <div className="max-w-[860px] mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <Link href="/" className="text-sm">
        ← Kembali ke daftar
      </Link>

      {/* Hero */}
      <header className="mt-6 flex flex-col sm:flex-row gap-6 items-start">
        <Image
          src={t.photo}
          alt={t.photoAlt}
          width={120}
          height={120}
          priority
          className="rounded-2xl border border-[var(--border)] object-cover"
        />
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">{t.name}</h1>
          <p className="mt-2 text-lg text-[var(--accent)] font-medium">{t.headline}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{t.location}</p>
        </div>
      </header>

      <p className="mt-6 leading-relaxed text-[var(--muted)]">{t.summary}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={t.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white font-medium no-underline"
        >
          Kunjungi profil lengkap →
        </a>
        <a
          href={t.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg border border-[var(--border)] font-medium no-underline text-[var(--foreground)]"
        >
          LinkedIn
        </a>
      </div>

      {/* Credentials */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Kredensial yang bisa diverifikasi</h2>
        <div className="mt-5 space-y-4">
          {t.credentials.map((c) => (
            <div key={c.label} className="entry-card">
              <h3 className="font-bold m-0">
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer">
                    {c.label}
                  </a>
                ) : (
                  c.label
                )}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{c.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate training */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Pelatihan korporat</h2>
        <div className="mt-5 space-y-4">
          {t.corporateTraining.map((e) => (
            <div key={e.org} className="entry-card">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-bold m-0">
                  {e.role} — {e.org}
                </h3>
                <span className="text-sm text-[var(--muted)]">{e.date}</span>
              </div>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
        <figure className="mt-5">
          <Image
            src="/trainer/michael-bank-jateng.jpg"
            alt="Michael Wiryaseputra memimpin pelatihan Agentic AI untuk Bank Jateng"
            width={860}
            height={484}
            className="rounded-xl border border-[var(--border)] w-full h-auto"
          />
          <figcaption className="mt-2 text-xs text-[var(--muted)] text-center">
            Pelatihan Agentic AI untuk Bank Jateng (September 2025).
          </figcaption>
        </figure>
      </section>

      {/* Teaching */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Pengalaman mengajar bootcamp</h2>
        <div className="mt-5 space-y-4">
          {t.teaching.map((e) => (
            <div key={e.org} className="entry-card">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-bold m-0">
                  {e.href ? (
                    <a href={e.href} target="_blank" rel="noopener noreferrer">
                      {e.org}
                    </a>
                  ) : (
                    e.org
                  )}
                  <span className="font-normal text-[var(--muted)]"> — {e.role}</span>
                </h3>
                <span className="text-sm text-[var(--muted)]">{e.date}</span>
              </div>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Speaking */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Public speaking &amp; komunitas</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {t.speaking.map((s) => (
            <a
              key={s.event + s.venue}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="entry-card no-underline block"
            >
              {s.poster && (
                <Image
                  src={s.poster}
                  alt={`${s.event} — ${s.organizer} di ${s.venue}`}
                  width={320}
                  height={400}
                  className="rounded-lg border border-[var(--border)] w-full h-auto mb-3"
                />
              )}
              <h3 className="font-bold text-sm m-0 text-[var(--foreground)]">{s.event}</h3>
              <p className="text-xs text-[var(--muted)] mt-1">
                {s.organizer} · {s.venue}
                {s.date ? ` · ${s.date}` : ""}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Bidang keahlian</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {t.expertise.map((x) => (
            <span
              key={x}
              className="text-sm px-3 py-1.5 bg-[var(--accent-soft)] text-[var(--accent)] rounded-full"
            >
              {x}
            </span>
          ))}
        </div>
      </section>

      {/* Proof projects */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Bukti membangun: proyek nyata</h2>
        <p className="mt-2 text-[var(--muted)] text-sm">
          Trainer yang membangun sistem AI produksi mengajar dari pengalaman nyata, bukan teori.
        </p>
        <div className="mt-5 space-y-4">
          {t.proofProjects.map((p) => (
            <div key={p.title} className="entry-card">
              <h3 className="font-bold m-0">
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer">
                    {p.title}
                  </a>
                ) : (
                  p.title
                )}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Apa kata peserta &amp; mitra</h2>
        <p className="mt-2 text-[var(--muted)] text-sm">
          Kutipan publik dari peserta dan lembaga — setiap kutipan tertaut ke sumber aslinya di
          LinkedIn dan bisa Anda verifikasi sendiri.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {t.testimonials.map((tt) => (
            <a
              key={tt.href}
              href={tt.href}
              target="_blank"
              rel="noopener noreferrer"
              className="entry-card no-underline block"
            >
              <p className="text-[var(--foreground)] leading-relaxed" lang={tt.lang}>
                &ldquo;{tt.quote}&rdquo;
              </p>
              <p className="mt-3 text-sm font-medium text-[var(--foreground)]">{tt.author}</p>
              <p className="text-xs text-[var(--muted)]">{tt.role}</p>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Pertanyaan yang sering diajukan</h2>
        <div className="mt-5 space-y-5">
          {t.faq.map((f) => (
            <div key={f.q}>
              <h3 className="font-bold">{f.q}</h3>
              <p className="mt-1 text-[var(--muted)] leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related reading (internal link) */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Baca juga</h2>
        <p className="mt-3">
          <Link href="/blog/cara-memilih-trainer-ai-untuk-perusahaan">
            Cara memilih trainer AI untuk perusahaan — 5 kriteria &amp; tanda peringatan
          </Link>
        </p>
        <p className="mt-1">
          <Link href="/">Bandingkan semua trainer &amp; bootcamp AI di Indonesia</Link>
        </p>
      </section>

      {/* CTA */}
      <section className="mt-12 entry-card">
        <h2 className="text-xl font-bold">Butuh pelatihan AI untuk tim Anda?</h2>
        <p className="mt-2 text-[var(--muted)]">
          Pelatihan hands-on Generative AI, RAG, atau Agentic AI, dalam bahasa Indonesia maupun
          Inggris.
        </p>
        <a
          href={t.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white font-medium no-underline"
        >
          Hubungi {t.name} →
        </a>
      </section>
    </div>
  )
}
