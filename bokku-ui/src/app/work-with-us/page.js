"use client";
import { useState } from "react";
import styles from "./page.module.css";

const tabs = [
  {
    id: "work",
    label: "Work With Us",
    title: "Build Your Career at bokku!",
    text: "Join a fast-growing team bringing hard-discount grocery retail to communities across Nigeria. We're always looking for driven people across store operations, logistics, and corporate roles.",
    points: [
      "Competitive pay and growth opportunities",
      "Roles across store operations, logistics, and HQ",
      "Opportunities in cities across Nigeria",
    ],
  },
  {
    id: "partner",
    label: "Partner With Us",
    title: "Become a Bokku Supplier or Partner",
    text: "We work with local and national suppliers to keep our shelves stocked with quality products at hard-discount prices. If you produce or distribute goods that fit our catalog, we'd love to hear from you.",
    points: [
      "Direct supply relationships with a growing retail chain",
      "Reliable, recurring order volumes",
      "Fast, transparent partner onboarding",
    ],
  },
];

export default function WorkWithUsPage() {
  const [activeTab, setActiveTab] = useState("work");
  const [submitted, setSubmitted] = useState(false);
  const active = tabs.find((t) => t.id === activeTab);

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE for backend integration: wire this up to a real endpoint
    // (e.g. POST /api/inquiries) once the backend is ready.
    setSubmitted(true);
  };

  return (
    <div>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Join the bokku! Family</h1>
        <p className={styles.heroText}>Whether you want to work with us or supply to us, we'd love to connect.</p>
      </div>

      <div className={styles.page}>
        <div className={styles.tabRow}>
          {tabs.map((t) => (
            <button
              key={t.id}
              className={activeTab === t.id ? `${styles.tab} ${styles.tabActive}` : styles.tab}
              onClick={() => { setActiveTab(t.id); setSubmitted(false); }}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className={styles.content}>
          <div>
            <h2 className={styles.infoTitle}>{active.title}</h2>
            <p className={styles.infoText}>{active.text}</p>
            <ul className={styles.infoList}>
              {active.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <div className={styles.formSection}>
            {submitted ? (
              <p className={styles.successNotice}>
                Thanks for reaching out! Our team will get back to you shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.field}>
                  <label htmlFor="name">Full Name</label>
                  <input id="name" type="text" required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" required />
                </div>
                {activeTab === "partner" && (
                  <div className={styles.field}>
                    <label htmlFor="company">Company Name</label>
                    <input id="company" type="text" required />
                  </div>
                )}
                <div className={styles.field}>
                  <label htmlFor="message">
                    {activeTab === "work" ? "Which role are you interested in?" : "What would you like to supply?"}
                  </label>
                  <textarea id="message" rows={4} required />
                </div>
                <button type="submit" className={styles.submitButton}>Submit</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
