import Link from "next/link";
import styles from "./page.module.css";

export default function CartPage() {
  return (
    <div className={styles.page}>
      <div className={styles.empty}>
        <h1 className={styles.title}>Online Ordering Is Not Available</h1>
        <p>bokku! is focused on in-store hard-discount grocery retail.</p>
        <Link href="/locations" className={styles.emptyLink}>Find a Store</Link>
      </div>
    </div>
  );
}
