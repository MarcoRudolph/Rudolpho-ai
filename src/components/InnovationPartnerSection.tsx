import React from 'react';
import { Card, CardContent } from './ui/card';
import { Zap, Users, Code, Target, ArrowRight, Sparkles } from 'lucide-react';

const InnovationPartnerSection: React.FC = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Effizienz durch intelligente Workflows",
      description: "Ich eliminiere manuelle Aufgaben durch die Konzeption und Implementierung von **n8n Workflows**. Doch damit nicht genug: Ich bette diese komplexen Prozesse in **intuitive Dashboards** ein, die dir eine unvergleichliche User Experience und volle Kontrolle bieten.",
      gradient: "from-[#A8DADC] to-[#9BCFD1]"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "KI-Influencer, die wirklich leben",
      description: "Entdecke die nächste Generation des Marketings. Ich manage nicht nur erfolgreiche AI-Influencer auf Social Media, sondern hauche ihnen echtes Leben ein. Durch **automatisierte Instagram-Chats** und lebensechte **Voice-Nachrichten von ElevenLabs** schaffe ich authentische Interaktionen, die deine Zielgruppe fesseln und deine Botschaft glaubwürdig verbreiten.",
      gradient: "from-[#FFE5D9] to-[#F5D4C8]"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Innovative Web-Produkte mit Mehrwert",
      description: "Du hast eine Vision für eine nutzerzentrierte Web-Applikation? Ich setze sie blitzschnell um! Von interaktiven Plattformen wie **DateTalk** zur Gesprächsanregung bei Dates bis hin zu Community-Tools wie **Empatify** für gemeinschaftliche Musikerlebnisse – ich baue skalierbare Anwendungen, die begeistern und über **Stripe-integrierte Pro-Pläne** nachhaltig Umsatz generieren.",
      gradient: "from-[#A8DADC] to-[#9BCFD1]"
    }
  ];

  return (
    <section className="py-24 bg-secondary-section relative overflow-hidden spacing-120">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-16 w-1 h-1 bg-[#A8DADC] rounded-full"></div>
        <div className="absolute top-32 right-24 w-0.5 h-0.5 bg-[#A8DADC] rounded-full"></div>
        <div className="absolute bottom-24 left-1/3 w-1 h-1 bg-[#A8DADC] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#A8DADC]/20 border border-[#A8DADC]/30 text-[#2F3E46] px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
            <Sparkles className="h-4 w-4" />
            <span>Was Rudolpho-AI auszeichnet</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2F3E46] mb-6 leading-tight">
            Willkommen bei{' '}
            <span className="text-[#A8DADC]">
              Rudolpho-AI
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-[#52616B] max-w-4xl mx-auto leading-relaxed">
            Deinem spezialisierten Partner an der Schnittstelle von{' '}
            <strong className="text-[#A8DADC]">Automatisierung</strong>,{' '}
            <strong className="text-[#A8DADC]">künstlicher Intelligenz</strong> und{' '}
            <strong className="text-[#A8DADC]">digitaler Produktentwicklung</strong>.
          </p>
        </div>

        {/* Main Pitch Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-0 shadow-[0_4px_8px_rgba(0,0,0,0.1)] bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12">
              <p className="text-lg sm:text-xl text-[#52616B] leading-relaxed mb-8">
                Ich verstehe die Herausforderungen moderner Unternehmen und biete maßgeschneiderte Lösungen, 
                die weit über das Übliche hinausgehen:
              </p>
              
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col lg:flex-row gap-6 items-start group">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} text-[#2F3E46] shadow-[0_4px_8px_rgba(0,0,0,0.1)] flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#2F3E46] mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-[#52616B] leading-relaxed">
                        {feature.description.split('**').map((part, i) => 
                          i % 2 === 1 ? (
                            <strong key={i} className="text-[#A8DADC] font-semibold">{part}</strong>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Promise Section */}
        <div className="text-center">
          <Card className="border-0 shadow-[0_4px_8px_rgba(0,0,0,0.1)] bg-[#A8DADC] text-[#2F3E46] max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                Mein Versprechen
              </h3>
              <p className="text-lg sm:text-xl leading-relaxed text-[#2F3E46]">
                Es ist es, deine digitalen Prozesse zu optimieren, deine Markenpräsenz mit innovativer KI zu transformieren 
                und einzigartige digitale Erlebnisse zu schaffen, die dein Business auf das nächste Level heben.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.1)] border border-[#A8DADC]/20">
            <Target className="h-5 w-5 text-[#A8DADC]" />
            <span className="text-lg font-semibold text-[#2F3E46]">
              Bereit, deine digitalen Potenziale voll auszuschöpfen?
            </span>
            <ArrowRight className="h-5 w-5 text-[#A8DADC]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationPartnerSection; 