
import { ArrowRight, Award, CheckCircle, Code, BarChart3, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/common/HeroSection';
import SectionHeader from '../components/common/SectionHeader';
import FeatureCard from '../components/common/FeatureCard';
import TestimonialCard from '../components/common/TestimonialCard';
import ProductCard from '../components/common/ProductCard';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Innovative Solutions for Digital Transformation"
        subtitle="Empowering businesses with cutting-edge technology to lead in the digital era"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="cta-button">
            Get Started
          </Link>
          <Link to="/products" className="bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 px-5 py-3 rounded-md inline-flex items-center transition-colors">
            View Solutions <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </HeroSection>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Driving Business Excellence"
            subtitle="At our company, we leverage technology and innovation to create solutions that drive business transformation and growth."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Globe className="h-6 w-6" />}
              title="Technology Innovation"
              description="Cutting-edge solutions built with the latest technologies to keep your business ahead of the curve."
            />
            <FeatureCard 
              icon={<Code className="h-6 w-6" />}
              title="Digital Transformation"
              description="End-to-end digital transformation services to modernize and optimize your business operations."
            />
            <FeatureCard 
              icon={<BarChart3 className="h-6 w-6" />}
              title="Business Solutions"
              description="Tailored business solutions designed to address specific challenges and drive measurable results."
            />
            <FeatureCard 
              icon={<Users className="h-6 w-6" />}
              title="Work Solutions"
              description="Collaborative tools and platforms that enhance team productivity and efficiency."
            />
            <FeatureCard 
              icon={<CheckCircle className="h-6 w-6" />}
              title="Quality Assurance"
              description="Rigorous quality standards ensuring reliable, secure, and high-performance solutions."
            />
            <FeatureCard 
              icon={<Award className="h-6 w-6" />}
              title="Expert Services"
              description="Access to skilled professionals and industry experts for guidance and implementation."
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-gradient-to-br from-muted to-muted/50">
        <div className="container-custom">
          <SectionHeader
            title="Our Products"
            subtitle="Discover our innovative products designed to solve real business challenges"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductCard 
              title="Upskila Learning Management System"
              description="A comprehensive learning platform to develop talent within your organization through customized training programs and analytics."
              image="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3"
              link="/products"
            />
            <ProductCard 
              title="Bablon Collaboration Tool"
              description="A unified workspace for team collaboration, project management, and communication that enhances productivity."
              image="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3"
              link="/products"
            />
          </div>
          
          <div className="text-center mt-10">
            <Link to="/products" className="cta-button">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="See how our solutions have helped businesses transform and grow"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard 
              quote="The Upskila LMS has completely transformed how we approach employee training. The analytics and tracking features are invaluable."
              name="Sarah Johnson"
              title="HR Director"
              company="Global Enterprises"
              image="https://randomuser.me/api/portraits/women/65.jpg"
            />
            <TestimonialCard 
              quote="Implementing Bablon across our organization has improved collaboration and productivity. It's now an essential part of our workflow."
              name="Michael Chen"
              title="CTO"
              company="Innovex Solutions"
              image="https://randomuser.me/api/portraits/men/32.jpg"
            />
            <TestimonialCard 
              quote="The digital transformation services provided have helped us modernize our operations and stay competitive in a rapidly changing market."
              name="Jessica Martinez"
              title="Operations Manager"
              company="TechForward Inc."
              image="https://randomuser.me/api/portraits/women/47.jpg"
            />
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 text-white/90">
              Connect with our experts to discover how our solutions can drive growth and innovation for your organization.
            </p>
            <Link to="/contact" className="cta-button-secondary text-lg">
              Let's Talk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
