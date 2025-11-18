import { Github,  Linkedin, Youtube } from "lucide-react"; // Globe,
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const Team = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const teamMembers = [
    {
      name: "Michel (Mike) Alves",
      role: t.founderRole,
      image: "/images/mike-photo.jpg",
      bio: t.founderBio,
      socials: {
        github: "https://github.com/mikxingu",
        linkedin: "https://www.linkedin.com/in/michel-alves-almeida-leite-84976315a/",
        youtube: "https://www.youtube.com/@mikeriderbrasil"
        //website: "#", --TODO: Add personal website if available
      },
    },
  ];
  return (
    <section id="team" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">
            {t.teamTitle}
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
          <p className="mt-6 text-lg max-w-2xl mx-auto">
            {t.teamSubtitle}
          </p>
        </div>

        <div className="flex justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="game-card p-6 bg-card max-w-md"
            >
              <div className="mb-4 aspect-square overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary mb-3">{member.role}</p>
              <p className="text-foreground/80 mb-4">{member.bio}</p>
              <div className="flex space-x-3">
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    className="text-foreground/70 hover:text-primary transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github size={18} />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    className="text-foreground/70 hover:text-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin size={18} />
                  </a>
                )}
                {member.socials.youtube && (
                  <a 
                    href={member.socials.youtube}
                    className="text-foreground/70 hover:text-primary transition-colors"
                    aria-label={`${member.name}'s Youtube`}
                  >
                    <Youtube size={18} />
                  </a>
                )}
                {/* {member.socials.website && (
                  <a
                    href={member.socials.website}
                    className="text-foreground/70 hover:text-primary transition-colors"
                    aria-label={`${member.name}'s Website`}
                  >
                    <Globe size={18} />
                  </a>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
