"use client";
import Image from "next/image";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { formatNaira } from "../../data/products";
import styles from "./page.module.css";

export default function CartPage() {
  const { items, setQty, removeFromCart, subtotal } = useCart();
  const deliveryFee = items.length > 0 ? 1500 : 0;

  if (items.length === 0) {
    return (
      <div className={styles.page}>
        <div className={styles.empty}>
          <p>Your cart is empty.</p>
          <Link href="/shop" className={styles.emptyLink}>Start Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Your Cart</h1>

      <div className={styles.layout}>
        <div className={styles.itemList}>
          {items.map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.itemImageWrap}>
                <Image src={item.img} alt={item.name} fill className={styles.itemImage} sizes="80px" />
              </div>
              <div className={styles.itemInfo}>
                <div className={styles.itemName}>{item.name}</div>
                <div className={styles.itemPrice}>{formatNaira(item.price)}</div>
              </div>
              <div className={styles.qtyGroup}>
                <button
                  className={styles.qtyButton}
                  onClick={() => setQty(item.id, item.qty - 1)}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className={styles.qtyValue}>{item.qty}</span>
                <button
                  className={styles.qtyButton}
                  onClick={() => setQty(item.id, item.qty + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button
                className={styles.removeButton}
                onClick={() => removeFromCart(item.id)}
                aria-label={`Remove ${item.name} from cart`}
              >
                <FaTrash size={14} />
              </button>
            </div>
          ))}
        </div>

        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>Order Summary</h2>
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>{formatNaira(subtotal)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Delivery Fee</span>
            <span>{formatNaira(deliveryFee)}</span>
          </div>
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span>{formatNaira(subtotal + deliveryFee)}</span>
          </div>
          <Link href="/checkout" className={styles.checkoutButton}>
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
