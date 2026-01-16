import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../constants';
import { Button } from './Button';
import { Logo } from './Logo';
import { WhatsAppButton } from './WhatsAppButton';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-700">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer gap-3" onClick={() => navigate('/')}>
              <Logo className="h-9 w-9 text-indigo-900" />
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                {COMPANY_INFO.name}
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:space-x-8 items-center">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      isActive 
                        ? 'text-indigo-900 border-b-2 border-indigo-900' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button 
                variant="primary" 
                size="sm"
                onClick={() => navigate('/contact')}
              >
                Request Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-500 hover:text-slate-900 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-lg text-base font-medium ${
                      isActive
                        ? 'bg-slate-50 text-indigo-900'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4">
                 <Button 
                  fullWidth 
                  onClick={() => navigate('/contact')}
                >
                  Request Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow relative">
        {children}
      </main>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Logo className="h-8 w-8 text-white" />
                <span className="text-2xl font-bold text-white block">
                  {COMPANY_INFO.name}
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4 max-w-xs">
                {COMPANY_INFO.tagline}
              </p>
              <p className="text-sm">
                © {new Date().getFullYear()} Ārjava. All rights reserved.
              </p>
            </div>
            
            <div className="col-span-1">
              <h3 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider">Services</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#/solutions" className="hover:text-white transition-colors">Government ERP</a></li>
                <li><a href="#/solutions" className="hover:text-white transition-colors">Procurement Systems</a></li>
                <li><a href="#/solutions" className="hover:text-white transition-colors">Compliance & Audit</a></li>
                <li><a href="#/solutions" className="hover:text-white transition-colors">Custom Development</a></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider">Company</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#/why-arjava" className="hover:text-white transition-colors">Why Ārjava</a></li>
                <li><a href="#/contact" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="block">{COMPANY_INFO.contact.address}</span>
                </li>
                <li>
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white transition-colors">
                    {COMPANY_INFO.contact.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${COMPANY_INFO.contact.phone}`} className="hover:text-white transition-colors">
                    {COMPANY_INFO.contact.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              Built for Enterprise. Secured for Government.
            </div>
            <div className="flex space-x-6">
              <a href="#/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};