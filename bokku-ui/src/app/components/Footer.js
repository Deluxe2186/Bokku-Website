import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">

        {/* Brand + blurb */}
        <div>
          <span className="font-display text-xl font-bold text-[#001DDD] tracking-tight">
            bokku<span className="text-orange-500">!</span><span className="text-gray-400 font-medium text-base">Mart</span>
          </span>
          <p className="text-gray-500 mt-3 leading-relaxed">
            Nigeria's hard-discount grocery store. High-quality essentials, everyday low prices.
          </p>
          <div className="flex gap-4 mt-4 text-gray-400">
            <Link href="https://instagram.com/bokkumart" className="hover:text-[#001DDD] transition"><FaInstagram size={18} /></Link>
            <Link href="https://facebook.com/shopbokku" className="hover:text-[#001DDD] transition"><FaFacebookF size={18} /></Link>
            <Link href="https://x.com/bokkumart" className="hover:text-[#001DDD] transition"><FaTwitter size={18} /></Link>
            <Link href="https://youtube.com/@bokkumart" className="hover:text-[#001DDD] transition"><FaYoutube size={18} /></Link>
          </div>
        </div>

        {/* Shop links */}
        <div>
          <h4 className="font-display font-semibold text-gray-800 mb-3">Shop</h4>
          <ul className="space-y-2 text-gray-500">
            <li><Link href="/" className="hover:text-[#001DDD] transition">Fresh Produce</Link></li>
            <li><Link href="/" className="hover:text-[#001DDD] transition">Bokku Bakery</Link></li>
            <li><Link href="/" className="hover:text-[#001DDD] transition">Household</Link></li>
            <li><Link href="/" className="hover:text-[#001DDD] transition">Health & Beauty</Link></li>
          </ul>
        </div>

        {/* Support links */}
        <div>
          <h4 className="font-display font-semibold text-gray-800 mb-3">Support</h4>
          <ul className="space-y-2 text-gray-500">
            <li><Link href="/track" className="hover:text-[#001DDD] transition">Track Your Order</Link></li>
            <li><Link href="/help" className="hover:text-[#001DDD] transition">Help & Contact</Link></li>
            <li><Link href="/locations" className="hover:text-[#001DDD] transition">Find a Store</Link></li>
          </ul>
        </div>

        {/* Store hours */}
        <div>
          <h4 className="font-display font-semibold text-gray-800 mb-3">Store Hours</h4>
          <p className="text-gray-500">Mon – Sun</p>
          <p className="text-gray-500">9:00 AM – 9:00 PM</p>
        </div>
      </div>

      <div className="border-t border-gray-100 py-5 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} bokku! Mart. All rights reserved.
      </div>
    </footer>
  );
}