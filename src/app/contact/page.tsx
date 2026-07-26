"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // Simulate sending contact message
    setTimeout(() => {
      setLoading(false);
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    }, 1000);
  }

  return (
    <main className="container py-20 px-6 mx-auto max-w-6xl">
      <div className="text-center mb-16 animate-fade-in-up opacity-0">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Contact Our Team</h1>
        <p className="mt-4 text-muted-foreground text-base max-w-2xl mx-auto">
          Have questions about orders, products, or merchant setup? Drop us a message, and our customer support team will reply within 24 hours.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* Contact Form */}
        <div className="lg:col-span-2 animate-fade-in-up opacity-0" style={{ animationDelay: "150ms" }}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "success" && (
                  <div className="p-4 text-sm text-green-700 bg-green-50 dark:bg-green-950/20 dark:text-green-400 rounded-xl border border-green-200 dark:border-green-900/50">
                    Thank you! Your message has been sent successfully. We will get back to you shortly.
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="min-h-40"
                  />
                </div>

                <Button type="submit" className="w-full flex items-center justify-center gap-2" disabled={loading}>
                  <Send className="size-4" />
                  {loading ? "Sending..." : "Submit Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Details Info Card */}
        <div className="space-y-6 animate-fade-in-up opacity-0" style={{ animationDelay: "300ms" }}>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">Support Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-primary/10 text-primary rounded-xl shrink-0">
                  <Mail className="size-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Email Address</h4>
                  <p className="text-xs text-muted-foreground mt-1">support@nextmart.example.com</p>
                  <p className="text-xs text-muted-foreground">merchants@nextmart.example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-secondary/10 text-secondary rounded-xl shrink-0">
                  <Phone className="size-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Phone Line</h4>
                  <p className="text-xs text-muted-foreground mt-1">+1 (800) 555-0199 (Toll Free)</p>
                  <p className="text-xs text-muted-foreground">+1 (555) 0120-4322 (Direct Line)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-primary/10 text-primary rounded-xl shrink-0">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Corporate HQ</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Next Mart Inc.<br />
                    100 Innovation Parkway, Suite 500<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t pt-6">
                <div className="p-2.5 bg-muted text-foreground rounded-xl shrink-0">
                  <Clock className="size-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Working Hours</h4>
                  <p className="text-xs text-muted-foreground mt-1">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p className="text-xs text-muted-foreground">Saturday: 10:00 AM - 4:00 PM EST</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
