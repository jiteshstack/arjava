import React from 'react';
import { Section } from '../components/Section';
import { WHY_ARJAVA_POINTS } from '../constants';

export const WhyArjava: React.FC = () => {
  return (
    <>
      {/* Hero Title Section */}
      <div className="bg-white py-16 md:py-20 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Why choose Ārjava ERP Software?
          </h1>
          <div className="w-16 h-1 bg-sky-500 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            "Ārjava" means sincerity, straightforwardness, and integrity. These are not just brand values; they are the architectural principles of our software.
          </p>
        </div>
      </div>

      {/* Features Grid Section */}
      <Section background="light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {WHY_ARJAVA_POINTS.map((point, idx) => {
              const IconComponent = point.icon;
              return (
                <div key={idx} className="text-left">
                  {IconComponent && (
                    <div className="mb-4">
                      <IconComponent size={48} className="text-sky-500" strokeWidth={1.5} />
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
};
