"use client";
import { useState } from "react";
import { useCart } from "../../../context/CartContext";
import styles from "./page.module.css";

export default function AddToCartControls({ product }) {
  const { addToCart, setQty, items } = useCart();
  const [qty, setLocalQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    const existing = items.find((i) => i.id === product.id);
    const newQty = (existing?.qty || 0) + 1;
    if (qty > 1) setQty(product.id, newQty - 1 + qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      <div className={styles.actionsRow}>
        <div className={styles.qtyGroup}>
          <button
            className={styles.qtyButton}
            onClick={() => setLocalQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className={styles.qtyValue}>{qty}</span>
          <button
            className={styles.qtyButton}
            onClick={() => setLocalQty((q) => q + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <button className={styles.addToCartButton} onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
      {added && <p className={styles.addedNotice}>Added to cart!</p>}
    </div>
  );
}
