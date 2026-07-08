import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "bokku! Mart | Everyday Low Prices",
  description: "Your neighborhood hard-discount grocery store providing high quality essentials.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900 min-h-screen flex flex-col">
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