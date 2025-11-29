# Dockerfile pour QUAERA AI Landing Page
# Utilisation d'une image Node.js optimisée pour la production
FROM node:18-alpine AS base

# Installer les dépendances nécessaires
RUN apk add --no-cache libc6-compat

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de configuration
COPY package.json package-lock.json* ./

# Étape de construction
FROM base AS builder
WORKDIR /app

# Installer les dépendances
RUN npm ci

# Copier le code source
COPY . .

# Construire l'application
RUN npm run build

# Étape de production
FROM base AS runner
WORKDIR /app

# Définir les variables d'environnement pour la production
ENV NODE_ENV production

# Créer un utilisateur non-root pour des raisons de sécurité
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copier les fichiers nécessaires depuis l'étape de construction
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Changer l'utilisateur pour des raisons de sécurité
USER nextjs

# Exposer le port sur lequel l'application s'exécutera
EXPOSE 3000

# Définir la variable d'environnement pour le port
ENV PORT 3000

# Commande pour démarrer l'application
CMD ["node", "server.js"]
