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
            {/* Portrait de Monique Laville */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-bricolage mb-4">
                Portrait de Monique Laville
              </h2>
              <p className="text-gray-700 font-montserrat leading-relaxed">
                Monique Laville est une artiste française dont les œuvres ont été exposées nationalement et internationalement dans des pays tels que le Canada, la Chine, l'Italie, le Portugal, l'Autriche, Monaco, le Brésil, les États-Unis et le Royaume-Uni. Ses œuvres ont également été présentées dans des publications prestigieuses comme Nice Matin, Magazine Marianne Maison, et ART EN VOYAGE. Ses tableaux sont souvent impressionnistes, principalement à l'huile sur toile, créés au couteau pour leur donner une texture et une expressivité uniques.
              </p>
            </div>

            {/* Prix */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 font-bricolage mb-4">
                Prix
              </h3>
              <div className="space-y-2">
                <p className="text-gray-700 font-montserrat text-sm">2022: BIENNALE INTERNAZIONALE - Nominé- Monte Carlo, Monaco</p>
                <p className="text-gray-700 font-montserrat text-sm">2022: Award Palma d'Oro per l'Arte - Nominé- SAN REMO, Italie</p>
                <p className="text-gray-700 font-montserrat text-sm">2022: Art Museum V° Biennale - Nominé- VENISE, Italie</p>
                <p className="text-gray-700 font-montserrat text-sm">2019: ART SHOW PARIS II Art et Design - Nominé- PARIS, France</p>
                <p className="text-gray-700 font-montserrat text-sm">2019: CULTURA IDENTIA- Plaquette 3ième Prix du Jury- LA SPEZIA, Italie</p>
                <p className="text-gray-700 font-montserrat text-sm">2017: INTERNATIONAL CONTEMPORARY ART SALON - Nominé- VIENNE, Autriche</p>
                <p className="text-gray-700 font-montserrat text-sm">2015: FEDERATION NATIONALE DE LA CULTURE FRANCAISE - Nominé- Lauréat- PARIS, France</p>
                <p className="text-gray-700 font-montserrat text-sm">2014: ArtMajeur Awards - Nominé- CLAPIERS, France</p>
                <p className="text-gray-700 font-montserrat text-sm">2014: Exposition d'Art Contemporain- Plaquette- FLORENCE, Italie</p>
                <p className="text-gray-700 font-montserrat text-sm">2014: LA PALME D'OR POUR L'ART - Nominé- MONTE CARLO, Monaco</p>
              </div>
            </div>

            {/* Exposition solo */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 font-bricolage mb-4">
                Exposition solo
              </h3>
              <div className="space-y-2">
                <p className="text-gray-700 font-montserrat text-sm">2017: TABLINUM / VILLA CARLOTTA - LAC DE COME, Italie</p>
                <p className="text-gray-700 font-montserrat text-sm">2016: Galleria La Pigna / GALERIE DU VATICAN - ROME, Italie</p>
                <p className="text-gray-700 font-montserrat text-sm">2015: Mostra personale / CAFFE IL GIUBBE ROSSO - FLORENCE, Italie</p>
                <p className="text-gray-700 font-montserrat text-sm">2011: ATELIER DU 2 / GALERIE - ESSOYES, France</p>
                <p className="text-gray-700 font-montserrat text-sm">2010: EXCEPTIONNAL EUROPEAN ART EXHIBITION / WALDORF PALACE - LONDRES, Royaume-Uni</p>
                <p className="text-gray-700 font-montserrat text-sm">2009: ART EN VOYAGE / Museum de TIANJIN - TIANJIN, Chine</p>
                <p className="text-gray-700 font-montserrat text-sm">2009: CONTEMPORY INTERNATIONAL ART II / Museum de MIAMI FLORIDE - MIAMI, États-Unis</p>
                <p className="text-gray-700 font-montserrat text-sm">2008: GALERIE STYL'ART / GALERIE - GAILLON HAUTE NORMANDIE, France</p>
                <p className="text-gray-700 font-montserrat text-sm">2006: Galerie Camila Klein / Galerie - CURITIBA, Brésil</p>
              </div>
            </div>

            {/* Publications */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 font-bricolage mb-4">
                Publications
              </h3>
              <div className="space-y-2">
                <p className="text-gray-700 font-montserrat text-sm">2019: ASSOCIATION LORD THOMAS- Article</p>
                <p className="text-gray-700 font-montserrat text-sm">2019: ART SHOW PARIS- Article</p>
                <p className="text-gray-700 font-montserrat text-sm">2018: Editions R.E.G.A.R.D.S. Encyclopédie- Article</p>
                <p className="text-gray-700 font-montserrat text-sm">2017: WINTER SALON- Article</p>
                <p className="text-gray-700 font-montserrat text-sm">2017: Salon Artistique Le Puy-En-Velay- Article</p>
                <p className="text-gray-700 font-montserrat text-sm">2015: LES SALONS D'OPEL- Article</p>
                <p className="text-gray-700 font-montserrat text-sm">2015: Nice Matin- Article</p>
                <p className="text-gray-700 font-montserrat text-sm">2015: RAI 3 ROME- Interview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
