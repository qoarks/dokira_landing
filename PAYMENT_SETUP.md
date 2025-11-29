# Configuration du système d'abonnement récurrent avec Stripe

Le bouton "Commencer maintenant" de l'offre Pro redirige maintenant vers une page de paiement sécurisée utilisant **Stripe**, le système de paiement le plus fiable et sécurisé au monde.

⚠️ **Important** : Le système crée un **abonnement mensuel récurrent** de 20€/mois, pas un paiement unique. L'utilisateur sera débité automatiquement chaque mois jusqu'à l'annulation de l'abonnement.

## 🔒 Sécurité

- **Certification PCI DSS Niveau 1** : Le plus haut niveau de sécurité pour les paiements en ligne
- **Aucune donnée bancaire sur vos serveurs** : Toutes les informations de carte sont traitées directement par Stripe
- **Cryptage SSL/TLS** : Toutes les communications sont chiffrées
- **3D Secure** : Authentification forte pour les paiements européens
- **Détection de fraude** : Algorithmes avancés de Stripe Radar

## 📋 Prérequis

1. Créer un compte Stripe sur [stripe.com](https://stripe.com)
2. Node.js et npm installés

## 🚀 Installation

### Étape 1 : Installer les packages Stripe

```bash
cd "/Users/bilelessafi/Desktop/Société/2_QUAERA AI/4_Produit GenAI/Landing page/quaera-landing"
npm install stripe @stripe/stripe-js @stripe/react-stripe-js
```

### Étape 2 : Obtenir vos clés API Stripe

1. Connectez-vous à votre [Dashboard Stripe](https://dashboard.stripe.com)
2. Allez dans **Développeurs** > **Clés API**
3. Copiez votre **clé publiable** (Publishable key) et votre **clé secrète** (Secret key)

⚠️ **Important** : En développement, utilisez les clés de test (commencent par `pk_test_` et `sk_test_`). En production, utilisez les clés live.

### Étape 3 : Configurer les variables d'environnement

Créez ou modifiez le fichier `.env.local` à la racine du projet :

```env
# Clés Stripe (MODE TEST pour le développement)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_votre_cle_publique_ici
STRIPE_SECRET_KEY=sk_test_votre_cle_secrete_ici

# En production, remplacez par vos clés live
# NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_votre_cle_publique_ici
# STRIPE_SECRET_KEY=sk_live_votre_cle_secrete_ici
```

⚠️ **IMPORTANT** : Ne commitez JAMAIS le fichier `.env.local` dans Git ! Ajoutez-le à `.gitignore`.

### Étape 4 : Activer le code de paiement

Ouvrez `/app/api/create-payment-intent/route.js` et :

1. Décommentez le code Stripe (lignes avec `/*` et `*/`)
2. Supprimez le code de développement (le return avec status 501)

Le fichier devrait ressembler à ceci :

```javascript
import { NextResponse } from 'next/server';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { amount, email, name } = await request.json();

    if (!amount || !email || !name) {
      return NextResponse.json(
        { error: 'Informations manquantes' },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'eur',
      receipt_email: email,
      metadata: {
        customer_name: name,
        product: 'QUAERA AI - Offre Pro',
      },
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });

  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur lors du traitement du paiement' },
      { status: 500 }
    );
  }
}
```

### Étape 5 : Redémarrer le serveur

```bash
npm run dev
```

## 🧪 Test du paiement

### Cartes de test Stripe

Utilisez ces numéros de carte pour tester (en mode test uniquement) :

#### ✅ Paiement réussi
- **Numéro** : `4242 4242 4242 4242`
- **Date** : N'importe quelle date future
- **CVC** : N'importe quel code à 3 chiffres
- **Code postal** : N'importe quel code

#### ❌ Paiement refusé
- **Numéro** : `4000 0000 0000 0002`

#### 🔐 Authentification 3D Secure requise
- **Numéro** : `4000 0027 6000 3184`

Plus de cartes de test : [Documentation Stripe](https://stripe.com/docs/testing)

## 📊 Suivi des paiements

1. Connectez-vous à votre [Dashboard Stripe](https://dashboard.stripe.com)
2. Allez dans **Paiements** pour voir tous les paiements
3. Vous recevrez des emails pour chaque paiement réussi

## 📅 Gestion des abonnements récurrents

Le système crée des abonnements mensuels. Voici ce qu'il faut savoir :

### Renouvellement automatique
- Les clients seront **automatiquement débités de 20€ chaque mois**
- Le premier paiement est immédiat
- Les paiements suivants se font à la même date chaque mois
- Stripe envoie automatiquement des emails de reçu

### Annulation d'abonnement
Pour permettre aux clients d'annuler leur abonnement, vous devez :

1. Créer un portail client Stripe où ils peuvent gérer leur abonnement
2. Ou créer une API pour gérer les annulations

**Via le Dashboard Stripe** (manuel) :
1. Allez dans **Clients** > Sélectionnez le client
2. Allez dans l'onglet **Abonnements**
3. Cliquez sur l'abonnement et **Annuler l'abonnement**

**Via l'API** (recommandé pour production) :
```javascript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
await stripe.subscriptions.cancel('sub_xxx');
```

### Gestion des échecs de paiement
Stripe réessaie automatiquement les paiements échoués selon ces règles :
- 1ère tentative : immédiate
- 2ème tentative : 3 jours après
- 3ème tentative : 5 jours après
- 4ème tentative : 7 jours après

Si tous les paiements échouent, l'abonnement est annulé automatiquement.

## 🔔 Webhooks (Optionnel mais recommandé)

Pour recevoir des notifications automatiques lors des paiements et événements d'abonnement :

1. Dans le Dashboard Stripe, allez dans **Développeurs** > **Webhooks**
2. Ajoutez un endpoint : `https://votre-domaine.com/api/webhooks/stripe`
3. Sélectionnez les événements importants :
   - `customer.subscription.created` - Nouvel abonnement
   - `customer.subscription.updated` - Abonnement modifié
   - `customer.subscription.deleted` - Abonnement annulé
   - `invoice.payment_succeeded` - Paiement mensuel réussi
   - `invoice.payment_failed` - Paiement mensuel échoué
4. Créez le fichier `/app/api/webhooks/stripe/route.js` pour traiter ces événements

## 💰 Tarification Stripe

Stripe prélève des frais par transaction :
- **France/Europe** : 1,4% + 0,25€ par transaction réussie
- **Cartes internationales** : 2,9% + 0,25€ par transaction réussie
- **Pas de frais mensuels**
- **Pas de frais de configuration**

## 📱 Mode production

Avant de passer en production :

1. ✅ Activez votre compte Stripe (vérification d'identité)
2. ✅ Remplacez les clés de test par les clés live dans `.env.local`
3. ✅ Configurez les webhooks en production
4. ✅ Activez Stripe Radar pour la détection de fraude
5. ✅ Configurez les emails de confirmation
6. ✅ Testez avec de vraies cartes (petits montants)

## 🆘 Support

- **Documentation Stripe** : https://stripe.com/docs
- **Support Stripe** : support@stripe.com
- **Dashboard** : https://dashboard.stripe.com

## 🔐 Sécurité et conformité

Stripe gère automatiquement :
- ✅ PCI DSS compliance
- ✅ RGPD (conservation des données)
- ✅ SCA (Strong Customer Authentication)
- ✅ Détection de fraude
- ✅ Chiffrement des données

Vous n'avez **aucune obligation de certification PCI DSS** car aucune donnée bancaire ne transite par vos serveurs.

## 📝 Pages créées

1. `/app/payment/page.js` - Page de paiement avec formulaire sécurisé
2. `/app/payment/success/page.js` - Page de confirmation après paiement
3. `/app/api/create-payment-intent/route.js` - API pour créer les paiements

## 🎯 Flux utilisateur

1. L'utilisateur clique sur "Commencer maintenant" (Offre Pro)
2. Redirection vers `/payment`
3. Remplissage du formulaire + informations bancaires
4. Validation du paiement par Stripe (3D Secure si nécessaire)
5. Redirection vers `/payment/success`
6. Email de confirmation envoyé automatiquement par Stripe
