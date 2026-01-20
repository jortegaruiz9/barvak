"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  text: string;
  videoId: string;
  logoSrc?: string;
  logoAlt?: string;
}

const NAVBAR_HEIGHT = "4rem";

export default function Hero({
  text,
  videoId,
  logoSrc,
  logoAlt = "Logo",
}: HeroProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleScroll = useCallback(() => {
    setIsExpanded(window.scrollY > 50);
  }, []);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  return (
    <motion.section
      className={`relative min-h-[calc(100vh-${NAVBAR_HEIGHT})] w-full`}
      animate={{
        paddingLeft: isExpanded ? 0 : "clamp(1rem, 4vw, 3rem)",
        paddingRight: isExpanded ? 0 : "clamp(1rem, 4vw, 3rem)",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className={`relative w-full h-[calc(100vh-${NAVBAR_HEIGHT})] overflow-hidden`}
        animate={{
          borderRadius: isExpanded ? 0 : "1rem",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350%] h-full md:w-[120%] md:h-[120%] md:scale-125 pointer-events-none"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1`}
          title="Background video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          aria-hidden="true"
          tabIndex={-1}
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center justify-between h-full px-4 md:px-6 py-12 md:py-16">
          <div className="flex-1 flex items-center justify-center">
            <div className="max-w-4xl text-center flex flex-col items-center gap-8 md:gap-12">
              {logoSrc && (
                <div className="w-24 h-24 lg:w-32 lg:h-32">
                  <Image
                    src={logoSrc}
                    alt={logoAlt}
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              )}
              <h1 className="text-lg md:text-2xl lg:text-3xl text-white/90 w-5/6 max-w-3xl">
                {text}
              </h1>
            </div>
          </div>

          <div className="flex flex-col items-center pb-6 md:pb-8">
            <div className="h-16 w-px bg-white/30 overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 w-full h-1/2 bg-white"
                animate={{ y: ["0%", "200%"] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <span className="text-xs text-white/70 mt-3 uppercase tracking-widest">
              Scroll to discover
            </span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}