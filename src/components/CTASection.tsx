import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Calendar, Mail, Phone, ArrowRight, MessageCircle, Zap } from 'lucide-react';

const CTASection: React.FC = () => {
  const handleCalendarClick = () => {
    // TODO: Implement calendar booking functionality
    console.log('Calendar clicked - redirect to booking');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:rudolpho@rudolpho-ai.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+49123456789';
  };

  const contactMethods = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Kostenloses Erstgespräch",
      description: "Buche einen Termin für ein unverbindliches Gespräch über deine Ziele und wie ich dir helfen kann.",
      action: "Termin buchen",
      onClick: handleCalendarClick,
      color: "bg-[#A8DADC]"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-Mail Kontakt",
      description: "Schreibe mir eine detaillierte Nachricht über dein Projekt und deine Anforderungen.",
      action: "E-Mail senden",
      onClick: handleEmailClick,
      color: "bg-[#FFE5D9]"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Direkter Anruf",
      description: "Sprich direkt mit mir über deine Ideen und lass uns gemeinsam deine Vision entwickeln.",
      action: "Anrufen",
      onClick: handlePhoneClick,
      color: "bg-[#A8DADC]"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-secondary-section spacing-70 lg:spacing-120">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2F3E46] mb-6">
            Bereit für den{' '}
            <span className="text-[#A8DADC]">
              nächsten Schritt?
            </span>
          </h2>
          <p className="text-xl text-[#52616B] max-w-3xl mx-auto leading-relaxed">
            Lass uns gemeinsam deine digitalen Potenziale ausschöpfen. 
            Ich bin hier, um dir dabei zu helfen, dein Business auf das nächste Level zu bringen.
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-0 shadow-[0_4px_8px_rgba(0,0,0,0.1)] bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="mx-auto w-16 h-16 bg-[#A8DADC] rounded-2xl flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.1)] mb-6">
                  <Zap className="h-8 w-8 text-[#2F3E46]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#2F3E46] mb-4">
                  Starte jetzt deine digitale Transformation
                </h3>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Von der ersten Idee bis zur Umsetzung – ich begleite dich durch den gesamten Prozess 
                  und stelle sicher, dass wir deine Ziele erreichen.
                </p>
              </div>

              {/* Contact Methods Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="text-center space-y-4">
                    <div className={`mx-auto w-12 h-12 ${method.color} rounded-xl flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]`}>
                      <div className="text-[#2F3E46]">
                        {method.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2F3E46] text-lg mb-2">
                        {method.title}
                      </h4>
                      <p className="text-[#52616B] text-sm leading-relaxed mb-4">
                        {method.description}
                      </p>
                      <Button 
                        onClick={method.onClick}
                        className="btn-primary w-full"
                      >
                        {method.action}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <Card className="border-0 shadow-[0_4px_8px_rgba(0,0,0,0.1)] bg-[#A8DADC] text-[#2F3E46] max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-center justify-center mb-6">
                <MessageCircle className="h-8 w-8 mr-3" />
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Warum Rudolpho-AI?
                </h3>
              </div>
              <p className="text-lg sm:text-xl leading-relaxed text-[#2F3E46] mb-8">
                Als spezialisierter Partner für Automatisierung, KI und digitale Produktentwicklung 
                bringe ich die Expertise und das Engagement mit, die dein Business braucht, um zu wachsen.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
                    <span className="text-[#2F3E46] font-bold text-lg">100%</span>
                  </div>
                  <h4 className="font-semibold text-[#2F3E46]">Maßgeschneidert</h4>
                  <p className="text-sm text-[#2F3E46]/80">Keine Standardlösungen</p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
                    <span className="text-[#2F3E46] font-bold text-lg">24/7</span>
                  </div>
                  <h4 className="font-semibold text-[#2F3E46]">Support</h4>
                  <p className="text-sm text-[#2F3E46]/80">Kontinuierliche Betreuung</p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
                    <span className="text-[#2F3E46] font-bold text-lg">∞</span>
                  </div>
                  <h4 className="font-semibold text-[#2F3E46]">Skalierbar</h4>
                  <p className="text-sm text-[#2F3E46]/80">Wachstum ohne Grenzen</p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
                    <span className="text-[#2F3E46] font-bold text-lg">⚡</span>
                  </div>
                  <h4 className="font-semibold text-[#2F3E46]">Schnell</h4>
                  <p className="text-sm text-[#2F3E46]/80">Sofort einsatzbereit</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 