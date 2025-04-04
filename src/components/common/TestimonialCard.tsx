
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  image?: string;
  rating?: number;
}

const TestimonialCard = ({ 
  quote, 
  name, 
  title, 
  company, 
  image, 
  rating = 5 
}: TestimonialCardProps) => {
  return (
    <div className="p-6 rounded-xl shadow-md bg-white animate-on-scroll">
      {/* Rating stars */}
      <div className="flex mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="mb-4">
        <p className="text-lg italic text-gray-700">{quote}</p>
      </blockquote>
      
      {/* Person */}
      <div className="flex items-center">
        {image && (
          <div className="mr-4">
            <img 
              src={image} 
              alt={name} 
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <p className="font-bold text-primary">{name}</p>
          <p className="text-sm text-muted-foreground">
            {title}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
