
import { NavLink, GalleryImage } from './types';

export const NAV_LINKS: NavLink[] = [
  { href: '#services', label: 'What We Provide' },
  { href: '#features', label: 'Features' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export const SERVICES: string[] = [
  'Custom name calligraphy',
  'Quranic verses / Islamic quotes',
  'Gifts',
  'Home decor',
  'Bookmarks',
];

export const FEATURES: string[] = [
  'Handmade',
  'Affordable',
  'Customizable (A4, A3, etc)',
  'Framing available',
];

// Replace with your actual image URLs
export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: 'https://i.ytimg.com/vi/R_wBRS4ZkxA/sddefault.jpg', alt: 'Arabic calligraphy art piece 1' },
  { id: 2, src: 'https://m.media-amazon.com/images/I/71D2HLpGrbL.jpg', alt: 'Arabic calligraphy art piece 2' },
  { id: 3, src: 'https://m.media-amazon.com/images/I/61XiOYcXUeL.jpg', alt: 'Arabic calligraphy art piece 3' },
  { id: 4, src: 'https://images.meesho.com/images/products/440203749/2trmj_512.webp?width=512', alt: 'Arabic calligraphy art piece 4' },
];

// Replace with your actual contact details
export const CONTACT_DETAILS = {
  whatsapp: '+94720317155',
  whatsappDisplay: '+94 72 031 7155',
  instagram: 'shen_qalam_calligraphy',
  instagramUrl: 'https://www.instagram.com/shen_qalam_calligraphy',
};
