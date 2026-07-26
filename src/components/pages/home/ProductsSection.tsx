"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { TProduct } from "@/types/product";

export const FeaturedProductsSection = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products?limit=6");
        const data = await res.json();
        setProducts(data.products || data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="container py-20 px-6 mx-auto">
        <p className="text-center text-muted-foreground">Loading products...</p>
      </section>
    );
  }

  return (
    <section className="container py-20 px-6 mx-auto">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Featured Products
          </h2>
          <p className="mt-2 text-muted-foreground">
            Discover our most popular products.
          </p>
        </div>

        <Button variant="outline">
          <Link href="/products" className="flex">
            View All
            <span className="material-symbols-outlined text-[16px] ml-2 flex items-center justify-center">arrow_forward</span>
          </Link>
        </Button>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 6).map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-sm border border-border bg-background transition-all"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="space-y-3 p-5">
              <span className="text-sm text-muted-foreground">
                {product.category}
              </span>

              <h3 className="line-clamp-1 text-xl font-semibold">
                {product.title}
              </h3>

              <p className="line-clamp-2 text-sm text-muted-foreground">
                {product.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">${product.price}</span>

                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-yellow-400 select-none" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-sm">{product.rating}</span>
                </div>
              </div>
              <Link href={`/products/${product.id}`}>
                <Button className="w-full">
                  <span className="material-symbols-outlined text-[16px] mr-2">shopping_cart</span>
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
