const bannerUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAOgnJ7xaROTOGfXuAqVvhyFYyjQ95O4cD74cCcFW34HL0DO2CJfKoFo-5NR-JVsGQmR6E1ACsYnWS8Yxj98M_zK3dpe6454WIvuMT5j14cPsJxb3IW776K-5XKcdKQTqTJvoAwJIQ5fwDZFW5LFgJppKCxbGZlVslAhWta0NRGkw3wy6m8QxgCbl9wsGaU6cjXvcoXQoLW3nbgHEOWg7uBx7cn8JwCJRdGnuopzdhNiRYHYSxWgJFW';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-low/60 py-space-xl">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-secondary-container/15 blur-3xl pointer-events-none" />
      <div className="max-w-[1280px] mx-auto px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm shadow-sm mb-space-md">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-ping" />
              <span>Respon Cepat Terjamin 1x24 Jam Kerja</span>
            </div>
            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight mb-space-md max-w-2xl">
              Sampaikan Aspirasi &amp; Pengaduan Anda untuk Pelayanan Daerah yang Lebih Baik
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-lg">
              Wadah resmi pelaporan publik yang transparan, akuntabel, dan terhubung langsung dengan seluruh Organisasi Perangkat Daerah (OPD) serta dinas teknis pemerintah daerah Anda.
            </p>
            <div className="flex flex-wrap items-center gap-space-md mb-space-xl">
              <a
                href="#form-pengaduan"
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-primary hover:bg-secondary text-on-primary font-label-md text-label-md shadow-md transition-all active:scale-[0.98]"
              >
                <span className="material-symbols-outlined text-xl">edit_document</span>
                <span>Tulis Laporan Sekarang</span>
              </a>
              <a
                href="#cek-status"
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-surface-container-lowest hover:bg-surface-container text-primary font-label-md text-label-md shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-xl">search_check</span>
                <span>Cek Status Tiket</span>
              </a>
            </div>
            <div className="flex items-center gap-space-lg pt-space-sm text-on-surface-variant font-label-sm text-label-sm">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified_user
                </span>
                <span>Identitas Pelapor Terlindungi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                  speed
                </span>
                <span>Monitoring Real-time</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative bg-surface-container-lowest p-space-lg rounded-xl shadow-xl flex flex-col gap-space-md overflow-hidden">
              <div className="flex items-center justify-between pb-space-sm bg-surface-container/40 -mx-space-lg -mt-space-lg px-space-lg pt-space-md">
                <div className="flex items-center gap-space-xs">
                  <span className="w-3 h-3 rounded-full bg-error" />
                  <span className="w-3 h-3 rounded-full bg-primary-container" />
                  <span className="w-3 h-3 rounded-full bg-tertiary" />
                  <span className="font-code-tracker text-code-tracker text-on-surface-variant ml-2">
                    SISTEM MONITORING KINERJA
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-primary font-semibold">
                  Tahun Berjalan 2025
                </span>
              </div>
              <div className="flex items-center justify-between gap-space-md pt-space-xs">
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Laju Penyelesaian Mingguan
                  </p>
                  <p className="font-headline-md text-headline-md text-on-surface">
                    324 <span className="text-xs font-normal text-on-surface-variant">aduan selesai / 7 hari</span>
                  </p>
                </div>
                <svg className="w-28 h-10 text-primary" fill="none" viewBox="0 0 112 40">
                  <path d="M2 30 L22 25 L42 28 L62 14 L82 18 L102 6 L110 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                  <circle cx="110" cy="8" fill="currentColor" r="3" />
                </svg>
              </div>
              <div className="relative rounded-lg overflow-hidden h-44 shadow-inner">
                <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${bannerUrl})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent flex items-end p-space-md">
                  <span className="text-on-primary font-label-md text-label-md flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">hub</span>
                    Sinergi 34 Dinas &amp; Badan Daerah Terpadu
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-space-sm pt-space-xs text-center">
                <div className="p-space-sm rounded-lg bg-surface-container-low">
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Standar SLA Awal</p>
                  <p className="font-title-md text-title-md text-primary">≤ 24 Jam</p>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low">
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Transparansi Publik</p>
                  <p className="font-title-md text-title-md text-primary">100% Terbuka</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md mt-space-xl">
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-md text-label-md text-on-surface-variant">Total Pengaduan Masuk</span>
              <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-xl">inbox</span>
              </div>
            </div>
            <div>
              <p className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
                14.852
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1">
                <span className="text-primary font-semibold">↑ 12%</span> dibanding bulan lalu
              </p>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-md text-label-md text-on-surface-variant">Tingkat Penyelesaian</span>
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-xl">task_alt</span>
              </div>
            </div>
            <div>
              <p className="font-headline-lg text-headline-lg text-primary font-extrabold tracking-tight">
                94,6%
              </p>
              <div className="w-full bg-surface-container rounded-full h-1.5 mt-2 overflow-hidden">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: '94.6%' }} />
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-md text-label-md text-on-surface-variant">Rata-rata Waktu Tanggap</span>
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-xl">timer</span>
              </div>
            </div>
            <div>
              <p className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
                3 Hari
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Target OPD maksimal 5 hari kerja
              </p>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-md text-label-md text-on-surface-variant">Indeks Kepuasan Warga</span>
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <p className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
                  4.8
                </p>
                <span className="font-title-md text-title-md text-on-surface-variant">/ 5.0</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Berdasarkan 8.920 responden
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}