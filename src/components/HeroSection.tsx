'use client';

import Image from 'next/image';
import { ArtistData } from '@/lib/artistData';

interface HeroSectionProps {
  artistData: ArtistData;
}

export default function HeroSection({ artistData }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-end justify-start overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <Image
          src={artistData.backgroundImage}
          alt={`${artistData.name} - Background`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Artist Card Overlay on Bottom Left */}
      <div className="relative rounded-lg z-10 w-full max-w-md ml-8 lg:ml-16 mb-16 max-h-cardSize h-[600px]">
        {/* Artist Image as Card Background */}
        <div className="absolute inset-0">
          <Image
            src={artistData.profileImage}
            alt={artistData.fullName}
            fill
            className="object-cover"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
          {/* Peintre Badge */}
          <div className="mb-4">
            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
              Peintre
            </span>
          </div>

          <div>
            {/* Artist Title */}
            <p className="text-white text-lg mb-2 font-montserrat">
              {artistData.title}
            </p>

            {/* Artist Name */}
            <h1 className="text-4xl md:text-5xl font-bold text-white font-bricolage">
              {artistData.fullName}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
