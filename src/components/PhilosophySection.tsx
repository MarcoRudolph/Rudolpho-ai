import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Heart, Target, TrendingUp, ArrowRight, Users, Zap, Shield } from 'lucide-react';

const PhilosophySection: React.FC = () => {
  const principles = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Persönlich",
      description: "Ich verstehe, dass jedes Business einzigartig ist. Deshalb entwickle ich maßgeschneiderte Lösungen, die perfekt auf deine spezifischen Bedürfnisse und Ziele abgestimmt sind.",
      color: "bg-[#A8DADC]"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Praktisch",
      description: "Meine Lösungen sind nicht nur innovativ, sondern auch sofort einsatzbereit. Ich fokussiere mich auf messbare Ergebnisse und nachhaltige Verbesserungen deines Business.",
      color: "bg-[#FFE5D9]"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Profitabel",
      description: "Jede Lösung ist darauf ausgelegt, dein Business zu skalieren und neue Einnahmequellen zu erschließen. Von der ersten Idee bis zur Umsatzgenerierung.",
      color: "bg-[#A8DADC]"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Analyse & Strategie",
      description: "Gemeinsam analysieren wir deine aktuellen Prozesse und entwickeln eine maßgeschneiderte Strategie.",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: "02",
      title: "Entwicklung & Integration",
      description: "Ich entwickle und implementiere die Lösungen, die nahtlos in dein bestehendes System integriert werden.",
      icon: <Zap className="h-6 w-6" />
    },
    {
      step: "03",
      title: "Optimierung & Skalierung",
      description: "Kontinuierliche Optimierung und Skalierung der Lösungen für maximale Effizienz und Wachstum.",
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-primary-section spacing-70 lg:spacing-120">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2F3E46] mb-6">
            Meine{' '}
            <span className="text-[#A8DADC]">
              Philosophie
            </span>
          </h2>
          <p className="text-xl text-[#52616B] max-w-3xl mx-auto leading-relaxed">
            Drei einfache Prinzipien, die jeden Aspekt meiner Arbeit leiten und 
            sicherstellen, dass dein Business nachhaltig wächst.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 gap-6 lg:gap-8 mb-20 w-full">
          {principles.map((principle, index) => (
            <div key={index} className="w-full min-w-0">
              <Card className="border-0 shadow-[0_4px_8px_rgba(0,0,0,0.1)] bg-white/90 backdrop-blur-sm hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] transition-all duration-500 w-full min-w-0 max-w-none">
                <CardHeader className="text-center">
                  <div className={`mx-auto w-16 h-16 ${principle.color} rounded-2xl flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.1)] mb-4`}>
                    <div className="text-[#2F3E46]">
                      {principle.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-[#2F3E46]">
                    {principle.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#52616B] leading-relaxed text-center text-sm sm:text-base">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#2F3E46] mb-4">
              Mein Arbeitsprozess
            </h3>
            <p className="text-lg text-[#52616B] max-w-2xl mx-auto">
              Ein strukturierter Ansatz, der sicherstellt, dass wir deine Ziele erreichen.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:gap-8 w-full">
            {processSteps.map((step, index) => (
              <div key={index} className="relative w-full min-w-0">
                {/* Connection Line - only show on larger screens */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-[#A8DADC]/30 z-0" />
                )}
                
                <Card className="relative border-0 shadow-[0_4px_8px_rgba(0,0,0,0.1)] bg-white/90 backdrop-blur-sm hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] transition-all duration-500 w-full min-w-0 max-w-none">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-[#A8DADC] rounded-xl flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.1)] mb-4">
                      <span className="text-[#2F3E46] font-bold text-lg">{step.step}</span>
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-bold text-[#2F3E46] flex items-center justify-center">
                      <div className="mr-2 text-[#A8DADC]">
                        {step.icon}
                      </div>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#52616B] leading-relaxed text-center text-sm sm:text-base">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Section */}
        <div className="text-center">
          <Card className="border-0 shadow-[0_4px_8px_rgba(0,0,0,0.1)] bg-[#A8DADC] text-[#2F3E46] max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 mr-3" />
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Mein Versprechen an dich
                </h3>
              </div>
              <p className="text-lg sm:text-xl leading-relaxed text-[#2F3E46] mb-8">
                Ich bin nicht nur dein Dienstleister, sondern dein Partner für nachhaltigen Erfolg. 
                Gemeinsam entwickeln wir Lösungen, die dein Business auf das nächste Level bringen.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Was du bekommst:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#2F3E46] rounded-full" />
                      <span>Maßgeschneiderte Lösungen</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#2F3E46] rounded-full" />
                      <span>Kontinuierliche Unterstützung</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#2F3E46] rounded-full" />
                      <span>Messbare Ergebnisse</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Mein Commitment:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#2F3E46] rounded-full" />
                      <span>100% Transparenz</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#2F3E46] rounded-full" />
                      <span>Pünktliche Lieferung</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#2F3E46] rounded-full" />
                      <span>Nachhaltiger Erfolg</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection; 