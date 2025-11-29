import React from "react";
import { cn } from "@/lib/utils";

/**
 * Composant Section pour structurer les différentes parties de la landing page
 * 
 * @param {Object} props - Propriétés du composant
 * @param {string} [props.id] - ID de la section pour la navigation
 * @param {string} [props.className] - Classes CSS additionnelles
 * @param {React.ReactNode} props.children - Contenu de la section
 * @param {boolean} [props.container=true] - Si true, ajoute une classe container
 * @param {string} [props.background="white"] - Couleur de fond (white, light, primary, accent)
 * @returns {React.ReactElement} - Élément React
 */
const Section = ({
  id,
  className,
  children,
  container = true,
  background = "white",
  ...props
}) => {
  const backgrounds = {
    white: "bg-white",
    light: "bg-background-alt",
    primary: "bg-primary text-white",
    accent: "bg-accent text-white",
    transparent: "bg-transparent",
  };

  return (
    <section
      id={id}
      className={cn(
        "section w-full overflow-hidden relative",
        backgrounds[background] || backgrounds.white,
        className
      )}
      {...props}
    >
      {container ? (
        <div className="container relative z-10">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};

export { Section };
