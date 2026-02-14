"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ShowMenuItem } from "./showMenu";

interface SlideShowProps {
  items: ShowMenuItem[];
  className?: string;
}

const SlideShow = ({ items, className }: SlideShowProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  if (items.length === 0) return null;

  const current = items[selectedIndex] ?? items[0];

  return (
    <section className={cn("w-full", className)}>
      {/* Mobile: white accordion with framer fade */}
      <div className="flex flex-col gap-2 md:hidden">
        {items.map((item, index) => {
          const isOpen = selectedIndex === index;
          return (
            <div key={index}>
              <button
                type="button"
                className={cn(
                  "w-full py-5 px-4 text-left text-2xl font-light cursor-pointer transition-opacity duration-300",
                  isOpen ? "text-black opacity-100" : "text-black/30",
                )}
                onClick={() => setSelectedIndex(index)}
              >
                <span className="flex items-center gap-2">
                  {item.label}
                  {isOpen && (
                    <span className="w-2.5 h-2.5 rounded-full bg-lime-500 shrink-0" />
                  )}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-6">
                      <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                        {item.description}
                      </p>
                    </div>
                    <div className="relative w-full aspect-square overflow-hidden rounded-sm mx-auto">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="100vw"
                        quality={85}
                        className="object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent px-4 py-4 text-center">
                        <span className="text-white text-lg font-light">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Desktop: menu left with description, image right */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-12 lg:gap-16 md:items-start">
        {/* Left: menu labels + description under selected */}
        <div className="flex flex-col gap-1">
          {items.map((item, index) => {
            const isSelected = selectedIndex === index;
            return (
              <div key={index}>
                <button
                  type="button"
                  className={cn(
                    "text-left text-2xl md:text-[2.25rem] font-light cursor-pointer transition-opacity duration-300 py-3 flex items-center gap-3",
                    isSelected
                      ? "text-black opacity-100"
                      : "text-black/30 hover:opacity-60",
                  )}
                  onClick={() => setSelectedIndex(index)}
                >
                  {item.label}
                  {isSelected && (
                    <span className="w-2.5 h-2.5 rounded-full bg-lime-500 shrink-0" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-base text-muted-foreground leading-relaxed text-pretty pb-4 pr-8">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Right: image with fade transition */}
        <div className="relative w-full aspect-square overflow-hidden rounded-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={current.image}
                alt={current.alt}
                fill
                sizes="50vw"
                quality={85}
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent px-6 py-6 text-center">
                <span className="text-white text-xl font-light">
                  {current.label}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SlideShow;
