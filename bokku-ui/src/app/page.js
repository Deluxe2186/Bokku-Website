import Image from "next/image";
import { FaStar, FaShoppingBasket, FaFire, FaBreadSlice, FaCarrot, FaHome, FaSoap } from "react-icons/fa";

// Sample array mirroring the layout mockups
const trendingProducts = [
  { id: 1, name: "Bokku Premium Special Loaf", price: "₦1,200", cat: "Bakery", rating: "4.9", votes: "412", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=300&auto=format&fit=crop" },
  { id: 2, name: "Pure Vegetable Cooking Oil (1L)", price: "₦3,400", cat: "Groceries & Staples", rating: "4.7", votes: "94", img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=300&auto=format&fit=crop" },
  { id: 3, name: "Fresh Farm Grade-A Eggs (Crate)", price: "₦4,800", cat: "Fresh Farm", rating: "4.8", votes: "155", img: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=300&auto=format&fit=crop" },
  { id: 4, name: "Premium Long Grain Rice (5kg)", price: "₦8,500", cat: "Groceries & Staples", rating: "5.0", votes: "310", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=300&auto=format&fit=crop" },
];

const categories = [
  { id: 1, name: "Bakery", icon: FaBreadSlice, color: "bg-orange-100 text-orange-600" },
  { id: 2, name: "Fresh Produce", icon: FaCarrot, color: "bg-green-100 text-[#1F9D55]" },
  { id: 3, name: "Household", icon: FaHome, color: "bg-blue-100 text-[#001DDD]" },
  { id: 4, name: "Health & Beauty", icon: FaSoap, color: "bg-pink-100 text-pink-500" },
];

export default function Home() {
  return (
    <div className="w-full bg-[#FAF8F3]">

      {/* HERO SECTION */}
      <section className="relative torn-edge bg-[#F5F7FA] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              <FaFire size={12} /> Your Comfort is Our Business
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
              We Bring the Store <br />
              <span className="text-[#001DDD]">To Your Door.</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-md mb-6">
              Get the best and freshest groceries delivered at hard-discount retail pricing structures everyday without the stress.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-lg transition shadow-md">
              Shop Now
            </button>
          </div>

          {/* Hero Image with sticker signature */}
          <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden bg-orange-100/50">
            <Image
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop"
              alt="Grocery Basket Showcase"
              fill
              priority
              className="object-cover mix-blend-multiply"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Signature discount sticker */}
            <div className="discount-sticker absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#001DDD] text-white font-display font-bold rounded-full w-20 h-20 sm:w-24 sm:h-24 flex flex-col items-center justify-center text-center leading-none border-4 border-white">
              <span className="text-lg sm:text-xl">70%</span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wide">Off Today</span>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="font-display text-2xl font-bold text-gray-900 tracking-tight">Shop by Category</h2>
          <p className="text-sm text-gray-500 mt-0.5">Everything your household needs, all in one place</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.id} className="group bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center text-center gap-3 cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${c.color}`}>
                  <Icon size={22} />
                </div>
                <span className="font-display font-semibold text-sm text-gray-800">{c.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* TRENDING PRODUCTS GRID SECTION */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100 pb-4 mb-8 gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-gray-900 tracking-tight">Trending Products</h2>
            <p className="text-sm text-gray-500 mt-0.5">Top selection bought right inside your community stores</p>
          </div>
          {/* Sub category horizontal pills */}
          <div className="flex flex-wrap gap-2 text-xs font-semibold text-gray-600">
            <span className="bg-[#001DDD] text-white px-3 py-1.5 rounded-full cursor-pointer">All Categories</span>
            <span className="bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full cursor-pointer transition">Bakery</span>
            <span className="bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full cursor-pointer transition">Dairy</span>
            <span className="bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full cursor-pointer transition">Staples</span>
          </div>
        </div>

        {/* Dynamic Grid Layout Component */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trendingProducts.map((p) => (
            <div key={p.id} className="group border border-gray-100 bg-white rounded-xl overflow-hidden p-4 hover:shadow-lg transition flex flex-col justify-between">
              <div>
                {/* Image Wrap */}
                <div className="w-full h-44 bg-gray-50 rounded-lg overflow-hidden relative mb-4">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                {/* Meta details */}
                <span className="text-[11px] text-gray-400 uppercase tracking-wider block mb-1 font-bold">{p.cat}</span>
                <h4 className="font-display text-sm font-semibold text-gray-800 line-clamp-2 hover:text-[#001DDD] cursor-pointer mb-2 transition">{p.name}</h4>

                {/* Ratings */}
                <div className="flex items-center gap-1 mb-3 text-xs text-amber-500">
                  <div className="flex"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                  <span className="text-gray-400 font-medium text-[11px]">({p.votes})</span>
                </div>
              </div>

              {/* Price Row / Add trigger button */}
              <div className="flex items-center justify-between border-t border-gray-50 pt-3 mt-auto">
                <span className="font-display text-lg font-bold text-[#001DDD]">{p.price}</span>
                <button className="bg-gray-50 hover:bg-[#001DDD] text-[#001DDD] hover:text-white p-2.5 rounded-lg transition-all flex items-center justify-center border border-gray-100 hover:border-transparent">
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