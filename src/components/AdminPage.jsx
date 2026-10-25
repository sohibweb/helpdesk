export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface antialiased">
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 max-w-[1280px] mx-auto px-margin flex items-center justify-between">
          <div className="flex items-center gap-space-md">
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight">LAPOR-DAERAH</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant hidden sm:inline-block">Manajemen Pengaduan</span>
          </div>
          <a href="/" className="inline-flex items-center justify-center px-space-md py-space-sm bg-primary hover:bg-secondary text-on-primary font-label-md text-label-md rounded-lg shadow-sm transition-all">
            Kembali ke Portal Masyarakat
          </a>
        </div>
      </header>
      <main className="w-full pt-20 bg-background">
        <div className="max-w-[1280px] mx-auto px-margin py-space-xl">
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-space-lg">Manajemen Pengaduan</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Halaman manajemen pengaduan untuk petugas/admin. (Placeholder - desain admin tersedia di folder desain/manajemen-pengaduan)
          </p>
        </div>
      </main>
    </div>
  );
}