import styles from "./page.module.css";

export const metadata = {
  title: "About Us | bokku! Mart",
  description: "Learn about bokku! Mart, Nigeria's hard-discount grocery store.",
};

const values = [
  {
    title: "Everyday Low Prices",
    text: "We don't run temporary sales, our low prices are the standard, every single day.",
  },
  {
    title: "Quality First",
    text: "Lower prices never mean lower quality. Every product on our shelves meets the same standard.",
  },
  {
    title: "Community Focused",
    text: "Our stores are built inside the communities we serve, close to home, close to you.",
  },
];

const stats = [
  { number: "25+", label: "Stores Nationwide" },
  { number: "80%", label: "Of Household Needs Covered" },
  { number: "1M+", label: "Customers Served" },
  { number: "2020", label: "Founded" },
];

export default function AboutPage() {
  return (
    <div>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>About bokku! Mart</h1>
        <p className={styles.heroText}>
          Nigeria&apos;s hard-discount grocery store, bringing everyday essentials to families without the premium price tag.
        </p>
      </div>

      <div className={styles.page}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Story</h2>
          <p className={styles.sectionText}>
            bokku! Mart was founded on a simple idea: quality groceries shouldn&apos;t come at a premium.
            We built our stores directly inside Nigerian communities, cutting out the extra costs that
            drive up prices elsewhere, and passing those savings straight to our customers. From fresh
            produce to household staples, we cover the essentials every home needs, every single day.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>What We Stand For</h2>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueText}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.statsRow}>
            {stats.map((s) => (
              <div key={s.label}>
                <div className={styles.statNumber}>{s.number}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
