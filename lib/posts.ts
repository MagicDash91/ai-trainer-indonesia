export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "code"; code: string; caption?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "cta"; text: string }

export type Post = {
  slug: string
  title: string
  description: string
  date: string
  readingTime: string
  tags: string[]
  body: Block[]
}

export const POSTS: Post[] = [
  {
    slug: "cara-memilih-trainer-ai-untuk-perusahaan",
    title: "Cara Memilih Trainer AI untuk Perusahaan",
    description:
      "Panduan praktis memilih trainer AI untuk perusahaan di Indonesia: 5 kriteria, tanda peringatan, dan pertanyaan yang wajib diajukan sebelum tanda tangan kontrak.",
    date: "2026-07-10",
    readingTime: "7 min read",
    tags: [
      "Trainer AI",
      "Pelatihan AI Korporat",
      "Corporate AI Training",
      "Generative AI",
      "Agentic AI",
      "Indonesia",
    ],
    body: [
      {
        type: "p",
        text: "Anggaran pelatihan AI korporat tidak murah, dan pasar trainer AI di Indonesia berkembang lebih cepat daripada cara kita menilainya. Banyak yang menyebut diri \"AI trainer\" hanya bermodal beberapa bulan bermain dengan tool no-code. Artikel ini memberi kerangka yang bisa dipakai tim HR, L&D, atau kepala divisi teknologi untuk memilih trainer AI yang benar-benar meningkatkan kapabilitas tim — bukan sekadar sesi demo yang seru tapi tidak berdampak.",
      },
      { type: "h2", text: "Lima kriteria yang benar-benar menentukan" },
      { type: "h3", text: "1. Trainernya membangun sistem, bukan hanya mengajar teori" },
      {
        type: "p",
        text: "Bidang AI bergerak terlalu cepat untuk diajarkan dari materi bekas. Trainer yang aktif membangun sistem produksi tahu masalah yang tidak muncul di dokumentasi resmi: rate limit API, biaya inference yang membengkak diam-diam, atau kegagalan retrieval yang halus pada RAG. Tanyakan proyek AI nyata apa yang pernah ia bangun sendiri di luar materi kelas — dan minta melihatnya.",
      },
      { type: "h3", text: "2. Materi masuk ke arsitektur, bukan berhenti di no-code" },
      {
        type: "p",
        text: "Tool no-code seperti n8n atau Dify berguna untuk automasi sederhana, tapi berhenti begitu perusahaan butuh custom logic, penanganan error, keamanan data, optimasi biaya, atau deployment ke produksi. Trainer yang baik mengajarkan apa yang terjadi di balik automasi tersebut: desain arsitektur, integrasi API, sampai cara men-deploy-nya. Kalau seluruh kurikulum hanya \"klik dan sambung node\", tim Anda akan mentok begitu kebutuhan naik level.",
      },
      { type: "h3", text: "3. Kredensial bisa diverifikasi publik" },
      {
        type: "p",
        text: "Minta tautan, bukan klaim. Publikasi riset terindeks (misalnya IEEE), profil Google Scholar, sertifikasi resmi dari penyedia yang dikenal, atau portofolio proyek yang bisa diakses siapa saja — semua ini bisa dicek. Klaim \"berpengalaman bertahun-tahun\" di bio media sosial tanpa jejak yang bisa diverifikasi sebaiknya diperlakukan sebagai belum terbukti.",
      },
      { type: "h3", text: "4. Kurikulum relevan dengan 2026" },
      {
        type: "p",
        text: "Kebutuhan korporat hari ini bukan lagi machine learning klasik semata. Generative AI, RAG (Retrieval-Augmented Generation) untuk menjawab dari database internal, dan Agentic AI (AI yang bisa mengeksekusi tugas bertahap, bukan hanya menjawab) sudah jadi standar. Pastikan silabusnya mencakup ini — dan bukan sekadar menyebut istilahnya di slide pemasaran.",
      },
      { type: "h3", text: "5. Transparansi biaya dan dukungan pasca-pelatihan" },
      {
        type: "p",
        text: "Trainer dan lembaga yang baik jelas soal biaya sejak percakapan pertama, tanpa biaya tersembunyi di akhir. Sama pentingnya: apakah ada jalur bertanya setelah kelas selesai, atau hubungan berakhir begitu sesi terakhir usai? Pelatihan AI yang berdampak biasanya menyertakan masa pendampingan.",
      },
      { type: "h2", text: "Tanda peringatan (red flags)" },
      {
        type: "ul",
        items: [
          "Klaim \"nomor satu\" atau \"terbaik\" tanpa kriteria atau sumber verifikasi apa pun.",
          "Kurikulum yang seluruhnya no-code, tanpa satu pun sesi soal arsitektur, keamanan, atau deployment.",
          "Testimoni tanpa nama lengkap atau tautan profil yang bisa dicek.",
          "Tidak ada silabus tertulis; semua \"nanti disesuaikan\" tanpa kerangka jelas.",
          "Tidak ada kejelasan biaya sampai Anda diminta menghubungi lewat pesan pribadi.",
        ],
      },
      { type: "h2", text: "Pertanyaan yang wajib diajukan sebelum tanda tangan" },
      {
        type: "ul",
        items: [
          "Boleh saya lihat satu sistem AI produksi yang Anda bangun sendiri?",
          "Apakah peserta akan membangun aplikasi mereka sendiri selama pelatihan, atau hanya menonton demo?",
          "Bagian mana dari kurikulum yang membahas deployment dan keamanan, bukan hanya prototipe?",
          "Kredensial mana yang bisa saya verifikasi secara publik?",
          "Bagaimana bentuk dukungan setelah pelatihan selesai, dan berapa lama?",
        ],
      },
      { type: "h2", text: "Individual atau lembaga?" },
      {
        type: "p",
        text: "Untuk workshop yang dikustomisasi dengan use case perusahaan Anda dan pelatihan hands-on yang mendalam, trainer individual berlatar engineer biasanya lebih fleksibel. Untuk upskilling ratusan karyawan dengan program baku, lembaga/bootcamp lebih tepat. Banyak perusahaan menggabungkan keduanya: lembaga untuk fondasi massal, trainer individual untuk tim inti yang perlu membangun sistem sungguhan. Lihat perbandingan trainer dan bootcamp AI di halaman utama situs ini untuk membandingkan opsi berdasarkan lima kriteria di atas.",
      },
      { type: "h2", text: "English summary" },
      {
        type: "p",
        text: "Choosing a corporate AI trainer in Indonesia comes down to five criteria: does the trainer actually build production AI systems (not just teach slides)? Does the curriculum go beyond no-code into real architecture, security, and deployment? Are the credentials publicly verifiable (indexed research, Google Scholar, real project portfolios)? Is the curriculum 2026-relevant (Generative AI, RAG, Agentic AI)? And is pricing — plus post-training support — transparent? Watch for red flags like unverifiable \"number one\" claims, all-no-code curricula, and anonymous testimonials. Ask to see a real production system, confirm participants build their own apps, and verify credentials before signing.",
      },
      {
        type: "cta",
        text: "Butuh pelatihan AI korporat yang hands-on — Generative AI, RAG, atau Agentic AI — dengan trainer yang membangun sistem produksi dan punya kredensial terverifikasi? Lihat profil dan kredensial lengkap trainer di situs ini, atau hubungi langsung.",
      },
    ],
  },
]

export function getAllPosts(): Post[] {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug)
}
