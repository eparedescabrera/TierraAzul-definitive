import { Outlet } from 'react-router-dom';
import ScrollTopButton from './ScrollTopButton';
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
      <ScrollTopButton />
    </>
  );
}
