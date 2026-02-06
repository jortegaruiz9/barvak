"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";
import { SectionHeader } from "./sectionHeader";

interface HorizontalScrollCard {
  id: string;
  url: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
}

interface HorizontalScrollProps {
  cards: HorizontalScrollCard[];
  title?: string;
  description?: string;
  className?: string;
}

const MOBILE_BREAKPOINT = 768;

const HorizontalScroll = ({
  cards,
  title,
  description,
  className,
}: HorizontalScrollProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const [wrapperHeight, setWrapperHeight] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    const indicator = scrollIndicatorRef.current;

    if (!track || !wrapper) return;

    gsap.registerPlugin(ScrollTrigger);

    const mediaQuery = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`);
    let ctx: gsap.Context | null = null;
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    let isInSection = false;
    let hasPassedSection = false;

    const showIndicator = () => {
      if (!indicator || hasPassedSection) return;
      gsap.to(indicator, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const hideIndicator = (expand = false) => {
      if (!indicator) return;
      gsap.to(indicator, {
        opacity: 0,
        scale: expand ? 1.5 : 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleScrollInSection = () => {
      if (hasPassedSection) return;

      hideIndicator();

      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (isInSection && !hasPassedSection) {
          showIndicator();
        }
      }, 800);
    };

    const setupDesktopScroll = () => {
      if (!mediaQuery.matches) {
        setWrapperHeight(undefined);
        return;
      }

      // Initially hide indicator
      if (indicator) {
        gsap.set(indicator, { opacity: 0 });
      }

      // Wait for next frame to ensure DOM is fully rendered
      requestAnimationFrame(() => {
        const scrollDistance = track.scrollWidth - window.innerWidth;
        setWrapperHeight(`${window.innerHeight + scrollDistance}px`);

        ctx = gsap.context(() => {
          gsap.to(track, {
            x: () => -(track.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: () => `+=${track.scrollWidth - window.innerWidth}`,
              scrub: 0.5,
              invalidateOnRefresh: true,
              onUpdate: () => {
                if (isInSection && !hasPassedSection) {
                  handleScrollInSection();
                }
              },
              onEnter: () => {
                isInSection = true;
                hasPassedSection = false;
                showIndicator();
              },
              onLeave: () => {
                isInSection = false;
                hasPassedSection = true;
                hideIndicator(true);
              },
              onEnterBack: () => {
                isInSection = true;
                hasPassedSection = false;
                showIndicator();
              },
              onLeaveBack: () => {
                isInSection = false;
                hideIndicator();
              },
            },
          });
        });
      });
    };

    const handleMediaChange = () => {
      ctx?.revert();
      ctx = null;
      setupDesktopScroll();
    };

    const handleResize = () => {
      if (mediaQuery.matches) {
        ScrollTrigger.refresh();
      }
    };

    setupDesktopScroll();

    mediaQuery.addEventListener("change", handleMediaChange);
    window.addEventListener("resize", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("resize", handleResize);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      ctx?.revert();
      setWrapperHeight(undefined);
    };
  }, [cards]);

  const renderMobileCard = (card: HorizontalScrollCard) => (
    <Link
      key={`mobile-${card.id}`}
      href={card.url}
      aria-label={`${card.title} - ${card.summary}`}
      className="group shrink-0 h-[78vh] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <article className="relative flex h-full overflow-clip rounded-md aspect-3/5">
        <div className="absolute inset-0">
          <Image
            src={card.image}
            alt={card.imageAlt?.trim() ? card.imageAlt : "Card image"}
            fill
            sizes="(max-width: 767px) 45vw, 33vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 flex w-full flex-col justify-end p-6 text-white text-right">
          <h3 className="mb-3 text-xl md:text-2xl font-medium text-balance">
            {card.title}
          </h3>
          <p className="text-sm text-white/90 text-pretty">{card.summary}</p>
        </div>
      </article>
    </Link>
  );

  const renderDesktopCards = (card: HorizontalScrollCard, index: number) => {
    const isTextTop = index % 2 === 0;

    return (
      <div
        key={card.id}
        className="contents"
        role="group"
        aria-label={card.title}
      >
        {/* Text Card */}
        <Link
          href={card.url}
          aria-label={`${card.title} - Ver más`}
          className="group shrink-0 h-[calc(100vh-6rem)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <article className="flex h-full overflow-clip rounded-md aspect-[3/5.5]">
            <div
              className={cn(
                "flex w-full flex-col bg-muted p-6 text-right",
                isTextTop ? "justify-end pb-12" : "justify-start pt-12",
              )}
            >
              <h3 className="mb-3 text-xl md:text-2xl font-medium text-balance">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground text-balance">
                {card.summary}
              </p>
            </div>
          </article>
        </Link>

        {/* Image Card */}
        <Link
          href={card.url}
          aria-label={`${card.title} - Ver imagen`}
          className="group shrink-0 h-[calc(100vh-6rem)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <article className="flex h-full overflow-clip rounded-md aspect-[3/5.5]">
            <div className="relative h-full w-full">
              <Image
                src={card.image}
                alt={card.imageAlt?.trim() ? card.imageAlt : "Card image"}
                fill
                sizes="40vw"
                className="object-cover"
              />
            </div>
          </article>
        </Link>
      </div>
    );
  };

  return (
    <section
      className={cn("relative", className)}
      aria-label={title ?? "Horizontal scroll gallery"}
    >
      {title && (
        <SectionHeader
          title={title}
          description={description}
          className="pb-10"
        />
      )}

      {/* Mobile Layout - CSS controlled visibility */}
      <div className="block md:hidden w-full h-[78vh] overflow-x-auto scrollbar-hide">
        <div className="flex h-full w-max items-center gap-3 px-4">
          {cards.map(renderMobileCard)}
        </div>
      </div>

      {/* Desktop Layout - CSS controlled visibility */}
      <div
        ref={wrapperRef}
        className="hidden md:block relative"
        style={{ height: wrapperHeight }}
      >
        <div className="sticky top-16 h-[calc(100vh-4rem)] w-full overflow-hidden flex items-start">
          <div ref={trackRef} className="flex w-max gap-6 px-12">
            {cards.map(renderDesktopCards)}
          </div>

          {/* Scroll indicator - stacked arrows */}
          <div
            ref={scrollIndicatorRef}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <div className="flex flex-col items-center -space-y-3 bg-lime-500 rounded-full p-4 shadow-lg">
              <svg
                className="w-6 h-6 text-white/40 animate-scroll-arrow-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <svg
                className="w-6 h-6 text-white/60 animate-scroll-arrow-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <svg
                className="w-6 h-6 text-white animate-scroll-arrow-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HorizontalScroll };
export type { HorizontalScrollCard, HorizontalScrollProps };
