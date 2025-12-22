import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';

// Main pages
import Home from './pages/Home';

// Pembahasan pages
import PengertianSIAMendalam from './pages/pembahasan/PengertianSIAMendalam';
import TeknikDokumentasiSistem from './pages/pembahasan/TeknikDokumentasiSistem';
import RisikoSistemInformasiAkuntansi from './pages/pembahasan/RisikoSistemInformasiAkuntansi';
import AncamanSistemInformasiAkuntansi from './pages/pembahasan/AncamanSistemInformasiAkuntansi';
import AplikasiSistemInformasiAkuntansi from './pages/pembahasan/AplikasiSistemInformasiAkuntansi';
import PerananSIA from './pages/pembahasan/PerananSIA';
import ContohPenerapanSIA from './pages/pembahasan/ContohPenerapanSIA';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              
              {/* Pembahasan routes */}
              <Route path="pembahasan/pengertian-sia-mendalam" element={<PengertianSIAMendalam />} />
              <Route path="pembahasan/teknik-dokumentasi-sistem" element={<TeknikDokumentasiSistem />} />
              <Route path="pembahasan/risiko-sistem-informasi-akuntansi" element={<RisikoSistemInformasiAkuntansi />} />
              <Route path="pembahasan/ancaman-sistem-informasi-akuntansi" element={<AncamanSistemInformasiAkuntansi />} />
              <Route path="pembahasan/aplikasi-sistem-informasi-akuntansi" element={<AplikasiSistemInformasiAkuntansi />} />
              <Route path="pembahasan/peranan-sia" element={<PerananSIA />} />
              <Route path="pembahasan/contoh-penerapan-sia" element={<ContohPenerapanSIA />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;