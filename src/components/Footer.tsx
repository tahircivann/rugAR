import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layers, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();
  
  const handleContactClick = () => {
    window.open('https://calendar.app.google/ue5ud9MJgQPYwUZq8', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Layers className="h-8 w-8 text-[#ff4d31]" />
              <span className="ml-2 text-2xl font-bold text-[#ff4d31]">rugAR</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff4d31]">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff4d31]">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff4d31]">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff4d31]">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/rugAR" className="text-gray-400 hover:text-[#ff4d31]">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-400 hover:text-[#ff4d31]">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <button 
                  onClick={handleContactClick}
                  className="text-gray-400 hover:text-[#ff4d31]"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contactInfo')}</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@rugar.com" className="hover:text-[#ff4d31]">
                  rugartechinfo@gmail.com
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} rugAR. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}