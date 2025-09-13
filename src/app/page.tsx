import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortraitSection from '@/components/PortraitSection';
import InRealArtStats from '@/components/InRealArtStats';
import ArtworkGallery from '@/components/ArtworkGallery';
import ContactSection from '@/components/ContactSection';
import { defaultArtistData } from '@/lib/artistData';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <Header artistData={defaultArtistData} />

      <HeroSection artistData={defaultArtistData} />

      <div id="gallery">
        <ArtworkGallery artistData={defaultArtistData} />
      </div>

      <div id="about">
        <AboutSection artistData={defaultArtistData} />
      </div>

      <PortraitSection artistData={defaultArtistData} />

      <InRealArtStats />

      <div id="contact">
        <ContactSection artistData={defaultArtistData} />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4">
        <div className="max-w-[80%] md:max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">
              {defaultArtistData.fullName}
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {defaultArtistData.bio}
            </p>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 {defaultArtistData.fullName}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}