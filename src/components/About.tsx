import { Code, Gamepad2, Rocket } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">{t.aboutTitle}</h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-center mb-12">
            {t.aboutDescription}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/20 rounded-full">
                <Gamepad2 size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.creativeDesign}</h3>
              <p className="text-foreground/80">
                {t.creativeDesignDesc}
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-secondary/20 rounded-full">
                <Code size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.technicalExcellence}</h3>
              <p className="text-foreground/80">
                {t.technicalExcellenceDesc}
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-accent/20 rounded-full">
                <Rocket size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.playerFocused}</h3>
              <p className="text-foreground/80">
                {t.playerFocusedDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
