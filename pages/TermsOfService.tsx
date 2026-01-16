import React from 'react';
import { Section } from '../components/Section';
import { FileText } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <FileText className="text-white" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Terms of Service</h1>
          </div>
          <p className="text-xl text-slate-400 max-w-2xl">
            These terms govern your use of Ārjava's ERP systems and services. Please read them carefully before engaging with our platform.
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
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">1. Acceptance of Terms</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              By accessing or using Ārjava's ERP systems, website, or services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our Services.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              These Terms apply to all users, including but not limited to government entities, enterprises, organizations, and their authorized representatives. If you are using our Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">2. Description of Services</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Ārjava provides enterprise-grade ERP (Enterprise Resource Planning) systems and related services, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Custom ERP software development and implementation</li>
              <li>Government ERP systems and public sector solutions</li>
              <li>Procurement and tender management systems</li>
              <li>Compliance and audit management platforms</li>
              <li>Financial and accounting systems</li>
              <li>HR and payroll management systems</li>
              <li>Project and asset management solutions</li>
              <li>Technical support, maintenance, and consulting services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">3. Service Agreements</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Specific terms, conditions, pricing, and service level agreements (SLAs) for enterprise clients are detailed in separate written service agreements ("Service Agreements"). In the event of any conflict between these Terms and a Service Agreement, the Service Agreement shall prevail for matters specific to that engagement.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              All Service Agreements are subject to negotiation and mutual agreement between Ārjava and the client organization.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">4. User Accounts and Access</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">4.1 Account Creation</h3>
                <p className="text-slate-700 leading-relaxed">
                  To access certain Services, you may be required to create an account. You agree to provide accurate, current, and complete information during registration and to update such information to maintain its accuracy.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">4.2 Account Security</h3>
                <p className="text-slate-700 leading-relaxed mb-2">
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Use strong, unique passwords</li>
                  <li>Notify us immediately of any unauthorized access or security breach</li>
                  <li>Comply with all security policies and procedures</li>
                  <li>Not share your credentials with unauthorized parties</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">5. Acceptable Use</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree NOT to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
              <li>Introduce viruses, malware, or other harmful code</li>
              <li>Interfere with or disrupt the integrity or performance of our Services</li>
              <li>Reverse engineer, decompile, or disassemble our software</li>
              <li>Use our Services to transmit spam, phishing, or fraudulent communications</li>
              <li>Access or use Services in a manner that violates your organization's policies or agreements</li>
              <li>Remove or alter any proprietary notices or labels</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">6. Intellectual Property</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              All content, software, designs, trademarks, and other intellectual property associated with our Services are owned by Ārjava or our licensors and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Subject to your compliance with these Terms and any applicable Service Agreement, we grant you a limited, non-exclusive, non-transferable license to access and use our Services for your internal business purposes.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              For custom-developed solutions, intellectual property rights are typically addressed in the specific Service Agreement. Generally, custom code developed specifically for a client may be subject to different ownership arrangements as mutually agreed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">7. Data and Confidentiality</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">7.1 Your Data</h3>
                <p className="text-slate-700 leading-relaxed">
                  You retain all rights, title, and interest in your data. We will not access, use, or disclose your data except as necessary to provide Services, comply with legal obligations, or as authorized by you. Our data handling practices are detailed in our Privacy Policy.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">7.2 Confidentiality</h3>
                <p className="text-slate-700 leading-relaxed">
                  Both parties agree to maintain the confidentiality of proprietary and confidential information disclosed during the course of our engagement, in accordance with applicable confidentiality agreements and legal requirements.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">8. Service Availability and Modifications</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              We strive to maintain high availability of our Services, but we do not guarantee uninterrupted or error-free operation. We reserve the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Perform scheduled maintenance with advance notice</li>
              <li>Modify, suspend, or discontinue Services (with notice to affected clients)</li>
              <li>Implement security updates and patches</li>
              <li>Address technical issues and emergencies</li>
            </ul>
            <p className="text-lg text-slate-700 leading-relaxed mt-4">
              For enterprise clients, specific uptime guarantees and maintenance windows are typically defined in Service Agreements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">9. Payment Terms</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Payment terms, pricing, invoicing schedules, and refund policies are specified in individual Service Agreements. Generally, payments are due according to the agreed schedule, and late payments may result in service suspension or termination as outlined in the applicable agreement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">10. Warranties and Disclaimers</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              <strong>Service Warranties:</strong> We warrant that our Services will be provided in a professional manner and in accordance with applicable Service Agreements. Specific warranties are detailed in individual Service Agreements.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              <strong>Disclaimers:</strong> EXCEPT AS EXPRESSLY PROVIDED IN A SERVICE AGREEMENT, OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We do not warrant that our Services will be error-free, secure, or uninterrupted, or that defects will be corrected.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">11. Limitation of Liability</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, ĀRJAVA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Our total liability for any claims arising from or related to our Services shall not exceed the amount paid by you to us in the twelve (12) months preceding the claim, or as otherwise specified in the applicable Service Agreement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">12. Indemnification</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Ārjava and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or relating to your use of our Services, violation of these Terms, or infringement of any third-party rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">13. Termination</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Either party may terminate access to Services in accordance with the terms specified in the applicable Service Agreement. We reserve the right to suspend or terminate your access immediately if you violate these Terms or engage in fraudulent or illegal activities.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Upon termination, your right to access and use Services will cease immediately. Provisions that by their nature should survive termination (including intellectual property, confidentiality, indemnification, and limitation of liability) shall survive.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">14. Governing Law and Dispute Resolution</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Any disputes arising from or relating to these Terms or our Services shall be resolved through good faith negotiation. If negotiation fails, disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi, India, unless otherwise specified in a Service Agreement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">15. Compliance and Regulatory Requirements</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              You are responsible for ensuring that your use of our Services complies with all applicable laws, regulations, and organizational policies. This includes but is not limited to data protection laws, financial regulations, procurement rules, and government compliance requirements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">16. Changes to Terms</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of Services after such changes constitutes acceptance of the modified Terms. For enterprise clients, material changes may be subject to the terms of the applicable Service Agreement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">17. Severability</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-900 pl-4">18. Contact Information</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <p className="text-slate-700 mb-2"><strong>Email:</strong> <a href="mailto:hello@arjavahub.com" className="text-indigo-900 hover:underline">hello@arjavahub.com</a></p>
              <p className="text-slate-700 mb-2"><strong>Address:</strong> Aerocity, New Delhi, India</p>
              <p className="text-slate-700"><strong>Phone:</strong> +91 11 2345 6789</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
