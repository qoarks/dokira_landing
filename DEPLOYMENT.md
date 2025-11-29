# Guide de déploiement - QUAERA AI Landing Page

Ce document détaille les différentes options de déploiement pour la landing page QUAERA AI.

## Table des matières

- [Prérequis](#prérequis)
- [Déploiement avec Docker](#déploiement-avec-docker)
- [Déploiement sur Vercel](#déploiement-sur-vercel)
- [Déploiement sur Netlify](#déploiement-sur-netlify)
- [Déploiement sur un serveur personnalisé](#déploiement-sur-un-serveur-personnalisé)
- [Variables d'environnement](#variables-denvironnement)
- [Considérations de performance](#considérations-de-performance)
- [Surveillance et maintenance](#surveillance-et-maintenance)

## Prérequis

- Node.js 18.x ou supérieur
- npm 8.x ou supérieur
- Docker (pour le déploiement conteneurisé)
- Git

## Déploiement avec Docker

### Construction de l'image

```bash
# Utiliser le script de build fourni
./docker-build.sh

# Ou construire manuellement
docker build -t quaera-landing:latest .
```

### Exécution du conteneur

```bash
# Exécuter le conteneur en exposant le port 3000
docker run -p 3000:3000 quaera-landing:latest

# Exécuter en mode détaché (background)
docker run -d -p 3000:3000 quaera-landing:latest

# Exécuter avec des variables d'environnement
docker run -p 3000:3000 -e NEXT_PUBLIC_API_URL=https://api.example.com quaera-landing:latest
```

### Déploiement avec Docker Compose

Créez un fichier `docker-compose.yml` :

```yaml
version: '3'
services:
  quaera-landing:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: always
```

Puis exécutez :

```bash
docker-compose up -d
```

## Déploiement sur Vercel

Vercel est la plateforme recommandée pour déployer des applications Next.js.

1. Créez un compte sur [Vercel](https://vercel.com)
2. Installez Vercel CLI : `npm i -g vercel`
3. Connectez-vous : `vercel login`
4. Déployez : `vercel`
5. Pour la production : `vercel --prod`

Alternativement, connectez votre dépôt GitHub à Vercel pour des déploiements automatiques.

## Déploiement sur Netlify

1. Créez un compte sur [Netlify](https://netlify.com)
2. Installez Netlify CLI : `npm i -g netlify-cli`
3. Connectez-vous : `netlify login`
4. Déployez : `netlify deploy`
5. Pour la production : `netlify deploy --prod`

Créez un fichier `netlify.toml` à la racine du projet :

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## Déploiement sur un serveur personnalisé

### Préparation du build

```bash
# Construire l'application
npm run build

# Copier les fichiers nécessaires sur le serveur
# - Le dossier .next/
# - Le dossier public/
# - package.json et package-lock.json
# - next.config.js
```

### Configuration du serveur

Exemple avec Nginx comme proxy inverse :

```nginx
server {
    listen 80;
    server_name quaera-ai.com www.quaera-ai.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Utilisation de PM2 pour la gestion des processus

```bash
# Installer PM2
npm install -g pm2

# Démarrer l'application
pm2 start npm --name "quaera-landing" -- start

# Configurer le démarrage automatique
pm2 startup
pm2 save
```

## Variables d'environnement

Créez un fichier `.env.production` pour les variables d'environnement de production :

```
# API URLs
NEXT_PUBLIC_API_URL=https://api.quaera-ai.com

# Analytics
NEXT_PUBLIC_ANALYTICS_ID=UA-XXXXXXXXX-X

# Autres configurations
NEXT_PUBLIC_SITE_URL=https://quaera-ai.com
```

## Considérations de performance

- Activez la compression gzip/brotli sur votre serveur
- Configurez une CDN pour les assets statiques
- Utilisez les images optimisées de Next.js
- Configurez un cache approprié pour les ressources statiques

## Surveillance et maintenance

- Mettez en place une surveillance des performances avec [Sentry](https://sentry.io)
- Configurez des alertes pour les temps d'arrêt
- Planifiez des mises à jour régulières des dépendances
- Effectuez des sauvegardes régulières
