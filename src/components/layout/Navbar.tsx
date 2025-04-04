
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar = ({ scrolled }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-gradient-to-r from-primary to-secondary rounded-md"></div>
          <span className="text-xl font-heading font-bold text-primary">Company</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={({isActive}) => 
            `text-sm font-medium hover:text-secondary transition-colors ${isActive ? 'text-secondary' : 'text-primary'}`
          }>
            Home
          </NavLink>
          <NavLink to="/about" className={({isActive}) => 
            `text-sm font-medium hover:text-secondary transition-colors ${isActive ? 'text-secondary' : 'text-primary'}`
          }>
            About
          </NavLink>
          <NavLink to="/products" className={({isActive}) => 
            `text-sm font-medium hover:text-secondary transition-colors ${isActive ? 'text-secondary' : 'text-primary'}`
          }>
            Products
          </NavLink>
          <NavLink to="/core-competencies" className={({isActive}) => 
            `text-sm font-medium hover:text-secondary transition-colors ${isActive ? 'text-secondary' : 'text-primary'}`
          }>
            Core Competencies
          </NavLink>
          <NavLink to="/careers" className={({isActive}) => 
            `text-sm font-medium hover:text-secondary transition-colors ${isActive ? 'text-secondary' : 'text-primary'}`
          }>
            Careers
          </NavLink>
          <NavLink to="/news" className={({isActive}) => 
            `text-sm font-medium hover:text-secondary transition-colors ${isActive ? 'text-secondary' : 'text-primary'}`
          }>
            News
          </NavLink>
          <NavLink to="/contact" className="cta-button-secondary">
            Let's Talk
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="container-custom flex flex-col py-4 space-y-4">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `px-2 py-2 text-sm font-medium hover:text-secondary transition-colors ${isActive ? 'text-secondary bg-muted rounded' : 'text-primary'}`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about"
              className={({isActive}) => 
                `px-2 py-2 text-sm font-medium hover:text-secondary transition-colors ${isActive ? 'text-secondary bg-muted rounded' : 'text-primary'}`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/products"
              className={({isActive}) => 
                `px-2 py-2 text-sm font-medium hover:text-secondary transition-colors ${isActive ? 'text-secondary bg-muted rounded' : 'text-primary'}`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </NavLink>
            <NavLink 
              to="/core-competencies"
              className={({isActive}) => 
                `px-2 py-2 text-sm font-medium hover:text-secondary transition-colors ${isActive ? 'text-secondary bg-muted rounded' : 'text-primary'}`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Core Competencies
            </NavLink>
            <NavLink 
              to="/careers"
              className={({isActive}) => 
                `px-2 py-2 text-sm font-medium hover:text-secondary transition-colors ${isActive ? 'text-secondary bg-muted rounded' : 'text-primary'}`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </NavLink>
            <NavLink 
              to="/news"
              className={({isActive}) => 
                `px-2 py-2 text-sm font-medium hover:text-secondary transition-colors ${isActive ? 'text-secondary bg-muted rounded' : 'text-primary'}`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </NavLink>
            <NavLink 
              to="/contact"
              className="cta-button-secondary w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let's Talk
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
