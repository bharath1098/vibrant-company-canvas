
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className = '' }: FeatureCardProps) => {
  return (
    <div className={`p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition-shadow animate-on-scroll ${className}`}>
      <div className="flex flex-col items-start">
        <div className="p-3 bg-primary/10 text-primary rounded-lg mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
