import { mongoConnect } from "@/lib/mongoConnect";
import { NextResponse } from "next/server";

const seedProducts = [
  {
    title: "Quantum Wireless Noise-Cancelling Headphones",
    category: "Electronics",
    price: 189.99,
    rating: 4.8,
    stock: 50,
    featured: true,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
    description: "Experience pure sound isolation with active noise-cancellation, 40-hour battery life, and spatial audio support."
  },
  {
    title: "AeroFit Ergonomic Mechanical Keyboard",
    category: "Electronics",
    price: 129.50,
    rating: 4.6,
    stock: 35,
    featured: false,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60",
    description: "Compact 75% layout keyboard featuring hot-swappable switches, sound-dampening foam, and full RGB backlighting."
  },
  {
    title: "Vanguard Minimalist Leather Backpack",
    category: "Accessories",
    price: 85.00,
    rating: 4.7,
    stock: 60,
    featured: true,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60",
    description: "Water-resistant, top-grain leather backpack with a padded 15.6-inch laptop compartment and hidden safety pockets."
  },
  {
    title: "Chrono Classic Stainless Steel Watch",
    category: "Accessories",
    price: 210.00,
    rating: 4.9,
    stock: 20,
    featured: true,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
    description: "Timeless quartz watch crafted with surgical-grade steel, scratch-resistant sapphire glass, and 50m water resistance."
  },
  {
    title: "Urban Knit Breathable Running Shoes",
    category: "Fashion",
    price: 95.00,
    rating: 4.5,
    stock: 45,
    featured: false,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60",
    description: "Lightweight and flexible sneakers designed with a moisture-wicking knit upper and responsive foam cushioning."
  },
  {
    title: "Solace Organic Cotton Hoodie",
    category: "Fashion",
    price: 65.00,
    rating: 4.6,
    stock: 80,
    featured: false,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop&q=60",
    description: "Eco-friendly brushed cotton hoodie offering a relaxed fit, cozy double-lined hood, and premium ribbed trims."
  },
  {
    title: "Nova Smart Ambient Desk Lamp",
    category: "Home & Living",
    price: 49.99,
    rating: 4.4,
    stock: 100,
    featured: false,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=60",
    description: "Sleek LED desk lamp with dimmable white-to-warm light, touch controls, and a built-in wireless phone charger."
  },
  {
    title: "Artisan Ceramic Pour-Over Coffee Set",
    category: "Home & Living",
    price: 38.50,
    rating: 4.8,
    stock: 40,
    featured: true,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=60",
    description: "Handcrafted stoneware set including a ceramic coffee dripper and matching 500ml server jug for pour-over lovers."
  },
  {
    title: "Ultra-Light Carbon Fiber Bicycle Bottle Cage",
    category: "Fitness",
    price: 24.99,
    rating: 4.3,
    stock: 120,
    featured: false,
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&auto=format&fit=crop&q=60",
    description: "High-tensile carbon fiber cage weighing only 20 grams, offering secure bottle grip on rough cycling terrains."
  },
  {
    title: "Pulse Pro Smart Fitness Tracker",
    category: "Fitness",
    price: 119.99,
    rating: 4.7,
    stock: 30,
    featured: true,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&auto=format&fit=crop&q=60",
    description: "Track heart rate, sleep cycles, workouts, and oxygen saturation with a vibrant AMOLED display and 10-day battery."
  },
  {
    title: "Luxe Botanical Scented Candle Set",
    category: "Home & Living",
    price: 32.00,
    rating: 4.6,
    stock: 75,
    featured: false,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&auto=format&fit=crop&q=60",
    description: "Set of three soy-wax candles scented with pure essential oils (Lavender, Eucalyptus, and Amber Wood) in tin cases."
  },
  {
    title: "Apex Carbon Fiber Travel Tripod",
    category: "Electronics",
    price: 145.00,
    rating: 4.5,
    stock: 25,
    featured: false,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60",
    description: "Ultra-compact tripod constructed with lightweight carbon fiber legs, a 360-degree ball head, and quick-release plate."
  }
];

export async function GET() {
  try {
    const { db } = await mongoConnect();

    // Delete existing products to prevent duplicates
    await db.collection("products").deleteMany({});

    // Seed products
    const result = await db.collection("products").insertMany(seedProducts);

    return NextResponse.json({
      success: true,
      message: "Database seeded successfully",
      insertedCount: result.insertedCount,
    });
  } catch (error) {
    console.error("Database seed failed:", error);
    return NextResponse.json(
      { success: false, error: "Database seeding failed" },
      { status: 500 }
    );
  }
}
