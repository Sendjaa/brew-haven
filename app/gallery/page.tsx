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
    src: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Coffee brewing',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1511081692775-05d0f180a065?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Pastry display',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1542372147193-a7aca54189cd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Cozy cafe seating',
  },
  {
    id: '7',
    src: 'https://plus.unsplash.com/premium_photo-1663932464735-e0946d833749?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Coffee and pastry pair',
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1594302424897-331b1e79f96e?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Modern coffee cup',
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1637178628144-472a67245751?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
