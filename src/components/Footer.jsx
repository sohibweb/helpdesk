const logoUrl =
  'https://lh3.googleusercontent.com/aida/AEtjO1XhOT4BGZ-4fltR6bwgBurvqG2s3-9pOs59fAQ-gc3iJseeo5QP9DxO5VYs1ig8y2zJ8pskKawHb05LanKb1IWRHShz9zS-pvs9IKoOIY5Cu1Y6v97Igb-vDbQrvnc_ewPWpGf6IV-04lKwZuXWj4BszZj-2Dcovi6iWbuhEqgIYTf8vnglLGCg4-qRRAqjCiFLkjXepCjSdO9ptLPCeLpfOvOG74WtcsTCX7jwIxWWR7143Cin4NvxaUo';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low shadow-[0_-1px_8px_rgba(0,0,0,0.02)] pt-space-xl pb-space-lg">
      <div className="max-w-[1280px] mx-auto px-margin">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-lg mb-space-xl">
          <div className="md:col-span-2">
            <div className="flex items-center gap-space-sm mb-space-sm">
              <img alt="Logo LAPOR-DAERAH" className="h-8 w-auto object-contain" src={logoUrl} />
              <span className="font-headline-sm text-headline-sm text-primary">LAPOR-DAERAH</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Kanal pengaduan daring resmi pemerintah daerah untuk transparansi pelayanan publik, percepatan tindak lanjut keluhan warga, dan akuntabilitas aparatur sipil daerah.
            </p>
          </div>
          <div>
            <h4 className="font-title-md text-title-md text-on-surface mb-space-sm">Tautan Penting</h4>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#">Standar Operasional Prosedur</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Kebijakan Privasi Pelapor</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Statistik Pengaduan Tahunan</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Direktori Lembaga &amp; OPD</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-title-md text-title-md text-on-surface mb-space-sm">Kontak &amp; Hotline</h4>
            <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <p className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-base text-primary">call</span> 1500-112 (Bebas Pulsa)
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-base text-primary">chat</span> +62 811-2024-999
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-base text-primary">mail</span> aspirasi@pemda.go.id
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-base text-primary">location_on</span> Gedung Balai Kota Utama Kav. 1-4
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-space-md border-t border-outline-variant/30 text-on-surface-variant font-body-sm text-body-sm">
          <p>© 2024 Pemerintah Daerah - Sistem Layanan Aspirasi dan Pengaduan Online Rakyat Daerah. Seluruh hak cipta dilindungi.</p>
          <div className="flex gap-space-md mt-space-sm md:mt-0">
            <a className="hover:text-on-surface" href="#">Ketentuan Penggunaan</a>
            <a className="hover:text-on-surface" href="#">Aksesibilitas</a>
          </div>
        </div>
      </div>
    </footer>
  );
}