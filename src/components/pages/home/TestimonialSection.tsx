export const TestimonialSection = () => {
  return (
    <section className="px-6 py-20 bg-gray-50 dark:bg-muted/30">
      <h2 className="text-3xl font-semibold mb-12 text-center">
        What Our Users Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white dark:bg-card p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            <h4 className="font-bold">Alice Johnson</h4>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            “Shopping on ZipBuy is incredibly easy and intuitive. The interface is clean, product images look realistic, and checkout is super fast!”
          </p>
        </div>
        <div className="bg-white dark:bg-card p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            <h4 className="font-bold">Mark Wilson</h4>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            “Amazing customer service and high-quality verified products. Delivery is consistently ahead of schedule. Highly recommend this store!”
          </p>
        </div>
        <div className="bg-white dark:bg-card p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            <h4 className="font-bold">Sophia Lee</h4>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            “I can quickly search, compare prices, and order without any hassle. A premium shopping experience and great discount deals!”
          </p>
        </div>
      </div>
    </section>
  );
};
