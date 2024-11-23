import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';

// Define your products
const products = [
  {
    name: 'Turkish Antique Carpet',
    sizes: ['170x240', '200x290', '240x340'],
    colors: ['#8B4513', '#D2691E', '#DEB887'],
    modelSrc: 'https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/antique_turkish_runner_carpet.glb?v=1732356080878',
    iosSrc: 'https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/Antique_Turkish_Runner_Carpet.usdz?v=1732356090535',
  },
  {
    name: 'Modern Rug',
    sizes: ['150x200', '200x300'],
    colors: ['#8B4513', '#D2691E', '#DEB887'],
    modelSrc: 'https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/rug_with_bottom.glb?v=1732313335740',
    iosSrc: 'https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/RUG_with_Bottom.usdz?v=1732313330609',
  },
  // ...add more products as needed...
];

function App() {
  return (
    
    <div className="absoulte min-h-screen bg-white bottom-[-10px]" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      <Navbar />
      <Hero />
      <h1 className="text-5xl font-bold leading-tight mb-6">
      </h1>
      <h2 className="text-4xl font-bold text-center mb-6">
        Increase Your Sales With 'See At Home' Technology
      </h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
        By offering your customers 'See at Home' technology, you can make it easy for them to find
        the right product for their floors, curtains, and furniture. This technology allows them to
        choose from thousands of products without the need for architectural consultancy, leading to
        increased sales conversion rates.
      </p>
      {products.map((product, index) => (
        <ProductSection key={index} product={product} />
      ))}
    </div>
  );
}

export default App;