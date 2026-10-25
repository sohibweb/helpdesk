import { Link, useLocation } from 'react-router-dom';

const logoUrl =
  'https://lh3.googleusercontent.com/aida/AEtjO1XhOT4BGZ-4fltR6bwgBurvqG2s3-9pOs59fAQ-gc3iJseeo5QP9DxO5VYs1ig8y2zJ8pskKawHb05LanKb1IWRHShz9zS-pvs9IKoOIY5Cu1Y6v97Igb-vDbQrvnc_ewPWpGf6IV-04lKwZuXWj4BszZj-2Dcovi6iWbuhEqgIYTf8vnglLGCg4-qRRAqjCiFLkjXepCjSdO9ptLPCeLpfOvOG74WtcsTCX7jwIxWWR7143Cin4NvxaUo';

const profileUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAqxOFKKqMyT4av2z6PTZZjfxyZuhKB6wi1kNSSXaK5B5g5zeclATrSGnQhG2UEwTpiSdYjUXDO9ZxrftJpezrnKA9cs6PBH2hcc-Qm3o3HRT-lhzSpydaJ_IUilebofj_ilFBRRg_r8wuJ6OnrTuSgrxOmZzX2xwDmnQ6pb2lg_JhKYHZUuXg35YaDe3BFFcF19pfgmvmmOI9GLSvuOp7_Kll84m0i3I-yTy3FVhlgLnF_nSFe6ZQK';

const navLinks = [
  { label: 'Beranda', path: '/' },
  { label: 'Buat Pengaduan', path: '#form-pengaduan' },
  { label: 'Cek Status Tiket', path: '#cek-status' },
  { label: 'Aduan Publik', path: '#daftar-pengaduan' },
  { label: 'FAQ & Panduan', path: '#panduan-faq' },
];

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => {
    if (path.startsWith('#')) return false;
    return currentPath === path;
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1280px] mx-auto px-margin flex items-center justify-between">
        <div className="flex items-center gap-space-md">
          <img alt="Logo LAPOR-DAERAH" className="h-8 w-auto object-contain" src={logoUrl} />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight">
              LAPOR-DAERAH
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant hidden sm:inline-block">
              Layanan Aspirasi &amp; Pengaduan Rakyat Daerah
            </span>
          </div>
        </div>
        <nav className="hidden lg:flex items-center gap-space-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`transition-colors ${isActive(link.path) ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`}
              data-path="portal-pengaduan-masyarakat"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-space-md">
          <Link
            to="/manajemen-pengaduan"
            className="inline-flex items-center justify-center px-space-md py-space-sm bg-primary hover:bg-secondary text-on-primary font-label-md text-label-md rounded-lg shadow-sm transition-all"
            data-path="manajemen-pengaduan"
          >
            Portal Petugas / Masuk Admin
          </Link>
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={profileUrl} />
        </div>
      </div>
    </header>
  );
}