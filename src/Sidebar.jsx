import { Link } from 'react-router-dom';

const logoUrl =
  'https://lh3.googleusercontent.com/aida/AEtjO1XhOT4BGZ-4fltR6bwgBurvqG2s3-9pOs59fAQ-gc3iJseeo5QP9DxO5VYs1ig8y2zJ8pskKawHb05LanKb1IWRHShz9zS-pvs9IKoOIY5Cu1Y6v97Igb-vDbQrvnc_ewPWpGf6IV-04lKwZuXWj4BszZj-2Dcovi6iWbuhEqgIYTf8vnglLGCg4-qRRAqjCiFLkjXepCjSdO9ptLPCeLpfOvOG74WtcsTCX7jwIxWWR7143Cin4NvxaUo';

const navItems = [
  { icon: 'dashboard', label: 'Dashboard' },
  { icon: 'fact_check', label: 'Verifikasi Aduan' },
  { icon: 'alt_route', label: 'Disposisi Instansi' },
  { icon: 'category', label: 'Master Kategori' },
  { icon: 'summarize', label: 'Laporan Rekapitulasi' },
  { icon: 'settings', label: 'Pengaturan' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low z-50 flex flex-col shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 px-space-lg flex items-center gap-space-sm bg-surface-container-lowest">
        <img alt="Logo LAPOR-DAERAH" className="h-8 w-auto object-contain" src={logoUrl} />
        <div className="flex flex-col">
          <span className="font-headline-sm text-headline-sm text-primary tracking-tight leading-tight">
            LAPOR-DAERAH
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
            Pusat Komando Wilayah
          </span>
        </div>
      </div>
      <div className="px-space-md py-space-sm">
        <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center justify-between text-on-surface-variant">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
            Mode Petugas
          </span>
          <span className="inline-flex items-center px-space-xs py-0.5 rounded-full font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed">
            Aktif
          </span>
        </div>
      </div>
      <nav className="flex-1 px-space-md py-space-xs flex flex-col gap-1 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to="/manajemen-pengaduan"
            className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg transition-all bg-primary-container text-on-primary-container font-bold"
            data-path="manajemen-pengaduan"
          >
            <span className="material-symbols-outlined text-xl">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="p-space-md bg-surface-container-lowest/80">
        <Link
          to="/"
          className="flex items-center justify-center gap-space-xs w-full py-space-sm rounded-lg text-secondary hover:bg-surface-container-high font-label-md text-label-md transition-colors"
          data-path="portal-pengaduan-masyarakat"
        >
          <span className="material-symbols-outlined text-lg">logout</span>
          Ke Portal Publik
        </Link>
      </div>
    </aside>
  );
}