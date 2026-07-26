"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function loginUser(emailVal: string, passwordVal: string) {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailVal,
          password: passwordVal,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        router.push("/");
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit(data: React.FormEvent) {
    data.preventDefault();
    await loginUser(email, password);
  }

  async function handleDemoLogin() {
    setEmail("admin@example.com");
    setPassword("password123");
    await loginUser("admin@example.com", "password123");
  }

  async function handleUserLogin() {
    setEmail("user@example.com");
    setPassword("password123");
    await loginUser("user@example.com", "password123");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>

          <p className="text-muted-foreground text-sm">
            Enter your email below to login
          </p>
        </div>

        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label>Email</Label>

            <Input
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label>Password</Label>

              <Link
                href="/forgot-password"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={handleDemoLogin}
          >
            Demo Admin Login
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={handleUserLogin}
          >
            Demo User Login
          </Button>
        </div>

        <div className="text-center text-sm">
          Don't have an account?{" "}
          <Link href="/signup" className="underline underline-offset-4">
            Sign up
          </Link>
        </div>
      </div>
    </form>
  );
}