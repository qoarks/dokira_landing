# Guide d'Internationalisation (i18n)

Ce projet supporte maintenant le français et l'anglais. Voici comment utiliser le système de traduction.

## 🎯 Structure

```
├── contexts/
│   └── LanguageContext.js          # Contexte React pour gérer la langue
├── locales/
│   ├── fr.js                       # Traductions françaises
│   └── en.js                       # Traductions anglaises
├── hooks/
│   └── useTranslation.js           # Hook pour accéder aux traductions
└── components/
    ├── providers/
    │   └── ClientProviders.js      # Provider qui enveloppe l'app
    └── ui/
        └── LanguageSwitch.js       # Composant switch de langue

```

## 🚀 Utilisation dans un composant

### 1. Importer le hook useTranslation

```javascript
"use client";

import { useTranslation } from '@/hooks/useTranslation';

export default function MyComponent() {
  const { t, language } = useTranslation();
  
  return (
    <div>
      <h1>{t.hero.title}</h1>
      <p>Langue actuelle : {language}</p>
    </div>
  );
}
```

### 2. Ajouter des nouvelles traductions

**Dans `/locales/fr.js` :**

```javascript
export const fr = {
  // Vos traductions existantes...
  
  myNewSection: {
    title: "Mon nouveau titre",
    description: "Ma description en français",
  }
};
```

**Dans `/locales/en.js` :**

```javascript
export const en = {
  // Vos traductions existantes...
  
  myNewSection: {
    title: "My new title",
    description: "My description in English",
  }
};
```

### 3. Utiliser les traductions

```javascript
<h1>{t.myNewSection.title}</h1>
<p>{t.myNewSection.description}</p>
```

## 🎨 Composant LanguageSwitch

Le switch de langue est déjà intégré dans la navbar :
- **Desktop** : Entre les liens de navigation et le bouton "Demander une démo"
- **Mobile** : Dans le menu déroulant

Pour l'ajouter ailleurs :

```javascript
import LanguageSwitch from '@/components/ui/LanguageSwitch';

<LanguageSwitch />
```

## 💾 Persistance

La langue sélectionnée est automatiquement sauvegardée dans le `localStorage` et restaurée au chargement de la page.

## 📝 Composants déjà traduits

- ✅ **Navbar** : Liens de navigation et bouton démo
- ⚠️ **Hero Section** : Traductions définies mais pas encore appliquées
- ⚠️ **Features Section** : Traductions définies mais pas encore appliquées
- ⚠️ **Pricing Section** : Traductions définies mais pas encore appliquées
- ⚠️ **CTA Section** : Traductions définies mais pas encore appliquées
- ⚠️ **Footer** : Traductions définies mais pas encore appliquées
- ⚠️ **Contact Page** : Traductions définies mais pas encore appliquées
- ⚠️ **Payment Page** : Traductions définies mais pas encore appliquées

## 🔧 Pour traduire un composant existant

1. Ouvrez le composant
2. Ajoutez `"use client";` en haut si ce n'est pas déjà fait
3. Importez le hook : `import { useTranslation } from '@/hooks/useTranslation';`
4. Utilisez le hook : `const { t } = useTranslation();`
5. Remplacez les textes en dur par les traductions : `{t.section.key}`

## 📋 Exemple complet

```javascript
"use client";

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export default function HeroSection() {
  const { t, language } = useTranslation();
  
  return (
    <section>
      <h1>{t.hero.title} <span>{t.hero.titleHighlight}</span></h1>
      <p>{t.hero.subtitle}</p>
      <button>{t.hero.cta1}</button>
      <button>{t.hero.cta2}</button>
    </section>
  );
}
```

## 🌍 Langues supportées

- 🇫🇷 **Français** (par défaut)
- 🇬🇧 **Anglais**

Pour ajouter une nouvelle langue, créez un nouveau fichier dans `/locales/` (ex: `es.js` pour l'espagnol) et ajoutez-le dans le hook `useTranslation.js`.

## ⚡ Performance

Le système utilise React Context, donc seuls les composants qui utilisent `useTranslation()` seront re-rendus lors du changement de langue.

## 🐛 Dépannage

**Problème** : La langue ne change pas
- Vérifiez que le composant est un Client Component (`"use client";`)
- Vérifiez que le composant utilise bien le hook `useTranslation()`

**Problème** : Erreur "useLanguage must be used within a LanguageProvider"
- Vérifiez que votre composant est bien à l'intérieur du `<ClientProviders>` dans `layout.js`

**Problème** : Traduction manquante
- Vérifiez que la clé existe dans `/locales/fr.js` ET `/locales/en.js`
- Utilisez la notation point pour accéder aux clés imbriquées : `t.section.subsection.key`
