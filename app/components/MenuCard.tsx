import { Card, CardContent } from '@/components/ui/card';

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
}

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1511920183353-3c7c95a5742c?q=80&w=687&auto=format&fit=crop";

export function MenuCard({ name, description, price, category, image }: MenuCardProps) {
  const imageUrl = image || FALLBACK_IMAGE;

  return (
    <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
      <div className="w-full h-48 bg-muted overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="text-xs font-medium text-accent uppercase tracking-wide">
            {category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-foreground mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-primary">{price}</span>
          <button className="px-3 py-1 text-sm font-medium text-primary-foreground bg-primary rounded hover:bg-primary/90 transition-colors">
            Pesan
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
