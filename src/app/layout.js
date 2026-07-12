import "./globals.css";
import { Space_Grotesk, Inter, Anton, Baloo_2 } from "next/font/google";
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

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
});

const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-brand",
});

export const metadata = {
  title: "bokku! | Everyday Low Prices",
  description: "Your neighborhood hard-discount grocery store with high quality essentials in-store.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${anton.variable} ${baloo2.variable}`}>
      <body suppressHydrationWarning>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
