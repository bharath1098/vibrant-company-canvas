
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, ArrowRight, ChevronRight, BarChart3, Users, Shield, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/common/HeroSection';
import SectionHeader from '../components/common/SectionHeader';
import ProductCard from '../components/common/ProductCard';

const Products = () => {
  // Main products
  const mainProducts = [
    {
      title: "Upskila Learning Management System",
      description: "A comprehensive learning platform to develop talent within your organization through customized training programs and analytics.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "/products/upskila",
      features: [
        "Customizable learning paths",
        "Progress tracking and analytics",
        "Integrated assessment tools",
        "Mobile-friendly interface"
      ]
    },
    {
      title: "Bablon Collaboration Tool",
      description: "A unified workspace for team collaboration, project management, and communication that enhances productivity.",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "/products/bablon",
      features: [
        "Real-time collaboration",
        "Project management tools",
        "Integrated messaging",
        "File sharing and storage"
      ]
    },
    {
      title: "DataViz Analytics Platform",
      description: "Transform your data into actionable insights with powerful visualization tools and AI-powered analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "/products/dataviz",
      features: [
        "Interactive dashboards",
        "AI-powered insights",
        "Data integration capabilities",
        "Custom reporting tools"
      ]
    }
  ];

  // Solutions by industry
  const industrySolutions = [
    {
      industry: "Healthcare",
      description: "Streamline patient care and operations with our specialized healthcare technology solutions.",
      solutions: ["Electronic Health Records", "Telehealth Platforms", "Healthcare Analytics"]
    },
    {
      industry: "Finance",
      description: "Enhance security, compliance, and customer experience in financial services.",
      solutions: ["Secure Payment Processing", "Regulatory Compliance Tools", "Customer Analytics"]
    },
    {
      industry: "Manufacturing",
      description: "Optimize production processes and supply chain management with smart technologies.",
      solutions: ["IoT Production Monitoring", "Supply Chain Optimization", "Quality Control Systems"]
    },
    {
      industry: "Education",
      description: "Transform learning experiences and educational administration with digital tools.",
      solutions: ["Virtual Classrooms", "Student Information Systems", "Educational Content Management"]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <>
      <HeroSection
        title="Our Products & Solutions"
        subtitle="Innovative tools designed to solve real business challenges and drive growth"
        backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3"
        overlayOpacity="bg-black/70"
        blurAmount="backdrop-blur-md"
        highlightFeature={{
          icon: <Sparkles className="h-5 w-5 text-white" />,
          text: "Trusted by 500+ companies worldwide",
          position: "right"
        }}
      />

      {/* Main Products Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Flagship Products"
            subtitle="Powerful solutions to transform your business"
          />
          
          <div className="mt-12 space-y-16">
            {mainProducts.map((product, index) => (
              <motion.div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
              >
                <motion.div 
                  className="w-full lg:w-1/2"
                  variants={itemVariants}
                >
                  <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="w-full lg:w-1/2"
                  variants={itemVariants}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{product.title}</h3>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={product.link}
                    className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="container-custom">
          <SectionHeader
            title="Why Choose Our Products"
            subtitle="The benefits that set our solutions apart"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-full bg-primary/20 w-14 h-14 flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Enhanced Productivity</h3>
              <p className="text-muted-foreground">
                Streamline workflows and automate repetitive tasks to boost efficiency across your organization.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="rounded-full bg-primary/20 w-14 h-14 flex items-center justify-center mb-6">
                <BarChart3 className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data-Driven Insights</h3>
              <p className="text-muted-foreground">
                Make informed decisions with powerful analytics and real-time reporting capabilities.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="rounded-full bg-primary/20 w-14 h-14 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Seamless Collaboration</h3>
              <p className="text-muted-foreground">
                Enable teams to work together effectively regardless of location or time zone.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="rounded-full bg-primary/20 w-14 h-14 flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
              <p className="text-muted-foreground">
                Protect your valuable data with industry-leading security features and compliance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Solutions by Industry"
            subtitle="Tailored approaches for specific business needs"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {industrySolutions.map((item, index) => (
              <motion.div 
                key={index}
                className="border border-muted rounded-xl p-8 hover:border-primary/20 hover:shadow-sm transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-3">{item.industry}</h3>
                <p className="text-muted-foreground mb-5">{item.description}</p>
                
                <h4 className="font-medium text-lg mb-2">Solutions:</h4>
                <ul className="space-y-1">
                  {item.solutions.map((solution, sIndex) => (
                    <li key={sIndex} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <Link
                    to={`/solutions/${item.industry.toLowerCase()}`}
                    className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    View {item.industry} Solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container-custom">
          <SectionHeader
            title="Performance Metrics"
            subtitle="The real impact our products have on businesses"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Gauge className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-primary mb-2">35%</h3>
              <p className="text-muted-foreground font-medium">Average Productivity Increase</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-primary mb-2">50%</h3>
              <p className="text-muted-foreground font-medium">Faster Decision Making</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-primary mb-2">99.9%</h3>
              <p className="text-muted-foreground font-medium">Uptime Reliability</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-primary mb-2">92%</h3>
              <p className="text-muted-foreground font-medium">Customer Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
              Schedule a demo with our product specialists to see how our solutions can work for you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/contact" className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-white/90 transition-colors">
                Request a Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
