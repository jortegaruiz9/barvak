import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import WhatsAppButton from "@/components/display/whatsAppButton";
const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Barvak Estate",
  description: "Welcome to Hacienda Barvak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.variable} antialiased`}>
        <header>
          <Navbar />
        </header>
        <main className="relative pt-16 mb-12">
          {children}
          <WhatsAppButton />
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
