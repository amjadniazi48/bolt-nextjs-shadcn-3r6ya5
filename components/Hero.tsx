"use client";

import { motion } from "framer-motion";
import { ArrowRight, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl">
            <span className="block">Ideas that</span>
            <span className="block text-primary">shape the future</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-xl text-muted-foreground sm:max-w-3xl">
            Discover thought-provoking articles, expert insights, and the latest trends in technology, design, and innovation.
          </p>
          <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Start Reading <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="mt-4 sm:mt-0 w-full sm:w-auto">
              Subscribe <Newspaper className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}