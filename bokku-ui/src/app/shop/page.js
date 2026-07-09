import Link from "next/link";
import { categories, getProductsByCategory } from "../../data/products";
import ProductCard from "../components/ProductCard";
import styles from "./page.module.css";

export const metadata = {
  title: "Shop All Products | bokku! Mart",
  description: "Browse groceries, household essentials, and more at everyday low prices.",
};

export default async function ShopPage({ searchParams }) {
  const params = await searchParams;
  const activeCategory = params?.category || "all";
  const filteredProducts = getProductsByCategory(activeCategory);
  const activeCategoryName = categories.find((c) => c.id === activeCategory)?.name;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{activeCategoryName ? activeCategoryName : "Shop All Products"}</h1>
        <p className={styles.subtitle}>Everyday low prices on quality essentials, right in your community.</p>
      </div>

      <div className={styles.filterRow}>
        <Link href="/shop" className={activeCategory === "all" ? styles.filterPillActive : styles.filterPill}>
          All Categories
        </Link>
        {categories.map((c) => (
          <Link
            key={c.id}
            href={`/shop?category=${c.id}`}
            className={activeCategory === c.id ? styles.filterPillActive : styles.filterPill}
          >
            {c.name}
          </Link>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <div className={styles.grid}>
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <p className={styles.empty}>No products found in this category yet.</p>
      )}
    </div>
  );
}
