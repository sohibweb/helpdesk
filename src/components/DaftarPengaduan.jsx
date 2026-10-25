import { pengaduan } from '../data.jsx';

const statusConfig = {
  selesai: { badge: 'Selesai Ditangani', bg: 'bg-surface-container-highest', text: 'text-primary', dot: 'bg-primary' },
  diproses: { badge: 'Sedang Diproses', bg: 'bg-secondary-fixed', text: 'text-on-secondary-container', dot: 'bg-secondary' },
  diverifikasi: { badge: 'Diverifikasi Verifikator', bg: 'bg-tertiary-fixed', text: 'text-on-tertiary-fixed-variant', dot: 'bg-tertiary' },
  ditolak: { badge: 'Ditolak', bg: 'bg-error-container', text: 'text-on-error', dot: 'bg-error' },
  baru: { badge: 'Baru Diterima', bg: 'bg-primary-fixed', text: 'text-primary', dot: 'bg-primary' },
};

export default function DaftarPengaduan() {
  return (
    <section className="w-full py-space-xl" id="daftar-pengaduan">
      <div className="max-w-[1280px] mx-auto px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
              Transparansi Kinerja
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
              Daftar Pengaduan Publik Terverifikasi
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Simak perkembangan terkini respon pemerintah daerah terhadap aduan yang disampaikan oleh masyarakat secara terbuka.
            </p>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            {['Semua Aduan', 'Infrastruktur', 'Kebersihan', 'Kependudukan', 'Sosial'].map((filter, i) => (
              <button key={i} className={`px-space-md py-2 rounded-lg whitespace-nowrap font-label-md text-label-md transition-colors ${i === 0 ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container hover:bg-surface-container-high text-on-surface'}`}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {pengaduan.map((item) => {
            const cfg = statusConfig[item.status] || statusConfig.baru;
            return (
              <div key={item.nomor_tiket} className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg flex flex-col justify-between hover:shadow-xl transition-shadow">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-space-sm">
                    <span className="font-code-tracker text-code-tracker text-primary bg-primary-fixed px-2 py-0.5 rounded font-bold">
                      {item.nomor_tiket}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full font-label-sm text-label-sm ${cfg.bg} ${cfg.text} font-semibold`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                      {cfg.badge}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs hover:text-primary transition-colors cursor-pointer">
                    {item.kategori_layanan} - {item.lokasi_kejadian}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-space-md">
                    {item.isi_laporan}
                  </p>

                  {(item.beforeImage || item.afterImage) && (
                    <div className="grid grid-cols-2 gap-space-xs rounded-lg overflow-hidden mb-space-md">
                      {item.beforeImage && (
                        <div className="relative h-28">
                          <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${item.beforeImage})` }} />
                          <span className="absolute bottom-1 left-1 bg-on-background/70 text-on-primary text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                            Sebelum
                          </span>
                        </div>
                      )}
                      {item.afterImage && (
                        <div className="relative h-28">
                          <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${item.afterImage})` }} />
                          <span className="absolute bottom-1 left-1 bg-primary text-on-primary text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                            Sesudah
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {item.tanggapan_dinas && (
                    <div className="bg-surface-container-low p-space-sm rounded-lg mb-space-md text-on-surface-variant font-body-sm text-body-sm">
                      <p className="font-label-sm text-label-sm text-on-surface font-semibold flex items-center gap-1 mb-1">
                        <span className="material-symbols-outlined text-sm text-primary">verified</span>
                        Tanggapan {item.instansi_tujuan}:
                      </p>
                      <p className="text-xs line-clamp-2">
                        "{item.tanggapan_dinas}"
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-space-sm border-t border-surface-container">
                  <div className="flex items-center justify-between mb-space-sm">
                    <div className="flex items-center text-primary text-sm">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                      ))}
                      <span className="font-label-sm text-label-sm text-on-surface ml-1 font-bold">
                        {item.rating_kepuasan ?? 5}.0 / 5.0
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {item.wilayah}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex-1 py-2 px-space-xs text-center rounded bg-surface-container-low hover:bg-surface-container text-primary font-label-sm text-label-sm transition-colors flex items-center justify-center gap-1" type="button">
                      <span className="material-symbols-outlined text-sm">chat</span>
                      Tanggapan Lanjutan
                    </button>
                    <button className="p-2 rounded bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" title="Unduh Surat Bukti Penyelesaian" type="button">
                      <span className="material-symbols-outlined text-base">file_download</span>
                    </button>
                  </div>
                </div>
              </div>
          )
          })}
        </div>
      </div>
    </section>
  );
}