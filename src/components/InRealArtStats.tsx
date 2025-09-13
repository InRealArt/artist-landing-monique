'use client';

interface InRealArtStatsProps {
  // No props needed for this static content
}

export default function InRealArtStats({}: InRealArtStatsProps) {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-[80%] md:max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-bricolage mb-12">
          Le catalogue InRealArt c'est
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* First Stat */}
          <div className="bg-white border border-gray-300 rounded-lg p-6 text-center shadow-lg">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 font-bricolage mb-3">
              15 +
            </div>
            <p className="text-gray-700 text-sm font-montserrat">
              Artistes sélectionnés dans notre catalogue global
            </p>
          </div>

          {/* Second Stat */}
          <div className="bg-white border border-gray-300 rounded-lg p-6 text-center shadow-lg">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 font-bricolage mb-3">
              &lt; 100
            </div>
            <p className="text-gray-700 text-sm font-montserrat">
              Œuvres soigneusement choisies pour embellir votre collection.
            </p>
          </div>

          {/* Third Stat */}
          <div className="bg-white border border-gray-300 rounded-lg p-6 text-center shadow-lg">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 font-bricolage mb-3">
              500 +
            </div>
            <p className="text-gray-700 text-sm font-montserrat">
              Transactions réalisées sur notre marketplace
            </p>
          </div>

          {/* Fourth Stat */}
          <div className="bg-white border border-gray-300 rounded-lg p-6 text-center shadow-lg">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 font-bricolage mb-3">
              50 %
            </div>
            <p className="text-gray-700 text-sm font-montserrat">
              de nos artistes figurent dans le classement 50-60 de l'ICAC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
