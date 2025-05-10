import { motion } from "framer-motion";

export const MenuIcon = ({ menuOpen }: { menuOpen: boolean }) => {
  return (
    <div className="relative w-6 h-6 mx-2 flex items-center justify-center  bg-gray-300 rounded">
      {/* Top Bar */}
      <motion.span
        className="absolute w-4 h-0.5 bg-black"
        initial={false}
        animate={{
          rotate: menuOpen ? 45 : 0,
          y: menuOpen ? 0 : -3,
        }}
        transition={{ duration: 0.3 }}
      />
     
      {/* Bottom Bar */}
      <motion.span
        className="absolute w-4 h-0.5 bg-black"
        initial={false}
        animate={{
          rotate: menuOpen ? -45 : 0,
          y: menuOpen ? 0 : 3,
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};
