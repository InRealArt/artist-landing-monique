'use client';

import Image from 'next/image';
import { ArtistData } from '@/lib/artistData';

interface PortraitSectionProps {
  artistData: ArtistData;
}

export default function PortraitSection({ artistData }: PortraitSectionProps) {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-[80%] md:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section - Artist Portrait Image */}
          <div className="flex justify-center h-full">
            <div className="relative w-full max-w-md h-full">
              <Image
                src="/images/artist-2.png"
                alt="Portrait de Monique Laville"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Section - Artist Information */}
          <div className="space-y-8">
            {/* Portrait */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-bricolage mb-4">
                {artistData.content.portraitTitle}
              </h2>
              <p className="text-gray-700 font-montserrat leading-relaxed">
                {artistData.content.portraitDescription}
              </p>
            </div>

            {/* Prix */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 font-bricolage mb-4">
                Prix
              </h3>
              <div className="space-y-2">
                {artistData.content.awards.map((award, index) => (
                  <p key={index} className="text-gray-700 font-montserrat text-sm">{award}</p>
                ))}
              </div>
            </div>

            {/* Exposition solo */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 font-bricolage mb-4">
                Exposition solo
              </h3>
              <div className="space-y-2">
                {artistData.content.soloExhibitions.map((exhibition, index) => (
                  <p key={index} className="text-gray-700 font-montserrat text-sm">{exhibition}</p>
                ))}
              </div>
            </div>

            {/* Publications */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 font-bricolage mb-4">
                Publications
              </h3>
              <div className="space-y-2">
                {artistData.content.publications.map((publication, index) => (
                  <p key={index} className="text-gray-700 font-montserrat text-sm">{publication}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
