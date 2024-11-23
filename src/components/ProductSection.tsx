import React, { useRef, useEffect, useState } from 'react';
import { HelpCircle, Palette, Edit, Maximize2, Smartphone } from 'lucide-react';

// Define the Product interface
interface Product {
  name: string;
  sizes: string[];
  colors: string[];
  modelSrc: string;
  iosSrc: string;
}

export default function ProductSection({ product }: { product: Product }) {
  const modelViewerRef = useRef(null);
  const [isARSupported, setIsARSupported] = useState(true);

  useEffect(() => {
    // Check if AR is supported on the device
    const checkARSupport = () => {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isAndroid = /Android/.test(navigator.userAgent);
      setIsARSupported(isIOS || isAndroid);
    };
    
    checkARSupport();
  }, []);

  const handleARButtonClick = () => {
    if (!isARSupported) {
      alert('AR is not supported on this device. Please try using a mobile device.');
      return;
    }

    // Access the model-viewer element and activate AR
    const modelViewer = modelViewerRef.current;
    if (modelViewer) {
      // @ts-ignore: Property 'activateAR' exists on model-viewer
      modelViewer.activateAR();
    }
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center space-x-4 p-4 border-b">
            <HelpCircle className="text-[#ff4d31]" />
            <Palette className="text-[#ff4d31]" />
            <Edit className="text-[#ff4d31]" />
          </div>
          
          <div className="p-8 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 w-full relative aspect-w-16 aspect-h-9" style={{ minHeight: '20rem' }}>
              <model-viewer
                ref={modelViewerRef}
                src={product.modelSrc}
                ios-src={product.iosSrc}
                camera-controls
                auto-rotate
                ar
                ar-modes="webxr scene-viewer quick-look"
                ar-scale="auto"
                environment-image="neutral"
                exposure="1"
                shadow-intensity="1"
                interaction-prompt="auto"
                className="w-full h-full"
                style={{ minHeight: '20rem' }}
              >
                <button 
                  slot="ar-button"
                  className="hidden"
                >
                </button>
              </model-viewer>
              <button 
                onClick={() => document.querySelector('model-viewer')?.requestFullscreen()}
                className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
              >
                <Maximize2 className="w-5 h-5 text-gray-700" />
              </button>
            </div>
            
            <div className="lg:w-1/2 lg:pl-12 w-full px-4">
              <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">Size:</span>
                  <div className="flex space-x-2">
                    {product.sizes.map(size => (
                      <button key={size} className="px-4 py-2 border rounded-md hover:bg-gray-50">
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">Color:</span>
                  <div className="flex space-x-2">
                    {product.colors.map(color => (
                      <button
                        key={color}
                        className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                        style={{ backgroundColor: color }}
                      ></button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={handleARButtonClick}
                  className="w-full bg-[#ff4d31] text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-[#e63e2a] transition-colors"
                >
                  <Smartphone className="w-5 h-5" />
                  <span className="text-lg font-semibold">View In Space</span>
                </button>
                {!isARSupported && (
                  <p className="text-sm text-gray-500 text-center">
                    AR viewing is only available on compatible mobile devices
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}