export interface Artwork {
  id: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  image: string;
  description?: string;
  price?: string;
  available: boolean;
}

export interface ArtistData {
  // Basic Info
  name: string;
  fullName: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  
  // Images
  profileImage: string;
  aboutImage: string;
  backgroundImage: string;
  
  // Contact
  email: string;
  phone?: string;
  website?: string;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
  
  // Artworks
  artworks: Artwork[];
  featuredArtworks: string[]; // Array of artwork IDs
  
  // About section
  specialties: string[];
  achievements: string[];
  exhibitions?: string[];
  
  // Text Content
  content: {
    // Hero Section
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
    
    // About Section
    aboutBirthInfo: string;
    aboutDescription: string;
    aboutQuestion: string;
    aboutQuote: string;
    aboutTags: string[];
    
    // Portrait Section
    portraitTitle: string;
    portraitDescription: string;
    awards: string[];
    soloExhibitions: string[];
    publications: string[];
    
    // Gallery Section
    galleryMainTitle: string;
    gallerySubtitle: string;
    galleryDescription: string;
    
    // Stats Section
    statsTitle: string;
    stats: {
      number: string;
      description: string;
    }[];
    
    // Catalog Section
    catalogTitle: string;
    catalogDescription: string;
    catalogForm: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      mobileLabel: string;
      mobilePlaceholder: string;
      privacyText: string;
      buttonText: string;
      successMessage: string;
      errorMessage: string;
    };
    
