"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-muted/30">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12 animate-fade-in-up opacity-0">
          <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="mt-2 text-muted-foreground text-sm">
            Got questions? We have answers. Find key details about our shipping, returns, payment methods, and 24/7 client support.
          </p>
        </div>

        <Accordion defaultValue={["faq-0"]} multiple className="space-y-4 animate-fade-in-up opacity-0" style={{ animationDelay: "150ms" }}>
          <AccordionItem value="faq-0" className="rounded-xl border bg-background px-4 py-2">
            <AccordionTrigger className="text-base font-semibold hover:no-underline">
              How long does standard delivery take?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground mt-2 leading-relaxed">
              Standard shipping takes between 3 to 5 business days depending on your location. We also offer express 1-2 day shipping options at checkout.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-1" className="rounded-xl border bg-background px-4 py-2">
            <AccordionTrigger className="text-base font-semibold hover:no-underline">
              What is your return and refund policy?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground mt-2 leading-relaxed">
              We offer a 30-day money-back guarantee. If you are not completely satisfied with your purchase, you can return it in its original packaging for a full refund or exchange.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-2" className="rounded-xl border bg-background px-4 py-2">
            <AccordionTrigger className="text-base font-semibold hover:no-underline">
              Are payments secure on your platform?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground mt-2 leading-relaxed">
              Absolutely. We protect your data using industry-standard SSL encryption and partner with globally recognized payment gateways (such as Stripe and PayPal) to ensure your payments are 100% secure.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-3" className="rounded-xl border bg-background px-4 py-2">
            <AccordionTrigger className="text-base font-semibold hover:no-underline">
              Do you offer customer support for orders?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground mt-2 leading-relaxed">
              Yes, our customer support team is available 24/7. You can reach out to us via email, our live chat on the platform, or by calling our support helpline.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
