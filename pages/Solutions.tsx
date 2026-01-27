import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { SERVICES } from '../constants';

export const Solutions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Our Solutions</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
          ERP is a tool for operational improvement, but as a "born-in-the-cloud" digital foundation designed for modern, innovative enterprises. We will provide a comprehensive, unified platform that provides a complete, 360-degree perspective of an entire organization. By centralizing and automating all business functions end-to-end on a single cloud-based system, it allows leaders to monitor and manage their operations in real-time from any location or device
          </p>
        </div>
      </div>

      <Section>
        <div className="space-y-24">
          {SERVICES.map((service, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-50 text-indigo-900 rounded-2xl mb-6">
                  {service.icon && <service.icon size={32} />}
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                <div className="h-1 w-20 bg-indigo-600 mb-6 rounded-full"></div>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl">
                  <h4 className="font-bold text-slate-900 mb-4 uppercase text-sm tracking-wider">Key Capabilities</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                    {service.features && service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-slate-700">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3 flex-shrink-0"></span>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-200">
                     {service.image ? (
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />
                     ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100">
                          <span className="text-sm">Image not available</span>
                        </div>
                     )}
                  </div>
                  {/* Overlay gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section background="light" className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Need a custom module?</h2>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
          We understand that off-the-shelf never fits perfectly. Our engineering team builds custom modules tailored to your unique operational workflows.
        </p>
        <Button onClick={() => navigate('/contact')}>Discuss Custom Needs</Button>
      </Section>
    </>
  );
};