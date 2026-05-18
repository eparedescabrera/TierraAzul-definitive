import { Outlet } from 'react-router-dom';
import FloatingWhatsApp from './FloatingWhatsApp';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
