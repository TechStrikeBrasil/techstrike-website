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
    isNew: true,
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