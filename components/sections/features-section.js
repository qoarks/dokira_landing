"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/section";
import { SectionTitle } from "../ui/section-title";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";

/**
 * Composant FeaturesSection pour présenter les points forts de Dokira
 *
 * @returns {React.ReactElement} - Élément React
 */
const FeaturesSection = () => {
	const { t } = useTranslation();

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.05,
				delayChildren: 0.02,
				duration: 0.25,
				ease: [0.16, 1, 0.3, 1],
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.25,
				ease: [0.16, 1, 0.3, 1],
			},
		},
	};

	// Liste des fonctionnalités principales
	const features = [
		{
			id: 1,
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
					/>
				</svg>
			),
			title: t.features.feature1,
			description: t.features.feature1Desc,
			color: "success",
			stat: t.features.feature1Stat,
			statLabel: t.features.feature1StatLabel,
		},
		{
			id: 2,
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
			),
			title: t.features.feature2,
			description: t.features.feature2Desc,
			color: "primary",
			stat: t.features.feature2Stat,
			statLabel: t.features.feature2StatLabel,
		},
		{
			id: 3,
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
					/>
				</svg>
			),
			title: t.features.feature3,
			description: t.features.feature3Desc,
			color: "accent",
			stat: t.features.feature3Stat,
			statLabel: t.features.feature3StatLabel,
		},
		{
			id: 4,
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M13 10V3L4 14h7v7l9-11h-7z"
					/>
				</svg>
			),
			title: t.features.feature4,
			description: t.features.feature4Desc,
			color: "success",
			stat: t.features.feature4Stat,
			statLabel: t.features.feature4StatLabel,
		},
		{
			id: 5,
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
					/>
				</svg>
			),
			title: t.features.feature5,
			description: t.features.feature5Desc,
			color: "info",
			stat: t.features.feature5Stat,
			statLabel: t.features.feature5StatLabel,
		},
		{
			id: 6,
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
			),
			title: t.features.feature6,
			description: t.features.feature6Desc,
			color: "secondary",
			stat: t.features.feature6Stat,
			statLabel: t.features.feature6StatLabel,
		},
	];

	return (
		<Section
			id="features"
			className="relative overflow-hidden bg-white pt-16 md:pt-20"
		>
			<div className="container mx-auto px-4">
				<div className="text-center max-w-3xl mx-auto mb-12">
					<motion.h2
						className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-gray-12"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.3 }}
						data-testid="features-title"
					>
						{t.features.title}
					</motion.h2>

					<motion.p
						className="text-lg font-normal text-gray-11"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.3, delay: 0.1 }}
					>
						{t.features.subtitle}
					</motion.p>
				</div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.1 }}
					data-testid="features-grid"
				>
					{features.map((feature) => (
						<motion.div key={feature.id} variants={itemVariants}>
							<div className="bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 h-full p-8 group">
								<div className="flex items-start justify-between mb-6">
									<div className="text-violet-600 p-0 inline-flex items-center justify-center group-hover:text-violet-800 transition-colors duration-300">
										<div className="w-8 h-8">{feature.icon}</div>
									</div>
									<div className="text-right">
										<div className="text-lg font-bold text-gray-900">
											{feature.stat}
										</div>
										<div className="text-xs text-gray-500 font-medium">
											{feature.statLabel}
										</div>
									</div>
								</div>

								<h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-violet-700 transition-colors">
									{feature.title}
								</h3>
								<p className="text-gray-600 leading-relaxed text-base font-light">
									{feature.description}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Section de call-to-action */}
				<motion.div
					className="mt-12 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<Link href="/contact">
						<button className="btn-primary">{t.features.ctaButton}</button>
					</Link>
				</motion.div>
			</div>
		</Section>
	);
};

export { FeaturesSection };
