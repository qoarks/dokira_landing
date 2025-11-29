# Guide de contribution - QUAERA AI Landing Page

Ce document fournit des directives pour contribuer au développement de la landing page QUAERA AI.

## Table des matières

- [Environnement de développement](#environnement-de-développement)
- [Workflow de développement](#workflow-de-développement)
- [Standards de code](#standards-de-code)
- [Tests](#tests)
- [Création de composants](#création-de-composants)
- [Animations](#animations)
- [Responsive design](#responsive-design)
- [Soumission de modifications](#soumission-de-modifications)

## Environnement de développement

### Prérequis

- Node.js 18.x ou supérieur
- npm 8.x ou supérieur
- Git

### Installation

```bash
# Cloner le dépôt
git clone <url-du-dépôt>
cd quaera-landing

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## Workflow de développement

1. Créez une branche pour votre fonctionnalité ou correction
   ```bash
   git checkout -b feature/nom-de-la-fonctionnalité
   ```

2. Développez votre fonctionnalité en suivant l'approche TDD (Test-Driven Development)
   - Écrivez d'abord les tests
   - Implémentez la fonctionnalité
   - Vérifiez que les tests passent

3. Committez vos changements avec des messages clairs
   ```bash
   git commit -m "feat: description de la fonctionnalité"
   ```

4. Poussez votre branche et créez une Pull Request

## Standards de code

### Structure des composants

```jsx
// Imports
import React from 'react';
import { motion } from 'framer-motion';

/**
 * Description du composant
 * 
 * @param {Object} props - Les propriétés du composant
 * @returns {React.ReactElement} - Élément React
 */
const MonComposant = ({ prop1, prop2 }) => {
  // Logique du composant

  return (
    <div data-testid="mon-composant">
      {/* Contenu du composant */}
    </div>
  );
};

export { MonComposant };
```

### Conventions de nommage

- **Fichiers de composants** : PascalCase (ex: `HeroSection.js`)
- **Fichiers utilitaires** : camelCase (ex: `animations.js`)
- **Classes CSS** : kebab-case via Tailwind (ex: `text-center`)
- **data-testid** : kebab-case (ex: `data-testid="hero-title"`)

## Tests

### Tests unitaires

Utilisez Jest et React Testing Library pour les tests unitaires.

```jsx
import { render, screen } from '@testing-library/react';
import { MonComposant } from './mon-composant';

describe('MonComposant', () => {
  it('devrait rendre correctement', () => {
    render(<MonComposant />);
    expect(screen.getByTestId('mon-composant')).toBeInTheDocument();
  });
});
```

### Tests de responsive design

```jsx
import { render, screen } from '@testing-library/react';
import { MonComposant } from './mon-composant';

describe('MonComposant Responsive Tests', () => {
  test('renders correctly on mobile', () => {
    // Simuler une taille d'écran mobile
    global.innerWidth = 375;
    render(<MonComposant />);
    expect(screen.getByTestId('mon-element')).toHaveClass('w-full');
  });
});
```

### Tests end-to-end

Utilisez Cypress pour les tests end-to-end.

```javascript
describe('Page d\'accueil', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('devrait afficher le titre principal', () => {
    cy.get('[data-testid="hero-title"]').should('be.visible');
  });
});
```

## Création de composants

### Composants de section

Les composants de section doivent suivre cette structure :

1. Import des dépendances
2. Définition des animations
3. Structure JSX avec data-testid pour les éléments clés
4. Export du composant

### Composants UI

Les composants UI doivent être :

1. Réutilisables
2. Bien documentés
3. Testés individuellement
4. Stylisés avec Tailwind CSS

## Animations

Utilisez les animations définies dans `lib/animations.js` pour maintenir la cohérence.

```jsx
import { motion } from 'framer-motion';
import { fadeUpVariants } from '../../lib/animations';

const MonComposant = () => {
  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      Contenu animé
    </motion.div>
  );
};
```

## Responsive design

Utilisez les classes Tailwind pour le responsive design :

- Mobile first : définissez d'abord le style mobile
- Utilisez les breakpoints pour les écrans plus grands : `md:`, `lg:`, `xl:`

Exemple :
```jsx
<div className="w-full md:w-1/2 lg:w-1/3">
  Contenu responsive
</div>
```

## Soumission de modifications

1. Assurez-vous que tous les tests passent
   ```bash
   npm test
   npm run test:e2e
   ```

2. Mettez à jour la documentation si nécessaire

3. Créez une Pull Request détaillée expliquant vos modifications
