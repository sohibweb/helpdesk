import { useState } from 'react';

const steps = [
  {
    num: '01',
    title: 'Buat Laporan',
    desc: 'Isi formulir pengaduan dengan detail kronologi yang lengkap, sertakan titik lokasi GPS, dan unggah foto bukti autentik pendukung.',
    icon: 'timer',
    time: 'Waktu: ~3 Menit',
  },
  {
    num: '02',
    title: 'Verifikasi &amp; Disposisi',
    desc: 'Tim verifikator LAPOR-DAERAH memvalidasi keabsahan data pelapor dan meneruskan tiket ke OPD atau dinas penanggung jawab teknis.',
    icon: 'rule',
    time: 'Maks. 1x24 Jam',
  },
  {
    num: '03',
    title: 'Tindak Lanjut Instansi',
    desc: 'Petugas teknis OPD terkait terjun langsung ke lapangan untuk investigasi fisik, perbaikan sarana, dan melampirkan foto perkembangan.',
    icon: 'construction',
    time: 'Rata-rata 1-3 Hari',
  },
  {
    num: '04',
    title: 'Konfirmasi &amp; Ulasan',
    desc: 'Warga pelapor menerima notifikasi hasil penyelesaian dan memberikan penilaian bintang serta ulasan kualitas hasil perbaikan.',
    icon: 'verified',
    time: 'Tiket Selesai',
  },
];

export default function PanduanFAQ() {
  const [openFaq, setOpenFaq] = useState(new Set());

  const toggleFaq = (id) => {
    setOpenFaq((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="w-full py-space-xl bg-surface-container-low/50" id="panduan-faq">
      <div className="max-w-[1280px] mx-auto px-margin">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
            Prosedur Standar
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
            4 Langkah Mudah Melapor Aspirasi
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Setiap aduan yang masuk diproses dengan alur kerja baku yang transparan dan terukur tanpa perantara.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl">
          {steps.map((step) => (
            <div key={step.num} className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm relative flex flex-col justify-between">
              <div className="font-display-hero text-headline-lg font-black text-surface-container-highest mb-space-xs select-none">
                {step.num}
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                  {step.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-space-md flex items-center text-primary font-label-sm text-label-sm gap-1">
                <span className="material-symbols-outlined text-base">{step.icon}</span>
                <span>{step.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg lg:p-space-xl max-w-3xl mx-auto">
          <div className="text-center mb-space-lg">
            <h3 className="font-headline-md text-headline-md text-on-surface">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Jawaban cepat atas keraguan warga saat menyampaikan aspirasi pengaduan.
            </p>
          </div>
          <div className="flex flex-col gap-space-sm">
            <div className="rounded-lg bg-surface-container-low overflow-hidden">
              <button
                onClick={() => toggleFaq('faq-1')}
                className={`w-full p-space-md text-left flex items-center justify-between font-title-md text-title-md text-on-surface font-semibold hover:text-primary transition-colors ${
                  openFaq.has('faq-1') ? 'text-primary' : ''
                }`}
                type="button"
              >
                <span>Apakah identitas saya benar-benar dirahasiakan jika memilih opsi anonim?</span>
                <span className={`material-symbols-outlined transition-transform duration-200 ${
                  openFaq.has('faq-1') ? 'rotate-180' : ''
                }`}>
                  expand_more
                </span>
              </button>
              {openFaq.has('faq-1') && (
                <div className="px-space-md pb-space-md font-body-sm text-body-sm text-on-surface-variant">
                  Ya, 100% aman. Ketika Anda memilih opsi anonim, sistem LAPOR-DAERAH menyamarkan NIK, nama lengkap, dan nomor kontak Anda pada tampilan publik. Hanya verifikator inspektorat daerah yang memiliki hak akses terbatas untuk mencegah laporan fiktif atau spam.
                </div>
              )}
            </div>
            <div className="rounded-lg bg-surface-container-low overflow-hidden">
              <button
                onClick={() => toggleFaq('faq-2')}
                className={`w-full p-space-md text-left flex items-center justify-between font-title-md text-title-md text-on-surface font-semibold hover:text-primary transition-colors ${
                  openFaq.has('faq-2') ? 'text-primary' : ''
                }`}
                type="button"
              >
                <span>Berapa lama laporan saya akan mendapatkan respon pertama?</span>
                <span className={`material-symbols-outlined transition-transform duration-200 ${
                  openFaq.has('faq-2') ? 'rotate-180' : ''
                }`}>
                  expand_more
                </span>
              </button>
              {openFaq.has('faq-2') && (
                <div className="px-space-md pb-space-md font-body-sm text-body-sm text-on-surface-variant">
                  Sesuai dengan Piagam Standar Pelayanan Publik Daerah, batas waktu maksimal untuk verifikasi awal dan disposisi tiket ke dinas teknis adalah 1x24 jam kerja. Setelah didisposisikan, instansi penanggung jawab wajib memberikan catatan tindak lanjut pertama dalam waktu maksimal 3 hari kerja.
                </div>
              )}
            </div>
            <div className="rounded-lg bg-surface-container-low overflow-hidden">
              <button
                onClick={() => toggleFaq('faq-3')}
                className={`w-full p-space-md text-left flex items-center justify-between font-title-md text-title-md text-on-surface font-semibold hover:text-primary transition-colors ${
                  openFaq.has('faq-3') ? 'text-primary' : ''
                }`}
                type="button"
              >
                <span>Bagaimana jika instansi terkait lambat atau belum memproses laporan saya?</span>
                <span className={`material-symbols-outlined transition-transform duration-200 ${
                  openFaq.has('faq-3') ? 'rotate-180' : ''
                }`}>
                  expand_more
                </span>
              </button>
              {openFaq.has('faq-3') && (
                <div className="px-space-md pb-space-md font-body-sm text-body-sm text-on-surface-variant">
                  Sistem memiliki mekanisme eskalasi otomatis. Jika dalam 5 hari kerja instansi terkait belum memperbarui status tiket, sistem LAPOR-DAERAH secara otomatis meneruskan peringatan merah (teguran kedinasan) kepada Sekretaris Daerah (Sekda) dan Kantor Inspektorat Daerah untuk audit kinerja.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}