# Configuration de l'envoi d'emails pour le formulaire de contact

Le formulaire de contact est actuellement configuré pour envoyer les données à l'adresse **structura.talents@gmail.com**.

## État actuel

Pour l'instant, l'API route `/app/api/contact/route.js` reçoit les données du formulaire et les affiche dans la console. Pour un environnement de production, vous devez configurer un service d'envoi d'emails.

## Options recommandées pour la production

### Option 1 : Resend (Recommandé)
Resend est un service moderne et simple pour envoyer des emails depuis Next.js.

1. Créez un compte sur [resend.com](https://resend.com)
2. Installez le package :
   ```bash
   npm install resend
   ```
3. Modifiez `/app/api/contact/route.js` :
   ```javascript
   import { Resend } from 'resend';
   import { NextResponse } from 'next/server';

   const resend = new Resend(process.env.RESEND_API_KEY);

   export async function POST(request) {
     try {
       const data = await request.json();
       
       await resend.emails.send({
         from: 'contact@votredomaine.com',
         to: 'structura.talents@gmail.com',
         subject: 'Nouvelle demande de contact - QUAERA AI',
         html: `
           <h2>Nouvelle demande de contact</h2>
           <p><strong>Prénom :</strong> ${data.firstName}</p>
           <p><strong>Nom :</strong> ${data.lastName}</p>
           <p><strong>Email :</strong> ${data.email}</p>
           <p><strong>Téléphone :</strong> ${data.phone || 'Non renseigné'}</p>
           <p><strong>Entreprise :</strong> ${data.company}</p>
           <p><strong>Poste :</strong> ${data.position}</p>
           <p><strong>Message :</strong><br>${data.message || 'Aucun message'}</p>
         `
       });

       return NextResponse.json({ success: true });
     } catch (error) {
       return NextResponse.json({ error: error.message }, { status: 500 });
     }
   }
   ```
4. Ajoutez votre clé API dans `.env.local` :
   ```
   RESEND_API_KEY=votre_clé_api
   ```

### Option 2 : SendGrid

1. Créez un compte sur [sendgrid.com](https://sendgrid.com)
2. Installez le package :
   ```bash
   npm install @sendgrid/mail
   ```
3. Modifiez `/app/api/contact/route.js` avec SendGrid
4. Ajoutez votre clé API dans `.env.local`

### Option 3 : Nodemailer avec Gmail

1. Installez nodemailer :
   ```bash
   npm install nodemailer
   ```
2. Configurez un mot de passe d'application Gmail
3. Utilisez nodemailer dans votre API route

## Variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```env
# Pour Resend
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Ou pour SendGrid
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx

# Ou pour Nodemailer/Gmail
GMAIL_USER=votre.email@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
```

## Test en développement

Pour tester en développement, les données sont actuellement affichées dans la console du serveur. Vérifiez la console où Next.js s'exécute pour voir les données soumises.

## Adresse email de réception

Toutes les soumissions du formulaire seront envoyées à : **structura.talents@gmail.com**
