import Navbar from '../components/Navbar';
import FooterWrapper from '../components/Footerwrapper';
import ScrollToTop from '../components/Scrolltotop';
import ScrollReveal from '../components/Scrollreveal';
import '../styles/navbar.css';
import '../styles/homepage.css';
import '../styles/services.css';
import '../styles/about.css';
import '../styles/animations.css';
 
export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <ScrollReveal />
      <ScrollToTop />
      <Navbar />
      <div className="navbar-spacer" />
      <main>{children}</main>
      <FooterWrapper />
    </>
  );
}