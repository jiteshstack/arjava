import React from 'react';
import { Shield, Lock, Globe, Layers } from 'lucide-react';
import { Section } from '../components/Section';
import { WHY_ARJAVA_POINTS } from '../constants';

export const WhyArjava: React.FC = () => {
  const icons = [Layers, Globe, Globe, Shield]; // Mapping icons to points roughly

  return (
    <>
      <div className="bg-white py-20 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Why Ārjava?</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            "Ārjava" means sincerity, straightforwardness, and integrity. These are not just brand values; they are the architectural principles of our software.
          </p>
        </div>
      </div>

      <Section background="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {WHY_ARJAVA_POINTS.map((point, idx) => (
            <div key={idx} className="bg-white p-8 border border-slate-200 shadow-sm rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{point.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Security & Compliance Framework</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 mb-6">
                <Lock size={32} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Data Sovereignty</h4>
              <p className="text-slate-600 text-sm">
                Full adherence to local data localization laws. All data stays within the designated jurisdiction.
              </p>
            </div>
            
            <div className="p-6">
              <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 mb-6">
                <Shield size={32} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Standards Compliant</h4>
              <p className="text-slate-600 text-sm">
                Systems designed to meet ISO 27001, GDPR, and government-specific IT security guidelines.
              </p>
            </div>

            <div className="p-6">
              <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 mb-6">
                <Layers size={32} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Audit Ready</h4>
              <p className="text-slate-600 text-sm">
                Immutable logs and comprehensive audit trails for every transaction and system action.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};