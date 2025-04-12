
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface CompetencyCard {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  videoClip?: string;
  expandedDescription?: string; // New field for expanded description
}

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  type?: 'home' | 'page';
  hasGradient?: boolean;
  backgroundImage?: string;
  videoSrc?: string;
  competencies?: CompetencyCard[];
  children?: React.ReactNode;
  overlayOpacity?: string;
  blurAmount?: string; // New prop for background blur amount
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  type = 'page',
  hasGradient = true,
  backgroundImage,
  videoSrc,
  competencies,
  children,
  overlayOpacity = 'bg-black/50',
  blurAmount = 'backdrop-blur-sm' // Default blur amount
}) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const cardVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05, 
      zIndex: 30,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section 
      className={`relative min-h-[85vh] flex items-center ${
        !backgroundImage && !videoSrc && 'bg-gradient-to-br from-primary to-primary/80'
      }`}
      style={backgroundImage && !videoSrc ? { 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      {/* Video Background for Home Page */}
      {type === 'home' && videoSrc && (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video 
            className="absolute min-w-full min-h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Hover Video Clip (shows when hovering over competency card) */}
      {activeVideo && (
        <div className="absolute inset-0 w-full h-full overflow-hidden z-10 transition-opacity duration-500">
          <video 
            className="absolute min-w-full min-h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src={activeVideo} type="video/mp4" />
          </video>
        </div>
      )}
      
      {/* Overlay for background image or video */}
      <div className={`absolute inset-0 ${overlayOpacity} ${type === 'home' ? 'bg-gradient-to-r from-black/70 to-black/50' : ''}`}></div>
      
      {/* Blur effect for non-home pages */}
      {type !== 'home' && backgroundImage && (
        <div className={`absolute inset-0 ${blurAmount}`}></div>
      )}
      
      <div className="container-custom relative z-20 py-20">
        {type === 'home' && competencies ? (
          <motion.div 
            className="w-full" 
            initial="hidden" 
            animate="visible" 
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-16">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
                hasGradient && !backgroundImage && !videoSrc ? 'hero-text-gradient' : 'text-white'
              }`}>
                {title}
              </h1>
              {subtitle && (
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  {subtitle}
                </p>
              )}
              {children}
            </motion.div>

            {/* Competency Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {competencies.map((competency, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="initial"
                  whileHover="hover"
                  animate={hoveredCardIndex === index ? "hover" : "initial"}
                  variants={cardVariants}
                  className="relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 p-6 shadow-lg transition-all duration-300 group"
                  onMouseEnter={() => {
                    competency.videoClip && setActiveVideo(competency.videoClip);
                    setHoveredCardIndex(index);
                  }}
                  onMouseLeave={() => {
                    setActiveVideo(null);
                    setHoveredCardIndex(null);
                  }}
                >
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">{competency.title}</h3>
                    {competency.description && (
                      <p className="text-white/80 mb-2">{competency.description}</p>
                    )}
                    
                    {/* Expanded description - shown only on hover */}
                    {competency.expandedDescription && (
                      <div className={`overflow-hidden transition-all duration-300 ${
                        hoveredCardIndex === index ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-white/90 text-sm">{competency.expandedDescription}</p>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-primary/30 rounded-tl-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {competency.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
