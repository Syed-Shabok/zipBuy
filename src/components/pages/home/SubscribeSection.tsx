import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export const SubscribeSection = () => {
  return (
    <section className="py-20 px-6 text-center">
      <div className="bg-gray-50 dark:bg-muted/30 rounded-2xl py-12 px-8 max-w-4xl mx-auto border border-border/10">
        <h2 className="text-3xl font-semibold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="mb-6 text-muted-foreground text-sm">
          Get updates on the latest product arrivals, exclusive collections, and promotional offers.
        </p>
        <div className="flex justify-center gap-2 max-w-md mx-auto">
          <Input placeholder="Enter your email" className="rounded-r-none" />
          <Button className="rounded-l-none flex items-center gap-2">
            <Mail size={16} /> Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};
