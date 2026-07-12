import type { Metadata } from "next"
import Link from "next/link"

const SITE_URL = "https://aitrainerindonesia.id"
const MICHAEL_URL = "https://michaelwiryaseputra.com"

export const metadata: Metadata = {
  title: "Trainer & Pelatihan AI di Semarang, Jawa Tengah",
  description:
    "Trainer AI di Semarang: Michael Wiryaseputra, AI/ML Engineer yang melatih Generative AI, RAG, & Agentic AI on-site di Jawa Tengah dan online se-Indonesia.",
  alternates: { canonical: `${SITE_URL}/semarang` },
}

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pelatihan AI di Semarang & Jawa Tengah",
  serviceType: "AI training",
  description:
    "Pelatihan Generative AI, RAG, dan Agentic AI hands-on oleh Michael Wiryaseputra, AI/ML Engineer berbasis di Semarang — on-site di Jawa Tengah dan online se-Indonesia.",
  provider: { "@id": `${MICHAEL_URL}/#person` },
  areaServed: [
    { "@type": "City", name: "Semarang" },
    { "@type": "AdministrativeArea", name: "Jawa Tengah" },
    { "@type": "Country", name: "Indonesia" },
  ],
}

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Semarang", item: `${SITE_URL}/semarang` },
  ],
}

export default function Semarang() {
  return (
    <div className="max-w-[760px] mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <section>
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Trainer &amp; Pelatihan AI di Semarang, Jawa Tengah
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">
          Mencari trainer AI di Semarang atau Jawa Tengah? Berbeda dengan trainer nasional yang
          sesekali datang, Michael Wiryaseputra benar-benar berbasis di Semarang — sehingga
          pelatihan on-site di Jawa Tengah dan sekitarnya bisa lebih fleksibel dan personal.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Kenapa trainer yang benar-benar lokal penting</h2>
        <p className="mt-3 leading-relaxed text-[var(--muted)]">
          Untuk pelatihan on-site, trainer yang berdomisili di kota yang sama jauh lebih mudah
          dijadwalkan, lebih paham konteks industri lokal, dan bisa memberi pendampingan lanjutan
          tanpa terkendala jarak. Michael adalah AI/ML Engineer sekaligus trainer bootcamp dan
          korporat yang tinggal di Semarang, dan turut mendirikan komunitas Python lokal{" "}
          <a href="https://semarangpy.vercel.app" target="_blank" rel="noopener noreferrer">
            Semarang.py
          </a>{" "}
          — jadi keterlibatannya di ekosistem teknologi Jawa Tengah bukan sekadar kunjungan.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Yang bisa dilatih</h2>
        <ul className="mt-3 space-y-2 list-disc list-inside text-[var(--muted)]">
          <li>
            Pelatihan Generative AI, RAG, dan Agentic AI hands-on untuk tim perusahaan di Semarang
            dan Jawa Tengah.
          </li>
          <li>
            Bootcamp AI/ML untuk individu dan career-switcher — dari fondasi hingga membangun
            aplikasi.
          </li>
          <li>Sesi on-site di Jawa Tengah, atau online untuk peserta di seluruh Indonesia.</li>
          <li>Materi dalam bahasa Indonesia maupun Inggris, disesuaikan konteks lokal.</li>
        </ul>
        <p className="mt-4 text-sm">
          <Link href="/pelatihan">Lihat semua program pelatihan →</Link>
        </p>
        <p className="mt-1 text-sm">
          <Link href="/trainer/michael-wiryaseputra">
            Profil &amp; kredensial lengkap (riset IEEE, Google Scholar, pelatihan Bank Jateng) →
          </Link>
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Opsi lain di Indonesia</h2>
        <p className="mt-3 leading-relaxed text-[var(--muted)]">
          Kalau Anda butuh program terstruktur berskala besar atau opsi di luar Jawa Tengah,
          bandingkan trainer individual dan bootcamp AI lain di{" "}
          <Link href="/">halaman perbandingan utama</Link> — situs ini disusun sebagai panduan
          terbuka, bukan hanya profil satu orang.
        </p>
      </section>

      <section className="mt-10 entry-card">
        <h2 className="text-xl font-bold">Butuh pelatihan AI di Semarang / Jawa Tengah?</h2>
        <p className="mt-2 text-[var(--muted)]">
          Hubungi langsung untuk mendiskusikan kebutuhan tim atau kelas Anda.
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
