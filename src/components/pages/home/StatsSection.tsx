"use client";

import { useEffect, useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { TrendingUp, Users, ShoppingBag, Landmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { month: "Jan", sales: 12000, users: 5000, merchants: 200 },
  { month: "Feb", sales: 19000, users: 7500, merchants: 250 },
  { month: "Mar", sales: 32000, users: 12000, merchants: 400 },
  { month: "Apr", sales: 48000, users: 18000, merchants: 650 },
  { month: "May", sales: 74000, users: 29000, merchants: 900 },
  { month: "Jun", sales: 98000, users: 42000, merchants: 1200 },
];

export function StatsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="py-20 px-6 bg-white dark:bg-card">
        <div className="mx-auto max-w-6xl">
          <div className="h-[450px] w-full animate-pulse rounded-2xl bg-muted/50" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-white dark:bg-card">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up opacity-0">
          <h2 className="text-3xl font-bold tracking-tight">Platform Growth</h2>
          <p className="mt-2 text-muted-foreground text-sm">
            Explore our expanding ecosystem and key performance metrics.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-10">
          <Card className="animate-fade-in-up opacity-0" style={{ animationDelay: "100ms" }}>
            <CardContent className="p-6 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Monthly Active Users</p>
                <h3 className="text-3xl font-bold">42.8K</h3>
                <p className="text-xs text-green-600 flex items-center gap-1 font-semibold">
                  <TrendingUp className="size-3.5" /> +15.4% this month
                </p>
              </div>
              <div className="p-3 bg-primary/10 text-primary rounded-xl">
                <Users className="size-6" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up opacity-0" style={{ animationDelay: "200ms" }}>
            <CardContent className="p-6 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Gross Merchandise Value</p>
                <h3 className="text-3xl font-bold">$98.2K</h3>
                <p className="text-xs text-green-600 flex items-center gap-1 font-semibold">
                  <TrendingUp className="size-3.5" /> +32.1% this month
                </p>
              </div>
              <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
                <ShoppingBag className="size-6" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up opacity-0" style={{ animationDelay: "300ms" }}>
            <CardContent className="p-6 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Verified Merchants</p>
                <h3 className="text-3xl font-bold">1,200+</h3>
                <p className="text-xs text-green-600 flex items-center gap-1 font-semibold">
                  <TrendingUp className="size-3.5" /> +8.3% this month
                </p>
              </div>
              <div className="p-3 bg-muted text-foreground rounded-xl">
                <Landmark className="size-6" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-xl border bg-background p-6 animate-fade-in-up opacity-0" style={{ animationDelay: "400ms" }}>
          <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
            Monthly Transactions & Revenue Trend
            <span className="text-xs text-muted-foreground font-normal">($ in USD)</span>
          </h4>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(221.2 83.2% 53.3%)" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="hsl(221.2 83.2% 53.3%)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="usersGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(24.6 95% 53.1%)" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="hsl(24.6 95% 53.1%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted" />
                <XAxis dataKey="month" stroke="hsl(215.4 16.3% 46.9%)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(215.4 16.3% 46.9%)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "0.75rem",
                    color: "hsl(var(--foreground))"
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="sales"
                  name="Monthly Sales ($)"
                  stroke="hsl(221.2 83.2% 53.3%)"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#salesGrad)"
                />
                <Area
                  type="monotone"
                  dataKey="users"
                  name="Active Customers"
                  stroke="hsl(24.6 95% 53.1%)"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#usersGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
