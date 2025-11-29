"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { fr } from "@/locales/fr";
import { en } from "@/locales/en";

export const useTranslation = () => {
	const { language } = useLanguage();

	const translations = {
		fr,
		en,
	};

	const t = translations[language] || translations.fr;

	return { t, language };
};
