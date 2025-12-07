import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import LanguageSwitch from "./LanguageSwitch";

const Header = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold font-game text-primary">
            Tech<span className="text-white">Strike</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <nav>
            <ul className="flex space-x-1">
              <li>
                <a href="#about" className="nav-link">
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#team" className="nav-link">
                  {t.team}
                </a>
              </li>
              <li>
                <a href="#games" className="nav-link">
                  {t.games}
                </a>
              </li>
              <li>
                <a href="#news" className="nav-link">
                  {t.news}
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  {t.contact}
                </a>
              </li>
            </ul>
          </nav>
          <LanguageSwitch />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-card shadow-lg absolute top-full left-0 right-0">
          <ul className="flex flex-col p-4">
            <li className="py-3 border-b border-border">
              <a
                href="#about"
                className="block nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.about}
              </a>
            </li>
            <li className="py-3 border-b border-border">
              <a
                href="#team"
                className="block nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.team}
              </a>
            </li>
            <li className="py-3 border-b border-border">
              <a
                href="#games"
                className="block nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.games}
              </a>
            </li>
            <li className="py-3 border-b border-border">
              <a
                href="#news"
                className="block nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.news}
              </a>
            </li>
            <li className="py-3 border-b border-border">
              <a
                href="#contact"
                className="block nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.contact}
              </a>
            </li>
            <li className="py-3 flex justify-center">
              <LanguageSwitch />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
