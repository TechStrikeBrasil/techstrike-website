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
      longDescription: t.hexPGLongDesc,
      image: "/lovable-uploads/4cedc009-8afc-4bb3-8e49-f0a4385bc4f5.png",
      platforms: ["desktop"],
      screenshots: [
        "/lovable-uploads/4cedc009-8afc-4bb3-8e49-f0a4385bc4f5.png",
        "/lovable-uploads/4cedc009-8afc-4bb3-8e49-f0a4385bc4f5.png",
        "/lovable-uploads/4cedc009-8afc-4bb3-8e49-f0a4385bc4f5.png",
      ],
      trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      stores: [
        { name: "Steam", url: "#" },
        { name: "Itch.io", url: "#" },
      ],
      isNew: false,
    },
    {
      title: "Verdant Valley",
      description: t.verdantValleyDesc,
      longDescription: t.verdantValleyLongDesc,
      image: "/lovable-uploads/ba8b79e5-75d5-4586-b335-b662be4d3dbf.png",
      platforms: ["mobile"],
      screenshots: [
        "/lovable-uploads/ba8b79e5-75d5-4586-b335-b662be4d3dbf.png",
        "/lovable-uploads/ba8b79e5-75d5-4586-b335-b662be4d3dbf.png",
        "/lovable-uploads/ba8b79e5-75d5-4586-b335-b662be4d3dbf.png",
      ],
      trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      stores: [
        { name: "Google Play", url: "#" },
        { name: "App Store", url: "#" },
      ],
      isNew: false,
    },
    {
      title: "Meu Restaurante Brazuca",
      description: t.restaurantBrazucaDesc,
      longDescription: t.restaurantBrazucaLongDesc,
      image: "/lovable-uploads/bc6c90b7-d2b3-4c87-a2c6-59ceb64ddd40.png",
      platforms: ["mobile", "desktop"],
      screenshots: [
        "/lovable-uploads/bc6c90b7-d2b3-4c87-a2c6-59ceb64ddd40.png",
        "/lovable-uploads/bc6c90b7-d2b3-4c87-a2c6-59ceb64ddd40.png",
        "/lovable-uploads/bc6c90b7-d2b3-4c87-a2c6-59ceb64ddd40.png",
      ],
      trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      stores: [
        { name: "Steam", url: "#" },
        { name: "Itch.io", url: "#" },
      ],
      isNew: true,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {games.map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              description={game.description}
              longDescription={game.longDescription}
              image={game.image}
              platforms={game.platforms}
              screenshots={game.screenshots}
              trailerUrl={game.trailerUrl}
              stores={game.stores}
              isNew={game.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;