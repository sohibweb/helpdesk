import Header from './Header.jsx';
import Hero from './Hero.jsx';
import TrackTicket from './TrackTicket.jsx';
import FormPengaduan from './FormPengaduan.jsx';
import DaftarPengaduan from './DaftarPengaduan.jsx';
import RatingUlasan from './RatingUlasan.jsx';
import PanduanFAQ from './PanduanFAQ.jsx';
import Footer from './Footer.jsx';

export default function PublicPage() {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface antialiased">
      <Header />
      <main className="w-full pt-20 bg-background">
        <Hero />
        <TrackTicket />
        <FormPengaduan />
        <DaftarPengaduan />
        <RatingUlasan />
        <PanduanFAQ />
      </main>
      <Footer />
    </div>
  );
}