'use client';

import { useState } from 'react';
import { ArtistData } from '@/lib/artistData';

interface HeaderProps {
  artistData: ArtistData;
}

export default function Header({ artistData }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-[80%] md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                {artistData.name}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#gallery" className="text-gray-700 hover:text-purple-600 transition-colors">
              Gallery
            </a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </a>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Download Catalog
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                Gallery
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </a>
              <button className="w-full text-left px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Download Catalog
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
