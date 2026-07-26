import Link from "next/link";
import { ShieldCheck, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
  return (
    <main className="container py-20 px-6 mx-auto max-w-4xl">
      {/* Back button link */}
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="inline-flex items-center gap-2">
            <ArrowLeft className="size-4" /> Back to Home
          </Button>
        </Link>
      </div>

      <div className="space-y-12">
        {/* Title Block */}
        <div className="border-b pb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="text-muted-foreground text-sm">Last updated: July 26, 2026</p>
          </div>
          <div className="p-3 bg-primary/10 text-primary rounded-2xl w-fit">
            <ShieldCheck className="size-10" />
          </div>
        </div>

        {/* Content Blocks */}
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-sm leading-relaxed text-muted-foreground">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">1. Introduction</h2>
            <p>
              Welcome to Next Mart (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our e-commerce platform and purchase products from our verified merchants.
            </p>
            <p>
              By accessing or using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms outlined here, please do not use our platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">2. Information We Collect</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our services to you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Personal Identification Data:</strong> While using our platform, we may ask you to provide us with certain personally identifiable information, including your full name, email address, physical shipping address, billing address, phone number, and payment credentials.
              </li>
              <li>
                <strong className="text-foreground">Usage Data:</strong> We may also collect details on how you navigate our platform, such as your IP address, browser type, device type, pages viewed, time spent, and referral URLs.
              </li>
              <li>
                <strong className="text-foreground">Cookies & Tracking:</strong> We use cookies, web beacons, and similar tracking technologies to track activity on our platform and hold session information to personalize your browsing experience.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">3. How We Use Your Information</h2>
            <p>
              Next Mart uses the collected data for various essential business operations, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To facilitate transaction processing, invoice generation, and merchant routing for shipping.</li>
              <li>To provide customer support and troubleshoot technical or order queries.</li>
              <li>To notify you about changes to our services, shipping tracking updates, or promotional offerings.</li>
              <li>To detect, prevent, and address security incidents or fraudulent transactions.</li>
              <li>To analyze site usage metrics to improve catalog layouts and product search performance.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">4. Sharing and Disclosure of Data</h2>
            <p>
              We do not sell your personal data. However, we may share your information with trusted third parties under specific circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Verified Merchants:</strong> We share your name, shipping address, and phone number with the merchant supplying the products you ordered to facilitate fulfillment.
              </li>
              <li>
                <strong className="text-foreground">Service Providers:</strong> We employ third-party companies (such as Stripe, Firebase, and shipping carriers) to perform payment processing, database hosting, and parcel deliveries.
              </li>
              <li>
                <strong className="text-foreground">Legal Obligations:</strong> We may disclose information if required to do so by law enforcement, court order, or governmental regulations.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">5. Data Security</h2>
            <p>
              The security of your data is of paramount importance to us. We implement standard security protocols, including SSL encryption during transit, secure token authorization, and database firewalls. However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">6. Your Rights and Choices</h2>
            <p>
              Depending on your location, you may have specific data protection rights under regulations like GDPR or CCPA. These rights include the ability to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access, update, or delete the personal information we hold on you.</li>
              <li>Object to the processing of your personal data or request restrictions.</li>
              <li>Request copy transfers of your personal data in a readable format.</li>
              <li>Withdraw your consent at any time where we relied on consent to process your information.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">7. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, please contact our privacy compliance team:
            </p>
            <div className="flex items-center gap-3 mt-4 text-foreground font-semibold">
              <Mail className="size-5 text-primary" />
              <span>privacy@nextmart.example.com</span>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
