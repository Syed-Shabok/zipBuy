import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="flex min-h-[90vh] items-center justify-center py-20 px-6">
      <div className="mx-auto max-w-3xl text-center">

        <Badge
          variant="secondary"
          className="rounded-sm border border-border py-1.5 px-3 h-auto text-sm gap-1 animate-fade-in-up opacity-0"
          render={<Link href="/products" />}
        >
          New Collection 2026
          <span className="material-symbols-outlined text-[16px]">
            north_east
          </span>
        </Badge>

        <h1
          className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.15] animate-fade-in-up opacity-0"
          style={{ animationDelay: "150ms" }}
        >
          Discover Quality Products for Every Lifestyle
        </h1>

        <p
          className="mt-6 text-base text-muted-foreground md:text-lg animate-fade-in-up opacity-0"
          style={{ animationDelay: "300ms" }}
        >
          Shop the latest electronics, fashion, home essentials, beauty
          products, and more. Enjoy secure checkout, fast delivery, and
          unbeatable prices—all in one place.
        </p>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up opacity-0"
          style={{ animationDelay: "450ms" }}
        >
          <Button
            size="lg"
            className="rounded-sm text-base"
            render={<Link href="/products" />}
            nativeButton={false}
          >
            Shop Now
            <span className="material-symbols-outlined text-[20px] ml-1">
              north_east
            </span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-sm text-base shadow-none"
            render={<Link href="/categories" />}
            nativeButton={false}
          >
            <span className="material-symbols-outlined text-[20px] mr-2">
              shopping_bag
            </span>
            Browse Categories
          </Button>
        </div>
      </div>
    </section>
  );
}