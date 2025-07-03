import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Heart, Music, Users, Zap, Star, ArrowRight, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  monetization: string;
  gradient: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  icon, 
  title, 
  subtitle, 
  description, 
  features, 
  monetization, 
  gradient 
}) => {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] transition-all duration-500 bg-white/90 backdrop-blur-sm w-full min-w-0 max-w-none">
      {/* Subtle gradient background */}
      <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      <CardHeader className="relative pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="p-4 rounded-2xl bg-[#A8DADC] text-[#2F3E46] shadow-[0_4px_8px_rgba(0,0,0,0.1)] self-start sm:self-center">
            {icon}
          </div>
          <div className="space-y-2">
            <CardTitle className="text-xl sm:text-2xl font-bold text-[#2F3E46] leading-tight">{title}</CardTitle>
            <CardDescription className="text-base sm:text-lg text-[#52616B] font-medium">{subtitle}</CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="relative space-y-6 pt-0">
        <p className="text-[#52616B] leading-relaxed text-base sm:text-lg">
          {description}
        </p>
        
        {/* Key Features */}
        <div className="space-y-4">
          <h4 className="font-semibold text-[#2F3E46] text-lg flex items-center">
            <Zap className="h-5 w-5 mr-2 text-[#A8DADC]" />
            Kernfunktionen
          </h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3 text-[#52616B]">
                <div className="w-2 h-2 bg-[#A8DADC] rounded-full flex-shrink-0 mt-2" />
                <span className="text-sm sm:text-base leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Monetization Highlight */}
        <div className="bg-[#FFE5D9]/30 border border-[#FFE5D9]/50 rounded-lg p-4 sm:p-6">
          <div className="flex items-center space-x-2 mb-3">
            <Star className="h-5 w-5 text-[#A8DADC]" />
            <h4 className="font-semibold text-[#2F3E46]">Monetarisierung</h4>
          </div>
          <p className="text-[#52616B] text-sm sm:text-base leading-relaxed">
            {monetization}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "DateTalk",
      subtitle: "Gesprächsanregung für perfekte Dates",
      description: "Eine interaktive Plattform, die Paaren hilft, durch intelligente Gesprächsanregungen und Icebreaker-Fragen authentische Verbindungen aufzubauen. Die App nutzt KI, um personalisierte Gesprächsthemen basierend auf gemeinsamen Interessen und der Beziehungsphase zu generieren.",
      features: [
        "KI-gestützte Gesprächsanregungen",
        "Personalisiert basierend auf Interessen",
        "Icebreaker-Fragen für verschiedene Situationen",
        "Gemeinsame Aktivitätsvorschläge"
      ],
      monetization: "Stripe-integrierte Pro-Pläne mit erweiterten Features, Premium-Gesprächsthemen und exklusiven Dating-Tipps von Experten.",
      gradient: "bg-gradient-to-br from-[#A8DADC] to-[#9BCFD1]"
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Empatify",
      subtitle: "Gemeinschaftliche Musikerlebnisse",
      description: "Eine innovative Community-Plattform, die Musikliebhaber zusammenbringt und gemeinsame Musikerlebnisse schafft. Nutzer können Playlists teilen, gemeinsam Musik entdecken und durch KI-gestützte Empfehlungen neue Künstler und Genres erkunden.",
      features: [
        "Gemeinsame Playlist-Erstellung",
        "KI-gestützte Musikempfehlungen",
        "Community-Events und Challenges",
        "Soziale Features für Musikliebhaber"
      ],
      monetization: "Freemium-Modell mit Premium-Features, exklusiven Community-Events und erweiterten KI-Empfehlungen über Stripe-Integration.",
      gradient: "bg-gradient-to-br from-[#FFE5D9] to-[#F5D4C8]"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-secondary-section spacing-70 lg:spacing-120">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2F3E46] mb-6">
            Meine{' '}
            <span className="text-[#A8DADC]">
              Projekte
            </span>
          </h2>
          <p className="text-xl text-[#52616B] max-w-3xl mx-auto leading-relaxed">
            Entdecke innovative Web-Anwendungen, die ich entwickelt habe – 
            von nutzerzentrierten Plattformen bis hin zu skalierbaren Business-Lösungen.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="w-full">
              <ProjectCard
                icon={project.icon}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                features={project.features}
                monetization={project.monetization}
                gradient={project.gradient}
              />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <Card className="border-0 shadow-[0_4px_8px_rgba(0,0,0,0.1)] bg-white/80 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#2F3E46] mb-6">
                Skalierbare Lösungen mit nachhaltiger Monetarisierung
              </h3>
              <p className="text-lg text-[#52616B] leading-relaxed mb-8">
                Alle meine Projekte sind darauf ausgelegt, echten Mehrwert für Nutzer zu schaffen und 
                gleichzeitig nachhaltige Einnahmequellen zu generieren. Durch die Integration von 
                Stripe-Pro-Plänen und Freemium-Modellen schaffe ich Win-Win-Situationen für alle Beteiligten.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-[#A8DADC] rounded-xl flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
                    <Users className="h-6 w-6 text-[#2F3E46]" />
                  </div>
                  <h4 className="font-semibold text-[#2F3E46]">Nutzerzentriert</h4>
                  <p className="text-sm text-[#52616B]">Fokus auf echte Probleme und Bedürfnisse</p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-[#FFE5D9] rounded-xl flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
                    <Zap className="h-6 w-6 text-[#2F3E46]" />
                  </div>
                  <h4 className="font-semibold text-[#2F3E46]">KI-gestützt</h4>
                  <p className="text-sm text-[#52616B]">Intelligente Features für bessere Erfahrungen</p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-[#A8DADC] rounded-xl flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
                    <Star className="h-6 w-6 text-[#2F3E46]" />
                  </div>
                  <h4 className="font-semibold text-[#2F3E46]">Monetarisiert</h4>
                  <p className="text-sm text-[#52616B]">Nachhaltige Einnahmequellen durch Stripe</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 