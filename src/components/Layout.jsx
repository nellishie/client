import { Outlet } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

const Layout = () => (
  <div className="min-h-screen bg-gradient-to-b from-charcoal via-[#0B1420] to-[#070C14] text-slate-100">
    <NavBar />
    <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-10 md:py-16">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
