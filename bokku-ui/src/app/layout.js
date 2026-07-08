import "./globals.css";
import { Space_Grotesk, Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  title: "bokku! Mart | Everyday Low Prices",
  description: "Your neighborhood hard-discount grocery store providing high quality essentials.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased bg-[#FAF8F3] text-[#1A1A1A] min-h-screen flex flex-col font-body">
        {/* Persistent Layout Infrastructure */}
        <Navbar />
        
        {/* Dynamic Page Content Injector */}
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}