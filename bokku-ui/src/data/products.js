import { FaBreadSlice, FaCarrot, FaHome, FaSoap } from "react-icons/fa";

export const categories = [
  { id: "bakery", name: "Bakery", icon: FaBreadSlice, colorKey: "orange" },
  { id: "fresh-produce", name: "Fresh Produce", icon: FaCarrot, colorKey: "green" },
  { id: "household", name: "Household", icon: FaHome, colorKey: "blue" },
  { id: "health-beauty", name: "Health & Beauty", icon: FaSoap, colorKey: "pink" },
];

export const products = [
  {
    id: 1,
    slug: "bokku-premium-special-loaf",
    name: "Bokku Premium Special Loaf",
    price: 1200,
    beforePrice: 1500,
    categoryId: "bakery",
    rating: "4.9",
    votes: "412",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop",
    description: "Freshly baked daily, our special loaf is soft, lightly sweetened, and made without preservatives. A household favorite for breakfast tables across Nigeria.",
  },
  {
    id: 2,
    slug: "pure-vegetable-cooking-oil-1l",
    name: "Pure Vegetable Cooking Oil (1L)",
    price: 3400,
    beforePrice: null,
    categoryId: "household",
    rating: "4.7",
    votes: "94",
    img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=600&auto=format&fit=crop",
    description: "100% pure vegetable oil, cholesterol-free and ideal for everyday frying, cooking, and baking needs.",
  },
  {
    id: 3,
    slug: "fresh-farm-grade-a-eggs-crate",
    name: "Fresh Farm Grade-A Eggs (Crate)",
    price: 4800,
    beforePrice: 5200,
    categoryId: "fresh-produce",
    rating: "4.8",
    votes: "155",
    img: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=600&auto=format&fit=crop",
    description: "A full crate of Grade-A eggs, sourced fresh from local farms and delivered to your nearest Bokku store.",
  },
  {
    id: 4,
    slug: "premium-long-grain-rice-5kg",
    name: "Premium Long Grain Rice (5kg)",
    price: 8500,
    beforePrice: 9800,
    categoryId: "household",
    rating: "5.0",
    votes: "310",
    img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop",
    description: "Premium long grain rice, cleaned and sorted for a consistent cook every time. A staple for every Nigerian household.",
  },
  {
    id: 5,
    slug: "aboniki-balm-25g",
    name: "Aboniki Balm (25g)",
    price: 900,
    beforePrice: 1000,
    categoryId: "health-beauty",
    rating: "4.6",
    votes: "88",
    img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=600&auto=format&fit=crop",
    description: "Fast-acting balm for muscle and joint relief. A trusted household name across Nigeria.",
  },
  {
    id: 6,
    slug: "banga-red-palm-oil-2l",
    name: "Banga Red Palm Oil (2L)",
    price: 6500,
    beforePrice: 6800,
    categoryId: "household",
    rating: "4.8",
    votes: "142",
    img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=600&auto=format&fit=crop",
    description: "Rich, unrefined red palm oil, perfect for traditional Nigerian soups and stews.",
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId) {
  if (!categoryId || categoryId === "all") return products;
  return products.filter((p) => p.categoryId === categoryId);
}

export function formatNaira(amount) {
  return `₦${amount.toLocaleString("en-NG")}`;
}
