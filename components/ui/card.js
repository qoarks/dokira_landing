import React from "react";
import { cn } from "@/lib/utils";

/**
 * Composant Card pour afficher des informations dans un format de carte
 *
 * @param {Object} props - Propriétés du composant
 * @param {string} [props.className] - Classes CSS additionnelles
 * @param {React.ReactNode} props.children - Contenu de la carte
 * @returns {React.ReactElement} - Élément React
 */
const Card = React.forwardRef(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			"border border-gray-3 bg-white",
			className
		)}
		style={{ borderRadius: '6px' }}
		{...props}
	/>
));
Card.displayName = "Card";

/**
 * En-tête de la carte
 */
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col space-y-1.5 p-6", className)}
		{...props}
	/>
));
CardHeader.displayName = "CardHeader";

/**
 * Titre de la carte
 */
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
	<h3 ref={ref} className={cn("text-xl font-semibold", className)} {...props} />
));
CardTitle.displayName = "CardTitle";

/**
 * Description de la carte
 */
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
	<p ref={ref} className={cn("text-sm text-gray-600", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

/**
 * Contenu de la carte
 */
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
	<div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

/**
 * Pied de la carte
 */
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex items-center p-6 pt-0", className)}
		{...props}
	/>
));
CardFooter.displayName = "CardFooter";

export {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
};
