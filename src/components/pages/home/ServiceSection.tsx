import {
  Mail,
  ShoppingBag,
  ShoppingBasket,
} from "lucide-react";

export const ServiceSection = () => {
  return (
    <section className="px-6 py-20 bg-gray-50 dark:bg-muted/30">
      <h2 className="text-3xl font-semibold mb-12 text-center">Our Features</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center p-6 rounded-xl shadow hover:shadow-lg transition bg-white dark:bg-card">
          <ShoppingBag size={48} className="mb-4 text-primary" />
          <h3 className="text-xl font-bold mb-2">Easy Shopping</h3>
          <p className="text-muted-foreground text-center text-sm">
            Shop in just a few clicks with our simple and intuitive interface.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 rounded-xl shadow hover:shadow-lg transition bg-white dark:bg-card">
          <ShoppingBasket size={48} className="mb-4 text-secondary" />
          <h3 className="text-xl font-bold mb-2">Verified Products</h3>
          <p className="text-muted-foreground text-center text-sm">
            All products are sourced from verified merchants and checked for quality and authenticity.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 rounded-xl shadow hover:shadow-lg transition bg-white dark:bg-card">
          <Mail size={48} className="mb-4 text-primary" />
          <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
          <p className="text-muted-foreground text-center text-sm">
            Our team is always ready to assist you with any questions or issues.
          </p>
        </div>
      </div>
    </section>
  );
};
