import { NextResponse } from 'next/server';

// Note: Pour utiliser Stripe en production, vous devez installer le package:
// npm install stripe

export async function POST(request) {
  try {
    const { amount, email, name } = await request.json();

    // Validation
    if (!amount || !email || !name) {
      return NextResponse.json(
        { error: 'Informations manquantes' },
        { status: 400 }
      );
    }

    // IMPORTANT: Pour la production, décommentez ce code après avoir installé Stripe
    /*
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    // 1. Créer ou récupérer le client
    const customer = await stripe.customers.create({
      email: email,
      name: name,
      metadata: {
        product: 'QUAERA AI - Offre Pro',
      },
    });

    // 2. Créer un abonnement avec paiement récurrent
    // Note: Vous devez d'abord créer un Price dans le Dashboard Stripe
    // ou utiliser le code ci-dessous pour créer automatiquement le produit et le prix
    
    // Créer le produit (à faire une seule fois, ensuite utilisez l'ID du Price)
    const product = await stripe.products.create({
      name: 'QUAERA AI - Offre Pro',
      description: 'Accès complet à toutes les fonctionnalités de QUAERA AI',
    });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: 2000, // 20€ en centimes
      currency: 'eur',
      recurring: {
        interval: 'month', // Abonnement mensuel
      },
    });

    // 3. Créer l'abonnement
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: price.id }],
      payment_behavior: 'default_incomplete',
      payment_settings: { save_default_payment_method: 'on_subscription' },
      expand: ['latest_invoice.payment_intent'],
    });

    return NextResponse.json({
      subscriptionId: subscription.id,
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    });
    */

    // Pour le développement (à supprimer en production)
    console.log('Subscription request:', { amount, email, name });
    return NextResponse.json({
      error: 'Stripe n\'est pas encore configuré. Consultez PAYMENT_SETUP.md pour les instructions de configuration.'
    }, { status: 501 });

  } catch (error) {
    console.error('Erreur lors de la création de l\'abonnement:', error);
    return NextResponse.json(
      { error: 'Erreur lors du traitement de l\'abonnement' },
      { status: 500 }
    );
  }
}
