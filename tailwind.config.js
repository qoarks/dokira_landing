/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				canvas: "#F3F2F0", // Warm Archive Paper
				dokira: {
					black: "#1a1a1a",
					ink: "#2d2a26",
				},
				accent: {
					blue: "#2563EB", // Reference Blue
					deepBlue: "#1a4fd6", // Stronger Blue for backgrounds
					orange: "#E86F4A",
					paper: "#FDFCF8",
					manila: "#F5E6B5", // Yellow Receipt
					salmon: "#EFB0B0", // Pink Card
					green: "#3A7D65", // Archival Green
				},
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				serif: ["DM Serif Display", "serif"],
				mono: ["JetBrains Mono", "monospace"],
			},
			borderRadius: {
				DEFAULT: "var(--radius)",
				md: "var(--radius-md)",
				lg: "var(--radius-lg)",
			},
			boxShadow: {
				sm: "var(--shadow-sm)",
				DEFAULT: "var(--shadow)",
				md: "var(--shadow-md)",
				lg: "var(--shadow-lg)",
				xl: "var(--shadow-xl)",
			},
			animation: {
				float: "float 8s ease-in-out infinite",
				"float-delayed": "float 8s ease-in-out 4s infinite",
				"spin-slow": "spin 12s linear infinite",
				"ping-fast": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
			},
		},
	},
	plugins: [],
};
