
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-r from-white to-secondary rounded-md"></div>
              <span className="text-xl font-heading font-bold">Company</span>
            </div>
            <p className="text-sm text-gray-300">
              Transforming businesses through innovative technology solutions and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary flex items-center">
                  <ArrowRight size={14} className="mr-2" /> About
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-secondary flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Products
                </Link>
              </li>
              <li>
                <Link to="/core-competencies" className="text-gray-300 hover:text-secondary flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Core Competencies
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-secondary flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Careers
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-secondary flex items-center">
                  <ArrowRight size={14} className="mr-2" /> News
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Our Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-secondary flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Upskila LMS
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-secondary flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Bablon
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-300">123 Tech Plaza, Innovation Valley, CA 92123</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-300">info@company.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Company. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-secondary">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm text-gray-400 hover:text-secondary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
