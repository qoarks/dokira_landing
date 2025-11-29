"use client";

import React from 'react';

export default function TestPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-bold text-primary mb-4">Page de test</h1>
      <p className="text-lg text-foreground mb-8">Cette page fonctionne-t-elle correctement?</p>
      <div className="glass-card p-6 max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Carte avec effet de verre</h2>
        <p className="text-foreground-muted">
          Si vous pouvez voir cette carte avec un effet de verre, les styles CSS fonctionnent correctement.
        </p>
      </div>
    </div>
  );
}
