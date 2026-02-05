import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

const SectionHeader = ({
  title,
  description,
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn("w-full px-4 text-center", className)}>
      <h2 className="mb-3 text-2xl md:text-3xl font-normal text-balance md:max-w-6/12 text-center mx-auto">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-3xl text-base text-muted-foreground text-balance">
          {description}
        </p>
      )}
    </div>
  );
};

export { SectionHeader };
export type { SectionHeaderProps };
