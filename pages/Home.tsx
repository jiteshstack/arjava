import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { HERO_CONTENT, SERVICES, APPROACH_STEPS, INDUSTRIES } from '../constants';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white pt-16 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              {HERO_CONTENT.headline}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-light">
              {HERO_CONTENT.subtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => navigate('/contact')}>
                {HERO_CONTENT.primaryCta}
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/solutions')}>
                {HERO_CONTENT.secondaryCta}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Abstract Enterprise Background Decoration */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-slate-50 skew-x-12 transform origin-top-right opacity-60 hidden lg:block"></div>
        <div className="absolute bottom-0 right-20 -z-10 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
      </section>

      {/* What We Do - High Level */}
      <Section background="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Specialized ERP Systems</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We move beyond generic software to build purpose-driven platforms for critical public and private functions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map((service, idx) => (
            <div key={idx} className="bg-white p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow rounded-3xl">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-900 flex items-center justify-center rounded-2xl mb-6">
                {service.icon && <service.icon size={24} />}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
           <Button variant="outline" onClick={() => navigate('/solutions')}>
             View All Solutions <ArrowRight className="ml-2 h-4 w-4" />
           </Button>
        </div>
      </Section>

      {/* Who We Serve */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Serve</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our systems are architected for high-compliance, high-volume environments where data integrity is paramount.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1 mr-4">
                  <div className="w-2 h-2 bg-indigo-900 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Government & Public Sector</h4>
                  <p className="text-slate-600">Ministries, Departments, Municipalities, and PSUs.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1 mr-4">
                  <div className="w-2 h-2 bg-indigo-900 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Large Enterprises</h4>
                  <p className="text-slate-600">Infrastructure, Manufacturing, Logistics, and Defense.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1 mr-4">
                  <div className="w-2 h-2 bg-indigo-900 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Global Organizations</h4>
                  <p className="text-slate-600">International entities requiring India-based development partners.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-slate-100 p-8 md:p-12 border border-slate-200 rounded-3xl">
             <h3 className="text-xl font-bold text-slate-900 mb-6">Trusted by industries requiring precision</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {INDUSTRIES.map((ind, i) => (
                  <div key={i} className="flex items-center space-x-2 text-slate-700">
                    <CheckCircle2 size={16} className="text-indigo-700" />
                    <span className="text-sm font-medium">{ind}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </Section>

      {/* Our Approach */}
      <Section background="dark">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Approach</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A disciplined, phased methodology ensuring successful digital transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {APPROACH_STEPS.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="bg-slate-800 p-6 h-full border border-slate-700 hover:border-slate-500 transition-colors rounded-2xl">
                <div className="text-indigo-400 font-bold text-lg mb-2">{step.title}</div>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </div>
              {idx < APPROACH_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10 text-slate-600">
                  <ArrowRight size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Lead Capture Preview */}
      <Section background="light">
        <div className="bg-indigo-900 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to modernize your infrastructure?</h2>
              <p className="text-indigo-100 text-lg mb-8">
                Schedule a consultation with our system architects to discuss your specific requirements.
              </p>
              <div>
                <Button variant="white" onClick={() => navigate('/contact')}>
                  Book a Consultation
                </Button>
              </div>
            </div>
            <div className="hidden lg:block bg-indigo-800 relative">
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-indigo-700 opacity-50"></div>
               {/* Decorative grid pattern */}
               <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
               <div className="absolute inset-0 flex items-center justify-center p-12">
                 <div className="border border-indigo-400/30 bg-indigo-900/50 backdrop-blur-sm p-8 max-w-sm rounded-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 bg-indigo-400/20 rounded-full w-3/4"></div>
                      <div className="h-2 bg-indigo-400/20 rounded-full w-full"></div>
                      <div className="h-2 bg-indigo-400/20 rounded-full w-5/6"></div>
                      <div className="h-2 bg-indigo-400/20 rounded-full w-1/2"></div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};