'use client';

import { ArtistData } from '@/lib/artistData';

interface AboutSectionProps {
  artistData: ArtistData;
}

export default function AboutSection({ artistData }: AboutSectionProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Bio */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              About the Artist
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                {artistData.bio}
              </p>
              
              <p>
                Based in {artistData.location}, the artist draws inspiration from the natural beauty 
                that surrounds them, creating works that resonate with both local and international audiences.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Get in Touch</h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span> {artistData.email}
                </p>
                {artistData.phone && (
                  <p className="text-gray-600">
                    <span className="font-medium">Phone:</span> {artistData.phone}
                  </p>
                )}
                {artistData.website && (
                  <p className="text-gray-600">
                    <span className="font-medium">Website:</span> {artistData.website}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right side - Stats and Info */}
          <div className="space-y-8">
            {/* Specialties */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Artistic Specialties</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {artistData.specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm border">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Notable Achievements</h3>
              <div className="space-y-4">
                {artistData.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm border">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Exhibitions */}
            {artistData.exhibitions && artistData.exhibitions.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Recent Exhibitions</h3>
                <div className="space-y-4">
                  {artistData.exhibitions.slice(0, 3).map((exhibition, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow-sm border">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{exhibition}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
