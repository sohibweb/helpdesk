import { useState } from 'react';

export default function RatingUlasan() {
  const [rating, setRating] = useState(5);

  const ratingDescriptions = {
    1: '1.0 / Sangat Kecewa',
    2: '2.0 / Kurang Puas',
    3: '3.0 / Cukup Memadai',
    4: '4.0 / Puas',
    5: '5.0 / Sangat Puas',
  };

  return (
    <div className="mt-space-xl bg-surface-container-lowest rounded-xl shadow-md p-space-lg lg:p-space-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold mb-1">
            <span className="material-symbols-outlined text-base">reviews</span>
            <span>Umpan Balik Kepuasan Masyarakat</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface">
            Pernah Membuat Pengaduan Sebelumnya?
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Bantu kami mengukur dan meningkatkan kualitas kecepatan pelayanan aparatur pemerintah daerah dengan memberikan ulasan objektif Anda.
          </p>
        </div>
        <div className="lg:col-span-7 bg-surface-container-low p-space-lg rounded-xl">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm mb-space-sm">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface mb-1">
                  Nomor Tiket Anda
                </label>
                <input className="w-full h-10 px-3 bg-surface-container-lowest rounded-lg text-on-surface font-body-sm text-body-sm outline-none focus:ring-1 focus:ring-primary" placeholder="Contoh: TKT-2025-0842" required type="text" />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface mb-1">
                  Tingkat Kepuasan Pelayanan
                </label>
                <div className="flex items-center gap-1 h-10 px-2 bg-surface-container-lowest rounded-lg">
                  {[1, 2, 3, 4, 5].map((r) => (
                    <button
                      key={r}
                      onClick={() => setRating(r)}
                      className="text-primary hover:scale-125 transition-transform"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    </button>
                  ))}
                  <span className="font-label-sm text-label-sm text-primary font-bold ml-2">
                    {ratingDescriptions[rating]}
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-space-sm">
              <label className="block font-label-sm text-label-sm text-on-surface mb-1">
                Komentar &amp; Catatan untuk Petugas Lapangan
              </label>
              <textarea className="w-full p-2.5 bg-surface-container-lowest rounded-lg text-on-surface font-body-sm text-body-sm outline-none focus:ring-1 focus:ring-primary resize-none" placeholder="Sebutkan hal positif atau saran perbaikan saat dinas menangani aduan Anda..." required rows="2" />
            </div>
            <div className="flex justify-end">
              <button className="px-space-md py-2 bg-primary hover:bg-secondary text-on-primary font-label-md text-label-md rounded-lg shadow-sm transition-all" type="submit">
                Kirim Ulasan &amp; Rating
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}