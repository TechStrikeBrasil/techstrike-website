import GameCard from "./GameCard";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const Games = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const games = [
    {
      title: "HexPG",
      description: t.hexPGDesc,
      image: "/src/assets/4cedc009-8afc-4bb3-8e49-f0a4385bc4f5.png",
      platforms: ["desktop"],
      link: "#",
    },
    {
      title: "Verdant Valley",
      description: t.verdantValleyDesc,
      image: "/src/assets/ba8b79e5-75d5-4586-b335-b662be4d3dbf.png",
      platforms: ["mobile"],
      link: "#",
    },
  ];
  return (
    <section id="games" className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">
            {t.gamesTitle}
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
          <p className="mt-6 text-lg max-w-2xl mx-auto">
            {t.gamesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {games.map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              description={game.description}
              image={game.image}
              platforms={game.platforms}
              link={game.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
