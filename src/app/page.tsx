import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortraitSection from '@/components/PortraitSection';
import InRealArtStats from '@/components/InRealArtStats';
import ArtworkGallery from '@/components/ArtworkGallery';
import CatalogSection from '@/components/CatalogSection';
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

      <InRealArtStats artistData={defaultArtistData} />

      <div id="contact">
        <CatalogSection artistData={defaultArtistData} />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4">
        <div className="max-w-[80%] md:max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Artist Info */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4 text-white font-bricolage">
                {defaultArtistData.fullName}
              </h3>
              <p className="text-gray-300 text-sm font-montserrat mb-4">
                {defaultArtistData.content.footer.artistDescription}
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                {defaultArtistData.socialMedia?.instagram && (
                  <a
                    href={`https://instagram.com/${defaultArtistData.socialMedia.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.531l1.531-1.531c.596.596 1.431.596 2.027 0 .596-.596.596-1.431 0-2.027L7.271 12.899c-.596-.596-1.431-.596-2.027 0-.596.596-.596 1.431 0 2.027l1.531 1.531c.757.935 1.908 1.531 3.205 1.531z"/>
                    </svg>
                  </a>
                )}
                {defaultArtistData.socialMedia?.facebook && (
                  <a
                    href={`https://facebook.com/${defaultArtistData.socialMedia.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* InRealArt Info */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-white font-bricolage">
                InRealArt
              </h3>
              <p className="text-gray-300 text-sm font-montserrat mb-4">
                {defaultArtistData.content.footer.inrealArtDescription}
              </p>
              <div className="space-y-2 text-gray-400 text-sm font-montserrat">
                <p>15+ Artistes sélectionnés</p>
                <p>500+ Transactions réalisées</p>
                <p>50% Classés ICAC 50-60</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-4 text-white font-bricolage">
                Contact
              </h3>
              <div className="space-y-3 text-gray-300 text-sm font-montserrat">
                <div>
                  <p className="font-semibold">{defaultArtistData.content.footer.contactLabels.email}</p>
                  <p>{defaultArtistData.email}</p>
                </div>
                {defaultArtistData.phone && (
                  <div>
                    <p className="font-semibold">{defaultArtistData.content.footer.contactLabels.phone}</p>
                    <p>{defaultArtistData.phone}</p>
                  </div>
                )}
                <div>
                  <p className="font-semibold">{defaultArtistData.content.footer.contactLabels.location}</p>
                  <p>{defaultArtistData.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm font-montserrat">
                {defaultArtistData.content.footer.copyright}
              </p>
              <div className="flex space-x-6 text-gray-400 text-sm font-montserrat">
                <a href="https://policies.google.com/privacy" className="hover:text-white transition-colors">
                  {defaultArtistData.content.footer.legalLinks.privacy}
                </a>
                <a href="https://www.inrealart.com/terms" className="hover:text-white transition-colors">
                  {defaultArtistData.content.footer.legalLinks.terms}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}