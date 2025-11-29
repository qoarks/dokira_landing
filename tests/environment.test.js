/**
 * Test de vérification de l'environnement de développement
 * 
 * Ce test vérifie que l'environnement Node.js est correctement configuré
 * et que les versions minimales requises sont présentes.
 */

const { execSync } = require('child_process');

describe('Environnement de développement', () => {
  test('Node.js est installé avec une version >= 18', () => {
    const nodeVersion = process.version;
    const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0], 10);
    expect(majorVersion).toBeGreaterThanOrEqual(18);
  });

  test('npm est installé avec une version >= 8', () => {
    const npmVersionOutput = execSync('npm --version').toString().trim();
    const majorVersion = parseInt(npmVersionOutput.split('.')[0], 10);
    expect(majorVersion).toBeGreaterThanOrEqual(8);
  });

  test('Les dépendances globales nécessaires sont accessibles', () => {
    // Cette fonction vérifie si une commande est disponible dans le PATH
    const isCommandAvailable = (command) => {
      try {
        execSync(`which ${command}`, { stdio: 'ignore' });
        return true;
      } catch (e) {
        return false;
      }
    };

    // Vérifier si npx est disponible (nécessaire pour installer shadcn)
    expect(isCommandAvailable('npx')).toBe(true);
  });
});
