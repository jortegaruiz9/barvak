"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, User, Plus, Phone, Mail } from "lucide-react";
import { Icon } from "@iconify/react";
import { Button } from "../ui/button";
import { NativeSelect, NativeSelectOption } from "../ui/native-select";
import { cn } from "@/lib/utils";
import {
  navLabels,
  propertyPortalLinks,
  contactInfo,
  socialLinks,
  logo,
} from "@/lib/data/navbar";

const navItems = [
  { path: "/", label: navLabels.home },
  { path: "/barvak", label: navLabels.barvakEstate },
  { path: "/equestrian-world", label: navLabels.equestrianWorld },
  { path: "/reforestation", label: navLabels.reforestation },
  { path: "/experiences", label: navLabels.experiences },
  { path: "/projects", label: navLabels.projects },
  { path: "/news", label: navLabels.news },
  { path: "/events", label: navLabels.events },
];

const UserIcon = User;
const PlusIcon = Plus;

const mobileSocialLinks = socialLinks.filter((link) =>
  ["Instagram", "Facebook"].includes(link.label),
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Cerrar menú móvil al cambiar de ruta
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevenir scroll cuando menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-40 transition-all duration-300 bg-white"
      >
        <div className="flex h-16 justify-between items-center px-6 md:px-12 text-neutral-800">
          {/* Logo */}
          <Link href="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-12 h-12"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-x-6 text-xs xl:text-sm">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={cn(
                      "transition-opacity hover:opacity-60",
                      pathname === item.path ? "opacity-60" : "opacity-100",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-x-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <NativeSelect
                defaultValue="es"
                size="sm"
                className="border-none shadow-none bg-transparent text-sm w-16 pl-2 focus:ring-0 focus:border-none focus-visible:ring-0 focus-visible:border-none"
              >
                <NativeSelectOption value="es">ES</NativeSelectOption>
                <NativeSelectOption value="en">US</NativeSelectOption>
              </NativeSelect>
            </motion.div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="size-6" strokeWidth={1} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="size-6" strokeWidth={1} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <Button variant="normal" size="normal" className="hidden lg:block">
              Contact Us
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 z-30 bg-white/95 backdrop-blur-md lg:hidden"
          >
            <nav className="flex flex-col h-full font-extralight gap-y-6 px-6 py-8 overflow-y-auto">
              {/* Sales Inquiry Button */}

              {/* Main Menu */}
              <ul className="flex flex-col w-full gap-y-3">
                <li className="text-sm font-bold text-green-900">Main Menu</li>
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index + 1) * 0.1 }}
                    className="w-full"
                  >
                    <div className="flex items-center justify-between w-full">
                      <Link
                        href={item.path}
                        className={cn(
                          "text-3xl transition-colors hover:text-lime-500 items-center",
                          pathname === item.path
                            ? "text-lime-500"
                            : "text-neutral-800",
                        )}
                      >
                        {item.label}
                      </Link>
                      <ChevronRight strokeWidth={1} size={16} />
                    </div>
                  </motion.li>
                ))}
              </ul>

              {/* Property Portal Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navItems.length + 1) * 0.1 }}
                className="flex flex-col gap-y-3"
              >
                <h3 className="text-sm font-bold text-green-900">
                  Property Portal
                </h3>
                {propertyPortalLinks.map((link) => {
                  const LinkIcon = link.icon === "User" ? UserIcon : PlusIcon;
                  return (
                    <Link
                      key={link.label}
                      href={link.path}
                      className="flex items-center gap-x-3 text-neutral-800 hover:text-lime-500 transition-colors"
                    >
                      <LinkIcon strokeWidth={1.5} size={20} />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </motion.div>

              {/* General Inquiries Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navItems.length + 2) * 0.1 }}
                className="flex flex-col gap-y-3"
              >
                <h3 className="text-sm font-bold text-green-900">
                  General Inquiries
                </h3>
                <a
                  href={contactInfo.phone.href}
                  className="flex items-center gap-x-3 text-neutral-800 hover:text-lime-500 transition-colors"
                >
                  <Phone strokeWidth={1.5} size={20} />
                  <span>{contactInfo.phone.text}</span>
                </a>
                <a
                  href={contactInfo.email.href}
                  className="flex items-center gap-x-3 text-neutral-800 hover:text-lime-500 transition-colors"
                >
                  <Mail strokeWidth={1.5} size={20} />
                  <span>{contactInfo.email.text}</span>
                </a>

                <div>
                  <Button
                    variant="outline"
                    size="normal"
                    className=" border-neutral-900 text-neutral-900 hover:bg-neutral-50 rounded-full mt-2"
                  >
                    Contact us
                  </Button>
                </div>
              </motion.div>

              {/* Follow us Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navItems.length + 3) * 0.1 }}
                className="flex flex-col gap-y-3"
              >
                <h3 className="text-sm font-bold text-green-900">Follow us</h3>
                <div className="flex flex-col items-start gap-3">
                  {mobileSocialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-3 text-neutral-800 hover:text-lime-500 transition-colors"
                      aria-label={link.label}
                    >
                      <Icon icon={link.icon} className="text-xl" />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
