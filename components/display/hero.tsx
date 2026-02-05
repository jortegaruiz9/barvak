"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  text: string;
  videoId: string;
  logoSrc?: string;
  logoAlt?: string;
  startTime?: number;
  endTime?: number;
}

export default function Hero({
  text,
  videoId,
  logoSrc,
  logoAlt = "Logo",
  startTime,
  endTime,
}: HeroProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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

  // Lazy load the YouTube iframe after initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden"
      animate={{
        paddingLeft: isExpanded ? 0 : "clamp(1rem, 4vw, 3rem)",
        paddingRight: isExpanded ? 0 : "clamp(1rem, 4vw, 3rem)",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="relative w-full h-[calc(100vh-4rem)] overflow-hidden"
        animate={{
          borderRadius: isExpanded ? 0 : "1rem",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* YouTube iframe - loaded after delay */}
        {isVideoLoaded && (
          <iframe
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350%] h-full md:w-[120%] md:h-[120%] md:scale-125 pointer-events-none"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1${startTime ? `&start=${startTime}` : ""}${endTime ? `&end=${endTime}` : ""}`}
            title="Background video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            aria-hidden="true"
            tabIndex={-1}
            loading="lazy"
          />
        )}

        {/* YouTube thumbnail as placeholder */}
        <Image
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="Video background"
          fill
          sizes="100vw"
          className={`object-cover transition-opacity duration-500 ${
            isVideoLoaded ? "opacity-0" : "opacity-100"
          }`}
          priority
        />

        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content overlay - outside of the resizing container */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-between px-4 md:px-6 py-12 md:py-16 pointer-events-none"
        animate={{
          opacity: isExpanded ? 0 : 1,
          scale: isExpanded ? 1.1 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="max-w-4xl text-center flex flex-col items-center gap-8 md:gap-12">
            {logoSrc && logoSrc.trim() !== "" && (
              <div className="w-24 h-24 lg:w-32 lg:h-32">
                <Image
                  src={logoSrc}
                  alt={logoAlt?.trim() ? logoAlt : "Logo"}
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            )}
            <h1 className="text-lg md:text-2xl lg:text-3xl text-white/90 w-[80vw] max-w-3xl">
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
      </motion.div>
    </motion.section>
  );
}