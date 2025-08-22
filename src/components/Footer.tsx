import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#A8DADC]">Rudolpho-AI</h3>
          <p className="text-[#A8DADC] leading-relaxed">
            Dein spezialisierter Partner für Automatisierung, KI und digitale Produktentwicklung. 
            Gemeinsam bringen wir dein Business auf das nächste Level.
          </p>
                                                      <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/in/marco-rudolph-5b33a5175/" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:text-white transition-colors duration-300">
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="https://github.com/MarcoRudolph" target="_blank" rel="noopener noreferrer" className="text-[#A8DADC] hover:text-white transition-colors duration-300">
                          <Github className="h-5 w-5" />
                        </a>
                      </div>
        </div>
      )
    },
    {
      title: "Leistungen",
      links: [
        { label: "n8n Workflow Automation", href: "#services" },
        { label: "AI Influencer Marketing", href: "#services" },
        { label: "Social Media Management", href: "#services" },
        { label: "Web-Entwicklung", href: "#services" },
        { label: "KI-Integration", href: "#services" }
      ]
    },
    {
      title: "Quick Links",
      links: [
        { label: "Über Mich", href: "#about" },
        { label: "Projekte", href: "#projects" },
        { label: "Kontakt", href: "#contact" },
        { label: "Blog", href: "#" },
        { label: "FAQ", href: "#" }
      ]
    },
    {
      title: "Kontakt",
      content: (
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-[#A8DADC]" />
            <a href="mailto:MarcoRudolph09@proton.me" className="text-[#A8DADC] hover:text-white transition-colors duration-300">
              MarcoRudolph09@proton.me
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-[#A8DADC]" />
            <a href="tel:+4948939373110" className="text-[#A8DADC] hover:text-white transition-colors duration-300">
              +49 4893 9373110
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-[#A8DADC]" />
            <span className="text-[#A8DADC]">
              Deutschland
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-[#A8DADC] text-sm">
              USt-IdNr.: DE455180377
            </span>
          </div>
        </div>
      )
    }
  ];

  const legalLinks = [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/terms" },
    { label: "Cookie-Einstellungen", href: "/cookie-settings" }
  ];

  return (
    <footer className="bg-[#2F3E46] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              {section.title && (
                <h3 className="text-lg font-semibold text-[#A8DADC]">
                  {section.title}
                </h3>
              )}
              
              {section.content ? (
                section.content
              ) : (
                <ul className="space-y-2">
                  {section.links?.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-[#A8DADC] hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#52616B]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-[#A8DADC] text-sm">
              © {currentYear} Rudolpho-AI. Alle Rechte vorbehalten.
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-[#A8DADC] hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 