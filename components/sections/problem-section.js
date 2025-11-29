"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/section";
import { SectionTitle } from "../ui/section-title";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * Composant ProblemSection pour présenter les problèmes que Dokira résout
 *
 * @returns {React.ReactElement} - Élément React
 */
const ProblemSection = () => {
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

	// Problèmes courants que Dokira résout
	const problems = [
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
						d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			),
			title: t.problem.problem3,
			description: t.problem.problem3Desc,
			stat: t.problem.problem3Stat,
			statLabel: t.problem.problem3StatLabel,
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
						d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
					/>
				</svg>
			),
			title: t.problem.problem2,
			description: t.problem.problem2Desc,
			stat: t.problem.problem2Stat,
			statLabel: t.problem.problem2StatLabel,
		},
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
						d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
					/>
				</svg>
			),
			title: t.problem.problem1,
			description: t.problem.problem1Desc,
			stat: t.problem.problem1Stat,
			statLabel: t.problem.problem1StatLabel,
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
						d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
					/>
				</svg>
			),
			title: t.problem.problem4,
			description: t.problem.problem4Desc,
			stat: t.problem.problem4Stat,
			statLabel: t.problem.problem4StatLabel,
		},
	];

	return (
		<Section id="problem" className="relative overflow-hidden bg-gray-1">
			<div className="container mx-auto">
				<SectionTitle
					title={t.problem.title}
					subtitle={t.problem.subtitle}
					data-testid="problem-title"
				/>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					data-testid="problem-container"
				>
					{problems.map((problem) => (
						<motion.div key={problem.id} variants={itemVariants}>
							<div className="bg-white border border-gray-200 p-8 h-full hover:border-violet-300 transition-all duration-300 hover:shadow-sm group">
								<div className="flex items-center gap-4 mb-6">
									<div className="p-3 bg-gray-50 rounded-lg text-gray-900 group-hover:bg-violet-50 group-hover:text-violet-700 transition-colors">
										{problem.icon}
									</div>
									<h3 className="font-bold text-xl text-gray-900 group-hover:text-violet-900 transition-colors">
										{problem.title}
									</h3>
								</div>
								<p className="text-gray-600 leading-relaxed text-base">
									{problem.description}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</Section>
	);
};

export { ProblemSection };
