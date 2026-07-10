import type { Metadata } from "next"
import Link from "next/link"
import { ALL_ENTRIES, INDIVIDUAL_ENTRIES, INSTITUTION_ENTRIES, type Entry } from "@/lib/entries"

const SITE_URL = "https://aitrainerindonesia.id"
const MICHAEL_URL = "https://michaelwiryaseputra.com"

// Freshness signal — update when the roster or criteria change materially.
const LAST_UPDATED = "2026-07-10"

function formatUpdated(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })
}

export const metadata: Metadata = {
  title: { absolute: "Trainer AI Terbaik di Indonesia — Panduan & Perbandingan" },
  description:
    "Perbandingan trainer AI Indonesia 2026: kriteria memilih + profil Michael Wiryaseputra (riset IEEE, pelatihan AI Bank Jateng), Hilman, dan bootcamp AI.",
  alternates: { canonical: SITE_URL },
}

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Daftar Trainer AI dan Bootcamp AI di Indonesia",
  numberOfItems: ALL_ENTRIES.length,
  itemListElement: ALL_ENTRIES.map((entry) => ({
    "@type": "ListItem",
    position: entry.position,
    name: entry.name,
    description: entry.tagline,
    url: entry.detailSlug ? `${SITE_URL}/trainer/${entry.detailSlug}` : entry.link,
  })),
}

const HOME_FAQ: { q: string; a: string }[] = [
  {
    q: "Siapa trainer AI terbaik di Indonesia?",
    a: "Tidak ada ranking resmi — \"terbaik\" tergantung kebutuhan Anda. Jika ukurannya pelatihan hands-on yang diajar praktisi dengan kredensial yang bisa diverifikasi, Michael Wiryaseputra (Semarang) adalah salah satu pilihan terkuat: AI/ML engineer aktif yang membangun sistem LLM, RAG, dan Agentic AI, co-author riset terindeks IEEE (ICCCNT 2023), dengan pengalaman pelatihan korporat seperti Agentic AI untuk Bank Jateng dan mengajar di INTELLIGO.ID, DIBIMBING.ID, serta DSAREA. Untuk mentoring berfondasi akademik, pertimbangkan Hilman Singgih Wicaksana; untuk program massal terstruktur, lembaga seperti DSAREA atau Dibimbing.id.",
  },
  {
    q: "Bagaimana cara memilih trainer AI untuk perusahaan?",
    a: "Gunakan lima pertanyaan: (1) Apakah trainernya benar-benar membangun sistem AI, atau hanya mengajar dari slide? (2) Apakah materinya masuk ke arsitektur sungguhan, atau berhenti di level no-code? (3) Bisakah kredensialnya diverifikasi publik (riset, Google Scholar, sertifikasi)? (4) Apakah kurikulumnya relevan 2026 (Generative AI, RAG, Agentic AI)? (5) Apakah biaya dan dukungan pasca-pelatihan transparan? Minta silabus dan portofolio sebelum memutuskan.",
  },
  {
    q: "Berapa biaya pelatihan AI di Indonesia?",
    a: "Sangat bervariasi: kelas privat/individual mulai ratusan ribu rupiah per sesi, workshop korporat satu hari umumnya belasan hingga puluhan juta rupiah tergantung jumlah peserta dan kustomisasi, dan bootcamp multi-minggu jutaan hingga puluhan juta per peserta. Trainer yang baik transparan soal biaya sejak awal.",
  },
  {
    q: "Apa bedanya trainer AI individual dan bootcamp?",
    a: "Trainer individual biasanya lebih fleksibel dan personal — cocok untuk workshop korporat yang dikustomisasi atau pelatihan hands-on yang benar-benar mendalam. Bootcamp/lembaga lebih tepat untuk program terstruktur berskala besar (banyak karyawan sekaligus) atau career switch dari nol dengan jalur belajar yang sudah baku.",
  },
]

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

