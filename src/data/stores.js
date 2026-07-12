export const STORE_ROCKET_ACCOUNT = "Yw8lrx64vo";
export const STORE_ROCKET_LOCATIONS_URL = `https://storerocket.io/api/user/${STORE_ROCKET_ACCOUNT}/locations`;

export function normalizeStoreRocketLocation(location) {
  return {
    id: location.id,
    name: location.name,
    address: location.display_address || location.address || "",
    city: location.city || "",
    state: location.state || "",
    phone: location.phone || "",
    lat: Number(location.lat),
    lng: Number(location.lng),
    timezone: location.timezone || "Africa/Lagos",
    hours: location.hours || {
      mon: location.mon,
      tue: location.tue,
      wed: location.wed,
      thu: location.thu,
      fri: location.fri,
      sat: location.sat,
      sun: location.sun,
    },
  };
}
