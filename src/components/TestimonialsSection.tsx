import React from 'react';
import { Card, CardContent } from './ui/card';
import { Quote, Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, position, company, rating }) => {
  return (
    <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm group">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500" />
      
      <CardContent className="p-8 relative">
        {/* Quote icon */}
        <div className="mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <Quote className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
          ))}
        </div>

        {/* Quote text */}
        <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
          "{quote}"
        </blockquote>

        {/* Author info */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-lg">
              {author.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <div className="font-semibold text-gray-900">{author}</div>
            <div className="text-sm text-gray-600">{position}</div>
            <div className="text-sm text-blue-600 font-medium">{company}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Die Automatisierung durch die n8n Workflows hat unsere Effizienz um 30% gesteigert! Die Implementierung war reibungslos und die Ergebnisse übertreffen unsere Erwartungen.",
      author: "Max Mustermann",
      position: "CEO",
      company: "Musterfirma GmbH",
      rating: 5
    },
    {
      quote: "Die AI-Influencer-Kampagnen haben uns komplett neue Zielgruppen erschlossen. Die Authentizität und Glaubwürdigkeit der KI-Influencer ist beeindruckend.",
      author: "Sarah Schmidt",
      position: "Marketing Director",
      company: "Digital Solutions AG",
      rating: 5
    },
    {
      quote: "Das Social Media Management ist jetzt ein Kinderspiel. Die KI-gestützte Content-Optimierung und die nahtlose Integration mit unseren Workflows sparen uns täglich Stunden.",
      author: "Michael Weber",
      position: "Head of Digital",
      company: "Innovation Labs",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Was meine{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Kunden sagen
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Echte Erfahrungen von Unternehmen, die mit meinen KI-Lösungen 
            ihre Geschäftsprozesse transformiert haben.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
              rating={testimonial.rating}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-blue-600">50+</div>
            <div className="text-gray-600">Zufriedene Kunden</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-indigo-600">200+</div>
            <div className="text-gray-600">Automatisierte Workflows</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-purple-600">30%</div>
            <div className="text-gray-600">Durchschnittliche Effizienzsteigerung</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-green-600">24/7</div>
            <div className="text-gray-600">Support & Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 