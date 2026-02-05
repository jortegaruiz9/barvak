import Image from "next/image";
import { cn } from "@/lib/utils";

interface StoryCard {
  image: string;
  title?: string;
  description?: string;
  alt?: string;
}

interface StoryCardsProps {
  cards: StoryCard[];
  className?: string;
}

const StoryCards = ({ cards, className }: StoryCardsProps) => {
  if (!cards || cards.length === 0) {
    return null;
  }

  const firstCard = cards[0];
  const remainingCards = cards.slice(1);

  return (
    <section className={cn("w-full px-4 md:px-12", className)}>
      <div className="flex flex-col gap-6 md:gap-8">
        {/* First card - full screen height */}
        {firstCard && (
          <div className="relative w-full aspect-square md:aspect-auto md:h-[calc(100vh-4rem)] rounded-lg overflow-hidden group">
            <Image
              src={firstCard.image}
              alt={
                firstCard.alt?.trim() || firstCard.title?.trim() || "Story card"
              }
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 100vw"
            />
            {(firstCard.title || firstCard.description) && (
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            )}
            {(firstCard.title || firstCard.description) && (
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 text-white text-center md:text-left">
                {firstCard.title && (
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-2 md:mb-3 max-w-4xl">
                    {firstCard.title}
                  </h3>
                )}
                {firstCard.description && (
                  <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl">
                    {firstCard.description}
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Remaining cards - grid on desktop, stacked on mobile */}
        {remainingCards.length > 0 && (
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
            {remainingCards.map((card, index) => (
              <div
                key={index}
                className="relative w-full aspect-square md:aspect-3/4 lg:aspect-4/5 xl:aspect-square rounded-lg overflow-hidden group"
              >
                <Image
                  src={card.image}
                  alt={
                    card.alt?.trim() ||
                    card.title?.trim() ||
                    `Story card ${index + 2}`
                  }
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
                {(card.title || card.description) && (
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                )}
                {(card.title || card.description) && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white text-center md:text-left w-full lg:w-10/12">
                    {card.title && (
                      <h3 className="text-2xl font-medium mb-2 md:mb-3 text-balance">
                        {card.title}
                      </h3>
                    )}
                    {card.description && (
                      <p className="text-sm md:text-base leading-relaxed">
                        {card.description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StoryCards;
