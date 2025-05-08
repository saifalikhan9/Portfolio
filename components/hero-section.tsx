"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden ">
      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            I’m <span className="text-primary">Saif</span> — Code Alchemist
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Turning CRUD operations into gold‑standard features, debugging race
            conditions with <code className="font-mono">async/await</code>, and
            deploying zero‑downtime updates via{" "}
            <code className="font-mono">Docker Swarm</code>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="#projects">
                View my work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Contact me</Link>
            </Button>
          </div>
        </motion.div>

        {/* Image */}
        <div className=" flex justify-center w-full " >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
           className="relative aspect-square w-full lg:max-w-sm max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden "
          >
            <Image
              src="/images/dp.jpg"
              alt="Profile picture"
              fill
           
              className="rounded-xl "
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
