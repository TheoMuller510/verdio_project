import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@phosphor-icons/react"; // ou une autre icône
import "./ScrollToTop.scss";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Afficher / cacher le bouton selon la position de scroll
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      className="scroll-to-top"
      aria-label="Revenir en haut de la page"
      onClick={handleClick}
    >
      <ArrowUpIcon size={20} weight="bold" />
    </button>
  );
};
