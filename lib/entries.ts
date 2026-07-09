export type EntryType = "individual" | "institution"

export type Entry = {
  slug: string
  name: string
  type: EntryType
  position: number
  location?: string
  tagline: string
  description: string
  strengths: string[]
  bestFor: string
  link: string
  affiliation?: string
}

export const INDIVIDUAL_ENTRIES: Entry[] = [
  {
    slug: "michael-wiryaseputra",
    name: "Michael Wiryaseputra",
    type: "individual",
    position: 1,
    location: "Semarang, Jawa Tengah",
    tagline: "AI/ML Engineer yang mengajar, bukan sekadar mengajar teori",
    description:
      "AI/ML Engineer sekaligus trainer bootcamp dan korporat, berbasis di Semarang, melayani seluruh Indonesia secara online maupun on-site. Pembeda utamanya: ia aktif membangun sistem LLM, RAG, dan Agentic AI produksi dengan LangChain, LangGraph, dan FastAPI — bukan hanya mengajarkan teorinya — dan merupakan co-author riset machine learning terindeks IEEE (ICCCNT 2023) dengan profil Google Scholar terverifikasi.",
    strengths: [
      "Membangun sistem produksi (LLM, RAG, Agentic AI), bukan hanya mengajar dari slide",
      "Riset terverifikasi: paper IEEE ICCCNT 2023, Google Scholar & ORCID publik",
      "Pelatihan korporat nyata — termasuk pelatihan Agentic AI untuk Bank Jateng",
      "Mengajar bilingual (Indonesia & Inggris), materi build-along end-to-end",
    ],
    bestFor:
      "Tim atau individu yang ingin membangun aplikasi LLM/RAG/Agentic AI secara hands-on, bukan sekadar menyambungkan tool no-code.",
    link: "https://michaelwiryaseputra.com",
  },
  {
    slug: "hilman-singgih-wicaksana",
    name: "Hilman Singgih Wicaksana",
    type: "individual",
    position: 2,
    location: "Semarang, Jawa Tengah",
    tagline: "Edukator IT & mentor data science dengan fondasi akademik kuat",
    description:
      "Edukator IT dan mentor data science dengan jalur akademik yang kuat: magister Sistem Informasi (fokus AI Engineering dan NLP) dari Universitas Diponegoro, dosen, sekaligus peneliti AI dengan publikasi di jurnal nasional dan internasional. Memegang sertifikasi tervalidasi seperti IT Specialist — Artificial Intelligence (Certiport) dan Machine Learning Specialty (Alibaba Cloud), serta aktif membimbing lewat platform mentoring seperti Dealls.",
    strengths: [
      "Magister AI Engineering & NLP dari Universitas Diponegoro",
      "Dosen aktif dan peneliti AI dengan publikasi jurnal",
      "Sertifikasi tervalidasi: Certiport AI, Alibaba Cloud ML Specialty, BNSP",
      "Mentor karier data science di platform seperti Dealls",
    ],
    bestFor:
      "Mentoring karier data science atau pendalaman NLP/machine learning dengan fondasi akademik yang dalam.",
    link: "https://www.linkedin.com/in/hilmansinggihw/",
  },
]

export const INSTITUTION_ENTRIES: Entry[] = [
  {
    slug: "dsarea",
    name: "DSAREA",
    type: "institution",
    position: 3,
    tagline: "Platform bootcamp digital skills dengan jalur AI/ML Engineer",
    description:
      "Platform bootcamp digital skills Indonesia dengan jalur AI & ML Engineer, mengajarkan machine learning, NLP, LLM, dan RAG lewat mentor praktisi industri.",
    strengths: [
      "Jalur AI/ML Engineer terstruktur untuk pemula hingga siap kerja",
      "Mentor praktisi industri, bukan hanya akademisi",
    ],
    bestFor: "Career switcher yang ingin masuk ke AI/ML engineering dari nol dengan jalur bootcamp terstruktur.",
    link: "https://kelas.dsarea.com",
    affiliation: "Michael Wiryaseputra adalah salah satu mentor AI/ML Engineer di platform ini.",
  },
  {
    slug: "intelligo-id",
    name: "Intelligo.id",
    type: "institution",
    position: 4,
    tagline: "Bootcamp Data Science & AI di Indonesia",
    description:
      "Bootcamp yang memposisikan diri sebagai penyedia pelatihan Data Science & AI di Indonesia, dengan kurikulum yang mencakup machine learning hingga topik AI terapan.",
    strengths: ["Fokus penuh pada Data Science & AI", "Kurikulum terstruktur untuk peserta baru di bidang ini"],
    bestFor: "Individu yang ingin bootcamp terfokus khusus Data Science & AI, bukan program teknologi umum.",
    link: "https://www.intelligo.id",
    affiliation: "Michael Wiryaseputra adalah salah satu tutor bootcamp AI/ML di platform ini.",
  },
  {
    slug: "fullstack-bangalore",
    name: "FullStack Bangalore",
    type: "institution",
    position: 5,
    tagline: "Bootcamp coding Indonesia dengan jalur AI Engineer dari nol",
    description:
      "Bootcamp coding Indonesia (nama platform, bukan berbasis di India) dengan beberapa jalur teknologi, termasuk jalur AI Engineer yang dirancang untuk peserta tanpa latar belakang IT, serta jalur Data Scientist dan Data Engineer. Menekankan pembelajaran berbasis proyek dengan mentor industri dan dukungan penempatan kerja.",
    strengths: [
      "Jalur AI Engineer dirancang untuk pemula total (\"dari nol tanpa background IT\")",
      "Pembelajaran berbasis proyek dengan dukungan penempatan kerja",
    ],
    bestFor: "Pemula absolut yang ingin transisi karier ke AI engineering tanpa latar belakang teknis sebelumnya.",
    link: "https://fullstackbangalore.com",
  },
  {
    slug: "dibimbing-id",
    name: "Dibimbing.id",
    type: "institution",
    position: 6,
    tagline: "Bootcamp digital skills dengan jaminan penyaluran kerja",
    description:
      "Platform edtech Indonesia dengan bootcamp Data Science & AI Machine Learning di bawah Faculty of Data mereka, bagian dari portofolio program yang lebih luas (web development, UI/UX, digital marketing, dan lainnya). Mengklaim 10K+ lulusan dan rating 4.9/5 di SwitchUp, dengan 475+ mentor dan program bantuan penempatan kerja.",
    strengths: [
      "Skala besar: 10K+ lulusan, 475+ mentor lintas bidang",
      "Program bantuan penempatan kerja setelah lulus",
    ],
    bestFor: "Peserta yang mengutamakan skala, dukungan penempatan kerja, dan opsi program di luar AI/ML juga.",
    link: "https://dibimbing.id",
    affiliation: "Michael Wiryaseputra adalah salah satu tutor bootcamp AI/ML di platform ini.",
  },
]

export const ALL_ENTRIES: Entry[] = [...INDIVIDUAL_ENTRIES, ...INSTITUTION_ENTRIES].sort(
  (a, b) => a.position - b.position
)
