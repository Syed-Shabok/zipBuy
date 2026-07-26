"use client";

import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";
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
        <div className="relative aspect-square overflow-hidden rounded-xl border">
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
            <Star className="fill-yellow-400 text-yellow-400" />

            <span>{product.rating}</span>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="text-4xl font-bold">${product.price}</div>

          <p>
            Stock:
            <span className="font-semibold ml-2">{product.stock}</span>
          </p>

          <Button size="lg">
            <ShoppingCart className="mr-2 size-5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </main>
  );
}
