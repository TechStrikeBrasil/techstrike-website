import GameCard from "./GameCard";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const Games = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const games = [
    {
      title: "Jogo da Memória - Infantil",
      description: t.memoryGameDesc,
      longDescription: t.memoryGameLongDesc,
      image: "/images/games/memory-game/memory-game.jpg",
      platforms: ["mobile"],
      screenshots: [
        "/images/games/memory-game/1.jpg",
        "/images/games/memory-game/2.jpg",
        "/images/games/memory-game/3.jpg",
        "/images/games/memory-game/4.jpg",
      ],
      trailerUrl: "",
      stores: [
        { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.TechStrikeGameStudios.JogodaMemriaInfantil" },
        //{ name: "App Store", url: "#" },
      ],
      isNew: false,
    },
    {
      title: "Meu Restaurante Brazuca",
      description: t.restaurantBrazucaDesc,
      longDescription: t.restaurantBrazucaLongDesc,
      image: "/images/games/meu-restaurante-brazuca/meu-restaurante-brazuca.png",
      platforms: ["desktop", "mobile"],
      screenshots: [
        "/images/games/meu-restaurante-brazuca/1.jpg",
        "/images/games/meu-restaurante-brazuca/2.jpg",
        "/images/games/meu-restaurante-brazuca/3.jpg",
        "/images/games/meu-restaurante-brazuca/4.jpg",
      ],
      trailerUrl: "https://www.youtube.com/embed/xkNRY-ZFbhY",
      stores: [
        { name: "Steam", url: "https://store.steampowered.com/app/4084600/Meu_Restaurante_Brazuca?utm_source=techstrike_site&utm_medium=website&utm_campaign=game_card" },
        { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.TechStrikeGameStudio.MeuRestauranteBrazuca" },
        { name: "Itch.io", url: "https://tstrikebrasil.itch.io/meu-restaurante-brazuca?utm_source=techstrike_site&utm_medium=website&utm_campaign=game_card" },
      ],
      isNew: false,
    },
    {
      title: "HexPG",
      description: t.hexPGDesc,
      longDescription: t.hexPGLongDesc,
      image: "/images/games/hex-pg/hexpg.png",
      platforms: ["desktop"],
      screenshots: [
        "/images/games/hex-pg/1.png",
        "/images/games/hex-pg/2.png",
        "/images/games/hex-pg/3.png",
        "/images/games/hex-pg/4.png",
        "/images/games/hex-pg/5.png",
        "/images/games/hex-pg/6.png",
      ],
      trailerUrl: "https://youtu.be/PD0MdrEUX7s",
      stores: [
        { name: "Itch.io", url: "https://tstrikebrasil.itch.io/hexpg?utm_source=techstrike_site&utm_medium=website&utm_campaign=game_card" },
      ],
      isNew: false,
    },
    {
      title: "Verdant Valley",
      description: t.verdantValleyDesc,
      longDescription: t.verdantValleyLongDesc,
      image: "/images/games/verdant-valley/verdant-valley.jpg",
      platforms: ["mobile"],
      screenshots: [
        "/images/games/verdant-valley/1.jpg",
        "/images/games/verdant-valley/2.jpg",
        "/images/games/verdant-valley/3.jpg",
      ],
      trailerUrl: "https://www.youtube.com/embed/tqNIEFG5LEg",
      stores: [
        { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.techstrikebrasil.verdantvalley" },
        //{ name: "App Store", url: "#" },
      ],
      isNew: false,
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