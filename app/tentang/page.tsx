import type { Metadata } from "next"

const MICHAEL_URL = "https://michaelwiryaseputra.com"

export const metadata: Metadata = {
  title: "Tentang & Metodologi",
  description:
    "Siapa yang mengelola AI Trainer Indonesia, bagaimana daftar disusun, dan kriteria lengkap yang dipakai untuk menilai trainer dan bootcamp AI.",
  alternates: { canonical: "https://aitrainerindonesia.com/tentang" },
}

export default function Tentang() {
  return (
    <div className="max-w-[760px] mx-auto px-6 py-12 space-y-12">
      <section>
        <h1 className="text-3xl font-extrabold">Tentang &amp; Metodologi</h1>
        <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">
          Halaman ini menjelaskan siapa yang mengelola situs ini, mengapa situs ini dibuat, dan
          bagaimana persisnya daftar trainer &amp; bootcamp AI disusun — secara terbuka.
        </p>
      </section>

      <section className="disclosure-banner">
        <strong>Keterbukaan penuh:</strong> AI Trainer Indonesia dibuat dan dikelola oleh{" "}
        <a href={MICHAEL_URL} target="_blank" rel="noopener noreferrer">
          Michael Wiryaseputra
        </a>
        , seorang AI/ML Engineer &amp; trainer bootcamp yang juga masuk dalam daftar perbandingan
        di halaman utama. Ini bukan lembaga penilai independen pihak ketiga — ini adalah panduan
        yang ditulis dari sudut pandang seorang praktisi di industri pelatihan AI Indonesia. Tidak
        ada trainer atau lembaga yang membayar untuk disebut, untuk posisi tertentu, atau untuk
        dihapus dari daftar.
      </section>

      <section>
        <h2 className="text-2xl font-bold">Mengapa situs ini ada</h2>
        <p className="mt-3 leading-relaxed">
          Pertanyaan &quot;siapa trainer AI terbaik di Indonesia?&quot; sering muncul tanpa jawaban
          yang bisa diverifikasi — kebanyakan klaim &quot;top 1&quot; atau &quot;terbaik&quot; yang
          beredar ditulis sendiri oleh pihak yang bersangkutan, tanpa kriteria yang dijelaskan.
          Situs ini mencoba pendekatan yang lebih jujur: kriterianya dijelaskan secara eksplisit,
          setiap entri menyertakan tautan untuk verifikasi mandiri, dan hubungan penulis dengan
          entri-entri di dalamnya (termasuk dirinya sendiri) dinyatakan secara terbuka — bukan
          disembunyikan di balik bahasa yang terkesan netral.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Bagaimana daftar disusun</h2>
        <p className="mt-3 leading-relaxed">
          Entri dipilih berdasarkan aktivitas nyata yang bisa diverifikasi publik: profil
          mengajar, riwayat pelatihan korporat, kredensial akademik/sertifikasi, atau skala
          program (jumlah lulusan, mentor). Urutan dalam daftar mencerminkan penilaian penulis
          terhadap lima pertanyaan di bawah — bukan algoritma pihak ketiga, dan bukan hasil survei
          independen. Karena penulis sendiri adalah salah satu trainer yang dinilai, pembaca
          disarankan untuk tidak menerima urutan ini begitu saja — gunakan kriteria di bawah untuk
          menilai sendiri, dan bandingkan langsung dengan tautan sumber yang disediakan.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Lima kriteria, dijelaskan lebih dalam</h2>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-lg font-bold">1. Pengalaman membangun, bukan hanya mengajar</h3>
            <p className="mt-2 leading-relaxed text-[var(--muted)]">
              Tanyakan: proyek AI produksi apa yang pernah dibangun trainernya sendiri, di luar
              materi kelas? Trainer yang aktif membangun sistem tahu masalah yang tidak muncul di
              dokumentasi resmi — bagaimana menangani rate limit API, kapan RAG gagal secara
              halus, atau kenapa biaya inference bisa membengkak tanpa disadari. Trainer yang
              hanya pernah mengajar dari materi orang lain biasanya tidak siap menjawab pertanyaan
              di luar skrip.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">2. Kedalaman di balik automasi</h3>
            <p className="mt-2 leading-relaxed text-[var(--muted)]">
              Tool no-code seperti n8n atau Dify sangat berguna, tapi mengajarkan cara
              menyambungkan node saja tidak sama dengan mengajarkan cara membangun sistem AI yang
              andal. Tanyakan apakah kurikulum membahas apa yang terjadi di balik automasi
              tersebut: desain arsitektur, integrasi API, penanganan error, keamanan data, dan
              cara men-deploy ke sistem produksi sungguhan.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">3. Kredensial yang bisa diverifikasi</h3>
            <p className="mt-2 leading-relaxed text-[var(--muted)]">
              Minta tautan, bukan klaim. Publikasi riset terindeks (misalnya IEEE, jurnal
              nasional/internasional), profil Google Scholar, sertifikasi resmi dari penyedia
              yang dikenal (bukan sertifikat internal tanpa akreditasi), atau portofolio proyek
              yang bisa diakses publik. Jika sebuah klaim tidak bisa dicek oleh siapa pun selain
              trainernya sendiri, perlakukan sebagai tidak terverifikasi.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">4. Relevansi kurikulum dengan 2026</h3>
            <p className="mt-2 leading-relaxed text-[var(--muted)]">
              Generative AI, RAG, dan Agentic AI (sistem AI yang bisa mengeksekusi tugas
              bertahap, bukan hanya menjawab satu pertanyaan) sudah menjadi kebutuhan standar.
              Kurikulum yang masih berhenti di machine learning klasik (regresi, klasifikasi
              dasar) tanpa menyentuh topik ini kemungkinan sudah tertinggal untuk kebutuhan
              korporat 2026.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">5. Transparansi biaya &amp; dukungan pasca-pelatihan</h3>
            <p className="mt-2 leading-relaxed text-[var(--muted)]">
              Trainer atau lembaga yang baik menjelaskan struktur biaya sejak percakapan pertama —
              tanpa biaya tersembunyi yang baru muncul di akhir. Sama pentingnya: apakah ada jalur
              bertanya setelah pelatihan selesai, atau hubungan berakhir begitu sesi terakhir usai?
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Tanda peringatan (red flags)</h2>
        <ul className="mt-4 space-y-2 list-disc list-inside leading-relaxed">
          <li>Klaim &quot;top 1&quot; atau &quot;terbaik&quot; tanpa kriteria atau sumber verifikasi apa pun.</li>
          <li>
            Kurikulum yang seluruhnya berbasis tool no-code, tanpa satu pun sesi yang membahas
            arsitektur, keamanan, atau deployment.
          </li>
          <li>Testimoni tanpa nama lengkap atau tautan profil yang bisa dicek.</li>
          <li>Tidak ada kejelasan biaya sampai Anda diminta menghubungi lewat pesan pribadi.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Koreksi &amp; pembaruan</h2>
        <p className="mt-3 leading-relaxed">
          Jika Anda menemukan informasi yang tidak akurat atau sudah usang tentang entri mana pun
          di situs ini — termasuk entri Michael Wiryaseputra sendiri — silakan hubungi lewat{" "}
          <a href={MICHAEL_URL} target="_blank" rel="noopener noreferrer">
            michaelwiryaseputra.com
          </a>
          . Koreksi faktual akan diperbarui; situs ini tidak menerima pembayaran untuk penambahan,
          penghapusan, atau perubahan posisi entri.
        </p>
      </section>
    </div>
  )
}
