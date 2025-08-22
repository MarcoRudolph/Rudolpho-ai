import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

const CookieSettings: React.FC = () => {
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
              <span className="text-[#A8DADC]">Rudolpho-AI</span> - Cookie-Einstellungen
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
              Cookie-Einstellungen
            </h1>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-4 flex items-center">
                  <span className="bg-[#A8DADC] text-[#2F3E46] px-3 py-1 rounded-lg text-lg font-bold mr-3">
                    1
                  </span>
                  Aktueller Status
                </h2>
                <div className="bg-[#A8DADC]/10 border border-[#A8DADC]/20 rounded-lg p-6">
                  <p className="text-lg text-[#52616B] leading-relaxed">
                    <strong>Aktuell verwenden wir auf dieser Website keine Cookies oder ähnliche Tracking-Technologien.</strong>
                  </p>
                  <p className="text-lg text-[#52616B] leading-relaxed mt-4">
                    Unsere Website funktioniert vollständig ohne die Verwendung von Cookies. Alle Funktionen sind ohne Cookie-Speicherung verfügbar.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-4 flex items-center">
                  <span className="bg-[#A8DADC] text-[#2F3E46] px-3 py-1 rounded-lg text-lg font-bold mr-3">
                    2
                  </span>
                  Was sind Cookies?
                </h2>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. 
                  Sie können verschiedene Zwecke erfüllen, wie z.B. das Speichern von Einstellungen, die Analyse des Nutzerverhaltens 
                  oder die Bereitstellung personalisierter Inhalte.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-4 flex items-center">
                  <span className="bg-[#A8DADC] text-[#2F3E46] px-3 py-1 rounded-lg text-lg font-bold mr-3">
                    3
                  </span>
                  Warum wir aktuell keine Cookies verwenden
                </h2>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Wir haben uns bewusst dafür entschieden, unsere Website ohne Cookies zu betreiben, um:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-[#52616B] leading-relaxed ml-4 mt-4">
                  <li>Den Datenschutz unserer Besucher zu maximieren</li>
                  <li>Die Nutzung der Website so einfach wie möglich zu gestalten</li>
                  <li>Keine Einwilligungen für Cookie-Verwendung einholen zu müssen</li>
                  <li>Die Ladezeiten der Website zu optimieren</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-4 flex items-center">
                  <span className="bg-[#A8DADC] text-[#2F3E46] px-3 py-1 rounded-lg text-lg font-bold mr-3">
                    4
                  </span>
                  Zukünftige Änderungen
                </h2>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Falls wir in Zukunft Cookies einsetzen sollten, werden wir:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-[#52616B] leading-relaxed ml-4 mt-4">
                  <li>Diese Cookie-Einstellungsseite entsprechend aktualisieren</li>
                  <li>Sie über die Verwendung von Cookies informieren</li>
                  <li>Ihnen die Möglichkeit geben, Cookies zu akzeptieren oder abzulehnen</li>
                  <li>Unsere Datenschutzerklärung entsprechend anpassen</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-4 flex items-center">
                  <span className="bg-[#A8DADC] text-[#2F3E46] px-3 py-1 rounded-lg text-lg font-bold mr-3">
                    5
                  </span>
                  Browser-Einstellungen
                </h2>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Auch wenn wir aktuell keine Cookies verwenden, können Sie Ihren Browser so einstellen, dass Sie über das Setzen von Cookies 
                  informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell 
                  ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
                </p>
                <p className="text-lg text-[#52616B] leading-relaxed mt-4">
                  Diese Einstellungen finden Sie in den Datenschutz- oder Cookie-Einstellungen Ihres Browsers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-4 flex items-center">
                  <span className="bg-[#A8DADC] text-[#2F3E46] px-3 py-1 rounded-lg text-lg font-bold mr-3">
                    6
                  </span>
                  Kontakt bei Fragen
                </h2>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Falls Sie Fragen zu unseren Cookie-Einstellungen haben, können Sie sich gerne an uns wenden:
                </p>
                <div className="bg-[#FFE5D9]/10 border border-[#FFE5D9]/20 rounded-lg p-6 mt-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-[#2F3E46] font-semibold">E-Mail:</span>
                    <a href="mailto:marcorudolph09@proton.me" className="text-[#A8DADC] hover:underline">
                      marcorudolph09@proton.me
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-[#2F3E46] font-semibold">Telefon:</span>
                    <a href="tel:+4948939373110" className="text-[#A8DADC] hover:underline">
                      +49 4893 9373110
                    </a>
                  </div>
                </div>
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

export default CookieSettings;
