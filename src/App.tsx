import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';

// Define your products
const products = [
  {
    name: 'Modern Rug',
    sizes: ['150x200', '200x300'],
    colors: ['#8B4513', '#D2691E', '#DEB887'],
    modelSrc: 'https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/rug_with_bottom.glb?v=1732313335740',
    iosSrc: 'https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/RUG_with_Bottom.usdz?v=1732313330609',
  },
  {
    name: 'Turkish Antique Carpet',
    sizes: ['170x240', '200x290', '240x340'],
    colors: ['#8B4513', '#D2691E', '#DEB887'],
    modelSrc: 'https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/antique_turkish_runner_carpet.glb?v=1732356080878',
    iosSrc: 'https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/Antique_Turkish_Runner_Carpet.usdz?v=1732356090535',
  }
];

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <h2 className="text-4xl font-bold text-center mb-6">
                  {t('product.title')}
                </h2>
                <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
                  {t('product.description')}
                </p>
                {products.map((product, index) => (
                  <ProductSection key={index} product={product} />
                ))}
              </>
            } />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;