"use client"
import { motion } from "framer-motion";

export default function EmailIcon() {
  return (
    <motion.svg
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 300 }}
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z"
        fill="#F2F2F2"
      />
      <path
        d="M20 4H4C2.9 4 2 4.9 2 6L12 13L22 6C22 4.9 21.1 4 20 4Z"
        fill="#EA4335"
      />
      <path
        d="M2 6L12 13L22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6Z"
        fill="#FFFFFF"
      />
    </motion.svg>
  );
}
