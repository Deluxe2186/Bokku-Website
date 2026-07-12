"use client";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { STORE_ROCKET_ACCOUNT, STORE_ROCKET_LOCATIONS_URL, normalizeStoreRocketLocation } from "../../data/stores";
import styles from "./page.module.css";

const dayKeys = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

function getStoreDate(store, now) {
  return new Date(now.toLocaleString("en-US", { timeZone: store.timezone || "Africa/Lagos" }));
}

function formatHours(value) {
  if (!value || value === "closed") return "Closed";
  return value.split(",").map((range) => range.split("-").map((time) => time.trim()).join(" - ")).join(" | ");
}

function isStoreOpen(store, now) {
  const storeDate = getStoreDate(store, now);
  const today = dayKeys[storeDate.getDay()];
  const todayHours = store.hours?.[today];

  if (!todayHours || todayHours === "closed") return false;

  const currentMinutes = storeDate.getHours() * 60 + storeDate.getMinutes();
  return todayHours.split(",").some((range) => {
    const [start, end] = range.split("-").map((time) => time.trim());
    if (!start || !end) return false;
    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);
    const startMinutes = startHour * 60 + startMinute;
    const endMinutes = endHour * 60 + endMinute;

    return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
  });
}

function getTodayHours(store, now) {
  const storeDate = getStoreDate(store, now);
  return formatHours(store.hours?.[dayKeys[storeDate.getDay()]]);
}

function StoreRocketMap() {
  useEffect(() => {
    let mounted = true;

    function initStoreRocket() {
      if (!mounted || !window.StoreRocket) return;
      window.StoreRocket.init({
        selector: ".storerocket-store-locator",
        account: STORE_ROCKET_ACCOUNT,
      });
    }

    if (window.StoreRocket) {
      initStoreRocket();
      return () => { mounted = false; };
    }

    const existingScript = document.querySelector('script[src="https://cdn.storerocket.io/widget.js"]');
    if (existingScript) {
      existingScript.addEventListener("load", initStoreRocket, { once: true });
      return () => { mounted = false; };
    }

    const script = document.createElement("script");
    script.src = "https://cdn.storerocket.io/widget.js";
    script.async = true;
    script.onload = initStoreRocket;
    document.body.appendChild(script);

    return () => { mounted = false; };
  }, []);

  return <div className="storerocket-store-locator" />;
}

export default function LocationsPage() {
  const [query, setQuery] = useState("");
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let mounted = true;

    async function fetchStores() {
      try {
        const response = await fetch(STORE_ROCKET_LOCATIONS_URL);
        if (!response.ok) throw new Error("Unable to load locations.");
        const data = await response.json();
        const locations = data?.results?.locations || [];
        if (mounted) {
          setStores(locations.map(normalizeStoreRocketLocation));
          setError("");
        }
      } catch {
        if (mounted) setError("We could not load live store locations right now.");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchStores();

    return () => { mounted = false; };
  }, []);

  const filteredStores = stores.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.address.toLowerCase().includes(query.toLowerCase()) ||
      s.city.toLowerCase().includes(query.toLowerCase()) ||
      s.state.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Find a Store Near You</h1>
        <p className={styles.heroText}>Live bokku! locations from the same StoreRocket locator used on bokku.com.</p>
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

        <div className={styles.mapCard}>
          <div className={styles.mapHeader}>
            <div>
              <div className={styles.mapTitle}>Live Location Map</div>
              <p className={styles.mapText}>Powered by StoreRocket, matching bokku.com&apos;s location service.</p>
            </div>
            <span className={styles.mapCount}>{loading ? "Loading" : `${stores.length} locations`}</span>
          </div>
          <StoreRocketMap />
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.list}>
            {loading ? (
              <p className={styles.empty}>Loading live locations...</p>
            ) : error ? (
              <p className={styles.empty}>{error}</p>
            ) : filteredStores.length > 0 ? (
              filteredStores.map((store) => (
                <div key={store.id} className={styles.storeCard}>
                  <div className={styles.storeIcon}>
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <div className={styles.storeName}>{store.name}</div>
                    <div className={styles.storeAddress}>{store.address}</div>
                    <div className={styles.metaRow}>
                      <span className={isStoreOpen(store, now) ? styles.openBadge : styles.closedBadge}>
                        {isStoreOpen(store, now) ? "Open now" : "Closed now"}
                      </span>
                      <span className={styles.storeHours}>Today: {getTodayHours(store, now)}</span>
                    </div>
                    <div className={styles.actionRow}>
                      {store.phone && (
                        <a href={`tel:${store.phone}`} className={styles.storeAction}>
                          <FaPhoneAlt size={12} /> {store.phone}
                        </a>
                      )}
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(store.address)}`}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.storeAction}
                      >
                        Directions
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className={styles.empty}>No stores found matching &quot;{query}&quot;.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
