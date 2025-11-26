import { Monitor, Smartphone } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import GameDetailsModal from "./GameDetailsModal";

interface GameStore{
  name: string;
  url: string;
}

interface GameCardProps {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  platforms: string[];
  screenshots: string[];
  trailerUrl?: string;
  stores: GameStore[];
  isNew: boolean;
}

const GameCard = ({
  title,
  description,
  longDescription,
  image,
  platforms,
  screenshots,
  trailerUrl,
  stores,
  isNew = false,
}: GameCardProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="game-card overflow-hidden h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          {isNew && (
            <span className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-md text-xs font-bold">
              {t.newBadge}
            </span>
          )}
          <div className="absolute top-3 right-3 flex space-x-2">
            {platforms.includes("desktop") && (
              <span
                className="bg-background/80 backdrop-blur-sm p-1.5 rounded-md"
                title="Desktop Game"
              >
                <Monitor size={18} className="text-primary" />
              </span>
            )}
            {platforms.includes("mobile") && (
              <span
                className="bg-background/80 backdrop-blur-sm p-1.5 rounded-md"
                title="Mobile Game"
              >
                <Smartphone size={18} className="text-primary" />
              </span>
            )}
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-foreground/80 mb-4 flex-grow">{description}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-md transition-colors w-full"
          >
            {t.learnMore}
          </button>
        </div>
      </div>
       <GameDetailsModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        title={title}
        description={description}
        longDescription={longDescription}
        screenshots={screenshots}
        trailerUrl={trailerUrl}
        stores={stores}
      />
    </>
  );
};

export default GameCard;
