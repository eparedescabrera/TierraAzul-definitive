import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Calidad from './pages/Calidad';
import Contacto from './pages/Contacto';
import Empresa from './pages/Empresa';
import Estrategia from './pages/Estrategia';
import Galeria from './pages/Galeria';
import Home from './pages/Home';
import Privacidad from './pages/Privacidad';
import ProductDetail from './pages/ProductDetail';
import Productos from './pages/Productos';
import ResponsabilidadSocial from './pages/ResponsabilidadSocial';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/estrategia" element={<Estrategia />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:slug" element={<ProductDetail />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/calidad" element={<Calidad />} />
          <Route path="/responsabilidad-social" element={<ResponsabilidadSocial />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/privacidad" element={<Privacidad />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
