import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

interface NewsItem {
  id: string;
  titleEn: string;
  titlePt: string;
  excerptEn: string;
  excerptPt: string;
  date: string;
  source: string;
  imageUrl: string;
  externalUrl: string;
  isNew?: boolean;
}

const newsItems: NewsItem[] = [
  
  // {
    // TEMPLATE FOR NEWS
    // titleEn: "News Title in English",
    // titlePt: "Título da Notícia em Português",
    // id: "6",
    // excerptEn: "Short description of the news in English. Click and check it out!",
    // excerptPt: "Descrição curta da notícia em Português. Clique e confira!",
    // date: "2026-05-15",
    // source: "TechStrike News",
    // imageUrl: "/images/news/6-news-image.png",
    // externalUrl: "https://example.com/news-article",
    // isNew: true,
  // },
  {
    id: "6",
    titleEn: "Meu Restaurante Brazuca acquired 500 wishlists on Steam!",
    titlePt: "Meu Restaurante Brazuca alcança 500 wishlists na Steam!",
    excerptEn: "Meu Restaurante Brazuca has reached 500 wishlists on Steam! Click and check it out!",
    excerptPt: "Meu Restaurante Brazuca alcançou 500 wishlists na Steam! Clique e confira!",
    date: "2026-05-25",
    source: "TechStrike News",
    imageUrl: "/images/news/6-500-wishlists.png",
    externalUrl: "https://steamcommunity.com/app/4084600/discussions/1/837251589453401794/?utm_source=techstrike_site&utm_medium=website&utm_campaign=news_card",
    isNew: true,
  },
  {
    id: "5",
    titleEn: "Meu Restaurante Brazuca featured on Wholesome Kitchen Event 2026!",
    titlePt: "Meu Restaurante Brazuca destacado no evento Wholesome Kitchen 2026!",
    excerptEn: "Meu Restaurante Brazuca was featured on the Wholesome Kitchen Event 2026! Click and check it out!",
    excerptPt: "Meu Restaurante Brazuca foi destacado no evento Wholesome Kitchen 2026! Clique e confira!",
    date: "2026-04-29",
    source: "TechStrike News",
    imageUrl: "/images/news/5-wholesome-kitchen-event.png",
    externalUrl: "https://store.steampowered.com/curator/45686865-Cozy-Job-Simulators/sale/wholesomekitchenevent2026",
    isNew: false,
  },
  {
    id: "4",
    titleEn: "HexPG got a new gameplay trailer!",
    titlePt: "HexPG recebeu um novo trailer de gameplay!",
    excerptEn: "We released a new public version of HexPG with a new gameplay trailer. Click and check it out!",
    excerptPt: "Lançamos uma nova versão pública do HexPG com um novo trailer de gameplay ! Clique aqui e confira!",
    date: "2026-04-10",
    source: "TechStrike News",
    imageUrl: "/images/news/4-new-hexpg-trailer.png",
    externalUrl: "https://play.google.com/store/apps/details?id=com.TechStrikeGameStudio.MeuRestauranteBrazuca",
    isNew: false,
  },
  {
    id: "3",
    titleEn: "Meu Restaurante Brazuca recieved a Mobile Version",
    titlePt: "Meu Restaurante Brazuca recebeu uma Versão Mobile",
    excerptEn: "We released a mobile version of Meu Restaurante Brazuca on Google Play! Click here and check it out!",
    excerptPt: "Lançamos uma versão mobile do Meu Restaurante Brazuca na Google Play! Clique aqui e confira!",
    date: "2026-02-19",
    source: "TechStrike News",
    imageUrl: "/images/news/3-mrb-mobile.jpg",
    externalUrl: "https://play.google.com/store/apps/details?id=com.TechStrikeGameStudio.MeuRestauranteBrazuca",
    isNew: false,
  },
  {
    id: "2",
    titleEn: "We released a mobile memory game for kids!",
    titlePt: "Lançamos um jogo mobile de memória para crianças!",
    excerptEn: "We released a new mobile game for kids. Click here and find more about it!",
    excerptPt: "Lançamos um novo jogo mobile para crianças. Clique aqui e descubra mais sobre!",
    date: "2026-01-16",
    source: "TechStrike News",
    imageUrl: "/images/news/2-jogo-memoria.jpg",
    externalUrl: "https://play.google.com/store/apps/details?id=com.TechStrikeGameStudios.JogodaMemriaInfantil",
    isNew: false,
  },
  {
    id: "1",
    titleEn: "Meu Restaurante Brazuca Featured on GamesArdor Portal",
    titlePt: "Meu Restaurante Brazuca Destaque no Portal GamesArdor",
    excerptEn: "http://gamesardor.net Portal featured our game Meu Restaurante Brazuca on Top Steam Games for December 2025!",
    excerptPt: "O portal http://gamesardor.net destacou nosso jogo Meu Restaurante Brazuca na lista dos melhores jogos da Steam para dezembro de 2025!",
    date: "2025-12-06",
    source: "GamesArdor Portal",
    imageUrl: "/images/news/1-games-ardor-website.jpg",
    externalUrl: "https://gamesardor.net/top-steam-games-to-look-out-for-in-december-2025?utm_source=techstrike_site&utm_medium=website&utm_campaign=news_card",
    isNew: false,
  },
];

const News = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "pt" ? "pt-BR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.newsTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.newsSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {newsItems.map((item) => (
            <a
              key={item.id}
              href={item.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="overflow-hidden h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={language === "pt" ? item.titlePt : item.titleEn}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {item.isNew && (
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                      {t.newBadge}
                    </Badge>
                  )}
                  <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(item.date)}</span>
                    <span className="text-primary">•</span>
                    <span>{item.source}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {language === "pt" ? item.titlePt : item.titleEn}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {language === "pt" ? item.excerptPt : item.excerptEn}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;