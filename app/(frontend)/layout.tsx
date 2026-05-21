import Navbar from '../components/Navbar';
import FooterWrapper from '../components/Footerwrapper';
import ScrollToTop from '../components/Scrolltotop';
import '../styles/navbar.css';
import '../styles/homepage.css';
import '../styles/services.css';
import '../styles/about.css';
 
export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="navbar-spacer" />
      <main>{children}</main>
      <FooterWrapper />
    </>
  );
}