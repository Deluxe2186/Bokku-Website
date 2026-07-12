import styles from "./page.module.css";

export const metadata = {
  title: "About Us | bokku! Mart",
  description: "Learn about bokku! Mart, Nigeria's hard-discount grocery store.",
};

const values = [
  {
    title: "The bokku! Mart Philosophy",
    text: "bokku! offers a limited assortment of food and non-food products for you and your family. Our low prices make a big impact in your wallet. You can expect the highest quality at the lowest possible price every day.",
  },
  {
    title: "We Carefully Select Each Product",
    text: "Our limited assortment allows us to select each product with great care, keeping a close eye on the ingredients and even testing products regularly in independent laboratories. Our private labels are developed according to the highest quality standards.",
  },
  {
    title: "Our Guarantee",
    text: "We provide you with an unconditional return guarantee: If you are not satisfied with any of our products, simply return it to any of our stores for a full refund. No questions asked, no receipt or explanation needed.",
  },
];

const stats = [
  { number: "2022", label: "First Store Opened" },
  { number: "110+", label: "Stores by End of 2024" },
  { number: "09/30", label: "Opening Date" },
  { number: "100%", label: "Return Guarantee" },
];

export default function AboutPage() {
  return (
    <div>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>About bokku! Mart</h1>
        <p className={styles.heroText}>
          We are a grocery chain founded in Nigeria. Our first store was opened on Sept. 30th, 2022.
        </p>
      </div>

      <div className={styles.page}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Story</h2>
          <p className={styles.sectionText}>
            bokku! offers a limited assortment of food and non-food products for you and your family.
            Our low prices make a big impact in your wallet. You can expect the highest quality at the
            lowest possible price every day.
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
