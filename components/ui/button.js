import React from "react";
import { cn } from "@/lib/utils";

/**
 * Composant Button personnalisé pour les CTA
 *
 * @param {Object} props - Propriétés du composant
 * @param {string} [props.variant="primary"] - Variante du bouton (primary, secondary, outline)
 * @param {string} [props.size="default"] - Taille du bouton (sm, default, lg)
 * @param {React.ReactNode} props.children - Contenu du bouton
 * @param {string} [props.className] - Classes CSS additionnelles
 * @param {React.ButtonHTMLAttributes} props.props - Autres propriétés HTML du bouton
 * @returns {React.ReactElement} - Élément React
 */
const Button = React.forwardRef(
	(
		{ className, variant = "primary", size = "default", children, ...props },
		ref
	) => {
	const baseStyles =
		"inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-9 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
	
	const borderRadius = "rounded-[16px]";

	const variants = {
		primary: `${borderRadius} bg-violet-9 text-white hover:bg-violet-10`,
		secondary: `${borderRadius} bg-transparent text-gray-12 hover:bg-gray-1`,
	};

	const sizes = {
		default: "h-14 py-4 px-8 text-base",
		sm: "h-12 px-6 text-sm",
		lg: "h-16 px-10 text-lg",
	};

		return (
			<button
				className={cn(baseStyles, variants[variant], sizes[size], className)}
				ref={ref}
				{...props}
			>
				{children}
			</button>
		);
	}
);

Button.displayName = "Button";

export { Button };
