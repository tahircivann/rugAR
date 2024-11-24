import React, { useState } from 'react';
import { Layers, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const languages = [
  { code: 'en', name: 'English', flag: 'us' },
  { code: 'pl', name: 'Polski', flag: 'pl' },
  { code: 'de', name: 'Deutsch', flag: 'de' },
  { code: 'tr', name: 'Türkçe', flag: 'tr' }
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(
    languages.find(lang => lang.code === i18n.language) || languages[0]
  );

  const handleLanguageSelect = (lang: typeof languages[0]) => {
    setSelectedLang(lang);
    i18n.changeLanguage(lang.code);
    setIsLangDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Layers className="h-8 w-8 text-[#ff4d31]" />
            <span className="ml-2 text-2xl font-bold text-[#ff4d31]">rugAR</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/rugAR" className="text-gray-700 hover:text-[#ff4d31]">{t('nav.home')}</Link>
            <Link to="/products" className="text-gray-700 hover:text-[#ff4d31]">{t('nav.products')}</Link>
            <Link to="/about-us" className="text-gray-700 hover:text-[#ff4d31]">{t('nav.about')}</Link>

          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <img
                  src={`https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/${selectedLang.flag}.svg`}
                  alt={`${selectedLang.name} Flag`}
                  className="h-5 w-5"
                />
                <span className="text-gray-700">{selectedLang.name}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 border">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang)}
                      className="w-full px-4 py-2 text-left flex items-center space-x-3 hover:bg-gray-100"
                    >
                      <img
                        src={`https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/${lang.flag}.svg`}
                        alt={`${lang.name} Flag`}
                        className="h-5 w-5"
                      />
                      <span className="text-gray-700">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className="bg-[#ff4d31] text-white px-6 py-2 rounded-full hover:bg-[#e63e2a] transition-colors">
              {t('nav.contact')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}