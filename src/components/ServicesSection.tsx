import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Workflow, Users, Share2, Zap, Target, Shield, TrendingUp, MessageCircle, LayoutGrid, Mic } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  gradient: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, benefits, gradient, features }) => {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] transition-all duration-500 bg-white/90 backdrop-blur-sm">
      {/* Subtle gradient background */}
      <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      <CardHeader className="relative">
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-xl bg-[#A8DADC] text-[#2F3E46] shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
            {icon}
          </div>
          <CardTitle className="text-2xl font-bold text-[#2F3E46]">{title}</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="relative space-y-6">
        <CardDescription className="text-lg text-[#52616B] leading-relaxed">
          {description}
        </CardDescription>
        
        {/* Key Features */}
        <div className="space-y-3">
          <h4 className="font-semibold text-[#2F3E46] text-lg flex items-center">
            <Zap className="h-5 w-5 mr-2 text-[#A8DADC]" />
            Kernfunktionen
          </h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3 text-[#52616B]">
                <div className="w-2 h-2 bg-[#A8DADC] rounded-full flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Benefits */}
        <div className="space-y-3">
          <h4 className="font-semibold text-[#2F3E46] text-lg">Vorteile:</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center space-x-3 text-[#52616B]">
                <div className="w-2 h-2 bg-[#FFE5D9] rounded-full flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Manuelle Prozesse ade: Deine Business-Automatisierung mit n8n.",
      description: "Ich konzipiere und implementiere maßgeschneiderte n8n Workflows, die deine wiederkehrenden Aufgaben automatisieren und dir wertvolle Zeit und Ressourcen sparen. Doch damit nicht genug: Ich bette diese komplexen Prozesse in intuitive Dashboards ein, die dir eine unvergleichliche User Experience und volle Kontrolle bieten.",
      benefits: ["Zeitersparnis", "Fehlerreduktion", "Skalierbarkeit", "Kostenoptimierung"],
      gradient: "bg-gradient-to-br from-[#A8DADC] to-[#9BCFD1]",
      features: [
        "Maßgeschneiderte n8n Workflows",
        "Intuitive Dashboards für volle Kontrolle",
        "Unvergleichliche User Experience",
        "Nahtlose Integration in bestehende Systeme"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Revolutioniere dein Marketing: Authentische AI-Influencer-Kampagnen.",
      description: "Entwickle ich einzigartige AI-Influencer, die deine Zielgruppe begeistern und deine Botschaft glaubwürdig verbreiten – perfekt integriert in deine Social Media Strategie. Ich manage nicht nur erfolgreiche AI-Influencer auf Social Media, sondern hauche ihnen echtes Leben ein. Durch automatisierte Instagram-Chats und lebensechte Voice-Nachrichten von ElevenLabs schaffe ich authentische Interaktionen, die deine Zielgruppe fesseln und deine Botschaft glaubwürdig verbreiten.",
      benefits: ["Neue Zielgruppen", "Kosteneffizienz", "Brand Safety", "Messbare Ergebnisse"],
      gradient: "bg-gradient-to-br from-[#FFE5D9] to-[#F5D4C8]",
      features: [
        "Automatisierte Instagram-Chats",
        "Lebensechte Voice-Nachrichten von ElevenLabs",
        "Authentische Interaktionen",
        "Glaubwürdige Botschaftsverbreitung"
      ]
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Dein Social Media Auftritt: Strategisch & KI-gestützt.",
      description: "Ich übernehme das Management deiner Social Media Kanäle, optimiere Inhalte und Interaktionen – alles synchronisiert mit deinen AI-Influencer-Kampagnen und automatisierten Workflows. Durch KI-gestützte Content-Optimierung und strategische Planung erreichen wir maximale Reichweite und Engagement.",
      benefits: ["Markenwachstum", "Community-Aufbau", "Zielgruppenbindung", "Effizientes Content Management"],
      gradient: "bg-gradient-to-br from-[#A8DADC] to-[#9BCFD1]",
      features: [
        "KI-gestützte Content-Optimierung",
        "Strategische Social Media Planung",
        "Synchronisation mit AI-Influencer-Kampagnen",
        "Maximale Reichweite und Engagement"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-primary-section spacing-120">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2F3E46] mb-6">
            Meine{' '}
            <span className="text-[#A8DADC]">
              Dienstleistungen
            </span>
          </h2>
          <p className="text-xl text-[#52616B] max-w-3xl mx-auto leading-relaxed">
            Von Workflow-Automatisierung bis hin zu KI-gestütztem Marketing – 
            ich biete ganzheitliche Lösungen für dein digitales Business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
              gradient={service.gradient}
              features={service.features}
            />
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-[#A8DADC] rounded-2xl flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
              <LayoutGrid className="h-8 w-8 text-[#2F3E46]" />
            </div>
            <h3 className="text-xl font-semibold text-[#2F3E46]">Intuitive Dashboards</h3>
            <p className="text-[#52616B]">Vollständige Kontrolle über alle Prozesse</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-[#FFE5D9] rounded-2xl flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
              <MessageCircle className="h-8 w-8 text-[#2F3E46]" />
            </div>
            <h3 className="text-xl font-semibold text-[#2F3E46]">Automatisierte Chats</h3>
            <p className="text-[#52616B]">Authentische Interaktionen rund um die Uhr</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-[#A8DADC] rounded-2xl flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
              <Mic className="h-8 w-8 text-[#2F3E46]" />
            </div>
            <h3 className="text-xl font-semibold text-[#2F3E46]">Voice-Nachrichten</h3>
            <p className="text-[#52616B]">Lebensechte Kommunikation mit ElevenLabs</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-[#FFE5D9] rounded-2xl flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
              <TrendingUp className="h-8 w-8 text-[#2F3E46]" />
            </div>
            <h3 className="text-xl font-semibold text-[#2F3E46]">Messbare Ergebnisse</h3>
            <p className="text-[#52616B]">Transparente KPIs und kontinuierliche Optimierung</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 