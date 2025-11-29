import React from 'react';

// A purely decorative animated grid background component
const VisualGrid: React.FC = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* The Grid itself is handled by global CSS .bg-grid */}

            {/* Animated Squares appearing randomly on the grid */}
            <div className="absolute top-[10%] left-[15%] w-[40px] h-[40px] bg-accent-green/20 animate-pulse"></div>
            <div className="absolute top-[40%] right-[20%] w-[40px] h-[40px] bg-accent-orange/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-[20%] left-[30%] w-[80px] h-[40px] bg-black/5 animate-pulse" style={{ animationDelay: '2.5s' }}></div>

            {/* Moving lines simulating data flow */}
            <div className="absolute top-[25%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent animate-drift"></div>
        </div>
    );
};

export default VisualGrid;