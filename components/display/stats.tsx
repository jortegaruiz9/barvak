"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./sectionHeader";
import { cn } from "@/lib/utils";

interface StatItem {
  value: number;
  total: number;
  completed: number;
  label: string;
}

interface StatsProps {
  title: string;
  description?: string;
  items: StatItem[];
  className?: string;
}

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

function useAnimatedValue(target: number, isActive: boolean, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const startTime = performance.now();
    let animationFrame: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setValue(target * easeOut);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, isActive, duration]);

  return value;
}

const SVG_SIZE = 120;
const STROKE_WIDTH = 10;
const RADIUS = (SVG_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

interface StatChartProps {
  item: StatItem;
  isInView: boolean;
  delay: number;
}

function StatChart({ item, isInView, delay }: StatChartProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const targetPercentage = (item.completed / item.total) * 100;

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShouldAnimate(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  const animatedCount = useAnimatedValue(item.value, shouldAnimate);
  const animatedPercentage = useAnimatedValue(targetPercentage, shouldAnimate);
  const offset = CIRCUMFERENCE - (animatedPercentage / 100) * CIRCUMFERENCE;
  const center = SVG_SIZE / 2;

  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
        className="w-40 h-40 md:w-48 md:h-48"
      >
        <circle
          cx={center}
          cy={center}
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          className="text-gray-200"
          strokeWidth={STROKE_WIDTH}
        />
        <circle
          cx={center}
          cy={center}
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          className="text-lime-500"
          strokeWidth={STROKE_WIDTH}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${center} ${center})`}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-lime-600 text-2xl font-semibold"
        >
          {Math.round(animatedCount).toLocaleString()}
        </text>
      </svg>
      <p className="mt-4 text-center text-sm text-muted-foreground max-w-42">
        {item.label}
      </p>
    </div>
  );
}

function Stats({ title, description, items, className }: StatsProps) {
  const { ref, isInView } = useInView(0.3);

  return (
    <section ref={ref} className={cn("w-full py-12", className)}>
      <SectionHeader title={title} description={description} className="mb-8" />
      <div className="flex flex-col gap-8 md:flex-row md:justify-center lg:gap-32">
        {items.map((item, index) => (
          <StatChart
            key={index}
            item={item}
            isInView={isInView}
            delay={index * 150}
          />
        ))}
      </div>
    </section>
  );
}

export { Stats };
export type { StatsProps, StatItem };
