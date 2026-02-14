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
  className,
  desktopMaxPerRow = 3,
  desktopRowPattern,
}: ShowMenuProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [mobileOpenIndex, setMobileOpenIndex] = React.useState<number | null>(null);

  if (items.length === 0) return null;

  const current = items[selectedIndex] ?? items[0];

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

  const handleMobileToggle = (index: number) => {
    setMobileOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={cn("w-full", className)} aria-label="Events menu">
      {/* Mobile: accordion layout */}
      <div className="w-full flex flex-col md:hidden">
        {items.map((item, index) => {
          const isOpen = mobileOpenIndex === index;
          return (
            <div key={index}>
              <button
                type="button"
                className={cn(
                  "w-full py-4 text-xl font-medium text-center cursor-pointer text-white",
                  colorClasses[index],
                )}
                onClick={() => handleMobileToggle(index)}
              >
                {item.label}
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="100vw"
                      quality={85}
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-4 py-6">
                    <h2 className="text-2xl font-light text-foreground text-pretty">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-base text-muted-foreground leading-relaxed text-pretty">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop: fixed 12-column grid */}
      <div
        className="hidden md:flex flex-col w-full"
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
                const span = spans[i] ?? 1;
                return (
                  <button
                    key={index}
                    type="button"
                    className={cn(
                      "group/pill py-3 lg:py-4 text-base lg:text-lg font-medium whitespace-nowrap transition-transform duration-300 ease-out text-center cursor-pointer hover:scale-x-110",
                      `${colorClasses[index]} text-white`,
                    )}
                    style={{ gridColumn: `span ${span}` }}
                    onClick={() => setSelectedIndex(index)}
                  >
                    <span className="inline-block transition-transform duration-300 ease-out group-hover/pill:scale-x-[0.909]">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Desktop only: image and text content */}
      <div className="hidden md:flex justify-center w-full px-4 md:px-6 mt-6">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-center">
          <div className="relative w-full aspect-4/5 overflow-hidden rounded-sm">
            <Image
              src={current.image}
              alt={current.alt}
              fill
              sizes="60vw"
              quality={85}
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center min-w-0">
            <h2 className="text-[2.25rem] font-light text-foreground text-pretty text-left">
              {current.title}
            </h2>
            <p className="mt-2 text-lg text-muted-foreground leading-relaxed text-pretty text-left">
              {current.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowMenu;
