import React from 'react';
import { Layers } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Layers className="h-8 w-8 text-[#ff4d31]" />
            <span className="ml-2 text-2xl font-bold text-[#ff4d31]">rugAR</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-[#ff4d31]">Home</a>
            <a href="#" className="text-gray-700 hover:text-[#ff4d31]">Product / Services</a>
            <a href="#" className="text-gray-700 hover:text-[#ff4d31]">About Us</a>
            <a href="#" className="text-gray-700 hover:text-[#ff4d31]">Blog</a>
            <a href="#" className="text-gray-700 hover:text-[#ff4d31]">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <img src="https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/us.svg" 
                   alt="US Flag" 
                   className="h-5 w-5 mr-2" />
              <span className="text-gray-700">English</span>
            </div>
            <button className="bg-[#ff4d31] text-white px-6 py-2 rounded-full hover:bg-[#e63e2a] transition-colors">
              Career
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}