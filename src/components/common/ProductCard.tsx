
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProductCard = ({ title, description, image, link }: ProductCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl shadow-md bg-white group animate-on-scroll">
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-secondary hover:underline"
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
