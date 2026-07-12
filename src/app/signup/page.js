import Link from "next/link";
import styles from "../components/AuthForm.module.css";

export default function SignupPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <Link href="/" className={styles.brand}>
          bokku<span className={styles.brandBang}>!</span>
        </Link>
        <h1 className={styles.title}>Accounts Removed</h1>
        <p className={styles.subtitle}>
          bokku! is focused on in-store grocery retail, so signups are no longer part of this site.
        </p>
        <Link href="/locations" className={styles.submitButton}>Find a Store</Link>
      </div>
    </div>
  );
}
