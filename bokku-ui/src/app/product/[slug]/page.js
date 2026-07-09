import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaStar } from "react-icons/fa";
import { products, categories, getProductBySlug, formatNaira } from "../../../data/products";
import ProductCard from "../../components/ProductCard";
import AddToCartControls from "./AddToCartControls";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | bokku! Mart`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const categoryName = categories.find((c) => c.id === product.categoryId)?.name;
  const relatedProducts = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className={styles.page}>
      <div className={styles.breadcrumb}>
        <Link href="/">Home</Link> / <Link href="/shop">Shop</Link> / {product.name}
      </div>

      <div className={styles.layout}>
        <div className={styles.imageWrap}>
          <Image
            src={product.img}
            alt={product.name}
            fill
            priority
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div>
          <span className={styles.catLabel}>{categoryName}</span>
          <h1 className={styles.name}>{product.name}</h1>

          <div className={styles.rating}>
            <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <span className={styles.ratingVotes}>{product.rating} ({product.votes} reviews)</span>
          </div>

          <div className={styles.priceGroup}>
            <span className={styles.price}>{formatNaira(product.price)}</span>
            {product.beforePrice && (
              <span className={styles.beforePrice}>{formatNaira(product.beforePrice)}</span>
            )}
          </div>

          <p className={styles.description}>{product.description}</p>

          <AddToCartControls product={product} />
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className={styles.relatedSection}>
          <h2 className={styles.relatedTitle}>You Might Also Like</h2>
          <div className={styles.relatedGrid}>
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
