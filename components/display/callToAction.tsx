import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CallToActionProps {
  title: string;
  description?: string;
  buttonLabel: string;
  buttonHref: string;
  bgColor?: string;
}

export default function CallToAction({
  title,
  description,
  buttonLabel,
  buttonHref,
  bgColor = "bg-gray-100",
}: CallToActionProps) {
  return (
    <section className={`w-full py-16 px-8 md:px-12 ${bgColor}`}>
      <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-3xl font-light text-gray-800 text-pretty">
          {title}
        </h2>
        {description && (
          <p className="text-gray-600 leading-relaxed">{description}</p>
        )}
        <Button
          variant="normal"
          size="lg"
          asChild
          className="mt-4 rounded-full"
        >
          <Link href={buttonHref}>{buttonLabel}</Link>
        </Button>
      </div>
    </section>
  );
}
