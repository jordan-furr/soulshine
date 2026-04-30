import type { Metadata } from "next";
import "../globals.css";
import "../styles/pages.css"
import "../styles/components.css"
import "../styles/animations.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export const metadata: Metadata = {
  title: "Soulshine Sarah",
  description: "Soulshine Sarah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="navbar-spacer" aria-hidden="true" />
      <main id="main-content">
        {children}
      </main>
      <Footer />
    </>
  );
}
