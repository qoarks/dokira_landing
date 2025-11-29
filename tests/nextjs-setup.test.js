/**
 * Test de vérification de la configuration Next.js et Shadcn
 * 
 * Ce test vérifie que Next.js et Shadcn sont correctement installés
 * et configurés dans le projet.
 */

const fs = require('fs');
const path = require('path');

describe('Configuration Next.js', () => {
  test('Le fichier package.json contient les dépendances Next.js', () => {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    expect(fs.existsSync(packageJsonPath)).toBe(true);
    
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    expect(packageJson.dependencies).toBeDefined();
    expect(packageJson.dependencies['next']).toBeDefined();
    expect(packageJson.scripts).toBeDefined();
    expect(packageJson.scripts['dev']).toBeDefined();
    expect(packageJson.scripts['build']).toBeDefined();
    expect(packageJson.scripts['start']).toBeDefined();
  });

  test('La structure de base Next.js est présente', () => {
    // Vérifier les dossiers essentiels
    expect(fs.existsSync(path.join(process.cwd(), 'app'))).toBe(true);
    expect(fs.existsSync(path.join(process.cwd(), 'public'))).toBe(true);
    
    // Vérifier les fichiers de configuration essentiels
    expect(fs.existsSync(path.join(process.cwd(), 'next.config.js'))).toBe(true);
  });
});

describe('Configuration Shadcn', () => {
  test('Les fichiers de configuration Shadcn sont présents', () => {
    expect(fs.existsSync(path.join(process.cwd(), 'components.json'))).toBe(true);
  });

  test('Les dossiers de composants Shadcn sont présents', () => {
    expect(fs.existsSync(path.join(process.cwd(), 'components'))).toBe(true);
    expect(fs.existsSync(path.join(process.cwd(), 'components', 'ui'))).toBe(true);
  });

  test('Les fichiers de thème sont correctement configurés', () => {
    const themeFilePath = path.join(process.cwd(), 'app', 'globals.css');
    expect(fs.existsSync(themeFilePath)).toBe(true);
    
    const themeContent = fs.readFileSync(themeFilePath, 'utf8');
    // Vérifier que les couleurs principales sont définies
    expect(themeContent).toContain('#0A2540');
    expect(themeContent).toContain('#00BFA6');
  });
});
