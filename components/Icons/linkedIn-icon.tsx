"use client";
import { motion, SVGMotionProps } from "framer-motion";

export default function LinkedInIcon(
  props: SVGMotionProps<SVGSVGElement>
) {
  return (
    <motion.svg
      whileHover={{ scale: 1.15, to: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#0077b5]"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </motion.svg>
  );
}
