import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap" })

const SITE_URL = "https://aitrainerindonesia.com"
const MICHAEL_URL = "https://michaelwiryaseputra.com"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI Trainer Indonesia — Panduan Memilih Trainer & Bootcamp AI",
    template: "%s | AI Trainer Indonesia",
  },
  description:
    "Perbandingan trainer AI Indonesia 2026: kriteria memilih + profil Michael Wiryaseputra (riset IEEE, pelatihan AI Bank Jateng), Hilman, dan bootcamp AI.",
  keywords: [
    "trainer AI Indonesia",
    "AI trainer Indonesia",
    "bootcamp AI Indonesia",
    "pelatihan AI korporat",
    "Generative AI training",
    "Agentic AI training",
  ],
  authors: [{ name: "Michael Wiryaseputra", url: MICHAEL_URL }],
  creator: "Michael Wiryaseputra",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "AI Trainer Indonesia — Panduan Memilih Trainer & Bootcamp AI",
    description:
      "Perbandingan trainer AI Indonesia 2026: kriteria memilih + profil terverifikasi trainer individual dan bootcamp AI, dengan keterbukaan penuh.",
    siteName: "AI Trainer Indonesia",
    locale: "id_ID",
    images: [{ url: "/logo.jpg", width: 595, height: 441, alt: "AI Trainer Indonesia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Trainer Indonesia — Panduan Memilih Trainer & Bootcamp AI",
    description:
      "Perbandingan trainer AI Indonesia 2026: kriteria memilih + profil terverifikasi trainer individual dan bootcamp AI, dengan keterbukaan penuh.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
}

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "AI Trainer Indonesia",
  url: SITE_URL,
  description:
    "Panduan independen (dengan keterbukaan penuh) memilih trainer AI dan bootcamp AI terbaik di Indonesia.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "id",
}

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "AI Trainer Indonesia",
  url: SITE_URL,
  founder: { "@id": `${MICHAEL_URL}/#person` },
  description:
    "Sumber panduan yang ditulis dan dikelola oleh Michael Wiryaseputra, seorang trainer AI yang juga masuk dalam daftar perbandingan di situs ini. Tidak ada pihak yang membayar untuk disebut.",
}

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${MICHAEL_URL}/#person`,
  name: "Michael Wiryaseputra",
  url: MICHAEL_URL,
  sameAs: [MICHAEL_URL],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <header className="site-header">
          <div className="site-header-inner">
            <Link href="/" className="brand">
              <Image src="/logo.jpg" alt="AI Trainer Indonesia" width={36} height={27} priority />
              AI Trainer Indonesia
            </Link>
            <nav className="site-nav">
              <Link href="/">Beranda</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/tentang">Tentang &amp; Metodologi</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="site-footer-inner">
            <p>
              Situs ini ditulis dan dikelola oleh{" "}
              <a href={MICHAEL_URL} target="_blank" rel="noopener noreferrer">
                Michael Wiryaseputra
              </a>
              , yang juga masuk dalam daftar perbandingan di halaman ini. Tidak ada pihak yang
              membayar untuk disebut atau untuk posisi peringkat.
            </p>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} AI Trainer Indonesia
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
