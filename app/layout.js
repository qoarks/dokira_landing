import "./globals.css";
import ClientProviders from "@/components/providers/ClientProviders";

export const metadata = {
	title: "QUAERA AI - Solution d'IA souveraine et sécurisée",
	description:
		"Centralisez, analysez et exploitez votre patrimoine documentaire avec une IA 100% française et sécurisée.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr" className="scroll-smooth" suppressHydrationWarning>
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
				/>
				<meta name="theme-color" content="#ffffff" />
				<title>Dokira.ai - Your Document Intelligence Platform</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@400;500;600&display=swap"
					rel="stylesheet"
				></link>
			</head>
			<body className="min-h-screen flex flex-col" suppressHydrationWarning>
				<ClientProviders>{children}</ClientProviders>
			</body>
		</html>
	);
}
