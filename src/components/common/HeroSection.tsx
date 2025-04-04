
import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  hasGradient?: boolean;
  backgroundImage?: string;
  children?: React.ReactNode;
  overlayOpacity?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  hasGradient = true,
  backgroundImage,
  children,
  overlayOpacity = 'bg-black/50'
}) => {
  return (
    <section 
      className={`relative min-h-[70vh] flex items-center ${
        !backgroundImage && 'bg-gradient-to-br from-primary to-primary/80'
      }`}
      style={backgroundImage ? { 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      {/* Overlay for background image */}
      {backgroundImage && (
        <div className={`absolute inset-0 ${overlayOpacity}`}></div>
      )}
      
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
            hasGradient && !backgroundImage ? 'hero-text-gradient' : 'text-white'
          }`}>
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
