"use client";
import Link from "next/link";
import styles from "./AuthForm.module.css";

export default function AuthForm({ mode, fields, error, onSubmit, switchHref, switchLabel, switchLinkText }) {
  const isSignup = mode === "signup";

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <Link href="/" className={styles.brand}>
          bokku<span className={styles.brandBang}>!</span>
        </Link>

        <h1 className={styles.title}>{isSignup ? "Create Your Account" : "Welcome Back"}</h1>
        <p className={styles.subtitle}>
          {isSignup ? "Sign up to check out faster and track your orders." : "Sign in to continue to your account."}
        </p>

        {error && <div className={styles.error}>{error}</div>}

        <form onSubmit={onSubmit}>
          {fields}
          <button type="submit" className={styles.submitButton}>
            {isSignup ? "Create Account" : "Sign In"}
          </button>
        </form>

        <p className={styles.switchText}>
          {switchLabel} <Link href={switchHref}>{switchLinkText}</Link>
        </p>
      </div>
    </div>
  );
}
