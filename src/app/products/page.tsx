"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TProduct } from "@/types/product";

export function ProductsPage() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Filter and pagination states
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categories, setCategories] = useState<string[]>([]);

  // Fetch products with current parameters
  async function fetchProducts() {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        search,
        category,
        sortBy,
        page: page.toString(),
        limit: "8",
      });
      const res = await fetch(`/api/products?${queryParams.toString()}`);
      const data = await res.json();
      
      setProducts(data.products || []);
      setTotalPages(data.totalPages || 1);
      if (data.categories) {
        setCategories(data.categories);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  }

  // Reset page to 1 when filters change to prevent empty index pages
  useEffect(() => {
    setPage(1);
  }, [search, category, sortBy]);

  // Debounced fetch trigger
  useEffect(() => {
    const handler = setTimeout(() => {
      fetchProducts();
    }, 300);

    return () => clearTimeout(handler);
  }, [search, category, sortBy, page]);

  return (
    <section className="container py-20 px-6 mx-auto">
      <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Our Catalog</h2>
          <p className="mt-2 text-muted-foreground text-sm">
            Browse through our wide selection of quality products.
          </p>
        </div>
      </div>

      {/* Filters Toolbar */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-gray-50 dark:bg-muted/20 p-4 rounded-sm border border-border">
        <div className="relative flex-1 max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none text-sm">search</span>
          <Input
            placeholder="Search products..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px] flex items-center justify-center">tune</span> Category
            </span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-8 rounded-sm border border-input bg-background px-3 text-xs shadow-none outline-none focus:border-ring focus:ring-1 focus:ring-ring"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Selection */}
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Sort By
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-8 rounded-sm border border-input bg-background px-3 text-xs shadow-none outline-none focus:border-ring focus:ring-1 focus:ring-ring"
            >
              <option value="">Default Sorting</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 min-h-[300px]">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="animate-pulse flex flex-col gap-3 rounded-sm border border-border p-4 bg-background">
              <div className="w-full aspect-square rounded-sm bg-muted" />
              <div className="h-4 w-2/3 bg-muted rounded-sm" />
              <div className="h-4 w-1/3 bg-muted rounded-sm" />
              <div className="h-8 w-full bg-muted rounded-sm mt-2" />
            </div>
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 dark:bg-muted/10 rounded-sm border border-dashed border-border">
          <p className="text-muted-foreground text-sm">No products found matching your criteria.</p>
        </div>
      ) : (
        <>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col justify-between overflow-hidden rounded-sm border border-border bg-background transition-all"
              >
                <div>
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>

                  <div className="space-y-2.5 p-4">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      {product.category}
                    </span>

                    <h3 className="line-clamp-1 text-base font-semibold tracking-tight">
                      {product.title}
                    </h3>

                    <p className="line-clamp-2 text-xs text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">${product.price}</span>

                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-yellow-400 select-none" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-xs font-semibold">{product.rating}</span>
                    </div>
                  </div>

                  <Link href={`/products/${product.id}`} className="block">
                    <Button className="w-full h-8 text-xs">
                      <span className="material-symbols-outlined text-[14px] mr-1.5 flex items-center justify-center">shopping_cart</span>
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="mt-16 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
            >
              Previous
            </Button>
            <span className="text-sm font-medium text-muted-foreground">
              Page {page} of {totalPages || 1}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={page === totalPages || totalPages === 0}
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            >
              Next
            </Button>
          </div>
        </>
      )}
    </section>
  );
}

export default ProductsPage;
