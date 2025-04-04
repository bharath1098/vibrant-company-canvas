
import { CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  link: string;
  onClick?: () => void; // Adding the onClick prop as optional
}

const NewsCard = ({ title, excerpt, date, image, category, link, onClick }: NewsCardProps) => {
  return (
    <div 
      className="overflow-hidden rounded-xl shadow-md bg-white group animate-on-scroll"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {/* Image */}
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-secondary text-white text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <CalendarDays className="mr-2 h-4 w-4" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{excerpt}</p>
        <Link 
          to={link} 
          className="inline-block text-secondary hover:underline font-medium"
          onClick={(e) => onClick && e.preventDefault()}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
