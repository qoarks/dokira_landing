"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/section";
import AnimatedBackground from "../ui/animated-background";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * Composant HeroSection pour la section principale de la landing page
 *
 * @returns {React.ReactElement} - Élément React
 */
const HeroSection = () => {
	const { t } = useTranslation();

	// Animations pour les éléments de la hero section
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				duration: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.4,
			},
		},
	};

	return (
		<>
			<div
				id="hero"
				className="relative flex items-center justify-center overflow-hidden"
				style={{
					marginTop: "80px",
					minHeight: "calc(100vh - 80px)",
					background: "white",
				}}
			>
				<div
					style={{
						position: "absolute",
						width: "100%",
						height: "100%",
						pointerEvents: "none",
					}}
				>
					<AnimatedBackground variant="mesh" />
				</div>

				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
					<motion.div
						className="flex flex-col items-center text-center max-w-4xl mx-auto"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						data-testid="hero-container"
					>
						<motion.div
							variants={itemVariants}
							className="mb-6 inline-flex items-center px-3 py-1 rounded-full border border-violet-200 bg-violet-50 text-violet-700 text-sm font-medium"
						>
							<span className="flex h-2 w-2 rounded-full bg-violet-600 mr-2"></span>
							Nouvelle version disponible
						</motion.div>

						<motion.h1
							className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight tracking-tight text-gray-900"
							variants={itemVariants}
							data-testid="hero-title"
						>
							<span className="block mb-2">
								{t.hero.title1}
							</span>
							<span className="text-gray-900">
								{t.hero.title2}
							</span>
						</motion.h1>

						<motion.p
							className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto"
							variants={itemVariants}
							data-testid="hero-subtitle"
						>
							{t.hero.subtitle}
						</motion.p>

						<motion.div
							variants={itemVariants}
							data-testid="hero-cta"
							className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
						>
							<Link href="/contact" className="w-full sm:w-auto">
								<button className="btn-primary w-full sm:w-auto">
									{t.hero.cta1}
								</button>
							</Link>
							<Link href="#features" className="w-full sm:w-auto">
								<button className="btn-secondary w-full sm:w-auto">
									En savoir plus
								</button>
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</div>

			<Section
				className="py-0 relative overflow-hidden"
				background="transparent"
				style={{
					background: "linear-gradient(135deg, #EEF2FF 0%, #FCE7F3 50%, #FEF3C7 100%)",
					minHeight: "80vh",
					display: "flex",
					alignItems: "center",
				}}
			>
				<svg
					className="absolute inset-0 w-full h-full opacity-40 mix-blend-overlay pointer-events-none"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
				>
					<filter id="noiseFilter">
						<feTurbulence
							type="fractalNoise"
							baseFrequency="0.8"
							numOctaves="3"
							stitchTiles="stitch"
						/>
					</filter>
					<rect
						width="100%"
						height="100%"
						filter="url(#noiseFilter)"
						opacity="1"
					/>
				</svg>

				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="max-w-5xl mx-auto"
					>
						<div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/50 bg-white/40 backdrop-blur-sm transform transition-transform duration-500 hover:scale-[1.01]">
							<Image
								src="/dashbord-screeshot-1.png"
								alt="Dokira Dashboard"
								width={1200}
								height={800}
								priority
								className="w-full h-auto object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
						</div>
					</motion.div>
				</div>
			</Section>
		</>
	);
};

export { HeroSection };
