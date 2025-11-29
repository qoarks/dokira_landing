"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/section";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * Composant PricingSection pour présenter les offres tarifaires de Dokira
 *
 * @returns {React.ReactElement} - Élément React
 */
const PricingSection = () => {
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

	// Plans tarifaires
	const pricingPlans = [
		{
			id: 1,
			name: t.pricing.offerPro,
			price: t.pricing.proPrice,
			originalPrice: null,
			period: `/${t.pricing.monthly}`,
			description: t.pricing.proDescription,
			features: [
				{ text: t.pricing.proFeature1, included: true },
				{ text: t.pricing.proFeature2, included: true },
				{ text: t.pricing.proFeature3, included: true },
				{ text: t.pricing.proFeature4, included: true },
				{ text: t.pricing.proFeature5, included: true },
				{ text: t.pricing.proFeature6, included: true },
			],
			cta: t.pricing.startTrial,
			popular: false,
			color: "primary",
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
		},
		{
			id: 3,
			name: t.pricing.offerEnterprise,
			price: t.pricing.customPrice,
			originalPrice: null,
			period: "",
			description: t.pricing.enterpriseDescription,
			features: [
				{ text: t.pricing.enterpriseFeature1, included: true },
				{ text: t.pricing.enterpriseFeature2, included: true },
				{ text: t.pricing.enterpriseFeature3, included: true },
				{ text: t.pricing.enterpriseFeature4, included: true },
				{ text: t.pricing.enterpriseFeature5, included: true },
				{ text: t.pricing.enterpriseFeature6, included: true },
				{ text: t.pricing.enterpriseFeature7, included: true },
				{ text: t.pricing.enterpriseFeature8, included: true },
			],
			cta: t.pricing.contactUs,
			popular: false,
			color: "success",
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
						d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
					/>
				</svg>
			),
		},
	];

	return (
		<Section
			id="pricing"
			className="relative overflow-hidden bg-white pt-16 md:pt-20"
		>
			<div className="container mx-auto px-4 sm:px-6">
				<div className="text-center max-w-3xl mx-auto mb-12">
					<motion.h2
						className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-12"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.3 }}
						data-testid="pricing-title"
					>
						{t.pricing.title}
					</motion.h2>

					<motion.p
						className="text-xl text-gray-11"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.3, delay: 0.1 }}
					>
						{t.pricing.subtitle}
					</motion.p>
				</div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.1 }}
					data-testid="pricing-plans"
				>
					{pricingPlans.map((plan) => {
						const isPro = plan.id === 1;

						return (
							<motion.div key={plan.id} variants={itemVariants}>
								<div className="bg-white hover:bg-gray-1 border border-gray-3 hover:border-gray-4 transition-all duration-200 h-full flex flex-col rounded-2xl overflow-hidden">
									<div className="p-10 pb-8 border-b border-gray-3">
										<h3 className="text-2xl font-bold mb-4 text-gray-12">
											{plan.name}
										</h3>
										<p className="text-base text-gray-11 mb-6">
											{plan.description}
										</p>

										<div className="flex items-baseline mb-8">
											<span className="text-5xl font-bold text-gray-12">
												{plan.price}
											</span>
											<span className="text-gray-9 ml-2 text-lg">
												{plan.period}
											</span>
										</div>

										{plan.originalPrice && (
											<div className="mt-2">
												<span className="text-sm text-gray-9 line-through">
													{plan.originalPrice}
												</span>
												<span className="ml-2 text-sm text-gray-11">
													Economisez 10%
												</span>
											</div>
										)}
									</div>

									<div className="p-10 flex-grow">
										<ul className="space-y-4">
											{plan.features.map((feature, index) => (
												<li key={index} className="flex items-start">
													{feature.included ? (
														<span className="mr-3 flex-shrink-0 mt-0.5">
															<div
																className="bg-violet-100 text-violet-600 p-1 flex items-center justify-center rounded-full"
															>
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	className="h-3.5 w-3.5"
																	viewBox="0 0 20 20"
																	fill="currentColor"
																>
																	<path
																		fillRule="evenodd"
																		d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
																		clipRule="evenodd"
																	/>
																</svg>
															</div>
														</span>
													) : (
														<span className="mr-3 flex-shrink-0 mt-0.5">
															<div className="bg-gray-3 text-gray-7 p-1 rounded-full flex items-center justify-center">
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	className="h-3.5 w-3.5"
																	viewBox="0 0 20 20"
																	fill="currentColor"
																>
																	<path
																		fillRule="evenodd"
																		d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
																		clipRule="evenodd"
																	/>
																</svg>
															</div>
														</span>
													)}
													<span
														className={`text-base ${feature.included ? "text-gray-12" : "text-gray-9"}`}
													>
														{feature.text}
													</span>
												</li>
											))}
										</ul>
									</div>

									<div className="p-10 pt-8 border-t border-gray-3">
										<Link href={isPro ? "/payment" : "/contact"}>
											<button
												className="w-full py-4 px-6 bg-green-3 text-green-10 border border-green-5 hover:bg-green-4 hover:border-green-6 font-medium transition-all duration-200"
											>
												{plan.cta}
											</button>
										</Link>
									</div>
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</Section>
	);
};

export { PricingSection };
