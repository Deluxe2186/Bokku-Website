"use client";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import AuthForm from "../components/AuthForm";
import styles from "../components/AuthForm.module.css";

function LoginFormFields({ email, setEmail, password, setPassword }) {
  return (
    <>
      <div className={styles.field}>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className={styles.field}>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
    </>
  );
}

function LoginPageInner() {
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login({ email, password });
    if (!result.success) {
      setError(result.error);
      return;
    }
    router.push(redirectTo);
  };

  return (
    <AuthForm
      mode="login"
      error={error}
      onSubmit={handleSubmit}
      fields={<LoginFormFields email={email} setEmail={setEmail} password={password} setPassword={setPassword} />}
      switchHref={`/signup${redirectTo !== "/" ? `?redirect=${encodeURIComponent(redirectTo)}` : ""}`}
      switchLabel="Don't have an account?"
      switchLinkText="Sign up"
    />
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginPageInner />
    </Suspense>
  );
}
