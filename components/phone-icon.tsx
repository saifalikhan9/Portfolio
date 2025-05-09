"use client"
import { motion } from "framer-motion";

export default function PhoneIcon() {
  return (
    <motion.svg
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 300 }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="4" fill="#34A853" />
      <path
        d="M6.62 10.79C8.06 13.83 10.17 15.94 13.21 17.38L15.41 15.17C15.66 14.92 16.03 14.84 16.36 14.94C17.41 15.28 18.54 15.46 19.71 15.46C20.15 15.46 20.5 15.81 20.5 16.25V20C20.5 20.41 20.15 20.75 19.75 20.75C10.46 20.75 3.25 13.54 3.25 4.25C3.25 3.85 3.59 3.5 4 3.5H7.75C8.19 3.5 8.54 3.85 8.54 4.29C8.54 5.46 8.72 6.59 9.06 7.64C9.16 7.97 9.08 8.34 8.83 8.59L6.62 10.79Z"
        fill="white"
      />
    </motion.svg>
  );
}
