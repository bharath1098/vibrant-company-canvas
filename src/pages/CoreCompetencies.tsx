
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Cpu, Shield, BarChart3, Lightbulb, FileCode, Sparkles } from 'lucide-react';
import HeroSection from '../components/common/HeroSection';
import SectionHeader from '../components/common/SectionHeader';

const CoreCompetencies = () => {
  // Development competencies
  const devCompetencies = [
    {
      icon: <FileCode className="h-10 w-10 text-primary" />,
      title: "Full-Stack Development",
      description: "Comprehensive development expertise spanning frontend, backend, and database technologies.",
      technologies: ["React", "Angular", "Node.js", "Python", "Java", ".NET", "PHP"]
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Backend Development",
      description: "Robust server-side solutions that power high-performance applications.",
      technologies: ["Node.js", "Python", "Java", "C#", "GO", "Ruby"]
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Frontend Development",
      description: "Creating intuitive and responsive user interfaces that deliver exceptional experiences.",
      technologies: ["React", "Angular", "Vue.js", "Next.js", "TypeScript", "HTML/CSS"]
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Database & Cloud Architecture",
      description: "Designing scalable and efficient data storage and cloud infrastructure solutions.",
      technologies: ["AWS", "Azure", "GCP", "MongoDB", "PostgreSQL", "MySQL", "Redis"]
    }
  ];

  // Advanced technology competencies
  const advancedCompetencies = [
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Artificial Intelligence",
      description: "Implementing cutting-edge AI solutions to solve complex business challenges.",
      services: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "IoT Solutions",
      description: "Connecting devices and systems to create intelligent, data-driven environments.",
      services: ["IoT Device Management", "Sensor Integration", "Real-time Analytics", "Embedded Systems"]
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Cybersecurity",
      description: "Protecting digital assets with comprehensive security measures and best practices.",
      services: ["Penetration Testing", "Security Auditing", "Compliance Solutions", "Secure Development"]
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Data Analytics",
      description: "Transforming data into actionable insights to drive business decisions.",
      services: ["Business Intelligence", "Data Visualization", "Big Data Processing", "Statistical Analysis"]
    }
  ];

  // Case studies
  const caseStudies = [
    {
      title: "Healthcare Provider Digital Transformation",
      description: "Implemented a comprehensive digital system for a multi-location healthcare provider, improving patient care coordination by 35%.",
      technology: "Full-Stack Development, Cloud Architecture, Data Analytics",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2880&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Financial Services AI Implementation",
      description: "Developed an AI-powered risk assessment system for a financial institution, reducing fraud cases by 42% within the first six months.",
      technology: "Artificial Intelligence, Data Analytics, Security",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Manufacturing IoT Solution",
      description: "Created an IoT monitoring system for a manufacturing plant, increasing production efficiency by 28% and reducing downtime by 45%.",
      technology: "IoT, Cloud Architecture, Data Analytics",
      image: "https://images.unsplash.com/photo-1581093583449-8255a7d46e66?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1
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
        title="Core Competencies"
        subtitle="Our expertise in advanced technologies and development practices"
        backgroundImage="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3"
        overlayOpacity="bg-black/60"
        blurAmount="backdrop-blur-md"
        highlightFeature={{
          icon: <Lightbulb className="h-5 w-5 text-white" />,
          text: "Industry-leading expertise across all technology domains",
          position: "left"
        }}
      />

      {/* Development Competencies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Development Competencies"
            subtitle="Our core strengths in software development"
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {devCompetencies.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-muted/10 rounded-xl p-8 border border-muted/20 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-5">{item.description}</p>
                
                <div className="mt-auto">
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, tIndex) => (
                      <span 
                        key={tIndex}
                        className="inline-block bg-muted/20 text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-muted/20 to-transparent">
        <div className="container-custom">
          <SectionHeader
            title="Case Studies"
            subtitle="Real-world applications of our technical expertise"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Technologies Used:</h4>
                    <p className="text-primary">{study.technology}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Technology Competencies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Advanced Technology Competencies"
            subtitle="Cutting-edge solutions for the challenges of tomorrow"
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {advancedCompetencies.map((item, index) => (
              <motion.div 
                key={index}
                className="flex gap-6 bg-muted/10 rounded-xl p-8 border border-muted/20 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
              >
                <div className="shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-5">{item.description}</p>
                  
                  <div>
                    <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-2">Key Services</h4>
                    <ul className="space-y-1">
                      {item.services.map((service, sIndex) => (
                        <li key={sIndex} className="flex items-center">
                          <div className="mr-2 w-1.5 h-1.5 rounded-full bg-primary"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-transparent">
        <div className="container-custom">
          <SectionHeader
            title="Our Methodology"
            subtitle="How we approach technical challenges and deliver exceptional results"
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-primary/20"></div>
              
              {/* Timeline items */}
              <motion.div 
                className="relative pl-20 pb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Discovery & Analysis</h3>
                <p className="text-muted-foreground">
                  We begin by thoroughly understanding your business objectives, challenges, and technical requirements. This phase involves stakeholder interviews, system analysis, and competitive research to establish a solid foundation for the project.
                </p>
              </motion.div>
              
              <motion.div 
                className="relative pl-20 pb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Strategy & Design</h3>
                <p className="text-muted-foreground">
                  Based on our findings, we develop a comprehensive strategy and architectural design. This includes selecting the appropriate technology stack, defining the system architecture, and creating detailed specifications for implementation.
                </p>
              </motion.div>
              
              <motion.div 
                className="relative pl-20 pb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Agile Development</h3>
                <p className="text-muted-foreground">
                  We employ agile methodologies to ensure flexibility, transparency, and continuous improvement throughout the development process. Our iterative approach allows for regular feedback and adaptation to changing requirements.
                </p>
              </motion.div>
              
              <motion.div 
                className="relative pl-20 pb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Rigorous testing is integrated at every stage of development to ensure the highest quality standards. We conduct automated testing, performance testing, security assessments, and user acceptance testing to deliver reliable solutions.
                </p>
              </motion.div>
              
              <motion.div 
                className="relative pl-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">5</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Deployment & Support</h3>
                <p className="text-muted-foreground">
                  We manage the deployment process with meticulous attention to detail, ensuring a smooth transition to production. Our commitment continues with comprehensive support, maintenance, and optimization services to maximize long-term value.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoreCompetencies;
