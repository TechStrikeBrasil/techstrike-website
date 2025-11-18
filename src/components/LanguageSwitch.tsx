import { useLanguage } from "../contexts/LanguageContext";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage("en")}
        className={`transition-all ${
          language === "en" ? "opacity-100 scale-110" : "opacity-50 hover:opacity-75"
        }`}
        aria-label="Switch to English"
        title="English"
      >
        <span className="text-2xl">🇺🇸</span>
      </button>
      <button
        onClick={() => setLanguage("pt")}
        className={`transition-all ${
          language === "pt" ? "opacity-100 scale-110" : "opacity-50 hover:opacity-75"
        }`}
        aria-label="Mudar para Português"
        title="Português"
      >
        <span className="text-2xl">🇧🇷</span>
      </button>
    </div>
  );
};

export default LanguageSwitch;
