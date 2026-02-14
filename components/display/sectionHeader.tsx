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
      <h2 className="mb-6 text-2xl md:text-[2.25rem] font-light md:max-w-5/12 text-center mx-auto text-pretty">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-3xl text-sm lg:text-lg text-muted-foreground text-pretty">
          {description}
        </p>
      )}
    </div>
  );
};

export { SectionHeader };
export type { SectionHeaderProps };
