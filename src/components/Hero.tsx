import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  const handleDemoClick = () => {
    window.open('https://calendar.app.google/ue5ud9MJgQPYwUZq8', '_blank');
  };

  const scrollToFirstProduct = () => {
    const firstProduct = document.querySelector('[data-product-section]');
    if (firstProduct) {
      firstProduct.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('hero.description')}
            </p>
            <div className="space-y-4">
              <button 
                onClick={handleDemoClick}
                className="w-full sm:w-auto bg-[#ff4d31] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e63e2a] transition-colors"
              >
                {t('hero.demo')}
              </button>
              <button 
                onClick={scrollToFirstProduct}
                className="w-full sm:w-auto bg-white text-[#ff4d31] border-2 border-[#ff4d31] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#fff5f5] transition-colors block sm:inline-block sm:ml-4"
              >
                {t('hero.tryNow')}
              </button>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="lg:w-1/2 relative flex items-center justify-center">
            <div className="relative w-[300px] h-[600px]">
              {/* 3D Pop-Out Carpet */}
              <div className="absolute bottom-[-10px] left-[50%] transform -translate-x-1/2 w-[250px] scale-[2.0]">
                <img
                  src="https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/velvet-armchair.png?v=1732390182086"
                  alt="3D Pop-Out Carpet"
                  className="w-full h-full object-cover scale-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}