"use client";

import React, { memo } from "react";
import styles from "./logo.module.css";

/**
 * Logo component for Dokira
 * Replicates the Logo component from the main Next app
 */
const Logo = memo(({ size = "medium", variant = "full", className = "" }) => {
	const sizeClass = styles[size] || "";
	const squareSize = 11;
	const gap = 0;
	const startX = 28;
	const startY = 22.5;

	return (
		<div
			className={`${styles.logoFull} ${sizeClass} ${className} ${styles.logoContainer}`}
		>
			{variant !== "text" && (
				<div className={styles.logoIcon}>
					<svg
						viewBox="0 0 100 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							x="10"
							y="10"
							width="80"
							height="80"
							rx="0"
							fill="var(--gray-12)"
						/>

						{/* Top row */}
						<rect
							className={styles.blinkSquare}
							x={startX}
							y={startY}
							width={squareSize}
							height={squareSize}
							fill="white"
						/>
						<rect
							x={startX + squareSize + gap}
							y={startY}
							width={squareSize}
							height={squareSize}
							fill="white"
						/>
						<rect
							x={startX + (squareSize + gap) * 2}
							y={startY}
							width={squareSize}
							height={squareSize}
							fill="white"
						/>

						{/* Second row */}
						<rect
							x={startX}
							y={startY + squareSize + gap}
							width={squareSize}
							height={squareSize}
							fill="white"
						/>
						<rect
							x={startX + (squareSize + gap) * 3}
							y={startY + squareSize + gap}
							width={squareSize}
							height={squareSize}
							fill="white"
						/>

						{/* Third row */}
						<rect
							x={startX}
							y={startY + (squareSize + gap) * 2}
							width={squareSize}
							height={squareSize}
							fill="white"
						/>
						<rect
							x={startX + (squareSize + gap) * 3}
							y={startY + (squareSize + gap) * 2}
							width={squareSize}
							height={squareSize}
							fill="white"
						/>

						{/* Fourth row */}
						<rect
							x={startX}
							y={startY + (squareSize + gap) * 3}
							width={squareSize}
							height={squareSize}
							fill="white"
						/>
						<rect
							x={startX + (squareSize + gap) * 3}
							y={startY + (squareSize + gap) * 3}
							width={squareSize}
							height={squareSize}
							fill="white"
						/>

						{/* Bottom row */}
						<rect
							x={startX}
							y={startY + (squareSize + gap) * 4}
							width={squareSize}
							height={squareSize}
							fill="white"
						/>
						<rect
							x={startX + squareSize + gap}
							y={startY + (squareSize + gap) * 4}
							width={squareSize}
							height={squareSize}
							fill="white"
						/>
						<rect
							x={startX + (squareSize + gap) * 2}
							y={startY + (squareSize + gap) * 4}
							width={squareSize}
							height={squareSize}
							fill="white"
						/>
					</svg>
				</div>
			)}
			{variant !== "icon" && <span className={styles.logoText}>okira.ai</span>}
		</div>
	);
});

Logo.displayName = "Logo";

export default Logo;
