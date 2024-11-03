"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "sonner";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thanks for subscribing! Check your email to confirm.");
    setEmail("");
  };

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <Mail className="mx-auto h-12 w-12 mb-6 opacity-90" />
        <h2 className="text-3xl font-bold mb-4">Stay in the loop</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Get the latest articles, insights, and updates delivered straight to your inbox.
          Join our growing community of readers.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-primary-foreground text-primary"
            required
          />
          <Button variant="secondary" type="submit">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}