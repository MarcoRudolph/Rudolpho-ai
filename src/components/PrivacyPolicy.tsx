import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

const PrivacyPolicy: React.FC = () => {
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
              <span className="text-[#A8DADC]">Rudolpho-AI</span> - Datenschutzerklärung
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
              Datenschutzerklärung
            </h1>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-4 flex items-center">
                  <span className="bg-[#A8DADC] text-[#2F3E46] px-3 py-1 rounded-lg text-lg font-bold mr-3">
                    1
                  </span>
                  Datenschutz auf einen Blick
                </h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#2F3E46] mb-3">Allgemeine Hinweise</h3>
                  <p className="text-lg text-[#52616B] leading-relaxed">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#2F3E46] mb-3">Datenerfassung auf dieser Website</h3>
                  
                  <h4 className="text-lg font-semibold text-[#2F3E46] mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                  <p className="text-lg text-[#52616B] leading-relaxed">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt "Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-[#2F3E46] mb-2">Wie erfassen wir Ihre Daten?</h4>
                  <p className="text-lg text-[#52616B] leading-relaxed">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                  </p>
                  <p className="text-lg text-[#52616B] leading-relaxed">
                    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-[#2F3E46] mb-2">Wofür nutzen wir Ihre Daten?</h4>
                  <p className="text-lg text-[#52616B] leading-relaxed">
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-[#2F3E46] mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                  <p className="text-lg text-[#52616B] leading-relaxed">
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                  </p>
                  <p className="text-lg text-[#52616B] leading-relaxed">
                    Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#2F3E46] mb-3">Analyse-Tools und Tools von Drittanbietern</h3>
                  <p className="text-lg text-[#52616B] leading-relaxed">
                    Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.
                  </p>
                  <p className="text-lg text-[#52616B] leading-relaxed">
                    Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-4 flex items-center">
                  <span className="bg-[#A8DADC] text-[#2F3E46] px-3 py-1 rounded-lg text-lg font-bold mr-3">
                    2
                  </span>
                  Hosting
                </h2>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                
                <h3 className="text-xl font-semibold text-[#2F3E46] mb-3">Strato</h3>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Anbieter ist die Strato AG, Otto-Ostrowski-Straße 7, 10249 Berlin (nachfolgend "Strato"). Wenn Sie unsere Website besuchen, erfasst Strato verschiedene Logfiles inklusive Ihrer IP-Adressen.
                </p>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Weitere Informationen entnehmen Sie der Datenschutzerklärung von Strato: <a href="https://www.strato.de/datenschutz/" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://www.strato.de/datenschutz/</a>.
                </p>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Die Verwendung von Strato erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                </p>
                
                <h4 className="text-lg font-semibold text-[#2F3E46] mb-2">Auftragsverarbeitung</h4>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-4 flex items-center">
                  <span className="bg-[#A8DADC] text-[#2F3E46] px-3 py-1 rounded-lg text-lg font-bold mr-3">
                    3
                  </span>
                  Allgemeine Hinweise und Pflichtinformationen
                </h2>
                
                <h3 className="text-xl font-semibold text-[#2F3E46] mb-3">Datenschutz</h3>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                </p>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                </p>
                
                <h3 className="text-xl font-semibold text-[#2F3E46] mb-3">Hinweis zur verantwortlichen Stelle</h3>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Marco Rudolph<br />
                  No de Halloh 8a<br />
                  25591 Ottenbüttel
                </p>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Telefon: 015116321085<br />
                  E-Mail: marcorudolph09@proton.me
                </p>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-4 flex items-center">
                  <span className="bg-[#A8DADC] text-[#2F3E46] px-3 py-1 rounded-lg text-lg font-bold mr-3">
                    4
                  </span>
                  Datenerfassung auf dieser Website
                </h2>
                
                <h3 className="text-xl font-semibold text-[#2F3E46] mb-3">Cookies</h3>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  <strong>Aktuell verwenden wir auf dieser Website keine Cookies.</strong> Unsere Website funktioniert vollständig ohne die Verwendung von Cookies oder ähnlichen Tracking-Technologien.
                </p>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Falls wir in Zukunft Cookies einsetzen sollten, werden wir diese Datenschutzerklärung entsprechend aktualisieren und Sie über die Verwendung informieren. Cookies sind kleine Datenpakete, die auf Ihrem Endgerät gespeichert werden können, um bestimmte Funktionen zu ermöglichen oder das Nutzererlebnis zu verbessern.
                </p>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
                </p>
                
                <h3 className="text-xl font-semibold text-[#2F3E46] mb-3">Anfrage per E-Mail, Telefon oder Telefax</h3>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-4 flex items-center">
                  <span className="bg-[#A8DADC] text-[#2F3E46] px-3 py-1 rounded-lg text-lg font-bold mr-3">
                    5
                  </span>
                  Soziale Medien
                </h2>
                
                <h3 className="text-xl font-semibold text-[#2F3E46] mb-3">Facebook</h3>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Auf dieser Website sind Elemente des sozialen Netzwerks Facebook integriert. Anbieter dieses Dienstes ist die Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland. Die erfassten Daten werden nach Aussage von Facebook jedoch auch in die USA und in andere Drittländer übertragen.
                </p>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Eine Übersicht über die Facebook Social-Media-Elemente finden Sie hier: <a href="https://developers.facebook.com/docs/plugins/?locale=de_DE" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://developers.facebook.com/docs/plugins/?locale=de_DE</a>.
                </p>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem Facebook-Server hergestellt. Facebook erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse diese Website besucht haben. Wenn Sie den Facebook "Like-Button" anklicken, während Sie in Ihrem Facebook-Account eingeloggt sind, können Sie die Inhalte dieser Website auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Facebook erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Facebook unter: <a href="https://de-de.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://de-de.facebook.com/privacy/explanation</a>.
                </p>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2F3E46] mb-4 flex items-center">
                  <span className="bg-[#A8DADC] text-[#2F3E46] px-3 py-1 rounded-lg text-lg font-bold mr-3">
                    6
                  </span>
                  Messenger-Dienste und automatisierte Kommunikation
                </h2>
                
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Im Rahmen unserer Dienstleistungen, insbesondere des Social Media Managements für unsere AI-Influencer und der Implementierung von automatisierten Workflows, nutzen wir verschiedene Messenger-Dienste, wie z.B. WhatsApp Business API und Instagram Direct Message API, zur Kommunikation mit interessierten Parteien und zur Interaktion mit Nutzern.
                </p>
                
                <h3 className="text-xl font-semibold text-[#2F3E46] mb-3">6.1 Art und Umfang der verarbeiteten Daten</h3>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Wenn Sie mit uns oder unseren betreuten AI-Influencern über diese Messenger-Dienste kommunizieren, verarbeiten wir folgende Daten:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-[#52616B] leading-relaxed ml-4">
                  <li><strong>Kommunikationsdaten:</strong> Dies umfasst den Inhalt Ihrer Nachrichten, Zeitstempel der Kommunikation sowie Metadaten der Konversation.</li>
                  <li><strong>Kontaktinformationen:</strong> Ihre Telefonnummer (bei WhatsApp) oder Ihr Benutzername (bei Instagram), falls diese Informationen von Ihnen übermittelt werden.</li>
                  <li><strong>Profilinformationen:</strong> Öffentliche Informationen Ihres Profils, die Sie in dem jeweiligen Messenger-Dienst hinterlegt haben (z.B. Profilbild, Status, Name), sofern diese für die Kommunikation relevant sind.</li>
                  <li><strong>Nutzungsdaten:</strong> Informationen darüber, wie und wann Sie mit unseren automatisierten Systemen interagieren.</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-[#2F3E46] mb-3">6.2 Zweck der Datenverarbeitung</h3>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Die Verarbeitung dieser Daten erfolgt zu folgenden Zwecken:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-[#52616B] leading-relaxed ml-4">
                  <li><strong>Kommunikation und Kundenservice:</strong> Beantwortung Ihrer Anfragen, Bereitstellung von Informationen und Support.</li>
                  <li><strong>Automatisierte Interaktion:</strong> Implementierung von Chatbots und automatisierten Antwortsystemen (z.B. für FAQ, Lead-Qualifizierung, Content-Bereitstellung), insbesondere zur Belegung von AI-Influencern mit "Leben" durch realistische Kommunikation.</li>
                  <li><strong>Optimierung von Workflows:</strong> Analyse der Kommunikationsflüsse zur kontinuierlichen Verbesserung unserer n8n-Workflows und der Effizienz unserer Prozesse.</li>
                  <li><strong>Social Media Management:</strong> Verwaltung der Interaktionen im Namen der AI-Influencer zur Steigerung der Reichweite und des Engagements.</li>
                  <li><strong>Individualisierung:</strong> Generierung von personalisierten Sprachnachrichten (z.B. mittels ElevenLabs), um die Interaktion natürlicher und persönlicher zu gestalten.</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-[#2F3E46] mb-3">6.3 Rechtsgrundlage der Datenverarbeitung</h3>
                <p className="text-lg text-[#52616B] leading-relaxed">
                  Die Verarbeitung Ihrer Daten basiert auf folgenden Rechtsgrundlagen:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-[#52616B] leading-relaxed ml-4">
                  <li><strong>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO):</strong> Sofern Sie uns freiwillig über einen Messenger-Dienst kontaktieren und damit in die Nutzung dieses Kanals und die damit verbundene Datenverarbeitung einwilligen. Dies kann auch durch die aktive Interaktion mit unseren AI-Influencern erfolgen. Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</li>
                  <li><strong>Vertragserfüllung oder vorvertragliche Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO):</strong> Soweit die Kommunikation der Anbahnung oder Durchführung eines Vertragsverhältnisses dient.</li>
                  <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO):</strong> Zur Optimierung unserer Services, zur Analyse von Kommunikationsmustern zur Verbesserung der Effizienz und zur Wahrung unserer berechtigten Geschäftsinteressen, sofern Ihre Interessen oder Grundrechte und Grundfreiheiten nicht überwiegen.</li>
                </ul>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t-2 border-[#EAF1F8] text-center">
              <p className="text-lg text-[#52616B] font-medium">
                Stand: {new Date().toLocaleDateString('de-DE')}
              </p>
              <p className="text-sm text-[#52616B] mt-4">
                Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://www.e-recht24.de</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 