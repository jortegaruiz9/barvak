"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../ui/carousel";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface Champion {
  image: string;
  alt: string;
  position: string;
  title: string;
  name: string;
}

interface ResultEntry {
  position: string;
  name: string;
  club: string;
  winPercentage: string;
  time: string;
}

interface CompetitionTab {
  id: string;
  label: string;
  title: string;
  year: string;
  champions: Champion[];
  resultPages: ResultEntry[][];
}

interface TablePositionsProps {
  tabs: CompetitionTab[];
}

/** Get position number from entry.position (e.g. "1", "1st" -> 1) */
const getPositionNumber = (position: string): number =>
  parseInt(position.replace(/\D+/g, ""), 10) || 0;

/** Mobile position badge: minimal style – white square, light border, black number (no colored ranks) */
const getPositionBadgeClass = (): string =>
  "bg-white border border-neutral-200 text-neutral-900";

/** Left/right arrow controls for a carousel, aligned to container width */
function CarouselArrowControls({
  api,
  hideOnMobile = false,
  pushOutOnDesktop = false,
  centerOnEdge = false,
  topRightOnMobile = false,
  betweenSections = false,
}: {
  api: CarouselApi | undefined;
  hideOnMobile?: boolean;
  /** When true, positions controls further out on desktop (e.g. for table to avoid overlapping data) */
  pushOutOnDesktop?: boolean;
  /** When true, centers buttons on content edge (half in, half out) */
  centerOnEdge?: boolean;
  /** When true, shows compact chevrons (top-right or between sections) */
  topRightOnMobile?: boolean;
  /** When true, renders controls in document flow between carousel and table (requires topRightOnMobile) */
  betweenSections?: boolean;
}) {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  if (!api) return null;

  const baseBtnClass =
    "flex items-center justify-center rounded-full border border-neutral-300 bg-neutral-100 shadow-sm transition-transform active:scale-95 disabled:opacity-40 disabled:pointer-events-none";

  const sideBtnClass = cn(
    baseBtnClass,
    "absolute top-1/2 -translate-y-1/2 size-10",
    hideOnMobile && "hidden sm:flex",
    topRightOnMobile && "hidden",
  );

  const compactBtnClass = cn(baseBtnClass, "size-8 shrink-0");

  return (
    <>
      {/* Compact controls: between carousel and table, or absolute below carousel */}
      {topRightOnMobile && (
        <div
          className={cn(
            "flex gap-3",
            betweenSections ? "justify-end py-4" : "absolute -bottom-8 right-2 z-10",
          )}
        >
          <button
            type="button"
            onClick={() => api.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Anterior"
            className={compactBtnClass}
          >
            <ChevronLeft className="size-4 text-neutral-700" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={() => api.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Siguiente"
            className={compactBtnClass}
          >
            <ChevronRight className="size-4 text-neutral-700" strokeWidth={2} />
          </button>
        </div>
      )}

      {/* Desktop / default: side controls */}
      <button
        type="button"
        onClick={() => api.scrollPrev()}
        disabled={!canScrollPrev}
        aria-label="Anterior"
        className={cn(
          sideBtnClass,
          centerOnEdge ? "left-0 -translate-x-1/2" : pushOutOnDesktop ? "-left-2 md:-left-18" : "-left-2",
        )}
      >
        <ChevronLeft className="size-5 text-neutral-700" strokeWidth={2} />
      </button>
      <button
        type="button"
        onClick={() => api.scrollNext()}
        disabled={!canScrollNext}
        aria-label="Siguiente"
        className={cn(
          sideBtnClass,
          centerOnEdge ? "right-0 translate-x-1/2" : pushOutOnDesktop ? "-right-2 md:-right-18" : "-right-2",
        )}
      >
        <ChevronRight className="size-5 text-neutral-700" strokeWidth={2} />
      </button>
    </>
  );
}

/** Dot indicators for carousel pages, shown below content */
function DotIndicators({
  api,
  count,
}: {
  api: CarouselApi | undefined;
  count: number;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  if (count <= 1) return null;

  return (
    <div className="flex justify-center gap-2.5 py-4">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => api?.scrollTo(i)}
          aria-label={`Ir a página ${i + 1}`}
          className={cn(
            "size-2.5 rounded-full transition-colors duration-300",
            i === current ? "bg-neutral-800" : "bg-neutral-300 hover:bg-neutral-400",
          )}
        />
      ))}
    </div>
  );
}

function PositionCard({
  champion,
  className,
}: {
  champion: Champion;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-3/4 rounded-lg overflow-hidden",
        className,
      )}
    >
      <Image
        src={champion.image}
        alt={champion.alt}
        fill
        sizes="(max-width: 768px) 33vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
      {/* Mobile: number only in a recuadro (box) */}
      <div
        className="absolute top-2 right-2 flex size-8 items-center justify-center rounded-md bg-black/30 text-white font-bold text-sm md:hidden"
      >
        {champion.position.replace(/\D+$/, "")}
      </div>
      {/* Desktop: number + position suffix (e.g. 1st) */}
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 hidden md:flex items-start text-white font-bold text-3xl sm:text-4xl md:text-6xl leading-none">
        {champion.position.replace(/\D+$/, "")}
        <span className="text-base sm:text-lg md:text-xl font-semibold mt-0.5">
          {champion.position.replace(/^\d+/, "")}
        </span>
      </div>
      <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
        <p className="text-white font-medium text-xs sm:text-lg md:text-xl leading-tight">
          {champion.title}
        </p>
        <p className="text-white text-[10px] sm:text-xs md:text-md mt-0.5">
          {champion.name}
        </p>
      </div>
    </div>
  );
}

