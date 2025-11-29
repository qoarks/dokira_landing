import React from 'react';


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Challenges from './components/Challenges';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Collaboration from './components/Collaboration';
import TryItNow from './components/TryItNow';
import Pricing from './components/Pricing';
import FloatingDock from './components/FloatingDock';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-canvas text-black selection:bg-accent-deepBlue selection:text-white font-sans">
            <Navbar />
            <main className="relative pt-24">
                <Hero />
                <Challenges />
                <Collaboration />
                <Features />
                <Benefits />
                <TryItNow />
                <Pricing />
                <FloatingDock />

                {/* Additional Spacer for Floating Dock */}
                <div className="h-32"></div>
            </main>
            <Footer />
        </div>
    );
};

export default App;