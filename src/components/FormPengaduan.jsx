import { kategoriList, kecamatanList, instansiList } from '../data.jsx';

export default function FormPengaduan() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low/40" id="form-pengaduan">
      <div className="max-w-[1280px] mx-auto px-margin">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
            Layanan Pengaduan Rakyat
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
            Formulir Aspirasi &amp; Pengaduan Warga
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Sampaikan rincian permasalahan di sekitar Anda secara jelas dan objektif agar dapat
            ditindaklanjuti secara tepat oleh OPD yang berwenang.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl shadow-md p-space-lg lg:p-space-xl">
            <form className="flex flex-col gap-space-md" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1.5 font-semibold" htmlFor="kategori">
                  Kategori Layanan <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <select className="w-full h-11 px-space-md bg-surface-container-low text-on-surface rounded-lg appearance-none font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary outline-none transition-all" id="kategori" required>
                    <option disabled selected value="">Pilih Kategori Permasalahan</option>
                    {kategoriList.map((k) => (
                      <option key={k.value} value={k.value}>{k.label}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-space-md flex items-center pointer-events-none text-on-surface-variant">
                    <span className="material-symbols-outlined text-lg">arrow_drop_down</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1.5 font-semibold" htmlFor="judul">
                  Judul Pengaduan <span className="text-error">*</span>
                </label>
                <input className="w-full h-11 px-space-md bg-surface-container-low text-on-surface rounded-lg font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-outline" id="judul" placeholder="Tuliskan pokok permasalahan secara singkat (contoh: PJU Mati Sepanjang 500m di Jl. Anggrek)" required type="text" />
              </div>

              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1.5 font-semibold" htmlFor="laporan">
                  Isi Laporan Pengaduan Lengkap <span className="text-error">*</span>
                </label>
                <textarea className="w-full p-space-md bg-surface-container-low text-on-surface rounded-lg font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-outline resize-none" id="laporan" placeholder="Uraikan kronologi, waktu kejadian, dampak yang dirasakan warga sekitar, dan informasi penting lainnya..." required rows="4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-1.5 font-semibold" htmlFor="lokasi-alamat">
                    Alamat Spesifik / Patokan <span className="text-error">*</span>
                  </label>
                  <input className="w-full h-11 px-space-md bg-surface-container-low text-on-surface rounded-lg font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-outline" id="lokasi-alamat" placeholder="Contoh: Depan Ruko No. 12, RT 04 / RW 02" required type="text" />
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-1.5 font-semibold" htmlFor="kecamatan">
                    Kecamatan / Kelurahan <span className="text-error">*</span>
                  </label>
                  <div className="relative">
                    <select className="w-full h-11 px-space-md bg-surface-container-low text-on-surface rounded-lg appearance-none font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary outline-none transition-all" id="kecamatan" required>
                      <option disabled selected value="">Pilih Wilayah Kecamatan</option>
                      {kecamatanList.map((k) => (
                        <option key={k.value} value={k.value}>{k.label}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-space-md flex items-center pointer-events-none text-on-surface-variant">
                      <span className="material-symbols-outlined text-lg">expand_more</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                    Titik Pin Koordinat GPS (Terverifikasi Otomatis)
                  </span>
                  <button className="font-label-sm text-label-sm text-primary hover:underline" type="button">
                    Gunakan Lokasi Saya Saat Ini
                  </button>
                </div>
                <div className="w-full h-36 bg-cover bg-center rounded-lg shadow-sm relative overflow-hidden flex items-end p-space-sm" data-location="Balai Kota Daerah, Jambi, Indonesia" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAT_LssQiTFC4C56yyCqh2OOC3UkssEwhH2LQrrillaNJeraKkBbw5RZfkgiqm77txJmkiSKcRH20wgkNP-2Ew3fUKkaUceH8OwtGb7CAiVClI4okfLGJQJc47z5xSJbHpgMwYM3d-CgjQl62pEKnKPdKBQw8yusmVSNqm6L3RRWT9XkAeqQEwr1S_zxfHnkAhHRbKR6XR2r-gXJqSknah1FUntSCRjIFA5_r-k-sgL06PG5qa2ayTb')" }}>
                  <div className="bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded text-on-surface font-body-sm text-body-sm flex items-center gap-2 shadow">
                    <span className="w-2.5 h-2.5 rounded-full bg-error animate-ping" />
                    <span>Koordinat: -1.610126, 103.613120 (Akurat ± 3m)</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1.5 font-semibold" htmlFor="instansi">
                  Rekomendasi Dinas Terkait <span className="font-normal text-on-surface-variant">(Opsional - Sistem akan mendeteksi otomatis jika kosong)</span>
                </label>
                <select className="w-full h-11 px-space-md bg-surface-container-low text-on-surface rounded-lg font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary outline-none transition-all" id="instansi">
                  <option value="">Rekomendasikan secara otomatis oleh AI Dispatcher</option>
                  {instansiList.slice(1).map((i) => (
                    <option key={i.value} value={i.value}>{i.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1.5 font-semibold">
                  Lampiran Bukti Foto Kerusakan / Dokumen Pendukung <span className="text-error">*</span>
                </label>
                <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container transition-colors">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest text-primary flex items-center justify-center mb-space-xs">
                    <span className="material-symbols-outlined text-2xl">cloud_upload</span>
                  </div>
                  <p className="font-label-md text-label-md text-on-surface">Klik untuk mengunggah atau seret file ke sini</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Mendukung format JPG, PNG, atau Dokumen PDF (Maksimal 10MB per berkas)
                  </p>
                </div>
                <div className="flex items-center gap-space-sm mt-space-xs">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-primary text-base">image</span>
                    <span className="truncate max-w-[200px]">foto_kerusakan_jalan_utama.jpg</span>
                    <span className="text-on-surface-variant text-xs">(2.4 MB)</span>
                    <button className="text-error hover:text-on-error-container ml-1" type="button">
                      <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-space-md bg-surface-container-low/40 p-space-md rounded-lg">
                <h4 className="font-title-md text-title-md text-on-surface mb-space-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">badge</span>
                  Data Diri Pelapor
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm mb-space-sm">
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="nama">Nama Lengkap Sesuai KTP</label>
                    <input className="w-full h-10 px-3 bg-surface-container-lowest rounded-md text-on-surface font-body-sm text-body-sm outline-none focus:ring-1 focus:ring-primary" id="nama" defaultValue="Bambang Wicaksono" type="text" />
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="nik">NIK (16 Digit)</label>
                    <input className="w-full h-10 px-3 bg-surface-container-lowest rounded-md text-on-surface font-body-sm text-body-sm outline-none focus:ring-1 focus:ring-primary" id="nik" defaultValue="1571022809890003" type="text" />
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="kontak">No. WhatsApp / Email</label>
                    <input className="w-full h-10 px-3 bg-surface-container-lowest rounded-md text-on-surface font-body-sm text-body-sm outline-none focus:ring-1 focus:ring-primary" id="kontak" defaultValue="0812-7489-3321" type="text" />
                  </div>
                </div>
                <div className="flex items-start gap-space-xs mt-space-sm">
                  <input checked className="w-4 h-4 mt-0.5 rounded text-primary focus:ring-primary" id="anonim" type="checkbox" />
                  <label className="font-body-sm text-body-sm text-on-surface cursor-pointer select-none" htmlFor="anonim">
                    <strong className="font-semibold text-primary">Laporkan secara Anonim / Rahasiakan Identitas Saya:</strong>
                    Nama dan NIK Anda akan dienkripsi dan tidak dipublikasikan ke daftar aduan terbuka warga, hanya dapat dilihat oleh verifikator inspektorat resmi.
                  </label>
                </div>
              </div>

              <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-primary text-base">lock</span>
                  <span>Enkripsi SSL 256-Bit Standar BSSN RI</span>
                </div>
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-3 rounded-lg bg-primary hover:bg-secondary text-on-primary font-label-md text-label-md shadow-md transition-all active:scale-[0.98]" type="submit">
                  <span className="material-symbols-outlined text-xl">send</span>
                  <span>Kirim Laporan Pengaduan</span>
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">lightbulb</span>
                Tips Laporan Cepat Direspon
              </h3>
              <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                  <span>
                    <strong>Sertakan Foto Jelas:</strong> Ambil foto dari sudut dekat (detail kerusakan) dan sudut jauh (kondisi lingkungan sekitar).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                  <span>
                    <strong>Cantumkan Patokan Akurat:</strong> Tuliskan nama gedung terdekat, patokan km jalan, atau nomor rumah agar tim teknis mudah menjangkau lokasi.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                  <span>
                    <strong>Hindari Bahasa Provokatif:</strong> Gunakan narasi faktual dan terukur agar mempercepat proses verifikasi hukum dinas.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-primary text-on-primary rounded-xl shadow-md p-space-lg flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 opacity-15">
                <span className="material-symbols-outlined text-9xl">support_agent</span>
              </div>
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1 font-label-sm text-label-sm bg-on-primary/20 px-2.5 py-1 rounded-full mb-space-sm">
                  Keadaan Darurat?
                </span>
                <h4 className="font-headline-sm text-headline-sm font-bold mb-space-xs">
                  Hotline Reaksi Cepat 112
                </h4>
                <p className="font-body-sm text-body-sm text-on-primary/90 mb-space-md">
                  Untuk kebakaran, bencana alam mendesak, atau kecelakaan medis gawat darurat, segera hubungi sambungan langsung bebas pulsa 24 jam.
                </p>
                <a className="inline-flex items-center gap-2 px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md font-bold shadow hover:bg-surface-container-low transition-colors" href="tel:112">
                  <span className="material-symbols-outlined text-lg">call</span>
                  Panggil 112 Bebas Pulsa
                </a>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg">
              <div className="flex items-center gap-space-sm mb-space-xs">
                <span className="material-symbols-outlined text-primary text-xl">security</span>
                <h4 className="font-title-md text-title-md text-on-surface">Jaminan Kerahasiaan Warga</h4>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Sesuai UU No. 25 Tahun 2009 tentang Pelayanan Publik, data pribadi pelapor terlindungi secara hukum dari segala bentuk intimidasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}