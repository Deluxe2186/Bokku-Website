"use client";
import Link from "next/link";
import { products, categories } from "../data/products";
import ProductCard from "./components/ProductCard";
import HeroSlider from "./components/HeroSlider";
import styles from "./page.module.css";

const iconColorClass = {
  orange: styles.categoryIconOrange,
  green: styles.categoryIconGreen,
  blue: styles.categoryIconBlue,
  pink: styles.categoryIconPink,
};

export default function Home() {
  const trendingProducts = products.slice(0, 4);

  return (
    <div className={styles.page}>

      {/* HERO SLIDER — full-bleed, no boxed wrapper */}
      <HeroSlider />

      {/* CATEGORIES SECTION */}
      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <h2 className={styles.sectionTitle}>Shop by Category</h2>
          <p className={styles.sectionSubtitle}>Everything your household needs, all in one place</p>
        </div>
        <div className={styles.categoryGrid}>
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <Link key={c.id} href={`/shop?category=${c.id}`} className={styles.categoryCard}>
                <div className={`${styles.categoryIcon} ${iconColorClass[c.colorKey]}`}>
                  <Icon size={22} />
                </div>
                <span className={styles.categoryName}>{c.name}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* TRENDING PRODUCTS GRID SECTION */}
      <section className={styles.section}>
        <div className={styles.productHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Trending Products</h2>
            <p className={styles.sectionSubtitle}>Top selection bought right inside your community stores</p>
          </div>
          <Link href="/shop" className={styles.pillActive}>Shop All</Link>
        </div>

        <div className={styles.productGrid}>
          {trendingProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

    </div>
  );
}
