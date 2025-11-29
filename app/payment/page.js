"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useTranslation } from '@/hooks/useTranslation';

// Remplacez par votre clé publique Stripe (à mettre dans .env.local)
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

const getCardElementOptions = (language) => ({
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
  hidePostalCode: false,
});

function CheckoutForm() {
  const { t, language } = useTranslation();
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'FR'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage('');

    try {
      // Validation des champs
      if (!formData.email || !formData.name || !formData.address || !formData.city || !formData.postalCode) {
        setErrorMessage(t.payment.fillAllFields || 'Veuillez remplir tous les champs obligatoires');
        setIsProcessing(false);
        return;
      }

      // Créer un Payment Intent côté serveur
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 2000, // 20€ en centimes
          email: formData.email,
          name: formData.name,
        }),
      });

      const { clientSecret, error: backendError } = await response.json();

      if (backendError) {
        setErrorMessage(backendError);
        setIsProcessing(false);
        return;
      }

      // Confirmer le paiement avec les informations de carte
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: formData.name,
            email: formData.email,
            address: {
              line1: formData.address,
              city: formData.city,
              postal_code: formData.postalCode,
              country: formData.country,
            },
          },
        },
      });

      if (error) {
        setErrorMessage(error.message);
        setIsProcessing(false);
      } else if (paymentIntent.status === 'succeeded') {
        // Paiement réussi - Rediriger vers une page de succès
        window.location.href = '/payment/success';
      }
    } catch (error) {
      console.error('Erreur:', error);
      setErrorMessage(t.payment.paymentError || 'Une erreur est survenue lors du traitement du paiement');
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">{t.payment.title}</h2>
        <p className="text-foreground-muted mb-2">
          {t.payment.subtitle}
        </p>
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
          <p className="text-sm font-medium text-primary flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>
              {t.payment.recurringInfo}
            </span>
          </p>
        </div>
      </div>

      {/* Informations personnelles */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">{t.payment.billingInfo}</h3>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            {t.payment.name} <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium mb-2">
            {t.payment.address} <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium mb-2">
              {t.payment.city} <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>

          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium mb-2">
              {t.payment.postalCode} <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              required
              value={formData.postalCode}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
        </div>
      </div>

      {/* Informations de carte */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">{t.payment.paymentInfo}</h3>
        <div className="p-4 border-2 border-border rounded-xl bg-white">
          <CardElement options={getCardElementOptions(language)} />
        </div>
        <p className="text-sm text-foreground-muted flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-success" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          {t.payment.securityInfo}
        </p>
      </div>

      {errorMessage && (
        <div className="p-4 bg-danger/10 border border-danger rounded-xl">
          <p className="text-danger text-sm">{errorMessage}</p>
        </div>
      )}

      <motion.button
        type="submit"
        disabled={!stripe || isProcessing}
        className={`w-full btn-primary py-4 text-lg ${(!stripe || isProcessing) ? 'opacity-50 cursor-not-allowed' : ''}`}
        whileHover={(!stripe || isProcessing) ? {} : { scale: 1.02 }}
        whileTap={(!stripe || isProcessing) ? {} : { scale: 0.98 }}
      >
        {isProcessing ? t.payment.processing : t.payment.pay}
      </motion.button>

      <p className="text-xs text-center text-foreground-muted">
        {t.payment.terms}{' '}
        <a href="/terms" className="text-primary hover:underline">{t.payment.termsLink}</a> {t.payment.and}{' '}
        <a href="/privacy" className="text-primary hover:underline">{t.payment.privacyLink}</a>
      </p>
    </form>
  );
}

export default function PaymentPage() {
  const { language } = useTranslation();
  
  const elementsOptions = {
    locale: language === 'fr' ? 'fr' : 'en'
  };
  
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card p-8">
            <Elements stripe={stripePromise} options={elementsOptions}>
              <CheckoutForm />
            </Elements>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
