"use client";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { stores } from "../../data/stores";
import styles from "./page.module.css";

export default function LocationsPage() {
  const [query, setQuery] = useState("");

  const filteredStores = stores.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.address.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Find a Store Near You</h1>
        <p className={styles.heroText}>bokku! Mart stores across Nigeria, all offering the same everyday low prices.</p>
      </div>

      <div className={styles.page}>
        <div className={styles.searchRow}>
          <input
            type="text"
            placeholder="Search by city or area..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="button">Search</button>
        </div>

        <div className={styles.list}>
          {filteredStores.length > 0 ? (
            filteredStores.map((store) => (
              <div key={store.id} className={styles.storeCard}>
                <div className={styles.storeIcon}>
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <div className={styles.storeName}>{store.name}</div>
                  <div className={styles.storeAddress}>{store.address}</div>
                  <div className={styles.storeHours}>{store.hours}</div>
                </div>
              </div>
            ))
          ) : (
            <p style={{ color: "#9ca3af", textAlign: "center", padding: "2rem 0" }}>
              No stores found matching &quot;{query}&quot;.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
