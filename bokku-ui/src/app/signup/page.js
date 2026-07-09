"use client";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import AuthForm from "../components/AuthForm";
import styles from "../components/AuthForm.module.css";

function SignupFormFields({ name, setName, email, setEmail, password, setPassword }) {
  return (
    <>
      <div className={styles.field}>
        <label htmlFor="name">Full Name</label>
        <input id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className={styles.field}>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className={styles.field}>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
    </>
  );
}

function SignupPageInner() {
  const { signup } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = signup({ name, email, password });
    if (!result.success) {
      setError(result.error);
      return;
    }
    router.push(redirectTo);
  };

  return (
    <AuthForm
      mode="signup"
      error={error}
      onSubmit={handleSubmit}
      fields={
        <SignupFormFields
          name={name} setName={setName}
          email={email} setEmail={setEmail}
          password={password} setPassword={setPassword}
        />
      }
      switchHref={`/login${redirectTo !== "/" ? `?redirect=${encodeURIComponent(redirectTo)}` : ""}`}
      switchLabel="Already have an account?"
      switchLinkText="Sign in"
    />
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={null}>
      <SignupPageInner />
    </Suspense>
  );
}
