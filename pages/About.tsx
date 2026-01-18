import React from 'react';
import { Section } from '../components/Section';
import { ABOUT_CONTENT } from '../constants';

export const About: React.FC = () => {
  return (
    <>
      <section className="relative bg-slate-900 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Ārjava</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Building the digital backbone for the institutions that run our world.
          </p>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto space-y-16">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">Our Story</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              {ABOUT_CONTENT.story}
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">Mission</h2>
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              {ABOUT_CONTENT.mission}
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">Vision</h2>
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              {ABOUT_CONTENT.vision}
            </p>
          </div>

          <div>
             <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">Our Team</h2>
             <p className="text-lg text-slate-700 leading-relaxed mb-6">
               We are a collective of senior technologists, former government consultants, and domain experts in finance and procurement. We do not hire junior developers for critical architecture. Every line of code is overseen by veterans who understand the cost of downtime in a public service environment.
             </p>
          </div>
        </div>
      </Section>
    </>
  );
};