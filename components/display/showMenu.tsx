"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/** Single menu item: label for the pill, content (title, description, image). Colors are assigned by the component. */
export interface ShowMenuItem {
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  /** Optional: number of grid columns this item spans on desktop (e.g. 3 for "Barvak Camp"). */
  desktopSpan?: number;
}

interface ShowMenuProps {
  items: ShowMenuItem[];
  autoplayDelay?: number;
  className?: string;
  /** Max items per row on desktop grid (default 3). Used if desktopRowPattern is not provided. */
  desktopMaxPerRow?: number;
  /** Custom row pattern for desktop. E.g. [2, 3, 2] means row 1 has 2 items, row 2 has 3, row 3 has 2. */
  desktopRowPattern?: number[];
}

/** Light blue, olive green, dark grey-blue (as in design reference) */
const PILL_COLORS = ["bg-[#65B7DE]", "bg-[#627427]", "bg-[#304C5D]"] as const;

/** Fixed color order matching the design: row1 [light blue, olive], row2 [grey-blue, olive, grey-blue], row3 [olive, light blue] */
const FIXED_COLORS_7: readonly string[] = [
  PILL_COLORS[0], // 0 Barvak Camp - light blue
  PILL_COLORS[1], // 1 Corporate events - olive green
  PILL_COLORS[2], // 2 Wedding - dark grey-blue
  PILL_COLORS[1], // 3 Equestrian show - olive green
  PILL_COLORS[2], // 4 One day tour - dark grey-blue
  PILL_COLORS[1], // 5 Baptisms - olive green
  PILL_COLORS[0], // 6 Special Packages - light blue
];

/** Number of columns in the desktop grid; each pill spans an integer number so edges align. */
const DESKTOP_GRID_COLUMNS = 12;

/**
 * Assign a color to each item index. Uses fixed order for 7 items (2,3,2 layout); otherwise no-adjacent-same logic.
 */
const getColorClasses = (
  count: number,
  maxRowSize: number,
): readonly string[] => {
  if (count === 7 && maxRowSize === 3) return FIXED_COLORS_7;
  const assigned: string[] = [];
  const usage = new Map<string, number>(PILL_COLORS.map((c) => [c, 0]));
  for (let i = 0; i < count; i++) {
    const forbidden = new Set<string>();
    if (i % maxRowSize !== 0) forbidden.add(assigned[i - 1]!);
    if (i >= maxRowSize) forbidden.add(assigned[i - maxRowSize]!);
    const valid = PILL_COLORS.filter((c) => !forbidden.has(c));
    const pick =
      valid.length > 0
        ? valid.reduce((a, b) => (usage.get(a)! <= usage.get(b)! ? a : b))
        : PILL_COLORS[0];
    assigned.push(pick);
    usage.set(pick, (usage.get(pick) ?? 0) + 1);
  }
  return assigned;
};

/** Split an array into chunks of a given size */
const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

/** Split an array into chunks following a pattern of sizes. E.g. pattern [2,3,2] splits into rows of 2, 3, 2 items. */
const chunkByPattern = <T,>(arr: T[], pattern: number[]): T[][] => {
  const chunks: T[][] = [];
  let offset = 0;
  for (const size of pattern) {
    if (offset >= arr.length) break;
    chunks.push(arr.slice(offset, offset + size));
    offset += size;
  }
  // If items remain beyond the pattern, chunk the rest with the last pattern size
  const lastSize = pattern[pattern.length - 1] ?? 3;
  while (offset < arr.length) {
    chunks.push(arr.slice(offset, offset + lastSize));
    offset += lastSize;
  }
  return chunks;
};

/**
 * Compute integer column spans for a row so they sum to DESKTOP_GRID_COLUMNS.
 * Items with desktopSpan use that value; remaining columns are split equally among items without desktopSpan.
 */
const getRowSpans = (
  rowItems: ShowMenuItem[],
  totalCols: number = DESKTOP_GRID_COLUMNS,
): number[] => {
  if (rowItems.length === 0) return [];
  const explicit = rowItems.map((item) => item.desktopSpan);
  const usedByExplicit: number = explicit.reduce<number>(
    (sum, s) => sum + (s != null ? s : 0),
    0,
  );
  const explicitCount = explicit.filter((s) => s != null).length;
  const remainingCols = totalCols - usedByExplicit;
  const autoCount = rowItems.length - explicitCount;
  if (autoCount <= 0 || remainingCols < 0) {
    return rowItems.map((item, idx) => explicit[idx] ?? 1);
  }
  const baseSpan = Math.floor(remainingCols / autoCount);
  const remainder = remainingCols % autoCount;
  let autoIndex = 0;
  return rowItems.map((item) => {
    if (item.desktopSpan != null) return item.desktopSpan;
    const span = baseSpan + (autoIndex < remainder ? 1 : 0);
    autoIndex++;
    return span;
  });
};

