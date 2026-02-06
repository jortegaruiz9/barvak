"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
    <div className="flex justify-center gap-2.5 py-6">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => api?.scrollTo(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={`size-2.5 rounded-full transition-colors duration-300 ${
            i === current
              ? "bg-neutral-800"
              : "bg-neutral-300 hover:bg-neutral-400"
          }`}
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
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex items-start text-white font-bold text-3xl sm:text-4xl md:text-6xl leading-none">
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
  const [tableApi, setTableApi] = useState<CarouselApi>();
  const [tableCount, setTableCount] = useState(0);

  const active = tabs[activeTab];

  useEffect(() => {
    if (!tableApi) return;
    const update = () => setTableCount(tableApi.scrollSnapList().length);
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

      {/* Champions Cards — always 3 visible */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto w-full mb-12">
        {active.champions.slice(0, 3).map((champion, i) => (
          <PositionCard key={i} champion={champion} />
        ))}
      </div>

      {/* Results Table Carousel */}
      <Carousel
        key={`table-${activeTab}`}
        opts={{ align: "start" }}
        setApi={setTableApi}
      >
        <CarouselContent>
          {active.resultPages.map((page, pageIndex) => (
            <CarouselItem key={pageIndex}>
              <div className="max-w-3xl mx-auto w-full">
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
                      const num = parseInt(entry.position);
                      const badgeColor =
                        num <= 3
                          ? "bg-lime-500 text-white border-lime-500"
                          : num === 4
                            ? "bg-purple-500 text-white border-purple-500"
                            : num === 5
                              ? "bg-red-500 text-white border-red-500"
                              : "bg-transparent border-neutral-300";
                      return (
                        <TableRow key={i}>
                          <TableCell className="py-4 md:py-5">
                            <span className="hidden md:inline font-bold text-lg md:text-xl">
                              {entry.position}
                            </span>
                            <span
                              className={`md:hidden inline-flex items-center justify-center size-7 rounded border text-xs font-bold ${badgeColor}`}
                            >
                              {entry.position.replace(/\D+$/, "")}
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
      </Carousel>
      <DotIndicators api={tableApi} count={tableCount} />
    </section>
  );
}

export type { TablePositionsProps, CompetitionTab, Champion, ResultEntry };
