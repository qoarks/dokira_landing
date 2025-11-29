#!/bin/bash

# Script pour construire et exécuter l'image Docker de QUAERA AI Landing Page

# Couleurs pour les messages
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Afficher un message de bienvenue
echo -e "${GREEN}=== Construction de l'image Docker pour QUAERA AI Landing Page ===${NC}"

# Construire l'image Docker
echo -e "${YELLOW}Construction de l'image Docker...${NC}"
docker build -t quaera-landing:latest .

# Vérifier si la construction a réussi
if [ $? -eq 0 ]; then
    echo -e "${GREEN}Image Docker construite avec succès !${NC}"
    
    # Demander à l'utilisateur s'il souhaite exécuter le conteneur
    read -p "Voulez-vous exécuter le conteneur maintenant ? (o/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Oo]$ ]]; then
        echo -e "${YELLOW}Démarrage du conteneur sur le port 3000...${NC}"
        docker run -p 3000:3000 quaera-landing:latest
    else
        echo -e "${GREEN}Pour exécuter le conteneur plus tard, utilisez la commande :${NC}"
        echo "docker run -p 3000:3000 quaera-landing:latest"
    fi
else
    echo -e "${YELLOW}Erreur lors de la construction de l'image Docker.${NC}"
    exit 1
fi
