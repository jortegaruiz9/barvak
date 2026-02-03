import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface InteractiveHeaderProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  className?: string;
}

const InteractiveHeader = ({
  title,
  description,
  buttonText,
  href,
  className,
}: InteractiveHeaderProps) => {
  return (
    <section
      className={cn(
        "px-4 md:px-12 pt-12 md:pt-16 pb-6 md:pb-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12",
        className
      )}
    >
      <h2 className="text-2xl md:text-2xl text-foreground max-w-2xl text-balance text-center lg:text-left">
        {title}
      </h2>

      <div className="flex flex-col items-center lg:items-end gap-4 text-center lg:text-right shrink-0">
        <p className="text-sm md:text-base text-muted-foreground max-w-md text-pretty">
          {description}
        </p>
        <Button asChild variant="normal" className="px-6 py-5 lg:py-2">
          <Link href={href}>
            {buttonText}
            <ArrowRight className="size-4 hidden lg:block" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export { InteractiveHeader };
export type { InteractiveHeaderProps };
