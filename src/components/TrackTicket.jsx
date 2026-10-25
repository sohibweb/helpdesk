import { trackedTicket } from '../data.jsx';

export default function TrackTicket() {
  const t = trackedTicket;

  return (
    <section className="w-full py-space-xl" id="cek-status">
      <div className="max-w-[1280px] mx-auto px-margin">
        <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg lg:p-space-xl">
          <div className="max-w-2xl mb-space-lg">
            <div className="inline-flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-wider mb-space-xs">
              <span className="material-symbols-outlined text-sm">radar</span>
              <span>Pelacakan Transparan</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Lacak Status Pengaduan Mandiri
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Pantau sejauh mana laporan Anda ditindaklanjuti secara langsung
              tanpa harus datang ke kantor dinas terkait.
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-12 gap-space-sm mb-space-xl" onSubmit={(e) => e.preventDefault()}>
            <div className="md:col-span-9 relative">
              <div className="absolute inset-y-0 left-0 pl-space-md flex items-center pointer-events-none text-on-surface-variant">
                <span className="material-symbols-outlined text-xl">confirmation_number</span>
              </div>
              <input
                className="w-full h-12 pl-12 pr-4 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-outline"
                placeholder="Masukkan Nomor Tiket (Contoh: TKT-2025-0891) atau NIK Pelapor"
                type="text"
                defaultValue="TKT-2025-0891"
              />
            </div>
            <div className="md:col-span-3">
              <button className="w-full h-12 inline-flex items-center justify-center gap-space-xs px-space-md bg-primary hover:bg-secondary text-on-primary font-label-md text-label-md rounded-lg shadow-sm transition-all active:scale-[0.99]" type="submit">
                <span className="material-symbols-outlined text-xl">search</span>
                <span>Lacak Status Tiket</span>
              </button>
            </div>
          </form>

          <div className="p-space-lg rounded-xl bg-surface-container-low shadow-inner">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-md">
              <div>
                <div className="flex items-center gap-space-xs flex-wrap">
                  <span className="font-code-tracker text-code-tracker bg-surface-container-lowest px-2.5 py-1 rounded-md text-primary font-bold shadow-sm">
                    #{t.nomor_tiket}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-container">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {t.status_label}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Diajukan: {t.tanggal_diajukan}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-space-xs">
                  {t.judul}
                </h3>
              </div>
              <button className="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm rounded-lg shadow-sm transition-all self-start md:self-auto" type="button">
                <span className="material-symbols-outlined text-primary text-base">download</span>
                <span>Unduh Bukti Pengaduan (PDF)</span>
              </button>
            </div>

            <div className="py-space-md">
              <p className="font-label-md text-label-md text-on-surface-variant mb-space-md">
                Alur Progres Penanganan:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md relative">
                {t.timeline.map((step) => (
                  <div key={step.step} className="flex items-start gap-space-sm">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${step.completed
                        ? 'bg-primary text-on-primary'
                        : step.active
                          ? 'bg-primary-container text-on-primary ring-4 ring-primary-fixed shadow-md animate-pulse'
                          : 'bg-surface-container-highest text-on-surface-variant'}`}>
                      {step.completed ? (
                        <span className="material-symbols-outlined text-base">check</span>
                      ) : step.active ? (
                        <span className="material-symbols-outlined text-base">engineering</span>
                      ) : (
                        <span className="material-symbols-outlined text-base">flag</span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className={`font-title-md text-title-md ${step.completed ? 'text-on-surface' : step.active ? 'text-primary font-bold' : 'text-on-surface'}`}>
                        {step.step}. {step.title}
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {step.time}
                      </p>
                      <span className={`font-label-sm text-label-sm ${step.completed ? 'text-primary' : step.active ? 'text-secondary font-semibold' : 'text-outline'}`}>
                        {step.note}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm mt-space-sm flex flex-col md:flex-row gap-space-md items-start">
              <div className="w-9 h-9 rounded-full bg-surface-container-high text-primary flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-lg">shield_person</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                  <span className="font-label-md text-label-md text-on-surface font-bold">
                    Catatan Resmi Petugas: {t.petugas_nama}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Diperbarui: {t.petugas_updated}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  "{t.catatan_petugas}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}