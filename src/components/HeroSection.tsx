import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  const handleCTAClick = () => {
    // TODO: Implement calendar booking functionality
    console.log('CTA clicked - redirect to calendar');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-section">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#A8DADC] rounded-full"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-[#A8DADC] rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#A8DADC] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-[#A8DADC] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 spacing-80">
        {/* 12-Column Grid Layout */}
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Text Content - Col 1-6 (1-5 on large screens) */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-5 space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-[#A8DADC]/20 border border-[#A8DADC]/30 text-[#2F3E46] px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                <span>KI-Experte für Automatisierung & Marketing</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#2F3E46]">
                Dein KI-Partner für{' '}
                <span className="text-[#A8DADC]">
                  automatisierte Workflows
                </span>{' '}
                & authentische Influencer-Kampagnen
              </h1>
              
              <p className="text-xl sm:text-2xl text-[#52616B] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Ich helfe dir, manuelle Aufgaben zu eliminieren und deine Marke mit innovativen KI-Lösungen digital zu skalieren.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleCTAClick}
                size="lg" 
                className="btn-primary text-lg px-8 py-6"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Kostenloses Erstgespräch buchen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Portrait Image - Col 7-12 (6-12 on large screens) */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end items-center">
            <div className="relative">
              {/* Circular mask with shadow */}
              <div className="relative w-[400px] h-[400px] rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.05)] overflow-hidden">
                <img
                  src="/images/platzhalter_portrait.png"
                  alt="Rudolpho-AI - KI-Partner für automatisierte Workflows"
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#A8DADC]/10 to-transparent"></div>
              </div>
              
              {/* Decorative elements in accent color */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#A8DADC]/30 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#FFE5D9]/30 rounded-full"></div>
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