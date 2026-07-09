"use client";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingBasket } from "react-icons/fa";
import { categories, formatNaira } from "../../data/products";
import { useCart } from "../../context/CartContext";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const categoryName = categories.find((c) => c.id === product.categoryId)?.name;

  return (
    <div className={styles.card}>
      <Link href={`/product/${product.slug}`}>
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
      </Link>

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
        <button
          className={styles.addButton}
          onClick={() => addToCart(product)}
          aria-label={`Add ${product.name} to cart`}
        >
          <FaShoppingBasket size={15} />
        </button>
      </div>
    </div>
  );
}
