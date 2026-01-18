import React from 'react';
import { Section } from '../components/Section';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <ShieldCheck className="text-white" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
          </div>
          <p className="text-xl text-slate-400 max-w-2xl">
            Your privacy and data security are fundamental to how we operate. This policy outlines how Ārjava collects, uses, and protects your information.
          </p>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <p className="text-sm text-slate-500 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">1. Introduction</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Ārjava ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our ERP systems, visit our website, or engage with our services.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              As a provider of enterprise-grade systems for government and large organizations, we understand the critical importance of data protection and compliance with applicable regulations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">2.1 Information You Provide</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Contact information (name, email, phone number, organization)</li>
                  <li>Business information (company name, department, job title)</li>
                  <li>Project requirements and technical specifications</li>
                  <li>Account credentials and authentication data</li>
                  <li>Communications and correspondence with our team</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">2.2 Information Collected Automatically</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>System logs and usage analytics</li>
                  <li>IP addresses and device information</li>
                  <li>Browser type and version</li>
                  <li>Access timestamps and session data</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">3. How We Use Your Information</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Provide, maintain, and improve our ERP systems and services</li>
              <li>Process your requests and respond to inquiries</li>
              <li>Customize solutions based on your organizational requirements</li>
              <li>Ensure system security and prevent unauthorized access</li>
              <li>Comply with legal obligations and regulatory requirements</li>
              <li>Send important updates, security notices, and service communications</li>
              <li>Conduct analytics and research to enhance our offerings</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">4. Data Security</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li><strong>Encryption:</strong> All data in transit and at rest is encrypted using military-grade encryption protocols</li>
              <li><strong>Access Controls:</strong> Role-based access control ensures only authorized personnel can access sensitive data</li>
              <li><strong>Audit Trails:</strong> Comprehensive logging of all system access and data modifications</li>
              <li><strong>Regular Security Audits:</strong> Periodic assessments and penetration testing</li>
              <li><strong>Compliance:</strong> Adherence to ISO 27001, SOC 2, and other relevant security standards</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">5. Data Sharing and Disclosure</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information. We may share data only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations or court orders</li>
              <li>To protect our rights, property, or safety, or that of our clients</li>
              <li>With trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
              <li>In connection with a business transfer or merger (with prior notice)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">6. Data Retention</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              We retain your information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. For enterprise clients, data retention periods are typically defined in our service agreements and may be subject to specific regulatory requirements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">7. Your Rights</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Depending on your jurisdiction, you may have the following rights:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li><strong>Access:</strong> Request copies of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal requirements)</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
              <li><strong>Objection:</strong> Object to certain processing activities</li>
              <li><strong>Restriction:</strong> Request restriction of processing under certain circumstances</li>
            </ul>
            <p className="text-lg text-slate-700 leading-relaxed mt-4">
              To exercise these rights, please contact us at <a href="mailto:hello@arjavahub.com" className="text-indigo-900 hover:underline">hello@arjavahub.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">8. Cookies and Tracking Technologies</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance user experience, analyze usage patterns, and improve our services. You can control cookie preferences through your browser settings. Note that disabling cookies may affect certain website functionalities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">9. International Data Transfers</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              If you are accessing our services from outside India, please note that your information may be transferred to, stored, and processed in India or other countries where we operate. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">10. Children's Privacy</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Our services are designed for enterprise and government organizations and are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">11. Changes to This Policy</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">12. Contact Us</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <p className="text-slate-700 mb-2"><strong>Email:</strong> <a href="mailto:hello@arjavahub.com" className="text-indigo-900 hover:underline">hello@arjavahub.com</a></p>
              <p className="text-slate-700 mb-2"><strong>Address:</strong> Aerocity, New Delhi, India</p>
              <p className="text-slate-700"><strong>Phone:</strong> +91 97112 38920</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
