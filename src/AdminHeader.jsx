const profileUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAqxOFKKqMyT4av2z6PTZZjfxyZuhKB6wi1kNSSXaK5B5g5zeclATrSGnQhG2UEwTpiSdYjUXDO9ZxrftJpezrnKA9cs6PBH2hcc-Qm3o3HRT-lhzSpydaJ_IUilebofj_ilFBRRg_r8wuJ6OnrTuSgrxOmZzX2xwDmnQ6pb2lg_JhKYHZUuXg35YaDe3BFFcF19pfgmvmmOI9GLSvuOp7_Kll84m0i3I-yTy3FVhlgLnF_nSFe6ZQK';

export default function AdminHeader() {
  return (
    <header className="fixed top-0 left-72 right-0 h-20 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg">
      <div className="flex items-center gap-space-md w-96">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-lg">
            search
          </span>
          <input
            className="w-full h-11 pl-10 pr-4 bg-surface-container-lowest rounded-lg border border-outline-variant/50 text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Cari ID tiket, kata kunci, pemohon..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-space-lg">
        <div className="hidden md:flex items-center gap-space-xs bg-tertiary-fixed text-on-tertiary-fixed px-space-sm py-1 rounded-full font-label-sm text-label-sm">
          <span className="material-symbols-outlined text-base">bolt</span>
          <span>14 Tiket Mendesak Hari Ini</span>
        </div>
        <button className="relative p-2 rounded-full hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined text-xl">notifications</span>
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-error rounded-full ring-2 ring-surface" />
        </button>
        <div className="flex items-center gap-space-sm pl-space-sm border-l border-outline-variant/40">
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={profileUrl} />
          <div className="flex flex-col text-left">
            <span className="font-label-md text-label-md text-on-surface leading-tight">
              Ratih Sari Dewi, S.STP
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Admin Pengawas Utama
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}