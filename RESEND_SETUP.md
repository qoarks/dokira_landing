# 📧 Guide de configuration Resend pour QUAERA AI

## Étape 1 : Créer un compte Resend

1. Allez sur **https://resend.com**
2. Cliquez sur **"Sign up"**
3. Inscrivez-vous avec votre email ou GitHub
4. Confirmez votre email

## Étape 2 : Obtenir votre clé API

1. Connectez-vous sur Resend
2. Dans le menu de gauche, cliquez sur **"API Keys"**
3. Cliquez sur **"Create API Key"**
4. Nom suggéré : `Quaera Landing Page`
5. **Copiez la clé** (elle commence par `re_...`)
   - ⚠️ Vous ne pourrez la voir qu'une seule fois !

## Étape 3 : Configurer dans Netlify

1. Allez sur **Netlify** → Votre projet **quaera1**
2. Menu de gauche → **"Site configuration"**
3. Cliquez sur **"Environment variables"**
4. Ajoutez ces 2 variables :

### Variable 1 : RESEND_API_KEY
- **Key** : `RESEND_API_KEY`
- **Value** : `re_xxxxxxxxxxxxx` (votre clé API Resend)

### Variable 2 : CONTACT_EMAIL
- **Key** : `CONTACT_EMAIL`
- **Value** : `structura.talents@gmail.com` (ou l'email où vous voulez recevoir les messages)

5. Cliquez sur **"Save"**

## Étape 4 : Redéployer votre site

Netlify redéploiera automatiquement après avoir ajouté les variables.
Sinon, allez dans **"Deploys"** → **"Trigger deploy"** → **"Deploy site"**

## ✅ Test

Une fois déployé :
1. Allez sur **https://quaera.ai/contact**
2. Remplissez le formulaire
3. Vous devriez recevoir l'email à l'adresse configurée !

## 📧 Format de l'email

Les emails arrivent avec :
- **De** : QUAERA AI Contact <onboarding@resend.dev>
- **Sujet** : Nouvelle demande de contact - [Nom de l'entreprise]
- **Contenu** : HTML formaté avec toutes les informations du formulaire

## 🎯 (Optionnel) Utiliser votre propre domaine pour les emails

Pour envoyer des emails depuis `@quaera.ai` :

1. Dans Resend → **"Domains"**
2. Cliquez sur **"Add domain"**
3. Entrez : `quaera.ai`
4. Resend vous donnera des enregistrements DNS (SPF, DKIM, etc.)
5. Ajoutez ces enregistrements dans GoDaddy :
   - Allez dans GoDaddy → My Products → quaera.ai → DNS
   - Ajoutez les enregistrements fournis par Resend
6. Attendez la vérification (quelques heures)
7. Une fois vérifié, changez dans le code :
   ```
   from: 'QUAERA AI Contact <contact@quaera.ai>'
   ```

## 🆓 Limites du plan gratuit

- **3,000 emails/mois** gratuits
- Largement suffisant pour un site vitrine

## ❓ Besoin d'aide ?

- Documentation Resend : https://resend.com/docs
- Support Resend : https://resend.com/support
