import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

const Terms: React.FC = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-primary-section">
      {/* Header */}
      <div className="bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#2F3E46]">
              <span className="text-[#A8DADC]">Rudolpho-AI</span> - Allgemeine Geschäftsbedingungen
            </h1>
            <Button 
              onClick={handleBackClick}
              variant="ghost"
              className="text-[#52616B] hover:text-[#A8DADC]"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.1)] p-8 lg:p-12">
          <div className="max-w-none">
            <h1 className="text-4xl font-bold text-[#2F3E46] mb-8 text-center border-b-2 border-[#A8DADC] pb-4">
              Allgemeine Geschäftsbedingungen
            </h1>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-4 flex items-center">
                  <span className="bg-[#A8DADC] text-[#2F3E46] px-3 py-1 rounded-lg text-lg font-bold mr-3">
                    §1
                  </span>
                  Geltungsbereich
                </h2>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Diese Allgemeinen Geschäftsbedingungen gelten für alle Geschäftsbeziehungen zwischen 
                  Marco Rudolph (Rudolpho-AI) und seinen Kunden in der zum Zeitpunkt des Vertragsabschlusses gültigen Fassung.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-4 flex items-center">
                  <span className="bg-[#A8DADC] text-[#2F3E46] px-3 py-1 rounded-lg text-lg font-bold mr-3">
                    §2
                  </span>
                  Vertragsschluss
                </h2>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Der Vertrag kommt durch Angebot und Annahme zustande. Unsere Angebote sind freibleibend. 
                  Der Kunde kann das Angebot innerhalb von 14 Tagen annehmen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-4 flex items-center">
                  <span className="bg-[#A8DADC] text-[#2F3E46] px-3 py-1 rounded-lg text-lg font-bold mr-3">
                    §3
                  </span>
                  Leistungsumfang
                </h2>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Der Leistungsumfang ergibt sich aus der jeweiligen Vereinbarung. Änderungen oder Ergänzungen 
                  bedürfen der Schriftform. Wir behalten uns vor, bei unvorhergesehenen technischen Schwierigkeiten 
                  alternative Lösungen anzubieten.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-4 flex items-center">
                  <span className="bg-[#A8DADC] text-[#2F3E46] px-3 py-1 rounded-lg text-lg font-bold mr-3">
                    §4
                  </span>
                  Preise und Zahlungsbedingungen
                </h2>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Rechnungen sind 
                  innerhalb von 14 Tagen nach Rechnungsstellung zur Zahlung fällig. Bei Verzug gelten die 
                  gesetzlichen Verzugszinsen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-4 flex items-center">
                  <span className="bg-[#A8DADC] text-[#2F3E46] px-3 py-1 rounded-lg text-lg font-bold mr-3">
                    §5
                  </span>
                  Liefer- und Leistungszeiten
                </h2>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Liefer- und Leistungszeiten sind unverbindlich, sofern nicht ausdrücklich als verbindlich 
                  vereinbart. Wir bemühen uns, die vereinbarten Termine einzuhalten.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-4 flex items-center">
                  <span className="bg-[#A8DADC] text-[#2F3E46] px-3 py-1 rounded-lg text-lg font-bold mr-3">
                    §6
                  </span>
                  Gewährleistung
                </h2>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Es gelten die gesetzlichen Gewährleistungsrechte. Bei Mängeln haben Sie das Recht auf 
                  Nacherfüllung, Minderung oder Rücktritt vom Vertrag.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-4 flex items-center">
                  <span className="bg-[#A8DADC] text-[#2F3E46] px-3 py-1 rounded-lg text-lg font-bold mr-3">
                    §7
                  </span>
                  Haftung
                </h2>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Wir haften für Vorsatz und grobe Fahrlässigkeit. Die Haftung für leichte Fahrlässigkeit 
                  ist auf den vorhersehbaren, typischerweise entstehenden Schaden begrenzt.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-4 flex items-center">
                  <span className="bg-[#A8DADC] text-[#2F3E46] px-3 py-1 rounded-lg text-lg font-bold mr-3">
                    §8
                  </span>
                  Datenschutz
                </h2>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Die Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten erfolgt gemäß 
                  unserer Datenschutzerklärung und den geltenden datenschutzrechtlichen Bestimmungen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-4 flex items-center">
                  <span className="bg-[#A8DADC] text-[#2F3E46] px-3 py-1 rounded-lg text-lg font-bold mr-3">
                    §9
                  </span>
                  Schlussbestimmungen
                </h2>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Sollten einzelne Bestimmungen unwirksam sein, bleibt der Vertrag im Übrigen wirksam. 
                  Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist Itzehoe.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t-2 border-[#EAF1F8] text-center">
              <p className="text-lg text-[#52616B] font-medium">
                Stand: {new Date().toLocaleDateString('de-DE')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;

