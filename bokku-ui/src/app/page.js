"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import { products, categories } from "../data/products";
import ProductCard from "./components/ProductCard";
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

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <span className={styles.badge}>
              <FaFire size={12} /> Your Comfort is Our Business
            </span>
            <h1 className={styles.heroTitle}>
              We Bring the Store <br />
              <span className={styles.heroTitleAccent}>To Your Door.</span>
            </h1>
            <p className={styles.heroText}>
              Get the best and freshest groceries delivered at hard-discount retail pricing structures everyday without the stress.
            </p>
            <Link href="/shop" className={styles.heroCta}>
              Shop Now
            </Link>
          </div>

          <div className={styles.heroImageWrap}>
            <Image
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop"
              alt="Grocery Basket Showcase"
              fill
              priority
              className={styles.heroImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.sticker}>
              <span className={styles.stickerPct}>70%</span>
              <span className={styles.stickerLabel}>Off Today</span>
            </div>
          </div>
        </div>
      </section>

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
