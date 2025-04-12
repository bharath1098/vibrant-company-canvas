
import { ArrowRight, Award, CheckCircle, Code, BarChart3, Users, Globe, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/common/HeroSection';
import SectionHeader from '../components/common/SectionHeader';
import FeatureCard from '../components/common/FeatureCard';
import TestimonialCard from '../components/common/TestimonialCard';
import ProductCard from '../components/common/ProductCard';
import ClientSection from '../components/common/ClientSection';

const Home = () => {
  // Competency cards for the hero section
  const competencies = [
    {
      title: "Technology Innovation",
      description: "Cutting-edge solutions with the latest technologies",
      expandedDescription: "We leverage emerging technologies like AI, blockchain, and IoT to create innovative solutions that drive business growth and efficiency. Our approach is always forward-thinking and results-oriented.",
      icon: <Globe className="h-8 w-8 text-white" />,
      videoClip: "https://static.videezy.com/system/resources/previews/000/037/299/original/34_17_13.mp4"
    },
    {
      title: "Digital Transformation",
      description: "Modernize and optimize your business operations",
      expandedDescription: "Transform your business with our comprehensive digital strategies. We help organizations navigate their digital journey, from legacy system modernization to implementing cutting-edge digital platforms.",
      icon: <Code className="h-8 w-8 text-white" />,
      videoClip: "https://static.videezy.com/system/resources/previews/000/041/162/original/22.mp4"
    },
    {
      title: "Business Solutions",
      description: "Tailored solutions for specific business challenges",
      expandedDescription: "Our custom business solutions address your unique challenges with precision. From operational efficiency to customer experience enhancement, we deliver measurable outcomes that impact your bottom line.",
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      videoClip: "https://static.videezy.com/system/resources/previews/000/041/100/original/8.mp4"
    },
    {
      title: "Workforce Solutions",
      description: "Enhance team productivity and efficiency",
      expandedDescription: "Build a more productive, engaged workforce with our comprehensive HR and team collaboration tools. Our solutions enhance communication, streamline processes, and foster innovation across your organization.",
      icon: <Users className="h-8 w-8 text-white" />,
      videoClip: "https://static.videezy.com/system/resources/previews/000/037/561/original/18_03_11.mp4"
    }
  ];

  // Client logos
  const clients = [
    {
      logo: "https://dummyimage.com/200x100/eeeeee/333333&text=Client+1",
      name: "Client 1"
    },
    {
      logo: "https://dummyimage.com/200x100/eeeeee/333333&text=Client+2",
      name: "Client 2"
    },
    {
      logo: "https://dummyimage.com/200x100/eeeeee/333333&text=Client+3",
      name: "Client 3"
    },
    {
      logo: "https://dummyimage.com/200x100/eeeeee/333333&text=Client+4",
      name: "Client 4"
    },
    {
      logo: "https://dummyimage.com/200x100/eeeeee/333333&text=Client+5",
      name: "Client 5"
    },
    {
      logo: "https://dummyimage.com/200x100/eeeeee/333333&text=Client+6",
      name: "Client 6"
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      quote: "The Upskila LMS has completely transformed how we approach employee training. The analytics and tracking features are invaluable.",
      name: "Sarah Johnson",
      title: "HR Director",
      company: "Global Enterprises",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      quote: "Implementing Bablon across our organization has improved collaboration and productivity. It's now an essential part of our workflow.",
      name: "Michael Chen",
      title: "CTO",
      company: "Innovex Solutions",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The digital transformation services provided have helped us modernize our operations and stay competitive in a rapidly changing market.",
      name: "Jessica Martinez",
      title: "Operations Manager",
      company: "TechForward Inc.",
      image: "https://randomuser.me/api/portraits/women/47.jpg"
    },
    {
      quote: "Their business solutions streamlined our processes and improved our bottom line. The team was professional and responsive throughout.",
      name: "David Wilson",
      title: "CEO",
      company: "Nexus Group",
      image: "https://randomuser.me/api/portraits/men/60.jpg"
    }
  ];

  return (
    <>
      {/* Hero Section with Video Background */}
      <HeroSection
        type="home"
        title="Innovative Solutions for Digital Transformation"
        subtitle="Empowering businesses with cutting-edge technology to lead in the digital era"
        videoSrc="https://static.videezy.com/system/resources/previews/000/041/612/original/MK055.mp4"
        competencies={competencies}
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

      {/* Client Section */}
      <ClientSection clients={clients} testimonials={testimonials} />

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Driving Business Excellence"
            subtitle="At our company, we leverage technology and innovation to create solutions that drive business transformation and growth."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FeatureCard 
                icon={<Globe className="h-6 w-6" />}
                title="Technology Innovation"
                description="Cutting-edge solutions built with the latest technologies to keep your business ahead of the curve."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FeatureCard 
                icon={<Code className="h-6 w-6" />}
                title="Digital Transformation"
                description="End-to-end digital transformation services to modernize and optimize your business operations."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FeatureCard 
                icon={<BarChart3 className="h-6 w-6" />}
                title="Business Solutions"
                description="Tailored business solutions designed to address specific challenges and drive measurable results."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FeatureCard 
                icon={<Users className="h-6 w-6" />}
                title="Work Solutions"
                description="Collaborative tools and platforms that enhance team productivity and efficiency."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <FeatureCard 
                icon={<CheckCircle className="h-6 w-6" />}
                title="Quality Assurance"
                description="Rigorous quality standards ensuring reliable, secure, and high-performance solutions."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <FeatureCard 
                icon={<Award className="h-6 w-6" />}
                title="Expert Services"
                description="Access to skilled professionals and industry experts for guidance and implementation."
              />
            </motion.div>
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
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard 
                title="Upskila Learning Management System"
                description="A comprehensive learning platform to develop talent within your organization through customized training programs and analytics."
                image="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3"
                link="/products"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard 
                title="Bablon Collaboration Tool"
                description="A unified workspace for team collaboration, project management, and communication that enhances productivity."
                image="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3"
                link="/products"
              />
            </motion.div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/products" className="cta-button">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Connect with our experts to discover how our solutions can drive growth and innovation for your organization.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/contact" className="cta-button-secondary text-lg">
                Let's Talk
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
