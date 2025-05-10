
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils' 
import { ModeToggle } from "@/components/mode-toggle"; 
import { MenuIcon } from './Icons/menu-bar-icon'

export  function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(prev => !prev)

  const headerVariants = {
    open: { height: 'auto', transition: { duration: 0.4 } },
    closed: { height: '3rem', transition: { duration: 0.4 } }, 
  }

  return (
    <motion.header
      animate={menuOpen ? 'open' : 'closed'}
      variants={headerVariants}
      className={cn(
        "fixed top-0 sm:top-6 z-50 w-full max-w-5xl mx-auto sm:rounded-lg border bg-background/80 backdrop-blur-md overflow-hidden",
        scrolled ? "shadow-sm" : "shadow-lg"
      )}
    >
      <div className="flex flex-col">
        <div className="flex h-12 items-center justify-between px-4">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={100}
              height={40}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-6">
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
            <Link
              href="https://drive.google.com/file/d/1f_dS3JFsLZFifzUYax81gvr8WLghvpKd/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Resume
            </Link>
            <ModeToggle />
          </div>

          {/* Mobile menu toggle */}
          <div className="sm:hidden">
            <button onClick={toggleMenu} className=" flex items-center text-sm font-medium">
              Menu
              <MenuIcon menuOpen={menuOpen} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              key="mobile-nav"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden flex flex-col items-start gap-2 px-4 pb-4 pt-10"
            >
              <Link href="#projects" className="text-2xl font-medium hover:text-primary transition-colors">Projects</Link>
              <Link href="#about" className="text-2xl font-medium hover:text-primary transition-colors">About</Link>
              <Link href="#contact" className="text-2xl font-medium hover:text-primary transition-colors">Contact</Link>
              <Link
                href="https://drive.google.com/file/d/1f_dS3JFsLZFifzUYax81gvr8WLghvpKd/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-500 font-medium hover:text-primary transition-colors"
              >
                Resume
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
