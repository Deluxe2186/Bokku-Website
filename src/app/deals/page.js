import { products } from "../../data/products";
import ProductCard from "../components/ProductCard";
import styles from "./page.module.css";

export const metadata = {
  title: "Low Prices | bokku!",
  description: "Everyday low prices across bokku! stores.",
};

export default function DealsPage() {
  const dealProducts = products.filter((p) => p.beforePrice);

  return (
    <div>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>We Reduce Prices, Not Quality</h1>
        <p className={styles.heroSubtitle}>In-store value across household essentials, fresh food, and daily staples.</p>
      </div>

      <div className={styles.page}>
        {dealProducts.length > 0 ? (
          <div className={styles.grid}>
            {dealProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>No featured low-price items right now, check back soon!</p>
        )}
      </div>
    </div>
  );
}