export default function TablePositions({ tabs }: TablePositionsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [champApi, setChampApi] = useState<CarouselApi>();
  const [tableApi, setTableApi] = useState<CarouselApi>();
  const [tableCount, setTableCount] = useState(0);

  const active = tabs[activeTab];

  useEffect(() => {
    if (!tableApi) return;
    const update = () => setTableCount(tableApi.scrollSnapList().length);
    update();
    tableApi.on("reInit", update);
    tableApi.on("select", update);
    return () => {
      tableApi.off("reInit", update);
      tableApi.off("select", update);
    };
  }, [tableApi]);

  return (
    <section className="flex flex-col px-4 lg:px-0">
      {/* Tabs */}
      <div className="flex justify-center gap-6">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(index)}
            className={`text-sm md:text-base font-semibold pb-1 transition-colors ${
              index === activeTab
                ? "text-foreground border-b-2 border-foreground"
                : "text-muted-foreground border-b-2 border-transparent hover:text-muted-foreground/60"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Title */}
      <div className="text-center py-8">
        <h2 className="text-5xl md:text-8xl font-semibold text-muted-foreground">
          {active.title}
        </h2>
        <p className="text-2xl text-muted-foreground mt-2 font-semibold">
          {active.year}
        </p>
      </div>

      {/* Champions Cards Carousel */}
      <div className="max-w-3xl mx-auto w-full relative">
        <Carousel
          key={`champ-${activeTab}`}
          opts={{ align: "start" }}
          setApi={setChampApi}
        >
          <CarouselContent className="-ml-3 sm:-ml-4 md:-ml-6">
            {active.champions.map((champion, i) => (
              <CarouselItem
                key={i}
                className="pl-3 sm:pl-4 md:pl-6 basis-1/3"
              >
                <PositionCard champion={champion} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Controls between carousel and table */}
      <div className="max-w-3xl mx-auto w-full">
        <CarouselArrowControls
          api={champApi}
          topRightOnMobile
          betweenSections
        />
      </div>

      {/* Results Table Carousel: controls aligned to table width (max-w-3xl), indicators below */}
      <div className="max-w-3xl mx-auto w-full relative mt-4">
        <Carousel
          key={`table-${activeTab}`}
          opts={{ align: "start" }}
          setApi={setTableApi}
        >
          <CarouselContent>
            {active.resultPages.map((page, pageIndex) => (
              <CarouselItem key={pageIndex}>
                <div className="w-full">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b-0">
                        <TableHead className="text-muted-foreground font-normal text-xs md:text-sm">
                          <span className="hidden md:inline">Position</span>
                          <span className="md:hidden">#</span>
                        </TableHead>
                        <TableHead className="text-muted-foreground font-normal text-xs md:text-sm">
                          Name
                        </TableHead>
                        <TableHead className="text-muted-foreground font-normal text-xs md:text-sm hidden md:table-cell">
                          Club
                        </TableHead>
                        <TableHead className="text-muted-foreground font-normal text-xs md:text-sm text-center">
                          <span className="hidden md:inline">% Win</span>
                          <span className="md:hidden">%</span>
                        </TableHead>
                        <TableHead className="text-muted-foreground font-normal text-xs md:text-sm text-right">
                          Time
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {page.map((entry, i) => {
                        return (
                          <TableRow key={i} className="border-b border-neutral-100 md:border-b-0">
                            <TableCell className="py-4 md:py-5">
                              {/* Mobile: rounded position badge with color by rank */}
                              <span
                                className={cn(
                                  "md:hidden inline-flex size-7 shrink-0 items-center justify-center rounded-[8px] font-semibold text-xs",
                                  getPositionBadgeClass(),
                                )}
                              >
                                {getPositionNumber(entry.position) || entry.position}
                              </span>
                              {/* Desktop: plain bold number */}
                              <span className="hidden md:inline font-bold text-lg md:text-xl">
                                {entry.position}
                              </span>
                            </TableCell>
                            <TableCell className="py-4 md:py-5 md:text-lg">
                              {entry.name}
                            </TableCell>
                            <TableCell className="py-4 md:py-5 hidden md:table-cell md:text-lg">
                              {entry.club}
                            </TableCell>
                            <TableCell className="py-4 md:py-5 text-center md:text-lg tabular-nums">
                              {entry.winPercentage}
                            </TableCell>
                            <TableCell className="py-4 md:py-5 text-right md:text-lg tabular-nums">
                              {entry.time}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselArrowControls api={tableApi} hideOnMobile pushOutOnDesktop />
        </Carousel>
        <DotIndicators api={tableApi} count={tableCount} />
      </div>
    </section>
  );
}

export type { TablePositionsProps, CompetitionTab, Champion, ResultEntry };
