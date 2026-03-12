import { Navbar } from '../components/Navbar';
import { ContactButtons } from '../components/ContactButtons';
import { Footer } from '../components/Footer';
import { GalleryGrid } from '../components/GalleryGrid';

const galleryImages = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&h=400&fit=crop',
    alt: 'Coffee shop interior',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop',
    alt: 'Latte art',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&h=400&fit=crop',
    alt: 'Coffee beans',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=600&h=400&fit=crop',
    alt: 'Coffee brewing',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1508520184108-3cbc2c9d559a?w=600&h=400&fit=crop',
    alt: 'Pastry display',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1521017714735-f8b56e1ea89a?w=600&h=400&fit=crop',
    alt: 'Cozy cafe seating',
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=600&h=400&fit=crop',
    alt: 'Coffee and pastry pair',
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1520701686378-be0199881033?w=600&h=400&fit=crop',
    alt: 'Modern coffee cup',
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1505778276668-fc4ee2851212?w=600&h=400&fit=crop',
    alt: 'Espresso preparation',
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Gallery</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the beauty of our cafe, coffee, and creations
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <ContactButtons />
      <Footer />
    </div>
  );
}
