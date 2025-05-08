"use client";

import Image from "next/image";
import { motion } from "framer-motion";


export function AboutSection() {
  return (
    <section id="about" className="">
      <div className="container">
        <motion.main className="w-full mx-auto p-4  ">
          <motion.h1
            className="text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h1>

          <motion.p
            className="text-gray-700 w-full mb-16 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            When I&apos;m not working, you can find me exploring new places,
            tasting different cuisines, or cooking something delicious in the
            kitchen. I&apos;m also a huge anime fan there&apos;s nothing like a
            good series to relax with after a long day. Whether it&apos;s
            designing, traveling, eating, cooking, or anime-binging, I&apos;m
            all about enjoying life to the fullest
          </motion.p>

          {/* Image Gallery */}
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <motion.div
              className="relative w-64 h-64 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Image
                src="/images/boiledegg.avif"
                alt="Food with eggs"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="relative w-64 h-64 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.8, rotate: 4 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 4 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.1,
              }}
            >
              <Image
                src="/images/travel.jpg"
                alt="Travel building"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="relative w-64 h-64 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.2,
              }}
            >
              <Image
                src="/images/bleach.gif"
                alt="Anime character"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.main>
      </div>
    </section>
  );
}
