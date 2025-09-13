"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";

export function NavbarDemo() {
  const resumeLink =
    "https://drive.google.com/drive/folders/1Qzh8Oyi5LAHRg_9xuKMsbzInzURq66Lw";

  const navItems = [
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Contact",
      link: "#contact",
    },
    {
      name: "Resume",
      link: resumeLink,
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody className="">
        <NavbarLogo imgLink="/images/logo.svg" width={100} />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton variant="primary">
            <ModeToggle />
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo imgLink="/images/logo.svg" width={100} />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="mx-5">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
            >
              <ModeToggle />
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
