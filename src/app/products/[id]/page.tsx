"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { TProduct } from "@/types/product";

export default function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = useParams();

  const [product, setProduct] = useState<TProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "reviews">("overview");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/products/${id}`);

        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <p>Loading product...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <main className="container py-16 mx-auto">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-sm border border-border">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold">{product.title}</h1>

          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-yellow-400 select-none" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>

            <span>{product.rating}</span>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="text-4xl font-bold">${product.price}</div>

          <p>
            Stock:
            <span className="font-semibold ml-2">{product.stock}</span>
          </p>

          <Button size="lg">
            <span className="material-symbols-outlined text-[20px] mr-2">shopping_cart</span>
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="mt-16 border-t border-border pt-12">
        <div className="flex border-b border-border mb-8 overflow-x-auto">
          {(["overview", "specs", "reviews"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-bold uppercase tracking-wider text-sm border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === tab
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-card p-6 border border-border rounded-sm">
          {activeTab === "overview" && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-wider text-foreground">Product Overview</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              <div className="grid gap-4 md:grid-cols-2 mt-6">
                <div className="p-4 border border-border/50 rounded-sm">
                  <h4 className="font-bold text-sm uppercase text-foreground mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    Premium Build Quality
                  </h4>
                  <p className="text-xs text-muted-foreground">Engineered to meet the highest industry standards for reliability and long-term durability.</p>
                </div>
                <div className="p-4 border border-border/50 rounded-sm">
                  <h4 className="font-bold text-sm uppercase text-foreground mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    Verified Product
                  </h4>
                  <p className="text-xs text-muted-foreground">100% authentic and quality checked by our team before dispatch.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "specs" && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-wider text-foreground">Technical Specifications</h3>
              <div className="divide-y divide-border/30 mt-4 max-w-2xl">
                {[
                  { label: "Brand", value: "ZipBuy Original" },
                  { label: "Category", value: product.category },
                  { label: "Dimensions", value: "12.4 x 8.6 x 3.2 inches" },
                  { label: "Weight", value: "1.4 lbs" },
                  { label: "Material", value: "Industrial Composite" },
                  { label: "Warranty", value: "1 Year Limited Manufacturer Warranty" },
                  { label: "Stock Available", value: `${product.stock} units` }
                ].map((spec, i) => (
                  <div key={i} className="grid grid-cols-2 py-3 text-sm">
                    <span className="font-bold uppercase text-muted-foreground text-xs">{spec.label}</span>
                    <span className="text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b border-border/30 pb-4">
                <h3 className="text-xl font-bold uppercase tracking-wider text-foreground">Customer Reviews</h3>
                <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-sm text-sm font-semibold">
                  <span className="material-symbols-outlined text-sm select-none" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  {product.rating} / 5.0
                </div>
              </div>
              <div className="space-y-6 divide-y divide-border/20">
                {[
                  {
                    author: "Marcus V.",
                    rating: 5,
                    date: "July 24, 2026",
                    title: "Exceptional durability",
                    comment: "The build quality exceeded my expectations. Feels incredibly premium and operates flawlessly. Fast delivery from ZipBuy too!"
                  },
                  {
                    author: "Sarah K.",
                    rating: 4,
                    date: "July 18, 2026",
                    title: "Great value for the price",
                    comment: "Very pleased with this purchase. It looks exactly like the images, performs well, and matches the description perfectly."
                  },
                  {
                    author: "David L.",
                    rating: 5,
                    date: "June 29, 2026",
                    title: "Highly recommended!",
                    comment: "Excellent product, authentic and packed carefully. Customer support answered my specs question in minutes."
                  }
                ].map((review, idx) => (
                  <div key={idx} className={`${idx > 0 ? "pt-6" : ""} space-y-2`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-foreground">{review.author}</span>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={`material-symbols-outlined text-[16px] select-none ${
                              i < review.rating ? "text-yellow-400" : "text-muted-foreground/30"
                            }`}
                            style={{ fontVariationSettings: i < review.rating ? "'FILL' 1" : undefined }}
                          >
                            star
                          </span>
                        ))}
                      </div>
                    </div>
                    <h5 className="font-bold text-sm uppercase text-foreground">{review.title}</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
