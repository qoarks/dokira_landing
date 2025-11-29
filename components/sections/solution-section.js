"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/section";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * Composant SolutionSection pour présenter la solution Dokira
 *
 * @returns {React.ReactElement} - Élément React
 */
const SolutionSection = () => {
	const { t } = useTranslation();
	const [activeFeature, setActiveFeature] = React.useState(0);

	const features = [
		{
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
				</svg>
			),
			title: t.solution.solution1,
			description: t.solution.solution1Desc,
			image: "/dashbord-screeshot-1.png"
		},
		{
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
				</svg>
			),
			title: t.solution.solution2,
			description: t.solution.solution2Desc,
			image: "/dashbord-screeshot-1.png" // Placeholder, ideally different images
		},
		{
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
				</svg>
			),
			title: t.solution.solution4,
			description: t.solution.solution4Desc,
			image: "/dashbord-screeshot-1.png" // Placeholder
		},
	];

	return (
		<Section id="solution" className="relative overflow-hidden bg-white py-24">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
						{t.solution.title}{" "}
						<span className="text-violet-600">{t.solution.titleHighlight}</span>
					</h2>
					<p className="text-xl text-gray-600 font-light">
						{t.solution.subtitle}
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
					{/* Left Side: Interactive List */}
					<div className="lg:col-span-5 space-y-0 border-l border-gray-200">
						{features.map((feature, index) => (
							<motion.div
								key={index}
								className={`p-6 cursor-pointer transition-all duration-500 border-l-4 ${activeFeature === index
									? "bg-gray-50 border-violet-600"
									: "bg-white border-transparent hover:bg-gray-50"
									}`}
								onClick={() => setActiveFeature(index)}
							>
								<div className="flex items-start gap-4">
									<div className={`p-2 ${activeFeature === index ? "text-violet-700" : "text-gray-400"
										}`}>
										{feature.icon}
									</div>
									<div>
										<h3 className={`font-bold text-lg mb-2 ${activeFeature === index ? "text-gray-900" : "text-gray-500"
											}`}>
											{feature.title}
										</h3>
										<p className="text-gray-600 text-sm leading-relaxed">
											{feature.description}
										</p>
									</div>
								</div>
							</motion.div>
						))}

						<div className="pt-8 pl-6">
							<Link href="/contact">
								<button className="btn-primary rounded-none">{t.solution.cta1}</button>
							</Link>
						</div>
					</div>

					{/* Right Side: Dynamic Image */}
					<div className="lg:col-span-7">
						<motion.div
							key={activeFeature}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							className="relative overflow-hidden border border-gray-200 bg-gray-100"
						>
							<div className="aspect-[16/10] relative">
								<Image
									src={features[activeFeature].image}
									alt={features[activeFeature].title}
									fill
									className="object-cover"
									priority
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export { SolutionSection };
