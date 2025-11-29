"use client";

import React, { useState, useEffect } from "react";
import {
	motion,
	AnimatePresence,
	useScroll,
	useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "@/components/ui/logo";
import { useTranslation } from "@/hooks/useTranslation";
import LanguageSwitch from "@/components/ui/LanguageSwitch";

/**
 * Composant Navbar pour la navigation principale
 *
 * @param {Object} props - Propriétés du composant
 * @param {string} [props.className] - Classes CSS additionnelles
 * @returns {React.ReactElement} - Élément React
 */
const Navbar = ({ className, ...props }) => {
	const { t } = useTranslation();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeSectionId, setActiveSectionId] = useState("#hero");

	const navVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.25,
				ease: [0.16, 1, 0.3, 1],
			},
		},
	};

	const linkVariants = {
		normal: {},
		hover: { transition: { duration: 0.15 } },
		tap: {},
	};

	const buttonVariants = {
		normal: {},
		hover: {
			transition: { duration: 0.15 },
		},
		tap: {},
	};

	const mobileMenuVariants = {
		closed: {
			opacity: 0,
			y: -20,
			transition: {
				duration: 0.15,
				ease: [0.16, 1, 0.3, 1],
			},
		},
		open: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.25,
				ease: [0.16, 1, 0.3, 1],
				staggerChildren: 0.05,
				delayChildren: 0.02,
			},
		},
	};

	const mobileItemVariants = {
		closed: { opacity: 0, x: -20 },
		open: { opacity: 1, x: 0 },
	};

	const navLinks = [
		{ name: t.navbar.home, href: "#hero" },
		{ name: t.navbar.problem, href: "#problem" },
		{ name: t.navbar.solution, href: "#solution" },
		{ name: t.navbar.features, href: "#features" },
		{ name: t.navbar.pricing, href: "#pricing" },
	];

	// Effet pour détecter le défilement
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);

			// Déterminer la section active en fonction du défilement
			const sections = document.querySelectorAll("section[id]");
			let currentSectionId = "#hero";

			sections.forEach((section) => {
				const sectionTop = section.offsetTop - 100;
				const sectionHeight = section.offsetHeight;
				if (
					window.scrollY >= sectionTop &&
					window.scrollY < sectionTop + sectionHeight
				) {
					const id = section.getAttribute("id");
					currentSectionId = `#${id}`;
				}
			});

			setActiveSectionId(currentSectionId);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.nav
			initial="hidden"
			animate="visible"
			variants={navVariants}
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-150",
				isScrolled
					? "backdrop-blur-xl bg-white/80 shadow-lg shadow-black/[0.03] py-3"
					: "bg-transparent py-5",
				className
			)}
			{...props}
		>
			{isScrolled && (
				<div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-5/30 to-transparent"></div>
			)}

			<div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
				<div className="absolute -top-40 -right-20 w-72 h-72 bg-violet-2/30 rounded-full blur-3xl"></div>
				<div className="absolute -bottom-40 -left-20 w-72 h-72 bg-green-2/30 rounded-full blur-3xl"></div>
			</div>

			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="flex items-center">
						<Link href="#hero" className="flex items-center">
							<Logo size="medium" variant="full" />
						</Link>
					</div>

					{/* Navigation desktop */}
					<div className="hidden md:flex items-center space-x-8">
						<div className="flex items-center space-x-1">
							{navLinks.map((link) => {
								const isActive = activeSectionId === link.href;
								return (
									<a
										key={link.name}
										href={link.href}
										className={cn(
											"px-4 py-2 text-sm font-normal transition-colors duration-200",
											isActive
												? "text-violet-9"
												: "text-gray-11 hover:text-gray-12"
										)}
									>
										{link.name}
									</a>
								);
							})}
						</div>

						<LanguageSwitch />

						<Link href="/contact">
							<button
								className="px-6 py-2 text-sm bg-violet-3 text-gray-12 border border-violet-5 hover:bg-violet-4 hover:border-violet-8 font-medium transition-all duration-200"
								style={{ borderRadius: "8px" }}
							>
								{t.navbar.demo}
							</button>
						</Link>
					</div>

					{/* Bouton menu mobile */}
					<div className="md:hidden">
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="w-10 h-10 bg-white/80 border border-gray-3 flex items-center justify-center text-foreground transition-all duration-150"
							style={{ borderRadius: "8px" }}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className={cn(
									"transition-transform duration-150",
									isMobileMenuOpen ? "rotate-90" : "rotate-0"
								)}
							>
								{isMobileMenuOpen ? (
									<>
										<path d="M18 6 6 18"></path>
										<path d="m6 6 12 12"></path>
									</>
								) : (
									<>
										<path d="M4 12h16"></path>
										<path d="M4 6h16"></path>
										<path d="M4 18h16"></path>
									</>
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Menu mobile */}
				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							className="md:hidden mt-4 p-4 bg-white/90 backdrop-blur-lg border border-gray-3"
							style={{ borderRadius: "8px" }}
							variants={mobileMenuVariants}
							initial="closed"
							animate="open"
							exit="closed"
						>
							<div className="flex flex-col space-y-2">
								{navLinks.map((link) => {
									const isActive = activeSectionId === link.href;
									return (
										<motion.a
											key={link.name}
											href={link.href}
											variants={mobileItemVariants}
											className={cn(
												"px-4 py-3 font-medium transition-all duration-150 flex items-center",
												isActive
													? "bg-violet-1 text-violet-9"
													: "text-foreground hover:bg-gray-1"
											)}
											style={{ borderRadius: "8px" }}
											onClick={() => setIsMobileMenuOpen(false)}
										>
											{isActive && (
												<span className="w-1.5 h-1.5 rounded-full bg-violet-9 mr-2"></span>
											)}
											{link.name}
										</motion.a>
									);
								})}
								<motion.div
									variants={mobileItemVariants}
									className="flex justify-center mt-2"
								>
									<LanguageSwitch />
								</motion.div>
								<Link
									href="/contact"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									<motion.div
										variants={mobileItemVariants}
										className="btn-primary mt-2 flex items-center justify-center gap-2"
									>
										<span>{t.navbar.demo}</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M5 12h14"></path>
											<path d="m12 5 7 7-7 7"></path>
										</svg>
									</motion.div>
								</Link>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.nav>
	);
};

export { Navbar };
