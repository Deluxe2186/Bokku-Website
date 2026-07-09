import { products } from "../../data/products";
import ProductCard from "../components/ProductCard";
import styles from "./page.module.css";

export const metadata = {
  title: "Deals & Discounts | bokku! Mart",
  description: "Everyday low prices, even lower this week. Shop bokku's biggest discounts.",
};

export default function DealsPage() {
  const dealProducts = products.filter((p) => p.beforePrice);

  return (
    <div>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>We Reduce Prices, Not Quality</h1>
        <p className={styles.heroSubtitle}>The best discounts across all your household essentials, updated weekly.</p>
      </div>

      <div className={styles.page}>
        {dealProducts.length > 0 ? (
          <div className={styles.grid}>
            {dealProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>No active deals right now, check back soon!</p>
        )}
      </div>
    </div>
  );
}
