import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CallToActionProps {
  title: string;
  description?: string;
  buttonLabel: string;
  buttonHref: string;
  buttonTarget?: string;
  bgColor?: string;
}

export default function CallToAction({
  title,
  description,
  buttonLabel,
  buttonHref,
  buttonTarget,
  bgColor = "bg-gray-100",
}: CallToActionProps) {
  return (
    <section className={`w-full py-16 px-8 md:px-12 ${bgColor}`}>
      <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-[2.25rem] font-light text-pretty">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-base md:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
        <Button
          variant="normal"
          size="lg"
          asChild
          className="mt-4 rounded-full"
        >
          <Link href={buttonHref} target={buttonTarget} rel={buttonTarget === "_blank" ? "noopener noreferrer" : undefined}>{buttonLabel}</Link>
        </Button>
      </div>
    </section>
  );
}
