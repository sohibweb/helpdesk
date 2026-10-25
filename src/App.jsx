import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicPage from './components/PublicPage.jsx';
import ManajemenPengaduan from './ManajemenPengaduan.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route path="/manajemen-pengaduan" element={<ManajemenPengaduan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
