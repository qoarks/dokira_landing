# QUAERA AI Landing Page

Landing page responsive pour QUAERA AI, une solution d'IA souveraine pour la gestion documentaire.

## Table des matières

- [Installation](#installation)
- [Développement](#développement)
- [Tests](#tests)
  - [Tests unitaires](#tests-unitaires)
  - [Tests de responsive design](#tests-de-responsive-design)
  - [Tests end-to-end](#tests-end-to-end)
- [Déploiement](#déploiement)
  - [Déploiement avec Docker](#déploiement-avec-docker)
- [Structure du projet](#structure-du-projet)
- [Technologies utilisées](#technologies-utilisées)

## Installation

```bash
# Cloner le dépôt
git clone <url-du-dépôt>

# Accéder au répertoire du projet
cd quaera-landing

# Installer les dépendances
npm install
```

## Développement

```bash
# Lancer le serveur de développement
npm run dev
```

Le serveur de développement sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## Tests

### Tests unitaires

```bash
# Exécuter tous les tests unitaires
npm test
```

### Tests de responsive design

```bash
# Exécuter les tests de responsive design
npm test tests/responsive/responsive.test.js
```

### Tests end-to-end

```bash
# Exécuter les tests end-to-end en mode headless
npm run test:e2e

# Exécuter les tests end-to-end avec l'interface Cypress
npm run test:e2e:open

# Exécuter uniquement les tests d'intégration
npm run test:integration

# Exécuter les tests end-to-end avec le serveur de développement
npm run test:ci
```

## Déploiement

### Construction du projet

```bash
# Construire le projet pour la production
npm run build

# Démarrer le serveur de production
npm start
```

### Déploiement avec Docker

Un Dockerfile est fourni pour faciliter le déploiement de l'application.

```bash
# Construire l'image Docker
./docker-build.sh

# Ou manuellement
docker build -t quaera-landing:latest .

# Exécuter le conteneur
docker run -p 3000:3000 quaera-landing:latest
```

## Structure du projet

```
quaera-landing/
├── app/                  # Configuration Next.js App Router
│   ├── globals.css       # Styles globaux
│   ├── layout.js         # Layout principal
│   └── page.js           # Page principale
├── components/           # Composants React
│   ├── sections/         # Sections de la landing page
│   └── ui/               # Composants UI réutilisables
├── cypress/              # Tests end-to-end avec Cypress
│   ├── e2e/              # Tests end-to-end
│   └── support/          # Fichiers de support Cypress
├── lib/                  # Utilitaires et fonctions
│   ├── animations.js     # Animations Framer Motion
│   └── utils.js          # Fonctions utilitaires
├── public/               # Fichiers statiques
├── tests/                # Tests unitaires et de responsive
│   └── responsive/       # Tests de responsive design
├── .dockerignore         # Fichiers à ignorer pour Docker
├── .env                  # Variables d'environnement
├── Dockerfile            # Configuration Docker
├── cypress.config.js     # Configuration Cypress
├── docker-build.sh       # Script de build Docker
├── jest.config.js        # Configuration Jest
├── next.config.js        # Configuration Next.js
├── package.json          # Dépendances et scripts
└── tailwind.config.js    # Configuration Tailwind CSS
```

## Technologies utilisées

- **Next.js** : Framework React pour le rendu côté serveur et la génération de sites statiques
- **React** : Bibliothèque JavaScript pour la création d'interfaces utilisateur
- **Tailwind CSS** : Framework CSS utilitaire
- **Framer Motion** : Bibliothèque d'animations pour React
- **Jest** : Framework de test JavaScript
- **React Testing Library** : Utilitaires de test pour React
- **Cypress** : Framework de test end-to-end
- **Docker** : Plateforme de conteneurisation
