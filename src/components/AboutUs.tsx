import React from 'react';
import { useTranslation } from 'react-i18next';

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-br from-white via-pink-100 to-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center text-[#ff4d31] mb-12">
          {t('about.title')}
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          {t('about.description')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/Profile_Photo.jpeg?v=1732459091356"
              alt="Person 1"
              className="rounded-full w-48 h-48 object-cover mb-6"
            />
            <h3 className="text-2xl font-semibold mb-2">Tahir CIVAN</h3>
            <p className="text-gray-600 text-center max-w-md">
              {t('about.person1Description')}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/1685195520309.jpg?v=1732460872563"
              alt="Person 2"
              className="rounded-full w-48 h-48 object-cover mb-6"
            />
            <h3 className="text-2xl font-semibold mb-2">Burhan KURT</h3>
            <p className="text-gray-600 text-center max-w-md">
              {t('about.person2Description')}
            </p>
          </div>
        </div>
        
        {/* References Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-[#ff4d31] mb-8">
            {t('about.referencesTitle')}
          </h3>
          <div className="overflow-hidden relative">
            <div className="flex animate-scroll-right justify-center space-x-44">
              {/* First Set of Brands */}
              <img src="https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/yord_logo.png?v=1732460249161" alt="Brand 1" className="h-16 opacity-75" />
              <img src="https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/Client%20Logo.svg?v=1732460359824" alt="Brand 2" className="h-16 opacity-75" />
              <img src="https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/cyrex-enterprise-logo.webp?v=1732460360235" alt="Brand 3" className="h-16 opacity-75" />
              <img src="https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/Screenshot_11.png?v=1732460593076" alt="Brand 4" className="h-16 opacity-75" />
              {/* Duplicate Set of Brands for Seamless Scroll */}
              <img src="https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/yord_logo.png?v=1732460249161" alt="Brand 1" className="h-16 opacity-75" />
              <img src="https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/Client%20Logo.svg?v=1732460359824" alt="Brand 2" className="h-16 opacity-75" />
              <img src="https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/cyrex-enterprise-logo.webp?v=1732460360235" alt="Brand 3" className="h-16 opacity-75" />
              <img src="https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/Screenshot_11.png?v=1732460593076" alt="Brand 4" className="h-16 opacity-75" />
              <img src="https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/yord_logo.png?v=1732460249161" alt="Brand 1" className="h-16 opacity-75" />
              <img src="https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/Client%20Logo.svg?v=1732460359824" alt="Brand 2" className="h-16 opacity-75" />
              <img src="https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/cyrex-enterprise-logo.webp?v=1732460360235" alt="Brand 3" className="h-16 opacity-75" />
              <img src="https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/Screenshot_11.png?v=1732460593076" alt="Brand 4" className="h-16 opacity-75" />
            </div>
          </div>
        </div>
        {/* End References Section */}
      </div>
    </div>
  );
}