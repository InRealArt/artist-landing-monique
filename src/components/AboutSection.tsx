'use client';

import Image from 'next/image';
import { ArtistData } from '@/lib/artistData';

interface AboutSectionProps {
  artistData: ArtistData;
}

export default function AboutSection({ artistData }: AboutSectionProps) {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-[80%] md:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left Section - Artist Information */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-600 font-montserrat mb-2">Né en 1950 - France</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-bricolage mb-4">
                {artistData.fullName}
              </h2>
              <p className="text-gray-700 font-montserrat leading-relaxed">
                L'artiste {artistData.fullName} fait partie de la communauté InRealArt est une artiste côtée I-CAC & ARTPRICE
              </p>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-montserrat">
                Peintre
              </span>
              <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-montserrat">
                Peinture au couteau
              </span>
            </div>
          </div>

          {/* Middle Section - Artist Quote */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 font-bricolage">
              Ton atelier : laboratoire, refuge, chaos ?
            </h3>
            <blockquote className="text-gray-700 font-montserrat font-bold leading-relaxed italic text-3xl">
              «Mon atelier est le refuge où je peux m'exprimer librement sur ma peinture, mais pas uniquement. Je retrace "en écriture" ma vie depuis mon enfance d'aussi loin que remontent mes souvenirs (mais cela reste personnel).»
            </blockquote>
          </div>

          {/* Right Section - Artist Portrait */}
          <div className="flex justify-center h-full">
            <div className="relative w-full h-full">
              <Image
                src={artistData.aboutImage}
                alt={artistData.fullName}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
