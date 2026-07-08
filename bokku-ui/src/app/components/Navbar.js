"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaSearch, FaRegUser, FaRegHeart, FaShoppingBasket } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      
      {/* LAYER 1: TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#001DDD] text-white text-xs py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center hidden sm:flex">
        <div>Get Up to 70% Discount Everyday on Household Essentials!</div>
        <div className="flex gap-6">
          <Link href="/track" className="hover:underline">Track Your Order</Link>
          <Link href="/help" className="hover:underline">Help & Contact</Link>
        </div>
      </div>

      {/* LAYER 2: MAIN BRAND & SEARCH ROW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center gap-4">
        {/* Brand Logo */}
        <Link href="/" className="text-2xl font-black text-[#001DDD] tracking-tight flex-shrink-0">
          bokku<span className="text-orange-500">!</span><span className="text-gray-400 font-normal text-lg">Mart</span>
        </Link>

        {/* E-Commerce Search Bar (Desktop) */}
        <div className="hidden md:flex flex-grow max-w-2xl border border-gray-300 rounded-lg overflow-hidden focus-within:border-[#001DDD] transition">
          <select className="bg-gray-50 border-r border-gray-200 text-sm text-gray-600 px-3 outline-none">
            <option>All Categories</option>
            <option>Bokku Bread</option>
            <option>Groceries</option>
            <option>Household</option>
          </select>
          <input 
            type="text" 
            placeholder="Search by Title, Brand, Categories..." 
            className="w-full px-4 py-2 text-sm outline-none text-gray-700"
          />
          <button className="bg-[#001DDD] hover:bg-blue-700 text-white px-6 transition flex items-center justify-center">
            <FaSearch />
          </button>
        </div>

        {/* Action Icons Panel */}
        <div className="flex items-center gap-5 text-gray-600">
          <Link href="/account" className="hover:text-[#001DDD] transition"><FaRegUser size={20} /></Link>
          <Link href="/wishlist" className="hover:text-[#001DDD] transition relative">
            <FaRegHeart size={20} />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </Link>
          <Link href="/cart" className="hover:text-[#001DDD] transition relative flex items-center">
            <FaShoppingBasket size={22} />
            <span className="absolute -top-2 -right-2 bg-[#001DDD] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
          </Link>
          
          {/* Mobile Menu Open Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600 focus:outline-none">
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* LAYER 3: SUB-NAVIGATION BAR (Desktop) */}
      <div className="border-t border-gray-100 hidden md:block bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex gap-8 text-sm font-medium text-gray-600">
          <Link href="/categories" className="text-[#001DDD] font-bold flex items-center gap-1">☰ All Categories</Link>
          <Link href="/" className="hover:text-[#001DDD]">Fresh Vegetables</Link>
          <Link href="/" className="hover:text-[#001DDD]">Bokku Bakery</Link>
          <Link href="/" className="hover:text-[#001DDD]">Diet Essentials</Link>
          <Link href="/" className="hover:text-[#001DDD]">Household Utilities</Link>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 font-medium shadow-inner">
          <div className="flex border border-gray-200 rounded-md overflow-hidden mb-4">
            <input type="text" placeholder="Search..." className="w-full px-3 py-1.5 text-sm outline-none" />
            <button className="bg-[#001DDD] text-white px-4"><FaSearch size={14} /></button>
          </div>
          <Link href="/" className="block text-gray-700 py-1 border-b border-gray-50">Home</Link>
          <Link href="/products" className="block text-gray-700 py-1 border-b border-gray-50">Bakery</Link>
          <Link href="/locations" className="block text-gray-700 py-1 border-b border-gray-50">Groceries</Link>
        </div>
      )}
    </nav>
  );
}