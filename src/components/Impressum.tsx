import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

const Impressum: React.FC = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-primary-section">
      {/* Header */}
      <div className="bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#2F3E46]">
              <span className="text-[#A8DADC]">Rudolpho-AI</span> - Impressum
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.1)] p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            <h1>Impressum</h1>

            <p>
              Marco Rudolph<br />
              Rudolpho-AI. KI-Partner für automatisierte Workflows, authentische Influencer Kampagnen und nutzerzentrierte Web-Erlebnisse.<br />
              No de Halloh 8a<br />
              25591 Ottenbüttel
            </p>

            <h2>Kontakt</h2>
            <p>
              Telefon: 015116321085<br />
              E-Mail: marcorudolph09@proton.me
            </p>

            <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>
              <strong>Berufsbezeichnung:</strong><br />
              Softwareentwickler
            </p>
            <p>
              <strong>Verliehen in:</strong><br />
              Deutschland
            </p>

            <h2>Angaben zur Berufshaftpflichtversicherung</h2>
            <p>
              <strong>Name und Sitz des Versicherers:</strong><br />
              LVM Versicherung<br />
              48126 Münster<br />
              0251 702-0<br />
              info@lvm.de
            </p>
            <p>
              <strong>Geltungsraum der Versicherung:</strong><br />
              Deutschland
            </p>

            <h2>Redaktionell verantwortlich</h2>
            <p>Marco Rudolph</p>

            <h2>EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br /> 
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

            <h2>Zentrale Kontaktstelle nach dem Digital Services Act - DSA (Verordnung (EU) 2022/265)</h2>
            <p>Unsere zentrale Kontaktstelle für Nutzer und Behörden nach Art. 11, 12 DSA erreichen Sie wie folgt:</p>
            <p>
              E-Mail: marcorudolph09@proton.me<br />
              Telefon: 015116321085
            </p>
            <p>Die für den Kontakt zur Verfügung stehenden Sprachen sind: Deutsch, Englisch.</p>

            <p className="text-sm text-[#52616B] mt-8 pt-8 border-t border-[#EAF1F8]">
              Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://www.e-recht24.de</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum; 