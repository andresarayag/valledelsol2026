// Shared types for components

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface FeatureBlock {
  title: string;
  subtitle: string;
  href: string;
  imageUrl?: string;
}

export interface CarouselItem {
  imageUrl: string;
  alt: string;
  caption: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface Cabin {
  id: string;
  title: string;
  description: string;
  images: string[];
  details: string;
  amenities: CarouselItem[];
  reserveButtonId: string;
}

export interface Amenity {
  imageUrl: string;
  alt: string;
  caption: string;
}

export interface MenuItem {
  title: string;
  description: string;
  price: string;
  highlightLabel?: string;
}
