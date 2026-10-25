import { useState } from 'react';
import Sidebar from './Sidebar.jsx';
import AdminHeader from './AdminHeader.jsx';

const pengaduan = [];

export default function ManajemenPengaduan() {
  const [openModals, setOpenModals] = useState({ tambah: false, status: false, disposisi: false, tanggapan: false, ekspor: false, lampiran: false });
  const [toast, setToast] = useState({ show: false, message: '', icon: 'check_circle' });
  const [activeStatus, setActiveStatus] = useState('all');
  const [filterKategori, setFilterKategori] = useState('');
  const [filterInstansi, setFilterInstansi] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTanggal, setFilterTanggal] = useState('');
  const [lampiranData, setLampiranData] = useState({ nama: '', deskripsi: '', src: '' });

  const toggleModal = (id) => setOpenModals((prev) => ({ ...prev, [id]: !prev[id] }));
  const showToast = (msg, icon = 'check_circle') => {
    setToast({ show: true, message: msg, icon });
    setTimeout(() => setToast({ show: false, message: '', icon }), 3500);
  };

  const filteredData = pengaduan.filter((item) => {
    const matchSearch = item.nomor_tiket.toLowerCase().includes(searchQuery.toLowerCase()) || item.nama_pelapor.toLowerCase().includes(searchQuery.toLowerCase()) || item.ringkasan.toLowerCase().includes(searchQuery.toLowerCase()) || item.lokasi.toLowerCase().includes(searchQuery.toLowerCase());
    const matchKat = !filterKategori || item.data_kategori === filterKategori;
    const matchIns = !filterInstansi || item.data_instansi === filterInstansi;
    const matchStatus = activeStatus === 'all' || item.status === activeStatus;
    return matchSearch && matchKat && matchIns && matchStatus;
  });

  const resetFilters = () => {
    setSearchQuery(''); setFilterKategori(''); setFilterInstansi(''); setFilterTanggal(''); setActiveStatus('all');
    showToast('Semua parameter filter telah direset.');
  };

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface antialiased">
      <Sidebar />
      <div className="pl-72">
        <AdminHeader />
        <main className="relative pt-20 w-full min-h-screen bg-background">
          <div className="flex flex-col w-full">
            <div className="relative w-full overflow-hidden px-space-lg py-space-lg space-y-space-lg">
              <div className="absolute -top-32 right-12 w-96 h-96 bg-primary-fixed-dim/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-1/2 -left-20 w-80 h-80 bg-tertiary-fixed-dim/15 rounded-full blur-3xl pointer-events-none" />
              <div className="relative flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
                <div>
                  <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider mb-1">
                    <span>Pusat Komando</span>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span>Admin Daerah</span>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span className="text-primary font-bold">Manajemen Pengaduan</span>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                      Manajemen &amp; Pengawasan Pengaduan Daerah
                    </h1>
                    <span className="px-space-sm py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">
                      Sistem Terpadu SP4N
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    Konsol kendali disposisi instansi teknis, verifikasi aduan masyarakat, dan pengawasan Service Level Agreement (SLA) wilayah.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-space-sm">
                  <button className="flex items-center gap-space-xs px-space-md py-2.5 rounded-xl bg-surface-container-lowest text-secondary font-label-md text-label-md shadow-sm hover:bg-surface-container-high transition-all" onClick={() => toggleModal('ekspor')}>
                    <span className="material-symbols-outlined text-lg">download</span>
                    <span>Ekspor Laporan (Excel/PDF)</span>
                    <span className="material-symbols-outlined text-sm">expand_more</span>
                  </button>
                  <button className="flex items-center gap-space-xs px-space-md py-2.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md shadow-md hover:bg-secondary transition-all" onClick={() => toggleModal('tambah')}>
                    <span className="material-symbols-outlined text-lg">add_circle</span>
                    <span>+ Tambah Data Pengaduan Baru</span>
                  </button>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-surface-container-highest/60 p-space-md shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                <div className="flex items-start md:items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-xl bg-error-container text-on-error-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl">save_as</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-title-md text-title-md text-on-surface">Peringatan Kepatuhan SLA Tanggap Cepat (24 Jam)</span>
                      <span className="px-2 py-0.5 rounded-full bg-error text-on-error font-label-sm text-label-sm font-bold">3 Tiket Kritis</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      3 aduan masyarakat membutuhkan validasi dan disposisi ke OPD terkait dalam kurun waktu &lt; 4 jam sebelum status melewati batas toleransi keterlambatan.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm self-end md:self-auto shrink-0">
                  <button className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold shadow-sm hover:bg-surface-container transition-colors flex items-center gap-1" onClick={() => setActiveStatus('baru')}>
                    <span>Tinjau Tiket Kritis</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
              </div>
            </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-space-md">
                </div>
                <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Total Aduan Masuk</span>
                    <div className="w-9 h-9 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed"><span className="material-symbols-outlined text-xl">inbox</span></div>
                  </div>
                  <div className="mt-4">
                    <div className="font-headline-lg text-headline-lg text-on-surface tracking-tight">1.428</div>
                    <div className="flex items-center gap-1 mt-1 font-label-sm text-label-sm text-primary"><span className="material-symbols-outlined text-sm">trending_up</span><span className="font-bold">+12%</span><span className="text-on-surface-variant font-normal">dari bulan lalu</span></div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Perlu Verifikasi</span>
                    <div className="w-9 h-9 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center"><span className="material-symbols-outlined text-xl">mark_email_unread</span></div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-baseline gap-2"><span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">48</span><span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">Baru</span></div>
                    <div className="flex items-center gap-1 mt-1 font-label-sm text-label-sm text-error"><span className="material-symbols-outlined text-sm">emergency_heat</span><span>Segera verifikasi</span></div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Disposisi Dinas</span>
                    <div className="w-9 h-9 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center"><span className="material-symbols-outlined text-xl">alt_route</span></div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-baseline gap-2"><span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">132</span><span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">Diproses</span></div>
                    <div className="flex items-center gap-1 mt-1 font-label-sm text-label-sm text-on-surface-variant"><span className="material-symbols-outlined text-sm">schedule</span><span>Di 8 instansi aktif</span></div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Tuntas Terselesaikan</span>
                    <div className="w-9 h-9 rounded-xl bg-surface-container-high text-primary flex items-center justify-center"><span className="material-symbols-outlined text-xl">task_alt</span></div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-baseline gap-2"><span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">1.215</span><span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">Selesai</span></div>
                    <div className="flex items-center gap-1 mt-1 font-label-sm text-label-sm text-primary"><span className="material-symbols-outlined text-sm">verified</span><span className="font-bold">92%</span><span className="text-on-surface-variant font-normal">sukses rate</span></div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Ditolak / Non-Valid</span>
                    <div className="w-9 h-9 rounded-xl bg-error-container text-on-error-container flex items-center justify-center"><span className="material-symbols-outlined text-xl">block</span></div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-baseline gap-2"><span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">33</span><span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">Ditolak</span></div>
                    <div className="flex items-center gap-1 mt-1 font-label-sm text-label-sm text-on-surface-variant"><span className="material-symbols-outlined text-sm">info</span><span>2.3% dari total aduan</span></div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Indeks Kepuasan</span>
                    <div className="w-9 h-9 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center"><span className="material-symbols-outlined text-xl">star</span></div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-baseline gap-1"><span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">4.8</span><span className="font-label-md text-label-md text-on-surface-variant">/ 5.0</span></div>
                    <div className="flex items-center gap-1 mt-1 font-label-sm text-label-sm text-on-surface-variant"><span className="text-tertiary font-bold">★★★★★</span><span>(940 ulasan)</span></div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm space-y-space-md">
                <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">
                  <div className="relative flex-1 min-w-[280px]">
                    <span className="material-symbols-outlined absolute left-3.5 top-3 text-outline text-xl">search</span>
                    <input className="w-full h-11 pl-11 pr-4 bg-surface-container-low rounded-xl text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Cari Nomor Tiket, Nama Pelapor, atau Kata Kunci..." type="text" />
                  </div>
                  <div className="flex flex-wrap items-center gap-space-sm">
                    <div className="relative">
                      <select className="h-11 pl-3 pr-8 bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer" value={filterKategori} onChange={(e) => setFilterKategori(e.target.value)}>
                        <option value="">Semua Kategori</option>
                        {kategoriList.map((k) => <option key={k} value={k}>{k}</option>)}
                      </select>
                      <span className="material-symbols-outlined absolute right-2.5 top-3 text-outline pointer-events-none text-base">expand_more</span>
                    </div>
                    <div className="relative">
                      <select className="h-11 pl-3 pr-8 bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer" value={filterInstansi} onChange={(e) => setFilterInstansi(e.target.value)}>
                        <option value="">Semua Instansi Tujuan</option>
                        {instansiList.map((i) => <option key={i} value={i}>{i}</option>)}
                      </select>
                      <span className="material-symbols-outlined absolute right-2.5 top-3 text-outline pointer-events-none text-base">expand_more</span>
                    </div>
                    <input className="h-11 px-3 bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer" value={filterTanggal} onChange={(e) => setFilterTanggal(e.target.value)} type="date" />
                    <button className="h-11 px-space-sm rounded-xl bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1" onClick={resetFilters} title="Reset filter">
                      <span className="material-symbols-outlined text-base">restart_alt</span>
                      <span>Reset</span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-1 text-label-sm font-label-sm">
                  <span className="text-outline uppercase tracking-wider text-xs mr-1 shrink-0">Filter Status:</span>
                  {['all', 'baru', 'diverifikasi', 'diproses', 'selesai', 'ditolak'].map((st) => {
                    const pill = statusPills[st] || { label: st, bg: 'bg-surface-container', text: 'text-on-surface', dot: 'bg-surface-container' };
                    return (
                      <button key={st} className={`px-3 py-1 rounded-full font-semibold transition-all flex items-center gap-1.5 ${activeStatus === st ? pill.bg.replace('bg-', 'bg-') + ' ' + pill.text : pill.bg} ${activeStatus === st ? 'font-bold' : ''}`} onClick={() => setActiveStatus(st)}>
                        <span className={`w-2 h-2 rounded-full ${st === 'baru' ? 'bg-primary' : st === 'diverifikasi' ? 'bg-secondary-container' : st === 'diproses' ? 'bg-tertiary' : st === 'selesai' ? 'bg-surface-container-highest' : st === 'ditolak' ? 'bg-error' : 'bg-surface-container'}`}></span>
                        {pill.label}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden flex flex-col">
                <div className="p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm bg-surface-container-low/40">
                  <div>
                    <h2 className="font-title-md text-title-md text-on-surface">Daftar Pengaduan Warga Aktif</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Menampilkan {filteredData.length} dari total {pengaduan.length} data rekaman berurutan waktu terbaru</p>
                  </div>
                  <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                    <span>Sinkronisasi Otomatis OPD Aktif</span>
                  </div>
                </div>
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-left font-body-sm text-body-sm border-collapse" id="aduanTable">
                    <thead>
                      <tr className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                        <th className="py-3.5 px-space-md">Nomor Tiket &amp; Tanggal</th>
                        <th className="py-3.5 px-space-md">Pelapor &amp; Lokasi</th>
                        <th className="py-3.5 px-space-md">Kategori &amp; Ringkasan Aduan</th>
                        <th className="py-3.5 px-space-md">Instansi Tujuan</th>
                        <th className="py-3.5 px-space-md">Lampiran</th>
                        <th className="py-3.5 px-space-md text-center">Kepuasan</th>
                        <th className="py-3.5 px-space-md text-center">Status</th>
                        <th className="py-3.5 px-space-md text-right">Tindakan Admin</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container-high/60 text-on-surface" id="tableBody">
                      {filteredData.map((item) => (
                        <tr key={item.nomor_tiket} className="hover:bg-surface-container-low/60 transition-colors group" data-instansi={item.data_instansi} data-kategori={item.data_kategori} data-status={item.status}>
                          <td className="py-space-md px-space-md align-top">
                            <span className="font-code-tracker text-code-tracker font-bold text-primary block">{item.nomor_tiket}</span>
                            <span className="text-xs text-on-surface-variant mt-0.5 block">{item.tanggal}</span>
                            {item.sla && <span className="inline-flex items-center gap-1 mt-1 text-[11px] font-semibold text-error"><span className="material-symbols-outlined text-[13px]">hourglass_top</span> {item.sla}</span>}
                          </td>
                          <td className="py-space-md px-space-md align-top">
                            <div className="font-title-md text-sm font-semibold text-on-surface">{item.nama_pelapor}</div>
                            <div className="text-xs text-on-surface-variant flex items-center gap-1 mt-1"><span className="material-symbols-outlined text-xs text-outline">location_on</span><span>{item.lokasi}</span></div>
                            <span className={`text-[11px] ${item.nik_error ? 'text-error font-medium' : 'text-outline'} block`}>{item.nik_status}</span>
                          </td>
                          <td className="py-space-md px-space-md align-top max-w-xs">
                            <span className={`px-2 py-0.5 rounded-md ${item.kategori_bg} ${item.kategori_color} font-label-sm text-[11px] font-semibold`}>{item.kategori}</span>
                            <p className="font-body-sm text-body-sm text-on-surface mt-1.5 leading-snug">{item.ringkasan}</p>
                          </td>
                          <td className="py-space-md px-space-md align-top">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface"><span className={`material-symbols-outlined text-sm ${item.instansi_color}`}>{item.instansi_icon}</span><span>{item.instansi}</span></div>
                            <span className="text-xs text-on-surface-variant block mt-1">{item.koordinator}</span>
                          </td>
                          <td className="py-space-md px-space-md align-top">
                            {item.lampiran ? (
                              <button className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-container-high hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors text-xs font-medium" onClick={() => { setLampiranData({ nama: item.lampiran, deskripsi: item.lampiran_desc, src: '' }); toggleModal('lampiran'); }}>
                                <span className="material-symbols-outlined text-sm">image</span><span>{item.lampiran}</span>
                              </button>
                            ) : (
                              <span className="text-xs text-outline font-label-sm">Tidak ada berkas</span>
                            )}
                          </td>
                          <td className="py-space-md px-space-md align-top text-center">
                            {item.rating ? (
                              <div className="inline-flex flex-col items-center"><span className="text-tertiary font-bold text-sm tracking-wide">★★★★★</span><span className="text-[11px] font-semibold text-on-surface">{item.rating} / 5 (Sangat Puas)</span></div>
                            ) : (
                              <span className="text-outline font-label-sm text-label-sm">-</span>
                            )}
                          </td>
                          <td className="py-space-md px-space-md align-top text-center">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${item.status_bg} ${item.status_text} font-label-sm text-xs font-semibold shadow-sm`}><span className={`w-1.5 h-1.5 rounded-full ${item.status === 'baru' ? 'bg-white animate-ping' : item.status === 'diverifikasi' ? 'bg-secondary' : item.status === 'diproses' ? 'bg-tertiary animate-pulse' : item.status === 'selesai' ? 'bg-primary' : 'bg-error'}`}></span>{item.status_label}</span>
                          </td>
                          <td className="py-space-md px-space-md align-top text-right">
                            <div className="flex items-center justify-end gap-1">
                              <button className="p-1.5 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary transition-all text-on-surface" onClick={() => { setModalTiket(item.nomor_tiket); setModalPelapor(item.nama_pelapor); toggleModal('status'); }} title="Verifikasi &amp; Ubah Status"><span className="material-symbols-outlined text-lg">fact_check</span></button>
                              <button className="p-1.5 rounded-lg bg-surface-container hover:bg-tertiary hover:text-on-tertiary transition-all text-on-surface" onClick={() => toggleModal('disposisi')} title="Disposisi Instansi"><span className="material-symbols-outlined text-lg">alt_route</span></button>
                              <button className="p-1.5 rounded-lg bg-surface-container hover:bg-secondary-container hover:text-on-secondary-container transition-all text-on-surface" onClick={() => toggleModal('tanggapan')} title="Kirim Tanggapan Resmi"><span className="material-symbols-outlined text-lg">send</span></button>
                              <button className="p-1.5 rounded-lg bg-surface-container-high hover:bg-surface-dim transition-all text-on-surface" onClick={() => showToast(`Detail tiket ${item.nomor_tiket}`)} title="Detail Tiket"><span className="material-symbols-outlined text-lg">visibility</span></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                <div className="p-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm bg-surface-container-low/30 border-t border-surface-container-high/40">
                  <div className="text-body-sm font-body-sm text-on-surface-variant">Menampilkan <span className="font-bold text-on-surface">1 - {Math.min(5, filteredData.length)}</span> dari <span className="font-bold text-on-surface">{pengaduan.length}</span> pengaduan</div>
                  <div className="flex items-center gap-1">
                    <button className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-outline hover:text-on-surface transition-colors disabled:opacity-40" disabled><span className="material-symbols-outlined text-lg">chevron_left</span></button>
                    <button className="w-9 h-9 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-bold">1</button>
                    <button className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors">2</button>
                    <button className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors">3</button>
                    <span className="px-1 text-outline">...</span>
                    <button className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors">286</button>
                    <button className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-colors"><span className="material-symbols-outlined text-lg">chevron_right</span></button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
                <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-xl">category</span>
                        <h3 className="font-title-md text-title-md text-on-surface">Master Kategori Masalah</h3>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-[11px] font-bold text-on-surface">6 Aktif</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      Klasifikasi pengelompokan aduan untuk kecerdasan routing otomatis sistem LAPOR.
                    </p>
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low">
                        <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-primary" /><span className="font-title-md text-xs font-semibold text-on-surface">Infrastruktur Jalan &amp; Jembatan</span></div>
                        <span className="font-code-tracker text-code-tracker font-bold text-primary">548 tiket</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low">
                        <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-tertiary" /><span className="font-title-md text-xs font-semibold text-on-surface">Kebersihan &amp; Persampahan</span></div>
                        <span className="font-code-tracker text-code-tracker font-bold text-tertiary">312 tiket</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low">
                        <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-secondary" /><span className="font-title-md text-xs font-semibold text-on-surface">Dukcapil &amp; Kependudukan</span></div>
                        <span className="font-code-tracker text-code-tracker font-bold text-secondary">245 tiket</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low">
                        <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-primary-container" /><span className="font-title-md text-xs font-semibold text-on-surface">Penerangan Jalan Umum (PJU)</span></div>
                        <span className="font-code-tracker text-code-tracker font-bold text-on-secondary-container">164 tiket</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low">
                        <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-error" /><span className="font-title-md text-xs font-semibold text-on-surface">Kesehatan &amp; Fasilitas Puskesmas</span></div>
                        <span className="font-code-tracker text-code-tracker font-bold text-error">98 tiket</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low">
                        <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-outline" /><span className="font-title-md text-xs font-semibold text-on-surface">Bantuan Sosial &amp; Subsidi</span></div>
                        <span className="font-code-tracker text-code-tracker font-bold text-outline">61 tiket</span>
                      </div>
                    </div>
                  </div>
                  <button className="mt-space-md w-full py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold transition-colors flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-base">tune</span>
                    <span>Kelola Skema Taksonomi Master</span>
                  </button>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-xl">account_balance</span>
                        <h3 className="font-title-md text-title-md text-on-surface">Master Instansi Penanggung Jawab</h3>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-[11px] font-bold">8 OPD</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      Statistik respon tindak lanjut berdasarkan Organisasi Perangkat Daerah (OPD).
                    </p>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between font-label-sm text-label-sm mb-1">
                          <span className="text-on-surface font-semibold">Dinas Bina Marga &amp; SDA</span>
                          <span className="text-primary font-bold">96% Responsif</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden"><div className="h-full bg-primary rounded-full" style={{ width: '96%' }} /></div>
                      </div>
                      <div>
                        <div className="flex justify-between font-label-sm text-label-sm mb-1">
                          <span className="text-on-surface font-semibold">Disdukcapil</span>
                          <span className="text-secondary font-bold">92% Responsif</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden"><div className="h-full bg-secondary-container rounded-full" style={{ width: '92%' }} /></div>
                      </div>
                      <div>
                        <div className="flex justify-between font-label-sm text-label-sm mb-1">
                          <span className="text-on-surface font-semibold">Dinas Lingkungan Hidup</span>
                          <span className="text-tertiary font-bold">88% Responsif</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden"><div className="h-full bg-tertiary rounded-full" style={{ width: '88%' }} /></div>
                      </div>
                      <div>
                        <div className="flex justify-between font-label-sm text-label-sm mb-1">
                          <span className="text-on-surface font-semibold">Dinas Perhubungan</span>
                          <span className="text-primary-container font-bold">94% Responsif</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden"><div className="h-full bg-primary-container rounded-full" style={{ width: '94%' }} /></div>
                      </div>
                      <div>
                        <div className="flex justify-between font-label-sm text-label-sm mb-1">
                          <span className="text-on-surface font-semibold">Dinas Kesehatan &amp; Puskesmas</span>
                          <span className="text-outline font-bold">79% (Evaluasi)</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden"><div className="h-full bg-error-container rounded-full" style={{ width: '79%' }} /></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-space-md p-2.5 rounded-xl bg-surface-container-high/60 flex items-center justify-between text-xs text-on-surface-variant">
                    <span>Rata-rata waktu tindak lanjut:</span>
                    <span className="font-bold text-primary">18.4 Jam / Tiket</span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-xl">verified_user</span>
                        <h3 className="font-title-md text-title-md text-on-surface">Validasi Fisik Lapangan</h3>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-primary font-label-sm text-[11px] font-bold">Foto Geotagged</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      Dokumentasi sebelum dan sesudah intervensi fisik dinas teknis wilayah.
                    </p>
                    <div className="grid grid-cols-2 gap-space-sm">
                      <div className="space-y-1">
                        <div className="relative rounded-xl overflow-hidden h-28 bg-surface-container">
                          <img className="w-full h-full object-cover" data-alt="Road damage before repair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF5PfT52Adq4M13-mgrz8MXr1xjoSz_wx9Do9dIXDqrj0eROKUbEbUDBy4VBG3d_CP_T6cx6-UjIFYVUEcwPJa5q3A1QGnDIMtime6dRwWEXVSoCjD8jCDqcyARntIWPVCf_EeR7QNMtUce5d5VEm8WIZM_3IAvhwqu7FvXVyi_WsA_LYXTy4DGiUSPan0U87kV2w5gMlbQRYnSpQgL6Eg0t-CTm-z2nkeFYg8klp-FmKe6-zBV2h7" />
                          <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded bg-error text-white font-label-sm text-[10px] font-bold">SEBELUM</span>
                        </div>
                        <span className="text-[11px] text-on-surface-variant block truncate">TKT-2025-0899 (PJU Rusak)</span>
                      </div>
                      <div className="space-y-1">
                        <div className="relative rounded-xl overflow-hidden h-28 bg-surface-container">
                          <img className="w-full h-full object-cover" data-alt="Road after repair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY19z24-koycqrXsHiP0p1ITPcASRBpFCOJqLLdmEu5lmRJk2vIcl6STdV0LVl6i4UC9aRJsTdZOoqpAZNlI57_XECISeYMZAzXHdiE6ywsTEiIannYOFUY0idCNXRgFX9lGvkNqlkJUIn9MnbnZvu4GW2gVL76RZCU4lOUwmMRbElOCRstTYLwPVqsRJROIFvgkjF1yb6axaDPpQpGLwiko6QSq8Vu6-pvdfiVTOmz9rV1LcsCopu" />
                          <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded bg-primary text-white font-label-sm text-[10px] font-bold">SESUDAH</span>
                        </div>
                        <span className="text-[11px] text-on-surface-variant block truncate">BA-091/PJU/2025 Selesai</span>
                      </div>
                    </div>
                    <div className="mt-space-md p-3 rounded-xl bg-surface-container-low flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5">verified</span>
                      <div>
                        <span className="font-label-sm text-xs font-bold text-on-surface block">Validasi Berita Acara Digital</span>
                        <span className="text-[11px] text-on-surface-variant leading-tight block">Setiap penyelesaian wajib menyertakan stempel waktu GPS dan tanda tangan kepala seksi dinas bersangkutan.</span>
                      </div>
                    </div>
                  </div>
                  <button className="mt-space-md w-full py-2 rounded-xl bg-primary text-on-primary font-label-sm text-label-sm font-semibold transition-colors flex items-center justify-center gap-1 shadow-sm hover:bg-secondary" onClick={() => { setLampiranData({ nama: 'foto_jalan_amblas.jpg', deskripsi: 'Preview Audit Visual', src: '' }); toggleModal('lampiran'); }}>
                    <span className="material-symbols-outlined text-base">gallery_thumbnail</span>
                    <span>Buka Galeri Bukti Lapangan</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    {openModals.tambah && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-background/45 backdrop-blur-sm transition-opacity" id="modalTambah" style={{ display: openModals.tambah ? 'flex' : 'none' }}>
        <div className="bg-surface-container-lowest rounded-3xl max-w-2xl w-full p-space-lg shadow-2xl relative overflow-hidden max-h-[921px] overflow-y-auto">
          <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Input Data Pengaduan Warga Baru</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Layanan pengaduan luring</p>
            </div>
            <button className="p-2 rounded-full hover:bg-surface-container-high text-on-surface-variant" onClick={() => toggleModal('tambah')}>
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
          <form className="mt-space-md space-y-space-md" onSubmit={(e) => { e.preventDefault(); toggleModal('tambah'); showToast('Aduan baru berhasil didaftarkan!', 'add_task'); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface mb-1">Nomor Tiket (Generated)</label>
                <input className="w-full h-11 px-3 bg-surface-container rounded-xl font-code-tracker text-code-tracker text-primary font-bold cursor-not-allowed" readOnly type="text" value="TKT-2025-0913" />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface mb-1">Nama Lengkap Pelapor *</label>
                <input className="w-full h-11 px-3 bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Contoh: Joko Susilo" required type="text" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface mb-1">Kategori Layanan *</label>
                <select className="w-full h-11 px-3 bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer" required>
                  <option value="">Pilih Kategori Bidang</option>
                  {kategoriList.map((k) => <option key={k} value={k}>{k}</option>)}
                </select>
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface mb-1">Instansi Penanggung Jawab *</label>
                <select className="w-full h-11 px-3 bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer" required>
                  <option value="">Disposisi Otomatis ke OPD</option>
                  {instansiList.map((i) => <option key={i} value={i}>{i}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface mb-1">Lokasi Spesifik Kejadian *</label>
              <input className="w-full h-11 px-3 bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Contoh: Jl. Diponegoro RT 03/05 Depan Puskesmas Pembantu" required type="text" />
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface mb-1">Isi Laporan / Kronologi Aduan *</label>
              <textarea className="w-full p-3 bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tuliskan uraian jelas terkait masalah yang dilaporkan..." required rows="3" />
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface mb-1">Unggah Lampiran Bukti Foto/Dokumen</label>
              <div className="p-4 rounded-xl bg-surface-container-low border-2 border-dashed border-secondary-container text-center cursor-pointer hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-3xl text-primary">cloud_upload</span>
                <p className="font-body-sm text-body-sm text-on-surface mt-1">Klik untuk pilih berkas foto bukti lapangan</p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-space-sm pt-space-sm">
              <button className="px-space-md py-2.5 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" onClick={() => toggleModal('tambah')} type="button">Batal</button>
              <button className="px-space-md py-2.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-bold hover:bg-secondary transition-all shadow-md" type="submit">Daftarkan Aduan Sekarang</button>
            </div>
          </form>
        </div>
      </div>
    )}
    <div className={`fixed bottom-6 right-6 z-50 ${toast.show ? '' : 'hidden'} transform transition-all duration-300`} id="toastNotification">
      <div className="bg-on-background text-inverse-on-surface px-space-md py-3 rounded-2xl shadow-2xl flex items-center gap-space-sm font-label-md text-label-md">
        <span className="material-symbols-outlined text-tertiary-fixed-dim">{toast.icon}</span>
        <span id="toastMessage">{toast.message}</span>
      </div>
    {openModals.status && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-background/45 backdrop-blur-sm transition-opacity" id="modalStatus" style={{ display: openModals.status ? 'flex' : 'none' }}>
        <div className="bg-surface-container-lowest rounded-3xl max-w-lg w-full p-space-lg shadow-2xl relative">
          <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high">
            <div>
              <h3 className="font-title-md text-title-md text-on-surface">Ubah &amp; Verifikasi Status Aduan</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Tiket: {modalTiket}</p>
            </div>
            <button className="p-2 rounded-full hover:bg-surface-container-high text-on-surface-variant" onClick={() => toggleModal('status')}>
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
          <div className="mt-space-md space-y-space-md">
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface mb-2">Pilih Status Baru:</label>
              <div className="grid grid-cols-2 gap-2">
                {['baru', 'diverifikasi', 'diproses', 'selesai', 'ditolak'].map((st) => (
                  <label key={st} className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container">
                    <input className="text-primary focus:ring-primary" name="newStatus" type="radio" value={st} defaultChecked={st === 'diverifikasi'} />
                    <span className={`font-label-sm text-label-sm text-on-surface font-semibold ${st === 'ditolak' ? 'text-error' : ''}`}>{st === 'ditolak' ? 'Ditolak / Laporan Tidak Valid' : st.charAt(0).toUpperCase() + st.slice(1)}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface mb-1">Catatan Verifikator Utama</label>
              <textarea className="w-full p-3 bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Masukkan alasan validasi..." rows="3" />
            </div>
            <div className="flex items-center justify-end gap-space-sm pt-space-xs">
              <button className="px-space-md py-2 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" onClick={() => toggleModal('status')}>Batal</button>
              <button className="px-space-md py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-bold hover:bg-secondary transition-all" onClick={() => { toggleModal('status'); showToast('Status pengaduan berhasil diperbarui.'); }}>Perbarui Status</button>
            </div>
          </div>
        </div>
      </div>
    )}
    {openModals.disposisi && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-background/45 backdrop-blur-sm transition-opacity" id="modalDisposisi" style={{ display: openModals.disposisi ? 'flex' : 'none' }}>
        <div className="bg-surface-container-lowest rounded-3xl max-w-lg w-full p-space-lg shadow-2xl relative">
          <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high">
            <div>
              <h3 className="font-title-md text-title-md text-on-surface">Surat Disposisi Instansi Teknis</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Tiket: {modalTiket}</p>
            </div>
            <button className="p-2 rounded-full hover:bg-surface-container-high text-on-surface-variant" onClick={() => toggleModal('disposisi')}>
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
          <div className="mt-space-md space-y-space-md">
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface mb-1">Alihkan / Tugaskan ke OPD:</label>
              <select className="w-full h-11 px-3 bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                {instansiList.map((i) => <option key={i} value={i}>{i}</option>)}
                <option value="Satuan Polisi Pamong Praja">Satuan Polisi Pamong Praja (Satpol PP)</option>
              </select>
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface mb-1">Tingkat Urgensi Disposisi</label>
              <div className="flex items-center gap-space-sm">
                <label className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer"><input name="urgensi" type="radio" value="normal" defaultChecked /> Normal (3 Hari)</label>
                <label className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer text-primary"><input name="urgensi" type="radio" value="segera" /> Prioritas (24 Jam)</label>
                <label className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer text-error"><input name="urgensi" type="radio" value="darurat" /> Kritis (6 Jam)</label>
              </div>
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface mb-1">Instruksi Pimpinan / Arahan Penanganan</label>
              <textarea className="w-full p-3 bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tuliskan instruksi penanganan teknis..." rows="3">Segera terjunkan tim teknis ke lokasi.</textarea>
            </div>
            <div className="flex items-center justify-end gap-space-sm pt-space-xs">
              <button className="px-space-md py-2 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" onClick={() => toggleModal('disposisi')}>Tutup</button>
              <button className="px-space-md py-2 rounded-xl bg-tertiary text-on-tertiary font-label-md text-label-md font-bold hover:bg-tertiary-container transition-all" onClick={() => { toggleModal('disposisi'); showToast('Nota disposisi resmi berhasil diteruskan ke OPD.'); }}>Kirim Nota Disposisi</button>
            </div>
          </div>
        </div>
      </div>
    )}
    {openModals.tanggapan && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-background/45 backdrop-blur-sm transition-opacity" id="modalTanggapan" style={{ display: openModals.tanggapan ? 'flex' : 'none' }}>
        <div className="bg-surface-container-lowest rounded-3xl max-w-lg w-full p-space-lg shadow-2xl relative">
          <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high">
            <div>
              <h3 className="font-title-md text-title-md text-on-surface">Kirim Tanggapan Resmi ke Warga</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Penerima: {modalPelapor}</p>
            </div>
            <button className="p-2 rounded-full hover:bg-surface-container-high text-on-surface-variant" onClick={() => toggleModal('tanggapan')}>
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
          <div className="mt-space-md space-y-space-md">
            <div className="flex items-center gap-space-sm p-3 rounded-xl bg-surface-container-low text-xs">
              <span className="material-symbols-outlined text-primary text-base">notifications_active</span>
              <span>Pesan akan terkirim melalui WhatsApp Gateway LAPOR-DAERAH dan Email Pelapor.</span>
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface mb-1">Templat Balasan Standar:</label>
              <select className="w-full h-10 px-3 bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                <option value="1">Template 1: Aduan Diterima &amp; Sedang Ditinjau Tim Lapangan</option>
                <option value="2">Template 2: Disposisi Penugasan Dinas Terkait</option>
                <option value="3">Template 3: Tindak Lanjut Selesai &amp; Berita Acara</option>
                <option value="4">Template 4: Klarifikasi / Dokumen Bukti Tidak Memadai</option>
              </select>
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface mb-1">Teks Pesan Resmi</label>
              <textarea className="w-full p-3 bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary" id="teksTanggapan" rows="4">Yth. Bapak/Ibu Pelapor, laporan Anda telah diverifikasi dan sedang ditindaklanjuti oleh instansi terkait.</textarea>
            </div>
            <div className="flex items-center justify-end gap-space-sm pt-space-xs">
              <button className="px-space-md py-2 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" onClick={() => toggleModal('tanggapan')}>Batal</button>
              <button className="px-space-md py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-bold hover:bg-secondary transition-all shadow-sm flex items-center gap-1" onClick={() => { toggleModal('tanggapan'); showToast('Tanggapan resmi berhasil terkirim.', 'send'); }}>
                <span className="material-symbols-outlined text-base">send</span>
                <span>Kirim Notifikasi Sekarang</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
    {openModals.ekspor && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-background/45 backdrop-blur-sm transition-opacity" id="modalEkspor" style={{ display: openModals.ekspor ? 'flex' : 'none' }}>
        <div className="bg-surface-container-lowest rounded-3xl max-w-md w-full p-space-lg shadow-2xl relative">
          <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high">
            <div>
              <h3 className="font-title-md text-title-md text-on-surface">Ekspor Rekapitulasi Eksekutif</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Laporan berkala untuk evaluasi Bupati / Walikota</p>
            </div>
            <button className="p-2 rounded-full hover:bg-surface-container-high text-on-surface-variant" onClick={() => toggleModal('ekspor')}>
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
          <div className="mt-space-md space-y-space-md">
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface mb-1">Periode Evaluasi:</label>
              <select className="w-full h-11 px-3 bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                <option>Bulan Berjalan (Februari 2025)</option>
                <option>Triwulan I - 2025</option>
                <option>Semester II - 2024</option>
                <option>Laporan Tahunan Penuh (2024)</option>
              </select>
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface mb-1">Format Dokumen:</label>
              <div className="grid grid-cols-2 gap-space-sm">
                <label className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container">
                  <input name="formatEkspor" type="radio" value="excel" defaultChecked />
                  <div>
                    <span className="font-label-sm text-xs font-bold block text-on-surface">Microsoft Excel</span>
                    <span className="text-[10px] text-on-surface-variant">Data tabular mentah (.xlsx)</span>
                  </div>
                </label>
                <label className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container">
                  <input name="formatEkspor" type="radio" value="pdf" />
                  <div>
                    <span className="font-label-sm text-xs font-bold block text-on-surface">Dokumen PDF</span>
                    <span className="text-[10px] text-on-surface-variant">Format infografis pimpinan (.pdf)</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="flex items-center justify-end gap-space-sm pt-space-xs">
              <button className="px-space-md py-2 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" onClick={() => toggleModal('ekspor')}>Batal</button>
              <button className="px-space-md py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-bold hover:bg-secondary transition-all flex items-center gap-1" onClick={() => { toggleModal('ekspor'); showToast('Laporan rekapitulasi eksekutif sedang diunduh...', 'file_download'); }}>
                <span className="material-symbols-outlined text-base">download</span>
                <span>Unduh Berkas</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
    {openModals.lampiran && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-background/60 backdrop-blur-sm transition-opacity" id="modalLampiran" style={{ display: openModals.lampiran ? 'flex' : 'none' }}>
        <div className="bg-surface-container-lowest rounded-3xl max-w-xl w-full p-space-md shadow-2xl relative">
          <div className="flex items-center justify-between pb-2 border-b border-surface-container-high">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">attachment</span>
              <span className="font-title-md text-sm font-bold text-on-surface">{lampiranData.nama}</span>
            </div>
            <button className="p-1 rounded-full hover:bg-surface-container-high text-on-surface-variant" onClick={() => toggleModal('lampiran')}>
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>
          <div className="my-space-md rounded-2xl overflow-hidden bg-surface-container flex items-center justify-center min-h-[260px]">
            <img className="w-full max-h-80 object-cover" id="modalLampiranGambar" src={lampiranData.src || 'https://lh3.googleusercontent.com/aida-public/placeholder'} alt="Lampiran bukti" />
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">{lampiranData.deskripsi}</p>
          <div className="mt-space-md flex justify-end">
            <button className="px-space-md py-1.5 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md" onClick={() => toggleModal('lampiran')}>Tutup</button>
          </div>
        </div>
      </div>
    )}
  </div>
  </div>
  );
}