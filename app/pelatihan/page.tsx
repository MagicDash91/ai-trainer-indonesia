import type { Metadata } from "next"
import Link from "next/link"
import { PROGRAMS, TOOL_CATEGORIES } from "@/lib/programs"

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

const OUTCOMES: string[] = [
  "Aplikasi LLM/RAG yang berfungsi — dibangun sendiri oleh peserta selama pelatihan.",
  "Pemahaman arsitektur AI end-to-end, dari data dan model hingga deployment.",
  "Kemampuan menembus di balik tool no-code: integrasi API, keamanan data, dan LLMOps.",
  "Kode dasar yang bisa langsung dikembangkan tim setelah pelatihan selesai.",
]

const PAGE_FAQ: { q: string; a: string }[] = [
  {
    q: "Apakah pelatihan bisa online atau harus on-site?",
    a: "Keduanya. Pelatihan tersedia on-site — terutama di Semarang dan Jawa Tengah — maupun online untuk tim dan peserta di seluruh Indonesia.",
  },
  {
    q: "Apakah untuk pemula atau yang sudah bisa coding?",
    a: "Keduanya bisa. Ada jalur fondasi AI/ML untuk pemula dan career-switcher, serta program lanjutan (RAG, Agentic AI, fine-tuning, LLMOps) untuk engineer dan tim teknis. Materi disesuaikan dengan level peserta.",
  },
  {
    q: "Apakah materi dikustomisasi sesuai kebutuhan tim?",
    a: "Ya. Untuk pelatihan korporat, materi dan studi kasus disesuaikan dengan industri, use case, dan konteks tim Anda — tanpa menggunakan data sensitif perusahaan.",
  },
  {
    q: "Apa yang peserta bawa pulang setelah pelatihan?",
    a: "Setiap sesi bersifat build-along, sehingga peserta pulang membawa aplikasi AI yang mereka bangun sendiri, pemahaman arsitektur end-to-end, dan kode dasar yang bisa dikembangkan.",
  },
  {
    q: "Bahasa apa yang digunakan dalam pelatihan?",
    a: "Bilingual — bahasa Indonesia maupun Inggris, disesuaikan dengan preferensi tim atau peserta.",
  },
]

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PAGE_FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
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

      <section className="mt-6 text-sm text-[var(--muted)] border-y border-[var(--border)] py-4">
        <span className="font-semibold text-[var(--foreground)]">Dipercaya untuk melatih:</span>{" "}
        pelatihan Agentic AI untuk <strong>Bank Jateng</strong> · pengajar bootcamp di{" "}
        <strong>INTELLIGO.ID</strong>, <strong>DIBIMBING.ID</strong>, dan <strong>DSAREA</strong> ·
        pembicara di acara <strong>Google Developer Group</strong>.
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Pendekatan: end-to-end, bukan permukaan</h2>
        <p className="mt-3 leading-relaxed text-[var(--muted)]">
          Pelatihan ini membawa peserta menempuh alur LLM yang utuh — dari dasar Generative AI
          hingga menjalankannya di produksi. Fokusnya implementasi sungguhan: arsitektur,
          integrasi API, keamanan data, dan cara men-deploy — bukan sekadar menyambungkan node di
          tool siap-pakai. Hasilnya, peserta pulang mampu membangun sistemnya sendiri, bukan hanya
          menjalankan tool buatan orang lain.
        </p>
        <ul className="mt-4 space-y-2 list-disc list-inside text-[var(--muted)]">
          <li>Dasar Generative AI &amp; Large Language Models (LLM)</li>
          <li>RAG (Retrieval-Augmented Generation) — dari dasar hingga Agentic/Hybrid/Adaptive RAG</li>
          <li>AI Agents &amp; Agentic AI — multi-agent, tool execution, dan memory</li>
          <li>Fine-tuning LLM untuk kebutuhan spesifik</li>
          <li>LLMOps &amp; deployment ke sistem produksi</li>
        </ul>
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

      <section className="mt-14">
        <h2 className="text-2xl font-bold">Tools &amp; teknologi yang diajarkan</h2>
        <p className="mt-2 text-[var(--muted)]">
          Peserta belajar stack engineering yang benar-benar dipakai di produksi — bukan hanya
          tool no-code — dari orkestrasi agentic hingga fine-tuning dan LLMOps.
        </p>
        <div className="mt-6 space-y-6">
          {TOOL_CATEGORIES.map((cat) => (
            <div key={cat.category}>
              <h3 className="font-bold text-sm">{cat.category}</h3>
              <p className="text-xs text-[var(--muted)] mb-3">{cat.note}</p>
              <div className="flex flex-wrap gap-2.5">
                {cat.tools.map((t) => (
                  <span
                    key={t.name}
                    className="inline-flex items-center gap-2 border border-[var(--border)] bg-[var(--surface)] rounded-lg px-3 py-2"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.logo}
                      alt={`Logo ${t.name}`}
                      loading="lazy"
                      className="h-5 w-auto object-contain"
                    />
                    <span className="text-sm font-medium">{t.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">Hasil yang Anda dapat</h2>
        <p className="mt-2 text-[var(--muted)]">
          Pelatihan diukur dari apa yang bisa peserta lakukan setelahnya, bukan sekadar materi yang
          disampaikan.
        </p>
        <ul className="mt-4 space-y-2 list-disc list-inside text-[var(--muted)]">
          {OUTCOMES.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">Pertanyaan yang sering diajukan</h2>
        <div className="mt-5 space-y-5">
          {PAGE_FAQ.map((f) => (
            <div key={f.q}>
              <h3 className="font-bold">{f.q}</h3>
              <p className="mt-1 text-[var(--muted)] leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
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
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-[var(--border)] p-4">
            <p className="font-bold text-sm">Pelatihan korporat</p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Dikustomisasi sesuai industri, use case, dan jumlah peserta — termasuk materi dan
              pendampingan. Hubungi untuk penawaran.
            </p>
          </div>
          <div className="rounded-lg border border-[var(--border)] p-4">
            <p className="font-bold text-sm">Kelas privat / individual</p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Pelatihan end-to-end LLM — Generative AI, RAG, AI Agents, Agentic AI, hingga
              fine-tuning — mulai dari Rp 2 juta/hari, dapat dinego.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-[var(--muted)]">
          <span className="font-semibold text-[var(--foreground)]">
            Untuk agensi, vendor pelatihan &amp; event organizer:
          </span>{" "}
          terbuka untuk kerja sama menghubungkan pelatihan ini dengan klien korporat Anda, dengan
          skema komersial yang fleksibel sesuai kesepakatan.
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