    // Footer
    footer: {
      artistDescription: string;
      inrealArtDescription: string;
      contactLabels: {
        email: string;
        phone: string;
        location: string;
      };
      copyright: string;
      legalLinks: {
        privacy: string;
        terms: string;
      };
    };
  };
  
  // SEO
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// Default artist data - this can be easily modified for different artists
export const defaultArtistData: ArtistData = {
  name: "Monique",
  fullName: "Monique Laville",
  title: "Artiste contemporaine française",
  tagline: "Contemporary French Artist",
  bio: "Passionate about capturing the beauty of nature through impressionistic landscapes, Monique Laville brings decades of artistic experience to every piece. Her work explores the relationship between light, color, and emotion in rural French landscapes.",
  location: "Provence, France",
  
  profileImage: "/images/artist.png",
  aboutImage: "/images/artist-1.png",
  backgroundImage: "/images/artist-background.png",
  
  email: "contact@moniquelaville.com",
  phone: "+33 6 12 34 56 78",
  website: "www.moniquelaville.com",
  socialMedia: {
    instagram: "@moniquelaville_art",
    facebook: "MoniqueLavilleArt",
  },
  
  artworks: [
    {
      id: "artwork-1",
      title: "Lavender Fields of Provence",
      year: 2024,
      medium: "Oil on Canvas",
      dimensions: "60cm x 80cm",
      image: "/images/artwork-1.jpg",
      description: "A vibrant impressionistic painting capturing the essence of Provence's famous lavender fields during peak bloom season.",
      price: "€2,500",
      available: true,
    },
    {
      id: "artwork-2",
      title: "Sunflower Valley",
      year: 2024,
      medium: "Oil on Canvas",
      dimensions: "50cm x 70cm",
      image: "/images/artwork-2.jpg",
      description: "An energetic composition featuring golden sunflowers swaying in the summer breeze, with a rustic farmhouse in the distance.",
      price: "€2,200",
      available: true,
    },
  ],
  
  featuredArtworks: ["artwork-1", "artwork-2"],
  
  specialties: [
    "Impressionistic Landscapes",
    "Nature Studies",
    "Rural French Scenes",
    "Oil Painting",
    "Color Theory"
  ],
  
  achievements: [
    "Featured in Galerie des Beaux-Arts, Paris",
    "Winner of Provence Art Festival 2023",
    "Exhibited in 15+ galleries across France",
    "Art instructor for 10+ years"
  ],
  
  exhibitions: [
    "Solo Exhibition - Galerie Provence, Aix-en-Provence (2024)",
    "Group Show - Salon des Artistes, Paris (2023)",
    "Art Fair - Foire d'Art Contemporain, Nice (2023)"
  ],
  
  content: {
    // Hero Section
    heroBadge: "Peintre",
    heroTitle: "Artiste contemporaine française",
    heroSubtitle: "Monique Laville",
    
    // About Section
    aboutBirthInfo: "Né en 1950 - France",
    aboutDescription: "L'artiste Monique Laville fait partie de la communauté InRealArt est une artiste côtée I-CAC & ARTPRICE",
    aboutQuestion: "Ton atelier : laboratoire, refuge, chaos ?",
    aboutQuote: "Mon atelier est le refuge où je peux m'exprimer librement sur ma peinture, mais pas uniquement. Je retrace \"en écriture\" ma vie depuis mon enfance d'aussi loin que remontent mes souvenirs (mais cela reste personnel).",
    aboutTags: ["Peintre", "Peinture au couteau"],
    
    // Portrait Section
    portraitTitle: "Portrait de Monique Laville",
    portraitDescription: "Monique Laville est une artiste française dont les œuvres ont été exposées nationalement et internationalement dans des pays tels que le Canada, la Chine, l'Italie, le Portugal, l'Autriche, Monaco, le Brésil, les États-Unis et le Royaume-Uni. Ses œuvres ont également été présentées dans des publications prestigieuses comme Nice Matin, Magazine Marianne Maison, et ART EN VOYAGE. Ses tableaux sont souvent impressionnistes, principalement à l'huile sur toile, créés au couteau pour leur donner une texture et une expressivité uniques.",
    awards: [
      "2022: BIENNALE INTERNAZIONALE - Nominé- Monte Carlo, Monaco",
      "2022: Award Palma d'Oro per l'Arte - Nominé- SAN REMO, Italie",
      "2022: Art Museum V° Biennale - Nominé- VENISE, Italie",
      "2019: ART SHOW PARIS II Art et Design - Nominé- PARIS, France",
      "2019: CULTURA IDENTIA- Plaquette 3ième Prix du Jury- LA SPEZIA, Italie",
      "2017: INTERNATIONAL CONTEMPORARY ART SALON - Nominé- VIENNE, Autriche",
      "2015: FEDERATION NATIONALE DE LA CULTURE FRANCAISE - Nominé- Lauréat- PARIS, France",
      "2014: ArtMajeur Awards - Nominé- CLAPIERS, France",
      "2014: Exposition d'Art Contemporain- Plaquette- FLORENCE, Italie",
      "2014: LA PALME D'OR POUR L'ART - Nominé- MONTE CARLO, Monaco"
    ],
    soloExhibitions: [
      "2017: TABLINUM / VILLA CARLOTTA - LAC DE COME, Italie",
      "2016: Galleria La Pigna / GALERIE DU VATICAN - ROME, Italie",
      "2015: Mostra personale / CAFFE IL GIUBBE ROSSO - FLORENCE, Italie",
      "2011: ATELIER DU 2 / GALERIE - ESSOYES, France",
      "2010: EXCEPTIONNAL EUROPEAN ART EXHIBITION / WALDORF PALACE - LONDRES, Royaume-Uni",
      "2009: ART EN VOYAGE / Museum de TIANJIN - TIANJIN, Chine",
      "2009: CONTEMPORY INTERNATIONAL ART II / Museum de MIAMI FLORIDE - MIAMI, États-Unis",
      "2008: GALERIE STYL'ART / GALERIE - GAILLON HAUTE NORMANDIE, France",
      "2006: Galerie Camila Klein / Galerie - CURITIBA, Brésil"
    ],
    publications: [
      "2019: ASSOCIATION LORD THOMAS- Article",
      "2019: ART SHOW PARIS- Article",
      "2018: Editions R.E.G.A.R.D.S. Encyclopédie- Article",
      "2017: WINTER SALON- Article",
      "2017: Salon Artistique Le Puy-En-Velay- Article",
      "2015: LES SALONS D'OPEL- Article",
      "2015: Nice Matin- Article",
      "2015: RAI 3 ROME- Interview"
    ],
    
    // Gallery Section
    galleryMainTitle: "Catalogue InReal Art 2025",
    gallerySubtitle: "& Monique Laville",
    galleryDescription: "Découvrez les oeuvres exposées lors de art3f Monaco",
    
    // Stats Section
    statsTitle: "Le catalogue InRealArt c'est",
    stats: [
      {
        number: "15 +",
        description: "Artistes sélectionnés dans notre catalogue global"
      },
      {
        number: "< 100",
        description: "Œuvres soigneusement choisies pour embellir votre collection."
      },
      {
        number: "500 +",
        description: "Transactions réalisées sur notre marketplace"
      },
      {
        number: "50 %",
        description: "de nos artistes figurent dans le classement 50-60 de l'ICAC."
      }
    ],
    
    // Catalog Section
    catalogTitle: "Catalogue Paris Artshow",
    catalogDescription: "Explorez une collection unique d'œuvres toutes plus originales les unes que les autres.",
    catalogForm: {
      nameLabel: "Nom*",
      namePlaceholder: "Entrer votre nom",
      emailLabel: "Adresse mail*",
      emailPlaceholder: "Adresse@gmail.com",
      mobileLabel: "Mobile",
      mobilePlaceholder: "+33 6 12 34 56 78",
      privacyText: "Vous acceptez notre politique de confidentialité.",
      buttonText: "Recevoir le catalogue",
      successMessage: "Catalogue envoyé avec succès ! Vérifiez votre boîte mail.",
      errorMessage: "Erreur lors de l'envoi. Veuillez réessayer."
    },
    
    // Footer
    footer: {
      artistDescription: "Artiste contemporaine française spécialisée dans les paysages impressionnistes de Provence.",
      inrealArtDescription: "Marketplace d'art contemporain spécialisé dans la promotion d'artistes émergents et établis.",
      contactLabels: {
        email: "Email",
        phone: "Téléphone",
        location: "Localisation"
      },
      copyright: "© 2024 Monique Laville & InRealArt. Tous droits réservés.",
      legalLinks: {
        privacy: "Politique de confidentialité",
        terms: "Conditions d'utilisation"
      }
    }
  },
  
  seo: {
    title: "Monique Laville - Contemporary French Artist | Impressionistic Landscapes",
    description: "Discover the beautiful impressionistic landscapes of Monique Laville, a contemporary French artist specializing in oil paintings of Provence's natural beauty.",
    keywords: ["Monique Laville", "French artist", "impressionistic paintings", "Provence landscapes", "contemporary art", "oil paintings", "French countryside"]
  }
};
