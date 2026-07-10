// Dense, verifiable dossier data for per-trainer detail pages (/trainer/[slug]).
// Only trainers with enough VERIFIED, publicly-checkable facts get a detail page.
// Every fact here must be independently verifiable via the linked source — no invented
// numbers, clients, or credentials.

export type Credential = {
  label: string
  detail: string
  href?: string
}

export type TrainingEngagement = {
  role: string
  org: string
  date: string
  desc: string
  href?: string
}

export type SpeakingEngagement = {
  event: string
  organizer: string
  venue: string
  date?: string
  topics: string[]
  poster?: string
  href?: string
}

export type ProofProject = {
  title: string
  desc: string
  href?: string
}

export type TrainerFaq = { q: string; a: string }

export type Testimonial = {
  quote: string
  author: string
  role: string
  href: string
  lang?: string
}

export type TrainerDetail = {
  slug: string
  name: string
  headline: string
  location: string
  photo: string
  photoAlt: string
  metaTitle: string
  metaDescription: string
  summary: string
  credentials: Credential[]
  corporateTraining: TrainingEngagement[]
  teaching: TrainingEngagement[]
  speaking: SpeakingEngagement[]
  expertise: string[]
  proofProjects: ProofProject[]
  testimonials: Testimonial[]
  faq: TrainerFaq[]
  portfolioUrl: string
  linkedinUrl: string
}

