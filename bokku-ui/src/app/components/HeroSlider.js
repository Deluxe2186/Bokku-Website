"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import styles from "./HeroSlider.module.css";

// Sample slide dataset. `img` is now used as a full-bleed background image
// (object-fit: cover) with a gradient overlay behind the text for legibility.
// Local files should live in /public/images and be referenced as
// "/images/your-file.png" (no "../public" prefix).
const slides = [
  {
    id: 1,
    tag: "Loved By 1M+ Nigerians",
    title: "We Bring the Store To Your Door.",
    subtitle: "Get the best and freshest groceries delivered at hard-discount pricing, every single day.",
    ctaLabel: "Shop Now",
    ctaHref: "/shop",
    bgClass: styles.bgSoftBlue,
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    tag: "This Week's Deal",
    title: "Up To 70% Off Household Essentials.",
    subtitle: "From cooking oil to rice, stock up on staples without stretching your budget.",
    ctaLabel: "View Deals",
    ctaHref: "/deals",
    bgClass: styles.bgSoftYellow,
    img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    tag: "Fresh Daily",
    title: "Farm-Fresh Produce, Always in Stock.",
    subtitle: "Sourced fresh from local farms and delivered straight to your nearest bokku! store.",
    ctaLabel: "Browse Fresh Produce",
    ctaHref: "/shop?category=fresh-produce",
    bgClass: styles.bgSoftGreen,
    img: "/images/engin-akyurt-dBFSlJ3wWRY-unsplash.jpg",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className={styles.slider}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${index === activeIndex ? styles.slideActive : ""}`}
        >
          <div className={styles.bgImageWrap}>
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              priority={index === 0}
              className={styles.bgImage}
              sizes="100vw"
            />
          </div>

          <div className={`${styles.overlay} ${slide.bgClass}`} />

          <div className={styles.content}>
            <span className={styles.trustBadge}>
              <span className={styles.stars}>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </span>
              {slide.tag}
            </span>
            <h1 className={styles.title}>{slide.title}</h1>
            <p className={styles.subtitle}>{slide.subtitle}</p>
            <Link href={slide.ctaHref} className={styles.cta}>
              {slide.ctaLabel}
            </Link>
          </div>
        </div>
      ))}

      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={goToPrev} aria-label="Previous slide">
        <FaChevronLeft size={16} />
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={goToNext} aria-label="Next slide">
        <FaChevronRight size={16} />
      </button>

      <div className={styles.indicators}>
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`${styles.indicator} ${index === activeIndex ? styles.indicatorActive : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
