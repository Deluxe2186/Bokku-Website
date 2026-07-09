"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaSearch, FaRegUser, FaRegHeart, FaShoppingBasket } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <nav className={styles.nav}>

      {/* LAYER 1: TOP ANNOUNCEMENT BAR */}
      <div className={styles.announcementBar}>
        <div>Get Up to 70% Discount Everyday on Household Essentials!</div>
        <div className={styles.announcementLinks}>
          <Link href="/track">Track Your Order</Link>
          <Link href="/help">Help & Contact</Link>
        </div>
      </div>

      {/* LAYER 2: MAIN BRAND & SEARCH ROW */}
      <div className={styles.mainRow}>
        {/* Brand Logo */}
        <Link href="/" className={styles.brand}>
          bokku<span className={styles.brandBang}>!</span><span className={styles.brandMart}>Mart</span>
        </Link>

        {/* E-Commerce Search Bar (Desktop) */}
        <div className={styles.searchBar}>
          <select className={styles.searchSelect}>
            <option>All Categories</option>
            <option>Bokku Bread</option>
            <option>Groceries</option>
            <option>Household</option>
          </select>
          <input
            type="text"
            placeholder="Search by Title, Brand, Categories..."
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <FaSearch />
          </button>
        </div>

        {/* Action Icons Panel */}
        <div className={styles.actions}>
          <Link href="/account" className={styles.actionIcon}><FaRegUser size={20} /></Link>
          <Link href="/wishlist" className={styles.actionIcon}>
            <FaRegHeart size={20} />
            <span className={styles.badgeOrange}>0</span>
          </Link>
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
          <Link href="/categories" className={styles.subNavAll}>☰ All Categories</Link>
          <Link href="/">Fresh Produce</Link>
          <Link href="/">Bokku Bakery</Link>
          <Link href="/">Household</Link>
          <Link href="/">Health & Beauty</Link>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileSearch}>
            <input type="text" placeholder="Search..." />
            <button><FaSearch size={14} /></button>
          </div>
          <Link href="/" className={styles.mobileLink}>Home</Link>
          <Link href="/" className={styles.mobileLink}>Fresh Produce</Link>
          <Link href="/" className={styles.mobileLink}>Bokku Bakery</Link>
          <Link href="/" className={styles.mobileLink}>Household</Link>
          <Link href="/" className={styles.mobileLink}>Health & Beauty</Link>
        </div>
      )}
    </nav>
  );
}
