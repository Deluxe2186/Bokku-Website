"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { categories, formatNaira } from "../../data/products";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const categoryName = categories.find((c) => c.id === product.categoryId)?.name;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={product.img}
          alt={product.name}
          fill
          className={styles.image}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <span className={styles.cat}>{categoryName}</span>
      <h4 className={styles.name}>{product.name}</h4>

      <div className={styles.rating}>
        <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
        <span className={styles.ratingVotes}>({product.votes})</span>
      </div>

      <div className={styles.priceRow}>
        <div className={styles.priceGroup}>
          {product.beforePrice && (
            <span className={styles.beforePrice}>{formatNaira(product.beforePrice)}</span>
          )}
          <span className={styles.price}>{formatNaira(product.price)}</span>
        </div>
        <span className={styles.inStoreBadge}>In-store</span>
      </div>
    </div>
  );
}
