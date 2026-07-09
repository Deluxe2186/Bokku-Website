"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { formatNaira } from "../../data/products";
import styles from "./page.module.css";

const paymentMethods = [
  { id: "card", label: "Pay with Card" },
  { id: "transfer", label: "Bank Transfer" },
  { id: "delivery", label: "Pay on Delivery" },
];

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [payment, setPayment] = useState("card");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const deliveryFee = items.length > 0 ? 1500 : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE for backend integration: this currently just simulates order placement.
    // Replace this handler with a real API call once the backend is ready
    // (e.g. POST /api/orders with form data, cart items, and payment method).
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className={styles.page}>
        <div className={styles.confirmation}>
          <h1 className={styles.confirmationTitle}>Order Placed!</h1>
          <p className={styles.confirmationText}>
            Thank you for shopping with bokku! Mart. Your order is being processed.
          </p>
          <Link href="/shop" className={styles.confirmationLink}>Continue Shopping</Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className={styles.page}>
        <div className={styles.confirmation}>
          <h1 className={styles.confirmationTitle} style={{ color: "#6b7280" }}>Your cart is empty</h1>
          <p className={styles.confirmationText}>Add some products before checking out.</p>
          <Link href="/shop" className={styles.confirmationLink}>Go to Shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Checkout</h1>

      <form onSubmit={handleSubmit} className={styles.layout}>
        <div>
          <div className={styles.formSection}>
            <h2 className={styles.sectionLabel}>Delivery Details</h2>
            <div className={`${styles.fieldGrid} ${styles.two}`}>
              <div className={styles.field}>
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" type="text" required placeholder="Your full name" />
              </div>
              <div className={styles.field}>
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel" required placeholder="080..." />
              </div>
            </div>
            <div className={styles.fieldGrid} style={{ marginTop: "1rem" }}>
              <div className={styles.field}>
                <label htmlFor="address">Delivery Address</label>
                <input id="address" type="text" required placeholder="Street address" />
              </div>
            </div>
            <div className={`${styles.fieldGrid} ${styles.two}`} style={{ marginTop: "1rem" }}>
              <div className={styles.field}>
                <label htmlFor="city">City</label>
                <input id="city" type="text" required placeholder="e.g. Lagos" />
              </div>
              <div className={styles.field}>
                <label htmlFor="state">State</label>
                <input id="state" type="text" required placeholder="e.g. Lagos State" />
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <h2 className={styles.sectionLabel}>Payment Method</h2>
            <div className={styles.paymentOptions}>
              {paymentMethods.map((m) => (
                <label
                  key={m.id}
                  className={`${styles.paymentOption} ${payment === m.id ? styles.paymentOptionSelected : ""}`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={m.id}
                    checked={payment === m.id}
                    onChange={() => setPayment(m.id)}
                  />
                  {m.label}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>Order Summary</h2>
          {items.map((item) => (
            <div key={item.id} className={styles.summaryItem}>
              <span>{item.name} × {item.qty}</span>
              <span>{formatNaira(item.price * item.qty)}</span>
            </div>
          ))}
          <div className={styles.summaryItem}>
            <span>Delivery Fee</span>
            <span>{formatNaira(deliveryFee)}</span>
          </div>
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span>{formatNaira(subtotal + deliveryFee)}</span>
          </div>
          <button type="submit" className={styles.placeOrderButton}>
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}
