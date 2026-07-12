"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>

      {/* LAYER 1: TOP ANNOUNCEMENT BAR */}
      <div className={styles.announcementBar}>
        <div>Hard-discount groceries in your community, every day.</div>
        <div className={styles.announcementLinks}>
          <Link href="/work-with-us">Work With Us</Link>
          <Link href="/locations">Locations</Link>
        </div>
      </div>

      {/* LAYER 2: MAIN BRAND & SEARCH ROW */}
      <div className={styles.mainRow}>
        {/* Brand Logo */}
        <Link href="/" className={styles.brand}>
          bokku<span className={styles.brandBang}>!</span>
        </Link>

        <div className={styles.storeMessage}>Everyday low prices, available in-store.</div>

        <div className={styles.actions}>
          <Link href="/locations" className={styles.locationButton}>
            <FaMapMarkerAlt size={14} />
            Find a Store
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className={styles.menuToggle}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* LAYER 3: SUB-NAVIGATION BAR (Desktop) */}
      <div className={styles.subNav}>
        <div className={styles.subNavInner}>
          <Link href="/" className={styles.subNavAll}>Home</Link>
          <Link href="/shop">Products</Link>
          <Link href="/deals">Low Prices</Link>
          <Link href="/locations">Locations</Link>
          <Link href="/about">About Us</Link>
          <Link href="/work-with-us">Work With Us</Link>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className={styles.mobileDrawer}>
          <Link href="/" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/shop" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Products</Link>
          <Link href="/deals" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Low Prices</Link>
          <Link href="/locations" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Locations</Link>
          <Link href="/about" className={styles.mobileLink} onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/work-with-us" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Work With Us</Link>
        </div>
      )}
    </nav>
  );
}
