import Link from "next/link";
import styles from "./page.module.css";

export default function CheckoutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.confirmation}>
        <h1 className={styles.confirmationTitle}>Checkout Removed</h1>
        <p className={styles.confirmationText}>bokku! products are available through our physical store locations.</p>
        <Link href="/locations" className={styles.confirmationLink}>Find a Store</Link>
      </div>
    </div>
  );
}
