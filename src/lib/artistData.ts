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
  
  seo: {
    title: "Monique Laville - Contemporary French Artist | Impressionistic Landscapes",
    description: "Discover the beautiful impressionistic landscapes of Monique Laville, a contemporary French artist specializing in oil paintings of Provence's natural beauty.",
    keywords: ["Monique Laville", "French artist", "impressionistic paintings", "Provence landscapes", "contemporary art", "oil paintings", "French countryside"]
  }
};
