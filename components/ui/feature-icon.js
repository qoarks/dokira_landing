import React from "react";
import { cn } from "@/lib/utils";

/**
 * Composant FeatureIcon pour afficher une icône avec un style cohérent
 * 
 * @param {Object} props - Propriétés du composant
 * @param {React.ReactNode} props.icon - L'icône à afficher
 * @param {string} [props.className] - Classes CSS additionnelles
 * @param {string} [props.variant="primary"] - Variante de couleur (primary, accent)
 * @returns {React.ReactElement} - Élément React
 */
const FeatureIcon = ({ 
  icon, 
  className, 
  variant = "primary",
  ...props 
}) => {
  const variants = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent",
  };

  return (
    <div
      className={cn(
        "w-12 h-12 flex items-center justify-center mb-4",
        variants[variant],
        className
      )}
      style={{ borderRadius: '6px' }}
      {...props}
    >
      {icon}
    </div>
  );
};

export { FeatureIcon };