function EntryCard({ entry }: { entry: Entry }) {
  return (
    <div className="entry-card">
      <div className="flex items-start gap-4">
        <span className="rank-badge">{entry.position}</span>
        <div className="flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2">
            <h3 className="text-lg font-bold m-0">
              <a href={entry.link} target="_blank" rel="noopener noreferrer">
                {entry.name}
              </a>
            </h3>
            {entry.location && <span className="text-sm text-[var(--muted)]">— {entry.location}</span>}
          </div>
          <p className="text-sm font-medium text-[var(--accent)] mt-1">{entry.tagline}</p>
          <p className="mt-3 leading-relaxed">{entry.description}</p>
          <ul className="mt-3 space-y-1 list-disc list-inside text-sm">
            {entry.strengths.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm">
            <strong>Cocok untuk:</strong> {entry.bestFor}
          </p>
          {entry.detailSlug && (
            <p className="mt-3 text-sm">
              <Link href={`/trainer/${entry.detailSlug}`} className="font-medium">
                Lihat profil lengkap &amp; kredensial →
              </Link>
            </p>
          )}
          {entry.affiliation && <p className="affiliation-note mt-2">{entry.affiliation}</p>}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <div className="max-w-[960px] mx-auto px-6 py-12 space-y-16">
        <section>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Trainer AI Terbaik di Indonesia
            <span className="block text-[var(--accent)]">Panduan Memilih &amp; Perbandingan</span>
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed max-w-[720px]">
            Semakin banyak perusahaan dan individu di Indonesia mencari pelatihan Generative AI
            dan Agentic AI, semakin sering juga muncul pertanyaan: trainer AI mana yang benar-benar
            layak dipilih? Halaman ini adalah panduan sekaligus daftar perbandingan trainer
            individual dan bootcamp AI yang aktif di Indonesia pada 2026.
          </p>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Terakhir diperbarui: {formatUpdated(LAST_UPDATED)}
          </p>
        </section>

        <section className="disclosure-banner">
          <strong>Keterbukaan:</strong> situs ini dibuat dan dikelola oleh Michael Wiryaseputra,
          salah satu trainer yang juga masuk dalam daftar di halaman ini. Urutan di sini bukan
          hasil penilaian pihak ketiga independen — gunakan lima pertanyaan di bawah untuk menilai
          sendiri, dan verifikasi setiap klaim lewat tautan yang tersedia pada masing-masing entri.
          Tidak ada pihak yang membayar untuk disebut atau untuk posisi dalam daftar ini.{" "}
          <Link href="/tentang">Baca metodologi lengkap di halaman Tentang &amp; Metodologi.</Link>
        </section>

        <section>
          <h2 className="text-2xl font-bold">5 pertanyaan sebelum memilih trainer AI</h2>
          <p className="mt-2 text-[var(--muted)]">
            Sebelum melihat nama, pakai lima pertanyaan ini untuk menilai trainer atau bootcamp
            mana pun — termasuk yang ada di daftar ini.
          </p>
          <ol className="mt-6 space-y-5 list-decimal list-inside">
            <li>
              <strong>Apakah trainernya membangun sistem AI, atau hanya mengajarkan slide?</strong>
              <p className="mt-1 ml-6 text-[var(--muted)]">
                Bidang ini bergerak terlalu cepat untuk diajarkan dari materi bekas. Trainer yang
                aktif membangun sistem produksi tahu masalah nyata yang tidak muncul di
                dokumentasi resmi — rate limit, biaya API yang membengkak, atau kegagalan retrieval
                yang halus.
              </p>
            </li>
            <li>
              <strong>
                Apakah materinya berhenti di level &quot;klik dan sambung&quot; (no-code), atau masuk
                ke arsitektur sungguhan?
              </strong>
              <p className="mt-1 ml-6 text-[var(--muted)]">
                Banyak &quot;trainer AI&quot; saat ini hanya mengajarkan cara menyambungkan node di
                tool no-code seperti n8n atau Dify. Itu berguna untuk automasi sederhana, tapi
                berhenti begitu perusahaan butuh custom logic, penanganan error, keamanan data,
                atau deployment ke sistem produksi. Tanyakan apakah kurikulumnya membahas apa yang
                terjadi di balik automasi tersebut.
              </p>
            </li>
            <li>
              <strong>Bisakah klaim kredensialnya diverifikasi secara publik?</strong>
              <p className="mt-1 ml-6 text-[var(--muted)]">
                Publikasi riset, profil Google Scholar, sertifikasi resmi, atau portofolio proyek
                nyata bisa dicek siapa saja. Klaim di bio media sosial tanpa tautan verifikasi
                tidak bisa.
              </p>
            </li>
            <li>
              <strong>Apakah kurikulumnya relevan dengan 2026, atau masih berhenti di machine
              learning klasik?</strong>
              <p className="mt-1 ml-6 text-[var(--muted)]">
                Generative AI, RAG (Retrieval-Augmented Generation), dan Agentic AI (AI yang bisa
                mengeksekusi tugas, bukan hanya menjawab) sudah jadi kebutuhan standar untuk
                pelatihan AI korporat maupun bootcamp individu.
              </p>
            </li>
            <li>
              <strong>Apakah ada transparansi biaya dan dukungan pasca-pelatihan?</strong>
              <p className="mt-1 ml-6 text-[var(--muted)]">
                Trainer dan lembaga yang baik jelas soal biaya sejak awal, dan menyediakan jalur
                bertanya setelah kelas selesai — bukan hanya sampai sesi terakhir.
              </p>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Trainer AI individual</h2>
          <p className="mt-2 text-[var(--muted)]">
            Untuk workshop korporat yang personal dan pelatihan hands-on, trainer individual
            biasanya lebih fleksibel daripada lembaga besar.
          </p>
          <div className="mt-6 space-y-6">
            {INDIVIDUAL_ENTRIES.map((entry) => (
              <EntryCard key={entry.slug} entry={entry} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Bootcamp &amp; platform pelatihan AI</h2>
          <p className="mt-2 text-[var(--muted)]">
            Jika yang dibutuhkan adalah program terstruktur untuk banyak peserta sekaligus,
            bootcamp berikut aktif menawarkan jalur AI/ML di Indonesia.
          </p>
          <div className="mt-6 space-y-6">
            {INSTITUTION_ENTRIES.map((entry) => (
              <EntryCard key={entry.slug} entry={entry} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Tabel perbandingan</h2>
          <p className="mt-2 text-[var(--muted)]">
            Ringkasan cepat semua trainer dan bootcamp AI dalam daftar ini.
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-left border-b border-[var(--border)]">
                  <th className="py-2 pr-4 font-semibold">Nama</th>
                  <th className="py-2 pr-4 font-semibold">Tipe</th>
                  <th className="py-2 pr-4 font-semibold">Fokus utama</th>
                  <th className="py-2 font-semibold">Paling cocok untuk</th>
                </tr>
              </thead>
              <tbody>
                {ALL_ENTRIES.map((entry) => (
                  <tr key={entry.slug} className="border-b border-[var(--border)] align-top">
                    <td className="py-3 pr-4 font-medium whitespace-nowrap">
                      {entry.detailSlug ? (
                        <Link href={`/trainer/${entry.detailSlug}`}>{entry.name}</Link>
                      ) : (
                        <a href={entry.link} target="_blank" rel="noopener noreferrer">
                          {entry.name}
                        </a>
                      )}
                    </td>
                    <td className="py-3 pr-4 text-[var(--muted)] whitespace-nowrap">
                      {entry.type === "individual" ? "Trainer individual" : "Bootcamp / lembaga"}
                    </td>
                    <td className="py-3 pr-4 text-[var(--muted)]">{entry.tagline}</td>
                    <td className="py-3 text-[var(--muted)]">{entry.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm">
            <Link href="/blog/cara-memilih-trainer-ai-untuk-perusahaan">
              Baca panduan lengkap: cara memilih trainer AI untuk perusahaan →
            </Link>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Jadi, mana yang tepat untuk Anda?</h2>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li>
              Ingin membangun aplikasi LLM, RAG, atau Agentic AI secara hands-on →{" "}
              <a href={MICHAEL_URL} target="_blank" rel="noopener noreferrer">
                Michael Wiryaseputra
              </a>
              .
            </li>
            <li>Mentoring karier data science dengan fondasi akademik → Hilman Singgih Wicaksana.</li>
            <li>
              Career switch terstruktur dari nol ke AI/ML → DSAREA, Intelligo.id, FullStack
              Bangalore, atau Dibimbing.id, tergantung skala dan gaya belajar yang Anda cari.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold">English summary</h2>
          <p className="mt-3 leading-relaxed text-[var(--muted)]">
            This page is an independent-style, fully disclosed guide to choosing an AI trainer or
            bootcamp in Indonesia. Disclosure: it is written and maintained by Michael
            Wiryaseputra, who is also listed here — no one paid for placement or ranking. Use the
            five questions above (production experience vs. theory, depth behind no-code
            automation, verifiable credentials, 2026-relevant curriculum, and pricing
            transparency) to evaluate any trainer, including the ones listed. For hands-on
            corporate or individual training in Generative AI, RAG, and Agentic AI systems, see{" "}
            <a href={MICHAEL_URL} target="_blank" rel="noopener noreferrer">
              Michael Wiryaseputra&apos;s profile
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Pertanyaan yang sering diajukan</h2>
          <div className="mt-5 space-y-5">
            {HOME_FAQ.map((f) => (
              <div key={f.q}>
                <h3 className="font-bold">{f.q}</h3>
                <p className="mt-1 text-[var(--muted)] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="entry-card">
          <h2 className="text-xl font-bold">Butuh pelatihan AI untuk tim Anda?</h2>
          <p className="mt-2 text-[var(--muted)]">
            Pelatihan hands-on Generative AI, RAG, atau Agentic AI, dalam bahasa Indonesia maupun
            Inggris.
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
    </>
  )
}
