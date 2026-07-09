import Image from "next/image";
import { FaStar, FaShoppingBasket, FaFire, FaBreadSlice, FaCarrot, FaHome, FaSoap } from "react-icons/fa";
import styles from "./page.module.css";

// Sample array mirroring the layout mockups
const trendingProducts = [
  { id: 1, name: "Bokku Premium Special Loaf", price: "₦1,200", cat: "Bakery", rating: "4.9", votes: "412", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=300&auto=format&fit=crop" },
  { id: 2, name: "Pure Vegetable Cooking Oil (1L)", price: "₦3,400", cat: "Groceries & Staples", rating: "4.7", votes: "94", img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=300&auto=format&fit=crop" },
  { id: 3, name: "Fresh Farm Grade-A Eggs (Crate)", price: "₦4,800", cat: "Fresh Farm", rating: "4.8", votes: "155", img: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=300&auto=format&fit=crop" },
  { id: 4, name: "Premium Long Grain Rice (5kg)", price: "₦8,500", cat: "Groceries & Staples", rating: "5.0", votes: "310", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=300&auto=format&fit=crop" },
];

const categories = [
  { id: 1, name: "Bakery", icon: FaBreadSlice, colorClass: styles.categoryIconOrange },
  { id: 2, name: "Fresh Produce", icon: FaCarrot, colorClass: styles.categoryIconGreen },
  { id: 3, name: "Household", icon: FaHome, colorClass: styles.categoryIconBlue },
  { id: 4, name: "Health & Beauty", icon: FaSoap, colorClass: styles.categoryIconPink },
];

export default function Home() {
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
            <button className={styles.heroCta}>
              Shop Now
            </button>
          </div>

          {/* Hero Image with sticker signature */}
          <div className={styles.heroImageWrap}>
            <Image
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop"
              alt="Grocery Basket Showcase"
              fill
              priority
              className={styles.heroImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Signature discount sticker */}
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
              <div key={c.id} className={styles.categoryCard}>
                <div className={`${styles.categoryIcon} ${c.colorClass}`}>
                  <Icon size={22} />
                </div>
                <span className={styles.categoryName}>{c.name}</span>
              </div>
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
          {/* Sub category horizontal pills */}
          <div className={styles.pillRow}>
            <span className={styles.pillActive}>All Categories</span>
            <span className={styles.pill}>Bakery</span>
            <span className={styles.pill}>Dairy</span>
            <span className={styles.pill}>Staples</span>
          </div>
        </div>

        {/* Dynamic Grid Layout Component */}
        <div className={styles.productGrid}>
          {trendingProducts.map((p) => (
            <div key={p.id} className={styles.productCard}>
              <div>
                {/* Image Wrap */}
                <div className={styles.productImageWrap}>
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className={styles.productImage}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                {/* Meta details */}
                <span className={styles.productCat}>{p.cat}</span>
                <h4 className={styles.productName}>{p.name}</h4>

                {/* Ratings */}
                <div className={styles.rating}>
                  <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                  <span className={styles.ratingVotes}>({p.votes})</span>
                </div>
              </div>

              {/* Price Row / Add trigger button */}
              <div className={styles.priceRow}>
                <span className={styles.price}>{p.price}</span>
                <button className={styles.addButton}>
                  <FaShoppingBasket size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