export const TRAINER_DETAILS: Record<string, TrainerDetail> = {
  "michael-wiryaseputra": {
    slug: "michael-wiryaseputra",
    name: "Michael Wiryaseputra",
    headline: "AI/ML Engineer & Bootcamp Trainer — Semarang, Indonesia",
    location: "Semarang, Jawa Tengah, Indonesia",
    photo: "/trainer/michael-wiryaseputra.jpg",
    photoAlt:
      "Michael Wiryaseputra, AI/ML Engineer & Bootcamp Trainer berbasis di Semarang, Indonesia",
    metaTitle: "Michael Wiryaseputra — Trainer AI Indonesia",
    metaDescription:
      "Michael Wiryaseputra: trainer AI & AI/ML Engineer Semarang. Riset IEEE 2023, Scholar terverifikasi, pelatihan AI Bank Jateng, pengajar DIBIMBING & DSAREA.",
    summary:
      "Michael Wiryaseputra adalah AI/ML Engineer sekaligus trainer bootcamp dan korporat berbasis di Semarang, Jawa Tengah, yang melayani seluruh Indonesia secara online maupun on-site. Pembeda utamanya adalah kombinasi engineering + riset: ia aktif membangun sistem LLM, RAG, dan Agentic AI produksi dengan LangChain, LangGraph, dan FastAPI — bukan hanya mengajarkan teorinya. Ia co-author riset machine learning terindeks IEEE (ICCCNT 2023), memiliki profil Google Scholar terverifikasi, dan mengajar di beberapa bootcamp AI/ML terkemuka di Indonesia serta memimpin pelatihan Agentic AI untuk korporat.",
    credentials: [
      {
        label: "Riset terindeks IEEE (ICCCNT 2023)",
        detail:
          "Co-author paper \"Predicting the Cerebral Blood Flow Change Condition during Brain Strokes using Feature Fusion of FMRI Images and Clinical Features\" — dipublikasikan di IEEE Xplore, kolaborasi internasional (India, Indonesia, Irak).",
        href: "https://doi.org/10.1109/ICCCNT56998.2023.10306356",
      },
      {
        label: "Google Scholar terverifikasi",
        detail:
          "Profil akademik publik yang terverifikasi lewat email institusi, dengan sitasi dan h-index yang bisa dicek siapa saja.",
        href: "https://scholar.google.com/citations?user=_sFia2oAAAAJ",
      },
      {
        label: "ORCID",
        detail: "Identitas peneliti terverifikasi: 0009-0001-8181-4641.",
        href: "https://orcid.org/0009-0001-8181-4641",
      },
      {
        label: "Wikidata",
        detail:
          "Entitas terstruktur (Q140243906) sebagai insinyur, peneliti, dan edukator AI/ML asal Indonesia.",
        href: "https://www.wikidata.org/wiki/Q140243906",
      },
      {
        label: "Lulusan Ilmu Komputer",
        detail: "Universitas Katolik Soegijapranata, Semarang.",
      },
    ],
    corporateTraining: [
      {
        role: "Agentic LLM Trainer",
        org: "Bank Jateng",
        date: "September 2025",
        desc: "Memimpin pelatihan lanjutan pembangunan sistem Agentic AI dengan LangChain, LangGraph, dan Gemini/OpenAI — mencakup koordinasi multi-agent, RAG pipeline, tool execution, modul memory, dan praktik LLMOps.",
      },
    ],
    teaching: [
      {
        role: "AI/ML Bootcamp Tutor",
        org: "INTELLIGO.ID",
        date: "Mei 2025 – sekarang",
        desc: "Mengajar dan membimbing peserta di kelas privat, semi-privat, dan reguler untuk topik AI/ML: Machine Learning, NLP, LLM, RAG, dan praktik LLMOps.",
        href: "https://www.intelligo.id/",
      },
      {
        role: "Data Science & AI/ML Engineer Bootcamp Tutor",
        org: "DIBIMBING.ID",
        date: "Desember 2025 – sekarang",
        desc: "Mengajar kelas reguler dengan kurikulum Data Science dan AI/ML menyeluruh: Machine Learning, NLP, LLM, RAG, LLMOps, dan visualisasi data.",
      },
      {
        role: "AI/ML & Data Engineer Bootcamp Tutor",
        org: "DSAREA",
        date: "September 2025 – sekarang",
        desc: "Mengajar Machine Learning, NLP, LLM, RAG, dan framework RAG lanjutan seperti Agentic RAG, Hybrid RAG, dan Adaptive RAG, serta LLMOps dan fine-tuning LLM hands-on.",
        href: "https://www.instagram.com/p/DQWUpkGEk_F/",
      },
      {
        role: "AI/ML Engineer & Data Engineer Bootcamp Tutor",
        org: "FullStack Bangalore",
        date: "Juli 2025 – Oktober 2025",
        desc: "Mengajar Machine Learning, NLP, LLM, arsitektur RAG lanjutan, praktik LLMOps, dan teknik fine-tuning LLM.",
        href: "https://www.instagram.com/p/DNAmsjmxSC8/",
      },
    ],
    speaking: [
      {
        event: "Guest Speaker",
        organizer: "Google Developer Group",
        venue: "UIN Syarif Hidayatullah Jakarta",
        topics: ["Machine Learning Model Development", "LLM & RAG", "End-to-End AI Deployment"],
        poster: "/trainer/michael-gdg-uin-jakarta.jpeg",
        href: "https://www.instagram.com/p/DV3JvE8GkPo/",
      },
      {
        event: "Study Jam #3 — Teaching the Machine",
        organizer: "Google Developer Group",
        venue: "Universitas Negeri Surabaya",
        date: "22 April 2026",
        topics: ["Supervised Learning", "Model Training & Selection", "Evaluation Metrics"],
        poster: "/trainer/michael-gdg-unesa.jpeg",
        href: "https://gdg.community.dev/events/details/google-gdg-on-campus-universitas-negeri-surabaya-surabaya-indonesia-presents-teaching-the-machine-building-and-evaluating-your-first-ai-model/",
      },
      {
        event: "Mini Bootcamp — Road to Hybrid Bootcamp",
        organizer: "Komunitas Excel Indonesia (KEI)",
        venue: "Online",
        date: "11 Februari 2026",
        topics: ["Basic SQL"],
        poster: "/trainer/michael-kei-sql.jpeg",
        href: "https://www.instagram.com/p/DUmlo-AE1P3/",
      },
    ],
    expertise: [
      "Generative AI",
      "Agentic AI",
      "Large Language Models (LLM)",
      "Retrieval-Augmented Generation (RAG)",
      "Agentic RAG, Hybrid RAG, Adaptive RAG",
      "LangChain & LangGraph",
      "LLMOps",
      "Fine-tuning LLM",
      "Machine Learning",
      "Natural Language Processing (NLP)",
      "FastAPI",
      "Python",
    ],
    proofProjects: [
      {
        title: "AI-Powered Indonesian Legal Document Analysis",
        desc: "Sistem Agentic AI dengan Google Gemini 2.0, LangChain, dan LangGraph untuk menganalisis dokumen hukum Indonesia dan memberi jawaban terstruktur.",
        href: "https://github.com/MagicDash91/ML-Engineering-Project/tree/main/Agentic_AI",
      },
      {
        title: "Medical Claims Anti-Fraud Detection",
        desc: "AI dua-pipeline yang menggabungkan LLM + RAG dengan Computer Vision + OCR untuk mendeteksi potensi fraud pada klaim medis.",
        href: "https://github.com/MagicDash91/ML-Engineering-Project/tree/main/Medical_Claims_Anti_Fraud_Detection_System",
      },
      {
        title: "YouTube Sentiment Analysis",
        desc: "Analisis sentimen komentar YouTube dengan model BERT dan insight via Google Gemini API.",
        href: "https://github.com/MagicDash91/ML-Engineering-Project/tree/main/Youtube%20Sentiment%20Analysis",
      },
    ],
    testimonials: [
      {
        quote: "Mentor: Michael Wiryaseputra (AI/ML Engineer)",
        author: "DSAREA (digitalskillsarea)",
        role: "Bootcamp AI/ML — akun resmi",
        href: "https://www.linkedin.com/posts/aibootcamp-aiengineer-belajarai-share-7378981427943694336-dMtH/",
        lang: "id",
      },
      {
        quote: "Terima kasih kepada mas Michael Wiryaseputra dan seluruh mentor DSAREA atas ilmu dan bimbingannya.",
        author: "Rezky Agus Setiawan",
        role: "Lulusan AI Engineer Bootcamp, DSAREA",
        href: "https://www.linkedin.com/posts/rezky-agus-setiawan_ugcPost-7403283843203670016-J80y/",
        lang: "id",
      },
      {
        quote: "Thanks to coach Michael Wiryaseputra 🫡",
        author: "Muhammad Avilla",
        role: "Data Analyst — lulusan AI & ML Engineer Bootcamp, DSAREA",
        href: "https://www.linkedin.com/posts/muhammad-avilla_projek-akhir-sertifikat-ai-ml-engineer-ugcPost-7442858908488011777-HGdQ/",
      },
      {
        quote: "Big thanks to Mr Michael Wiryaseputra & Mr Akmal Fauzan",
        author: "Alifia Chika Intan",
        role: "Operations & Data Analyst — pelatihan Excel & SQL",
        href: "https://www.linkedin.com/posts/alifia-chika-intan-880b94202_excel-sql-ugcPost-7427370268735676418-Inf7/",
      },
    ],
    faq: [
      {
        q: "Siapa Michael Wiryaseputra?",
        a: "Michael Wiryaseputra adalah AI/ML Engineer sekaligus trainer bootcamp dan korporat berbasis di Semarang, Jawa Tengah, Indonesia. Ia membangun sistem LLM, RAG, dan Agentic AI produksi dengan LangChain, LangGraph, dan FastAPI, co-author riset machine learning terindeks IEEE (ICCCNT 2023), dan mengajar di bootcamp AI/ML seperti INTELLIGO.ID, DIBIMBING.ID, dan DSAREA.",
      },
      {
        q: "Apa yang membedakan Michael dari trainer AI lain di Indonesia?",
        a: "Ia adalah engineer yang benar-benar membangun sistem AI produksi, bukan hanya mengajar dari slide — sehingga materinya mencakup arsitektur, integrasi API, dan deployment, bukan sekadar menyambungkan node no-code. Kredensialnya juga bisa diverifikasi publik (paper IEEE, Google Scholar terverifikasi, ORCID, Wikidata), dan ia punya pengalaman pelatihan korporat nyata seperti pelatihan Agentic AI untuk Bank Jateng.",
      },
      {
        q: "Pelatihan apa saja yang bisa dibawakan Michael untuk perusahaan?",
        a: "Pelatihan hands-on Generative AI, RAG (termasuk Agentic RAG, Hybrid RAG, Adaptive RAG), Agentic AI dengan LangChain/LangGraph, fine-tuning LLM, dan LLMOps — dalam bahasa Indonesia maupun Inggris, online maupun on-site, dengan materi build-along di mana peserta pulang membawa aplikasi yang mereka bangun sendiri.",
      },
    ],
    portfolioUrl: "https://michaelwiryaseputra.com",
    linkedinUrl: "https://www.linkedin.com/in/michael-wiryaseputra/",
  },
}

export function getTrainerDetail(slug: string): TrainerDetail | undefined {
  return TRAINER_DETAILS[slug]
}

export function getAllTrainerSlugs(): string[] {
  return Object.keys(TRAINER_DETAILS)
}
