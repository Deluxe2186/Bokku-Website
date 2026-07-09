"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaBars, FaTimes, FaSearch, FaRegUser, FaRegHeart, FaShoppingBasket } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { itemCount } = useCart();
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchTerm.trim())}`);
      setIsOpen(false);
    }
  };

  return (
    <nav className={styles.nav}>

      {/* LAYER 1: TOP ANNOUNCEMENT BAR */}
      <div className={styles.announcementBar}>
        <div>Get Up to 70% Discount Everyday on Household Essentials!</div>
        <div className={styles.announcementLinks}>
          <Link href="/work-with-us">Work With Us</Link>
          <Link href="/locations">Locations</Link>
        </div>
      </div>

      {/* LAYER 2: MAIN BRAND & SEARCH ROW */}
      <div className={styles.mainRow}>
        {/* Brand Logo */}
        <Link href="/" className={styles.brand}>
          bokku<span className={styles.brandBang}>!</span><span className={styles.brandMart}>Mart</span>
        </Link>

        {/* E-Commerce Search Bar (Desktop) */}
        <form className={styles.searchBar} onSubmit={handleSearch}>
          <select className={styles.searchSelect}>
            <option>All Categories</option>
            <option>Bakery</option>
            <option>Fresh Produce</option>
            <option>Household</option>
            <option>Health & Beauty</option>
          </select>
          <input
            type="text"
            placeholder="Search by Title, Brand, Categories..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className={styles.searchButton}>
            <FaSearch />
          </button>
        </form>

        {/* Action Icons Panel */}
        <div className={styles.actions}>
          {user ? (
            <button
              className={styles.actionIcon}
              onClick={logout}
              title={`Signed in as ${user.name} — click to sign out`}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <FaRegUser size={20} />
            </button>
          ) : (
            <Link href="/login" className={styles.actionIcon} title="Sign In">
              <FaRegUser size={20} />
            </Link>
          )}
          <span className={styles.actionIcon} title="Wishlist (coming soon)">
            <FaRegHeart size={20} />
            <span className={styles.badgeOrange}>0</span>
          </span>
          <Link href="/cart" className={styles.actionIcon}>
            <FaShoppingBasket size={22} />
            <span className={styles.badgeBlue}>{itemCount}</span>
          </Link>

          {/* Mobile Menu Open Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className={styles.menuToggle}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* LAYER 3: SUB-NAVIGATION BAR (Desktop) */}
      <div className={styles.subNav}>
        <div className={styles.subNavInner}>
          <Link href="/shop" className={styles.subNavAll}>☰ All Categories</Link>
          <Link href="/shop?category=fresh-produce">Fresh Produce</Link>
          <Link href="/shop?category=bakery">Bokku Bakery</Link>
          <Link href="/shop?category=household">Household</Link>
          <Link href="/shop?category=health-beauty">Health & Beauty</Link>
          <Link href="/deals">Deals</Link>
          <Link href="/about">About Us</Link>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className={styles.mobileDrawer}>
          <form className={styles.mobileSearch} onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit"><FaSearch size={14} /></button>
          </form>
          <Link href="/" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/shop?category=fresh-produce" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Fresh Produce</Link>
          <Link href="/shop?category=bakery" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Bokku Bakery</Link>
          <Link href="/shop?category=household" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Household</Link>
          <Link href="/shop?category=health-beauty" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Health & Beauty</Link>
          <Link href="/deals" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Deals</Link>
          <Link href="/locations" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Locations</Link>
          <Link href="/about" className={styles.mobileLink} onClick={() => setIsOpen(false)}>About Us</Link>
        </div>
      )}
    </nav>
  );
}
