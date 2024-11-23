import React from 'react';

export default function Hero() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Deliver Your Carpets to Your Customers' Homes Virtually
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Let your customers experience all the carpets in your product range in their homes, 
              with various size, color and texture options, through their smartphones and buy them 
              with confidence.
            </p>
            <button className="bg-[#ff4d31] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e63e2a] transition-colors">
              Request Demo
            </button>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative w-[300px] h-[600px] mx-auto">
              <div className="absolute inset-0 bg-black rounded-[40px] border-4 border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800"
                  alt="Room with carpet"
                  className="w-full h-full object-cover rounded-[35px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}