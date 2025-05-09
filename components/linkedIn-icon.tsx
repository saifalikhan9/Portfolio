"use client"
import { motion } from "framer-motion";

export default function LinkedInIcon() {
  return (
    <motion.svg
      whileHover={{ scale: 1.15,to : 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        d="M6.94 8.44H4.56V19H6.94V8.44ZM5.75 4.5C4.92 4.5 4.25 5.17 4.25 6C4.25 6.83 4.92 7.5 5.75 7.5C6.58 7.5 7.25 6.83 7.25 6C7.25 5.17 6.58 4.5 5.75 4.5ZM19.44 13.38C19.44 10.84 17.91 9.44 15.97 9.44C14.63 9.44 13.9 10.17 13.56 10.75V9H11.19V19H13.56V13.91C13.56 12.5 14.31 11.75 15.38 11.75C16.41 11.75 16.81 12.52 16.81 13.75V19H19.44V13.38Z"
        fill="white"
      />
    </motion.svg>
  );
}
