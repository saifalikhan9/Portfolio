"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Heading from "./headingText";

export function HeroSection() {
  return (
    <section className="">
      <div className="container mx-auto z-10 flex flex-col md:flex-row items-center justify-between gap-13">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <Heading />

          <h2 className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Crafting intuitive web experiences from concept to code.
          </h2>
          <p className="my-4">
            I blend clean design with solid engineering to build digital
            products that don`&apos;`t just work  they make an impact. Whether it`&apos;`s a
            sleek website, a powerful web app, or a custom solution, I help
            bring ideas to life with clarity and purpose.
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
        <div className="w-full md:w-1/2 flex justify-center ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              relative
              flex justify-end items-center
              aspect-square
              w-full
              max-w-xs
              sm:max-w-sm
              md:max-w-md
              lg:max-w-lg
              mx-auto lg:mx-0
              rounded-lg
              overflow-hidden
            "
          >
            <Image
              src="/images/dp.jpg"
              alt="Profile picture"
              height={400}
              width={400}
              style={{ objectFit: "cover" }}
              className="rounded-xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