const ShowMenu = ({
  items,
  autoplayDelay = 5000,
  className,
  desktopMaxPerRow = 3,
  desktopRowPattern,
}: ShowMenuProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [autoplayPaused, setAutoplayPaused] = React.useState(false);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [hoverPaused, setHoverPaused] = React.useState(false);
  const hoverTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  React.useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  // Autoplay: advance every autoplayDelay ms when not paused (and not hover-paused on desktop)
  React.useEffect(() => {
    if (items.length <= 1 || autoplayPaused || hoverPaused) return;
    const id = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % items.length);
    }, autoplayDelay);
    return () => clearInterval(id);
  }, [items.length, autoplayDelay, autoplayPaused, hoverPaused]);

  const handleOptionClick = React.useCallback((index: number) => {
    setSelectedIndex(index);
    setAutoplayPaused(true);
  }, []);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleOptionClick(index);
      }
    },
    [handleOptionClick],
  );

  const handlePillMouseEnter = React.useCallback((index: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredIndex(index);
    setHoverPaused(true);
  }, []);

  const handlePillMouseLeave = React.useCallback(() => {
    setHoveredIndex(null);
    hoverTimeoutRef.current = setTimeout(() => {
      setHoverPaused(false);
      hoverTimeoutRef.current = null;
    }, 1000);
  }, []);

  if (items.length === 0) return null;

  const displayIndex = hoveredIndex ?? selectedIndex;
  const current = items[displayIndex] ?? items[0];

  // Desktop: split items into rows using pattern or fixed max per row
  const desktopRows = desktopRowPattern
    ? chunkByPattern(items, desktopRowPattern)
    : chunkArray(items, desktopMaxPerRow);

  // Assign colors so adjacent pills (by desktop grid) never share the same color
  // Use max row size from pattern for color adjacency calculation
  const maxRowSize = desktopRowPattern
    ? Math.max(...desktopRowPattern)
    : desktopMaxPerRow;
  const colorClasses = getColorClasses(items.length, maxRowSize);

  // Mobile: scrollable rows of max 6
  const mobileMaxPerRow = 4;
  const mobileRow1 = items.slice(0, mobileMaxPerRow);
  const mobileRow2 = items.slice(mobileMaxPerRow, mobileMaxPerRow * 2);

  const scrollContainerClass =
    "overflow-x-auto overflow-y-hidden touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden";

  /** Mobile: pill row with independent horizontal scroll */
  const renderMobilePillRow = (rowItems: ShowMenuItem[], rowOffset: number) => (
    <div
      key={rowOffset}
      className={scrollContainerClass}
      style={{ WebkitOverflowScrolling: "touch" }}
      role="tablist"
      aria-label={`Event options row ${rowOffset + 1}`}
    >
      <div className="flex gap-2 w-max min-w-full shrink-0 py-1 first:pt-2 last:pb-2 ml-3 mr-3">
        {rowItems.map((item, i) => {
          const index = rowOffset + i;
          const isSelected = index === selectedIndex;
          return (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-label={item.label}
              tabIndex={isSelected ? 0 : -1}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap transition shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-custom-primary",
                isSelected
                  ? "bg-lime-500 text-white"
                  : `${colorClasses[index]} text-white`,
              )}
              onClick={() => handleOptionClick(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <section className={cn("w-full", className)} aria-label="Events menu">
      {/* Mobile: scrollable rows */}
      <div className="w-full flex flex-col md:hidden">
        {renderMobilePillRow(mobileRow1, 0)}
        {mobileRow2.length > 0 &&
          renderMobilePillRow(mobileRow2, mobileMaxPerRow)}
      </div>

      {/* Desktop: fixed 12-column grid; hover over menu pauses autoplay (click still fixes selection) */}
      <div
        className="hidden md:flex flex-col w-full"
        role="tablist"
        aria-label="Event options"
      >
        {desktopRows.map((rowItems, rowIndex) => {
          // Calculate offset as sum of items in previous rows
          const rowOffset = desktopRows
            .slice(0, rowIndex)
            .reduce((sum, row) => sum + row.length, 0);
          const spans = getRowSpans(rowItems);
          return (
            <div
              key={rowIndex}
              className="grid w-full gap-0"
              style={{
                gridTemplateColumns: `repeat(${DESKTOP_GRID_COLUMNS}, minmax(0, 1fr))`,
              }}
            >
              {rowItems.map((item, i) => {
                const index = rowOffset + i;
                const isSelected = index === selectedIndex;
                const span = spans[i] ?? 1;
                return (
                  <button
                    key={index}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    aria-label={item.label}
                    tabIndex={isSelected ? 0 : -1}
                    className={cn(
                      "py-3 lg:py-4 text-base lg:text-lg font-medium whitespace-nowrap transition text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/50",
                      isSelected
                        ? "bg-lime-500 text-white"
                        : `${colorClasses[index]} text-white`,
                    )}
                    style={{ gridColumn: `span ${span}` }}
                    onClick={() => handleOptionClick(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onMouseEnter={() => handlePillMouseEnter(index)}
                    onMouseLeave={handlePillMouseLeave}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Image and text: mobile = overlay at bottom; desktop = centered two-column (image left, text right) */}
      <div className="flex justify-center w-full px-4 md:px-6 mt-3">
        <div
          className={cn(
            "relative w-full overflow-hidden",
            "aspect-4/5 min-h-[280px] max-w-2xl mx-auto",
            "md:aspect-auto md:max-w-6xl md:mx-auto md:h-[calc(100vh-4rem)] md:flex md:items-center md:gap-8 lg:gap-12",
          )}
        >
          {/* Image: full width on mobile, half on desktop (left) */}
          <div className="relative w-full h-full min-h-[280px] md:min-h-0 md:h-full md:flex-1 md:basis-0 md:mt-24">
            <Image
              src={current.image}
              alt={current.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
              className="object-cover rounded-sm"
              loading="lazy"
            />
          </div>
          {/* Text: overlay on mobile, column on desktop (right, centered) */}
          <div
            className={cn(
              "absolute inset-x-0 bottom-0 bg-white/80 px-4 py-6 md:px-0 md:py-0 md:relative md:bg-transparent md:flex md:flex-col md:justify-center md:flex-1 md:basis-0 md:min-w-0",
            )}
          >
            <h2 className="text-2xl md:text-[2.25rem] font-light text-foreground text-pretty md:text-left">
              {current.title}
            </h2>
            <p className="mt-2 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty md:text-left">
              {current.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowMenu;
