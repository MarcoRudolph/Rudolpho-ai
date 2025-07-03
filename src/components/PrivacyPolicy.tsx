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
          <div className="prose prose-lg max-w-none">
            <h1>Datenschutzerklärung</h1>
            
            <h2>1. Datenschutz auf einen Blick</h2>
            
            <h3>Allgemeine Hinweise</h3>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
            
            <h3>Datenerfassung auf dieser Website</h3>
            
            <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt "Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.</p>
            
            <h4>Wie erfassen wir Ihre Daten?</h4>
            <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
            <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
            
            <h4>Wofür nutzen wir Ihre Daten?</h4>
            <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.</p>
            
            <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
            <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
            <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
            
            <h3>Analyse-Tools und Tools von Drittanbietern</h3>
            <p>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.</p>
            <p>Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.</p>
            
            <h2>2. Hosting</h2>
            <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
            
            <h3>Strato</h3>
            <p>Anbieter ist die Strato AG, Otto-Ostrowski-Straße 7, 10249 Berlin (nachfolgend "Strato"). Wenn Sie unsere Website besuchen, erfasst Strato verschiedene Logfiles inklusive Ihrer IP-Adressen.</p>
            <p>Weitere Informationen entnehmen Sie der Datenschutzerklärung von Strato: <a href="https://www.strato.de/datenschutz/" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://www.strato.de/datenschutz/</a>.</p>
            <p>Die Verwendung von Strato erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
            
            <h4>Auftragsverarbeitung</h4>
            <p>Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>
            
            <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3>Datenschutz</h3>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
            <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
            <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
            
            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p>
              Marco Rudolph<br />
              No de Halloh 8a<br />
              25591 Ottenbüttel
            </p>
            <p>
              Telefon: 015116321085<br />
              E-Mail: marcorudolph09@proton.me
            </p>
            <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
            
            <h3>Speicherdauer</h3>
            <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.</p>
            
            <h3>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
            <p>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.</p>
            
            <h3>Empfänger von personenbezogenen Daten</h3>
            <p>Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.</p>
            
            <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
            
            <h3>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
            <p><strong>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</strong></p>
            <p><strong>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</strong></p>
            
            <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
            
            <h3>Recht auf Datenübertragbarkeit</h3>
            <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
            
            <h3>Auskunft, Berichtigung und Löschung</h3>
            <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.</p>
            
            <h3>Recht auf Einschränkung der Verarbeitung</h3>
            <p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p>
            <ul>
              <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
              <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
              <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
              <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
            </ul>
            <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</p>
            
            <h3>SSL- bzw. TLS-Verschlüsselung</h3>
            <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
            <p>Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>
            
            <h2>4. Datenerfassung auf dieser Website</h2>
            
            <h3>Cookies</h3>
            <p><strong>Aktuell verwenden wir auf dieser Website keine Cookies.</strong> Unsere Website funktioniert vollständig ohne die Verwendung von Cookies oder ähnlichen Tracking-Technologien.</p>
            <p>Falls wir in Zukunft Cookies einsetzen sollten, werden wir diese Datenschutzerklärung entsprechend aktualisieren und Sie über die Verwendung informieren. Cookies sind kleine Datenpakete, die auf Ihrem Endgerät gespeichert werden können, um bestimmte Funktionen zu ermöglichen oder das Nutzererlebnis zu verbessern.</p>
            <p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.</p>
            
            <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
            <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.</p>
            <p>Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.</p>
            
            <h2>5. Soziale Medien</h2>
            
            <h3>Facebook</h3>
            <p>Auf dieser Website sind Elemente des sozialen Netzwerks Facebook integriert. Anbieter dieses Dienstes ist die Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland. Die erfassten Daten werden nach Aussage von Facebook jedoch auch in die USA und in andere Drittländer übertragen.</p>
            <p>Eine Übersicht über die Facebook Social-Media-Elemente finden Sie hier: <a href="https://developers.facebook.com/docs/plugins/?locale=de_DE" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://developers.facebook.com/docs/plugins/?locale=de_DE</a>.</p>
            <p>Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem Facebook-Server hergestellt. Facebook erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse diese Website besucht haben. Wenn Sie den Facebook "Like-Button" anklicken, während Sie in Ihrem Facebook-Account eingeloggt sind, können Sie die Inhalte dieser Website auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Facebook erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Facebook unter: <a href="https://de-de.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://de-de.facebook.com/privacy/explanation</a>.</p>
            <p>Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.</p>
            <p>Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Facebook weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam für diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich dabei ausschließlich auf die Erfassung der Daten und deren Weitergabe an Facebook. Die nach der Weiterleitung erfolgende Verarbeitung durch Facebook ist nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam obliegenden Verpflichtungen wurden in einer Vereinbarung über gemeinsame Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie unter: <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://www.facebook.com/legal/controller_addendum</a>. Laut dieser Vereinbarung sind wir für die Erteilung der Datenschutzinformationen beim Einsatz des Facebook-Tools und für die datenschutzrechtlich sichere Implementierung des Tools auf unserer Website verantwortlich. Für die Datensicherheit der Facebook-Produkte ist Facebook verantwortlich. Betroffenenrechte (z. B. Auskunftsersuchen) hinsichtlich der bei Facebook verarbeiteten Daten können Sie direkt bei Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns geltend machen, sind wir verpflichtet, diese an Facebook weiterzuleiten.</p>
            <p>Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://www.facebook.com/legal/EU_data_transfer_addendum</a>, <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://de-de.facebook.com/help/566994660333381</a> und <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://www.facebook.com/policy.php</a>.</p>
            <p>Das Unternehmen verfügt über eine Zertifizierung nach dem "EU-US Data Privacy Framework" (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/participant/4452" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://www.dataprivacyframework.gov/participant/4452</a>.</p>
            
            <h3>X (ehemals Twitter)</h3>
            <p>Auf dieser Website sind Funktionen des Dienstes X (ehemals Twitter) eingebunden. Diese Funktionen werden angeboten durch den Mutterkonzern X Corp., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA. Für die Datenverarbeitung von außerhalb der USA lebenden Personen ist die Niederlassung Twitter International Unlimited Company, One Cumberland Place, Fenian Street, Dublin 2, D02 AX07, Irland, verantwortlich.</p>
            <p>Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem X-Server hergestellt. X (ehemals Twitter) erhält dadurch Informationen über den Besuch dieser Website durch Sie. Durch das Benutzen von X (ehemals Twitter) und der Funktion "Re-Tweet" bzw. "Repost" werden die von Ihnen besuchten Websites mit Ihrem X (ehemals Twitter)-Account verknüpft und anderen Nutzern bekannt gegeben. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch X (ehemals Twitter) erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von X (ehemals Twitter) unter: <a href="https://x.com/de/privacy" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://x.com/de/privacy</a>.</p>
            <p>Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.</p>
            <p>Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://gdpr.x.com/en/controller-to-controller-transfers.html" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://gdpr.x.com/en/controller-to-controller-transfers.html</a>.</p>
            <p>Ihre Datenschutzeinstellungen bei X (ehemals Twitter) können Sie in den Konto-Einstellungen unter <a href="https://x.com/settings/account" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://x.com/settings/account</a> ändern.</p>
            <p>Das Unternehmen verfügt über eine Zertifizierung nach dem "EU-US Data Privacy Framework" (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/participant/2710" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://www.dataprivacyframework.gov/participant/2710</a>.</p>
            
            <h3>Instagram</h3>
            <p>Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten durch die Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland.</p>
            <p>Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem Instagram-Server hergestellt. Instagram erhält dadurch Informationen über den Besuch dieser Website durch Sie.</p>
            <p>Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie durch Anklicken des Instagram-Buttons die Inhalte dieser Website mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram erhalten.</p>
            <p>Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.</p>
            <p>Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Facebook bzw. Instagram weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam für diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich dabei ausschließlich auf die Erfassung der Daten und deren Weitergabe an Facebook bzw. Instagram. Die nach der Weiterleitung erfolgende Verarbeitung durch Facebook bzw. Instagram ist nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam obliegenden Verpflichtungen wurden in einer Vereinbarung über gemeinsame Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie unter: <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://www.facebook.com/legal/controller_addendum</a>. Laut dieser Vereinbarung sind wir für die Erteilung der Datenschutzinformationen beim Einsatz des Facebook- bzw. Instagram-Tools und für die datenschutzrechtlich sichere Implementierung des Tools auf unserer Website verantwortlich. Für die Datensicherheit der Facebook bzw. Instagram-Produkte ist Facebook verantwortlich. Betroffenenrechte (z. B. Auskunftsersuchen) hinsichtlich der bei Facebook bzw. Instagram verarbeiteten Daten können Sie direkt bei Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns geltend machen, sind wir verpflichtet, diese an Facebook weiterzuleiten.</p>
            <p>Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://www.facebook.com/legal/EU_data_transfer_addendum</a>, <a href="https://privacycenter.instagram.com/policy/" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://privacycenter.instagram.com/policy/</a> und <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://de-de.facebook.com/help/566994660333381</a>.</p>
            <p>Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Instagram: <a href="https://privacycenter.instagram.com/policy/" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://privacycenter.instagram.com/policy/</a>.</p>
            <p>Das Unternehmen verfügt über eine Zertifizierung nach dem "EU-US Data Privacy Framework" (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/participant/4452" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://www.dataprivacyframework.gov/participant/4452</a>.</p>
            
            <h2>6. Messenger-Dienste und automatisierte Kommunikation</h2>
            
            <p>Im Rahmen unserer Dienstleistungen, insbesondere des Social Media Managements für unsere AI-Influencer und der Implementierung von automatisierten Workflows, nutzen wir verschiedene Messenger-Dienste, wie z.B. WhatsApp Business API und Instagram Direct Message API, zur Kommunikation mit interessierten Parteien und zur Interaktion mit Nutzern.</p>
            
            <h3>6.1 Art und Umfang der verarbeiteten Daten</h3>
            <p>Wenn Sie mit uns oder unseren betreuten AI-Influencern über diese Messenger-Dienste kommunizieren, verarbeiten wir folgende Daten:</p>
            <ul>
              <li><strong>Kommunikationsdaten:</strong> Dies umfasst den Inhalt Ihrer Nachrichten, Zeitstempel der Kommunikation sowie Metadaten der Konversation.</li>
              <li><strong>Kontaktinformationen:</strong> Ihre Telefonnummer (bei WhatsApp) oder Ihr Benutzername (bei Instagram), falls diese Informationen von Ihnen übermittelt werden.</li>
              <li><strong>Profilinformationen:</strong> Öffentliche Informationen Ihres Profils, die Sie in dem jeweiligen Messenger-Dienst hinterlegt haben (z.B. Profilbild, Status, Name), sofern diese für die Kommunikation relevant sind.</li>
              <li><strong>Nutzungsdaten:</strong> Informationen darüber, wie und wann Sie mit unseren automatisierten Systemen interagieren.</li>
            </ul>
            
            <h3>6.2 Zweck der Datenverarbeitung</h3>
            <p>Die Verarbeitung dieser Daten erfolgt zu folgenden Zwecken:</p>
            <ul>
              <li><strong>Kommunikation und Kundenservice:</strong> Beantwortung Ihrer Anfragen, Bereitstellung von Informationen und Support.</li>
              <li><strong>Automatisierte Interaktion:</strong> Implementierung von Chatbots und automatisierten Antwortsystemen (z.B. für FAQ, Lead-Qualifizierung, Content-Bereitstellung), insbesondere zur Belegung von AI-Influencern mit "Leben" durch realistische Kommunikation.</li>
              <li><strong>Optimierung von Workflows:</strong> Analyse der Kommunikationsflüsse zur kontinuierlichen Verbesserung unserer n8n-Workflows und der Effizienz unserer Prozesse.</li>
              <li><strong>Social Media Management:</strong> Verwaltung der Interaktionen im Namen der AI-Influencer zur Steigerung der Reichweite und des Engagements.</li>
              <li><strong>Individualisierung:</strong> Generierung von personalisierten Sprachnachrichten (z.B. mittels ElevenLabs), um die Interaktion natürlicher und persönlicher zu gestalten.</li>
            </ul>
            
            <h3>6.3 Rechtsgrundlage der Datenverarbeitung</h3>
            <p>Die Verarbeitung Ihrer Daten basiert auf folgenden Rechtsgrundlagen:</p>
            <ul>
              <li><strong>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO):</strong> Sofern Sie uns freiwillig über einen Messenger-Dienst kontaktieren und damit in die Nutzung dieses Kanals und die damit verbundene Datenverarbeitung einwilligen. Dies kann auch durch die aktive Interaktion mit unseren AI-Influencern erfolgen. Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</li>
              <li><strong>Vertragserfüllung oder vorvertragliche Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO):</strong> Soweit die Kommunikation der Anbahnung oder Durchführung eines Vertragsverhältnisses dient.</li>
              <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO):</strong> Zur Optimierung unserer Services, zur Analyse von Kommunikationsmustern zur Verbesserung der Effizienz und zur Wahrung unserer berechtigten Geschäftsinteressen, sofern Ihre Interessen oder Grundrechte und Grundfreiheiten nicht überwiegen.</li>
            </ul>
            
            <h3>6.4 Zugriff auf Kontakte und Lesen von Chats</h3>
            <p><strong>Zugriff auf Kontakte:</strong> Ein direkter, automatischer Zugriff auf das vollständige Adressbuch Ihres Gerätes findet durch uns nicht statt. Lediglich die uns übermittelten Kontaktdaten (z.B. Ihre Telefonnummer) werden zur Beantwortung Ihrer Anfrage oder zur Fortsetzung der Konversation gespeichert und verarbeitet.</p>
            <p><strong>Lesen von Chats:</strong> Im Rahmen der automatisierten Kommunikation und des Social Media Managements werden Chat-Inhalte technisch erfasst und verarbeitet, um auf Ihre Anfragen zu antworten, automatisierte Prozesse auszuführen und die Effektivität unserer KI-gesteuerten Interaktionen zu gewährleisten. Dies geschieht durch unsere n8n-Workflows und die Anbindung an die jeweiligen Messenger-APIs. Die Inhalte werden dabei nicht manuell von uns durchgelesen, es sei denn, dies ist zur Fehlerbehebung oder zur Beantwortung komplexer, nicht automatisierbarer Anfragen erforderlich.</p>
            <p>Rechtsgrundlage hierfür ist in der Regel Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) durch die aktive Aufnahme der Kommunikation und Interaktion mit unseren automatisierten Systemen, oder unsere berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO) zur Erbringung und Optimierung der Dienstleistung.</p>
            
            <h3>6.5 Weitergabe von Daten an Dritte</h3>
            <p>Die genutzten Messenger-Dienste sind nicht unsere eigenen Dienste. Daten werden an die Betreiber der jeweiligen Messenger-Dienste übermittelt. Bitte beachten Sie, dass die Datenverarbeitung durch die Betreiber der Messenger-Dienste (z.B. Meta Platforms Ireland Limited für WhatsApp und Instagram) nach deren eigenen Datenschutzbestimmungen erfolgt und diese unter Umständen Daten in Drittländer (z.B. USA) übermitteln.</p>
            <p>Die Datenschutzrichtlinien von WhatsApp finden Sie unter: <a href="https://www.whatsapp.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://www.whatsapp.com/legal/privacy-policy/</a></p>
            <p>Die Datenschutzrichtlinien von Instagram/Meta finden Sie unter: <a href="https://privacycenter.instagram.com/policy/" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://privacycenter.instagram.com/policy/</a></p>
            <p>Wir haben mit den Anbietern der Messenger-Dienste, soweit erforderlich, entsprechende Auftragsverarbeitungsverträge (AVV) abgeschlossen, um die Einhaltung des Datenschutzes zu gewährleisten.</p>
            
            <h3>6.6 Speicherdauer</h3>
            <p>Die Chat-Inhalte und zugehörigen Daten werden so lange gespeichert, wie es für die Erfüllung des Kommunikationszwecks, zur Bearbeitung Ihrer Anfrage oder zur Erfüllung gesetzlicher Aufbewahrungspflichten notwendig ist.</p>
            
            <p className="text-sm text-[#52616B] mt-8 pt-8 border-t border-[#EAF1F8]">
              Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:underline">https://www.e-recht24.de</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 