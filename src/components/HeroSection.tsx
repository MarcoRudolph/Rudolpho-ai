import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  const handleCTAClick = () => {
    console.log('Hero CTA button clicked!'); // Debug log
    const mailtoLink = 'mailto:marcorudolph09@proton.me?subject=Kostenloses Erstgespräch buchen';
    window.location.href = mailtoLink;
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-section">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30" style={{ zIndex: 1 }}>
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#A8DADC] rounded-full"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-[#A8DADC] rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#A8DADC] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-[#A8DADC] rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* 12-Column Grid Layout */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Text Content - Col 1-6 (1-5 on large screens) */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-5 space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-[#A8DADC]/20 border border-[#A8DADC]/30 text-[#2F3E46] px-3 py-2 rounded-full text-xs sm:text-sm font-medium">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>KI-Experte für Automatisierung & Marketing</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-[#2F3E46]">
                Dein KI-Partner für{' '}
                <span className="text-[#A8DADC]">
                  automatisierte Workflows
                </span>{' '}
                & authentische Influencer-Kampagnen
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-[#52616B] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Ich helfe dir, manuelle Aufgaben zu eliminieren und deine Marke mit innovativen KI-Lösungen digital zu skalieren.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                             <Button 
                 onClick={handleCTAClick}
                 className="w-full bg-[#A8DADC] text-[#2F3E46] hover:bg-[#9BCFD1] transition-colors duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 relative z-10"
                 size="lg"
                 style={{ position: 'relative', zIndex: 10 }}
               >
                 <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                 Kostenloses Erstgespräch buchen
                 <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
               </Button>
            </div>
          </div>

          {/* Portrait Image - Col 7-12 (6-12 on large screens) */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
            <div className="relative">
              {/* Circular mask with shadow */}
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px] xl:w-[400px] xl:h-[400px] rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.05)] overflow-hidden">
                <img
                  src="/images/platzhalter_portrait.png"
                  alt="Rudolpho-AI - KI-Partner für automatisierte Workflows"
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#A8DADC]/10 to-transparent"></div>
              </div>
              
              {/* Decorative elements in accent color */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-[#A8DADC]/30 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-[#FFE5D9]/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#A8DADC]/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#A8DADC] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 