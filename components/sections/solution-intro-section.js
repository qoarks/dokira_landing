"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/section";
import AnimatedBackground from "../ui/animated-background";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

const SolutionIntroSection = () => {
	const { t } = useTranslation();

	return (
		<div
			id="solution-intro"
			className="relative flex items-center justify-center bg-gradient-to-b from-white to-violet-50"
			style={{
				minHeight: "60vh",
				width: "100vw",
			}}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
				<motion.div
					className="max-w-4xl mx-auto text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 tracking-tight">
						{t.problem.conclusionTitle}
					</h2>

					<p
						className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
					>
						{t.problem.conclusionText1}
					</p>

					<div className="bg-white p-8 rounded-2xl shadow-xl border border-violet-100 mb-12 transform rotate-1 hover:rotate-0 transition-transform duration-300">
						<p className="text-2xl font-semibold text-violet-900">
							{t.problem.conclusionText2}
						</p>
					</div>

					<div>
						<Link href="/contact">
							<button className="btn-primary text-lg px-8 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
								{t.problem.conclusionCTA}
							</button>
						</Link>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export { SolutionIntroSection };
