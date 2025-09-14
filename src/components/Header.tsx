'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArtistData } from '@/lib/artistData';

interface HeaderProps {
  artistData: ArtistData;
}

export default function Header({ artistData }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-[80%] md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <Image
                src="/images/Logo.png"
                alt="IRA Logo"
                width={120}
                height={40}
                className="h-8 w-auto invert"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="https://example.com/exposition" className="text-gray-700 hover:text-purple-600 transition-colors font-montserrat">
              Exposition
            </a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors font-montserrat">
              Artiste
            </a>
            <a href="https://example.com/pourquoi" className="text-gray-700 hover:text-purple-600 transition-colors font-montserrat">
              Pourquoi nous ?
            </a>
            <a href="https://example.com/temoignage" className="text-gray-700 hover:text-purple-600 transition-colors font-montserrat">
              Témoignage
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={scrollToContact}
              className="bg-[#6052FF] text-white px-6 py-2 rounded-lg hover:bg-[#4a3bcc] transition-colors font-montserrat flex items-center space-x-2"
            >
              <span>Télécharger le catalogue</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

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
              <a href="https://example.com/exposition" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors font-montserrat">
                Exposition
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors font-montserrat">
                Artiste
              </a>
              <a href="https://example.com/pourquoi" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors font-montserrat">
                Pourquoi nous ?
              </a>
              <a href="https://example.com/temoignage" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors font-montserrat">
                Témoignage
              </a>
              <button 
                onClick={scrollToContact}
                className="w-full text-left px-3 py-2 bg-[#6052FF] text-white rounded-lg hover:bg-[#4a3bcc] transition-colors font-montserrat flex items-center justify-between"
              >
                <span>Télécharger le catalogue</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
