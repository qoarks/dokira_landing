import React from "react";
import { cn } from "@/lib/utils";

/**
 * Composant SectionTitle pour les titres de section avec style cohérent
 * 
 * @param {Object} props - Propriétés du composant
 * @param {string} props.title - Titre principal
 * @param {string} [props.subtitle] - Sous-titre optionnel
 * @param {string} [props.align="center"] - Alignement du texte (left, center, right)
 * @param {string} [props.className] - Classes CSS additionnelles
 * @returns {React.ReactElement} - Élément React
 */
const SectionTitle = ({
  title,
  subtitle,
  align = "center",
  className,
  ...props
}) => {
  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div
      className={cn(
        "mb-16 md:mb-20",
        alignments[align],
        className
      )}
      {...props}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-gray-12">{title}</h2>
      {subtitle && (
        <p className="text-lg font-normal text-gray-11 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export { SectionTitle };
