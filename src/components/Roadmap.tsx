import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { Badge } from "../components/ui/badge";

interface RoadmapItem {
  id: string;
  titleEn: string;
  titlePt: string;
  game: string;
  type: "event" | "release" | "development";
  startMonth: number; // 0-indexed from timeline start
  duration: number; // in months
}

// Timeline: Jan 2026 -> Jun 2027 (18 months)
const TIMELINE_START_YEAR = 2026;
const TIMELINE_START_MONTH = 0; // January
const TOTAL_MONTHS = 18;

const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthsPt = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

const roadmapItems: RoadmapItem[] = [
  {
    id: "mrb-dev",
    titleEn: "Meu Restaurante Brazuca - Development",
    titlePt: "Meu Restaurante Brazuca - Desenvolvimento",
    game: "MRB",
    type: "development",
    startMonth: 0,
    duration: 10,
  },
  {
    id: "mrb-nextfest",
    titleEn: "MRB - Steam Next Fest",
    titlePt: "MRB - Steam Next Fest",
    game: "MRB",
    type: "event",
    startMonth: 5, // Jun 2026
    duration: 1,
  },
  {
    id: "mrb-release",
    titleEn: "MRB - Release",
    titlePt: "MRB - Lançamento",
    game: "MRB",
    type: "release",
    startMonth: 9, // Oct 2026
    duration: 1,
  },
  {
    id: "tdw-dev",
    titleEn: "Three Days No Words - Development",
    titlePt: "Three Days No Words - Desenvolvimento",
    game: "TDW",
    type: "development",
    startMonth: 3,
    duration: 8,
  },
  {
    id: "tdw-nextfest",
    titleEn: "Three Days No Words - Steam Next Fest",
    titlePt: "Three Days No Words - Steam Next Fest",
    game: "TDW",
    type: "event",
    startMonth: 9, // Oct 2026
    duration: 1,
  },
  {
    id: "tdw-release",
    titleEn: "Three Days No Words - Release",
    titlePt: "Three Days No Words - Lançamento",
    game: "TDW",
    type: "release",
    startMonth: 11, // Dec 2026
    duration: 1,
  },
  {
    id: "hexpg-dev",
    titleEn: "HexPG - Continued Development",
    titlePt: "HexPG - Desenvolvimento Contínuo",
    game: "HexPG",
    type: "development",
    startMonth: 0,
    duration: 18,
  },
];

const typeColors: Record<RoadmapItem["type"], string> = {
  development: "bg-muted-foreground/40 border-muted-foreground",
  event: "bg-accent border-accent",
  release: "bg-primary border-primary",
};

const Roadmap = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const months = language === "pt" ? monthsPt : monthsEn;

  const getMonthLabel = (idx: number) => {
    const monthIdx = (TIMELINE_START_MONTH + idx) % 12;
    const year = TIMELINE_START_YEAR + Math.floor((TIMELINE_START_MONTH + idx) / 12);
    return { label: months[monthIdx], year, isJan: monthIdx === 0 };
  };

  // Current month indicator (June 2026 = index 5)
  const now = new Date();
  const currentIdx =
    (now.getFullYear() - TIMELINE_START_YEAR) * 12 + (now.getMonth() - TIMELINE_START_MONTH);
  const showCurrent = currentIdx >= 0 && currentIdx < TOTAL_MONTHS;

  return (
    <section id="roadmap" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.roadmapTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.roadmapSubtitle}
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-muted-foreground/40 border border-muted-foreground" />
            <span className="text-sm text-muted-foreground">{t.roadmapLegendDev}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-accent border border-accent" />
            <span className="text-sm text-muted-foreground">{t.roadmapLegendEvent}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-primary border border-primary" />
            <span className="text-sm text-muted-foreground">{t.roadmapLegendRelease}</span>
          </div>
        </div>

        {/* Gantt */}
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="min-w-[900px] bg-card border border-border rounded-lg p-4">
            {/* Month header */}
            <div
              className="grid gap-px mb-2"
              style={{ gridTemplateColumns: `200px repeat(${TOTAL_MONTHS}, 1fr)` }}
            >
              <div className="text-xs font-semibold text-muted-foreground" />
              {Array.from({ length: TOTAL_MONTHS }).map((_, idx) => {
                const { label, year, isJan } = getMonthLabel(idx);
                return (
                  <div
                    key={idx}
                    className="text-center text-[10px] text-muted-foreground border-l border-border/50 py-1"
                  >
                    <div>{label}</div>
                    {(isJan || idx === 0) && (
                      <div className="text-primary font-semibold">{year}</div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Rows */}
            <div className="relative">
              {showCurrent && (
                <div
                  className="absolute top-0 bottom-0 w-px bg-destructive z-10 pointer-events-none"
                  style={{
                    left: `calc(200px + ((100% - 200px) / ${TOTAL_MONTHS}) * ${currentIdx + 0.5})`,
                  }}
                >
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-destructive" />
                </div>
              )}

              {roadmapItems.map((item) => (
                <div
                  key={item.id}
                  className="grid gap-px items-center py-2 border-t border-border/30"
                  style={{ gridTemplateColumns: `200px repeat(${TOTAL_MONTHS}, 1fr)` }}
                >
                  <div className="pr-2 text-sm text-foreground truncate">
                    {language === "pt" ? item.titlePt : item.titleEn}
                  </div>
                  {Array.from({ length: TOTAL_MONTHS }).map((_, idx) => {
                    const isStart = idx === item.startMonth;
                    const isInside =
                      idx >= item.startMonth && idx < item.startMonth + item.duration;
                    if (!isInside) {
                      return <div key={idx} className="h-7 border-l border-border/20" />;
                    }
                    if (isStart) {
                      return (
                        <div
                          key={idx}
                          className={`h-7 rounded ${typeColors[item.type]} border flex items-center px-2 shadow-md`}
                          style={{ gridColumn: `span ${item.duration}` }}
                          title={language === "pt" ? item.titlePt : item.titleEn}
                        >
                          {item.type === "release" && (
                            <span className="text-[10px] font-bold text-primary-foreground truncate">
                              {language === "pt" ? "Lançamento" : "Release"}
                            </span>
                          )}
                          {item.type === "event" && (
                            <span className="text-[10px] font-bold text-accent-foreground truncate">
                              Next Fest
                            </span>
                          )}
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming highlights */}
        <div className="mt-10 grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {roadmapItems
            .filter((i) => i.type !== "development")
            .sort((a, b) => a.startMonth - b.startMonth)
            .map((item) => {
              const { label, year } = getMonthLabel(item.startMonth);
              return (
                <div
                  key={item.id}
                  className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                >
                  <Badge
                    variant={item.type === "release" ? "default" : "secondary"}
                    className="mb-2"
                  >
                    {item.type === "release"
                      ? t.roadmapLegendRelease
                      : t.roadmapLegendEvent}
                  </Badge>
                  <h3 className="text-foreground font-semibold text-sm mb-1">
                    {language === "pt" ? item.titlePt : item.titleEn}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {label} {year}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
