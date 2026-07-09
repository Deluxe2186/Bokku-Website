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
            bokku<span className={styles.brandBang}>!</span><span className={styles.brandMart}>Mart</span>
          </span>
          <p className={styles.blurb}>
            Nigeria's hard-discount grocery store. High-quality essentials, everyday low prices.
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
          <h4 className={styles.heading}>Shop</h4>
          <ul className={styles.linkList}>
            <li><Link href="/">Fresh Produce</Link></li>
            <li><Link href="/">Bokku Bakery</Link></li>
            <li><Link href="/">Household</Link></li>
            <li><Link href="/">Health & Beauty</Link></li>
          </ul>
        </div>

        {/* Support links */}
        <div>
          <h4 className={styles.heading}>Support</h4>
          <ul className={styles.linkList}>
            <li><Link href="/track">Track Your Order</Link></li>
            <li><Link href="/help">Help & Contact</Link></li>
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
        &copy; {new Date().getFullYear()} bokku! Mart. All rights reserved.
      </div>
    </footer>
  );
}
