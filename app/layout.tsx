import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { LocaleProvider } from '@/lib/i18n/LocaleContext';


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
    <html lang="en">
      <body>
        <LocaleProvider>
          <Header />
          {children}
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
