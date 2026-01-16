import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { COMPANY_INFO, FORMSPREE_ENDPOINT } from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirements: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          requirements: formData.requirements,
          _subject: `New Consultation Request from ${formData.name} - ${formData.company}`
        })
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          requirements: ''
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-xl mx-auto p-8 bg-indigo-50 border border-indigo-100 rounded-2xl">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">Thank You</h2>
          <p className="text-lg text-slate-700 mb-8">
            Your inquiry has been received. A senior consultant from our team will review your requirements and contact you within 24 hours.
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline">Return to Form</Button>
        </div>
      </Section>
    );
  }

  return (
    <>
      <div className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-xl text-slate-600">
            Start a conversation about your organization's ERP needs.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Get in Touch</h3>
              <p className="text-slate-600 mb-8">
                We work with governments and enterprises globally. Reach out to schedule a demonstration or technical consultation.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-indigo-900 mt-1 mr-4" size={20} />
                <div>
                  <h4 className="font-semibold text-slate-900">Headquarters</h4>
                  <p className="text-slate-600">{COMPANY_INFO.contact.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-indigo-900 mt-1 mr-4" size={20} />
                <div>
                  <h4 className="font-semibold text-slate-900">Email</h4>
                  <p className="text-slate-600">{COMPANY_INFO.contact.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-indigo-900 mt-1 mr-4" size={20} />
                <div>
                  <h4 className="font-semibold text-slate-900">Phone</h4>
                  <p className="text-slate-600">{COMPANY_INFO.contact.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 border border-slate-200 shadow-sm rounded-3xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Request Consultation</h3>
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-indigo-900 focus:border-indigo-900 outline-none transition-shadow rounded-lg"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Organization / Department</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-indigo-900 focus:border-indigo-900 outline-none transition-shadow rounded-lg"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-indigo-900 focus:border-indigo-900 outline-none transition-shadow rounded-lg"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-indigo-900 focus:border-indigo-900 outline-none transition-shadow rounded-lg"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium text-slate-700 mb-2">Project Requirements</label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-indigo-900 focus:border-indigo-900 outline-none transition-shadow rounded-lg"
                    value={formData.requirements}
                    onChange={handleChange}
                    placeholder="Briefly describe your needs (e.g., Procurement System, HRMS, Custom Module...)"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};