import { Monitor, Smartphone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  platforms: string[];
  link: string;
}

const GameCard = ({
  title,
  description,
  image,
  platforms,
  link,
}: GameCardProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="game-card overflow-hidden h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 right-3 flex space-x-2">
          {platforms.includes("desktop") && (
            <span className="bg-background/80 backdrop-blur-sm p-1.5 rounded-md" title="Desktop Game">
              <Monitor size={18} className="text-primary" />
            </span>
          )}
          {platforms.includes("mobile") && (
            <span className="bg-background/80 backdrop-blur-sm p-1.5 rounded-md" title="Mobile Game">
              <Smartphone size={18} className="text-secondary" />
            </span>
          )}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-foreground/80 mb-4 flex-grow">{description}</p>
        <a
          href={link}
          className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-md transition-colors w-full"
        >
          {t.learnMore}
        </a>
      </div>
    </div>
  );
};

export default GameCard;
