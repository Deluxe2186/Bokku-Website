import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>

        {/* Brand + blurb */}
        <div>
          <span className={styles.brand}>
            bokku<span className={styles.brandBang}>!</span>
          </span>
          <p className={styles.blurb}>
            Nigeria&apos;s hard-discount grocery store. High-quality essentials, everyday low prices in store.
          </p>
          <div className={styles.social}>
            <Link href="https://instagram.com/bokkumart"><FaInstagram size={18} /></Link>
            <Link href="https://facebook.com/shopbokku"><FaFacebookF size={18} /></Link>
            <Link href="https://x.com/bokkumart"><FaTwitter size={18} /></Link>
            <Link href="https://youtube.com/@bokkumart"><FaYoutube size={18} /></Link>
          </div>
        </div>

        {/* Shop links */}
        <div>
          <h4 className={styles.heading}>Explore</h4>
          <ul className={styles.linkList}>
            <li><Link href="/shop">Products</Link></li>
            <li><Link href="/shop?category=fresh-produce">Fresh Produce</Link></li>
            <li><Link href="/shop?category=bakery">Bokku Bakery</Link></li>
            <li><Link href="/shop?category=household">Household</Link></li>
            <li><Link href="/shop?category=health-beauty">Health & Beauty</Link></li>
            <li><Link href="/deals">Low Prices</Link></li>
          </ul>
        </div>

        {/* Company links */}
        <div>
          <h4 className={styles.heading}>Company</h4>
          <ul className={styles.linkList}>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/work-with-us">Work With Us</Link></li>
            <li><Link href="/work-with-us">Partner With Us</Link></li>
            <li><Link href="/locations">Find a Store</Link></li>
          </ul>
        </div>

        {/* Store hours */}
        <div>
          <h4 className={styles.heading}>Store Hours</h4>
          <p className={styles.hours}>Mon – Sun</p>
          <p className={styles.hours}>9:00 AM – 9:00 PM</p>
        </div>
      </div>

      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} bokku!. All rights reserved.
      </div>
    </footer>
  );
}
