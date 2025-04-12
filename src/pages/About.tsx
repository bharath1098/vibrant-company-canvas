
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Calendar, Globe, Heart } from 'lucide-react';
import HeroSection from '../components/common/HeroSection';
import SectionHeader from '../components/common/SectionHeader';

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      title: "CEO & Founder",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Alex has over 15 years of experience in technology leadership and innovation."
    },
    {
      name: "Sarah Williams",
      title: "CTO",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Sarah leads our technical strategy and implementation across all products."
    },
    {
      name: "Michael Chen",
      title: "Director of Engineering",
      image: "https://randomuser.me/api/portraits/men/61.jpg",
      bio: "Michael oversees all engineering teams and ensures technical excellence."
    },
    {
      name: "Jessica Martinez",
      title: "Head of Design",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
      bio: "Jessica brings creative vision and user-centered design to all our products."
    }
  ];

  const history = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Started with a vision to transform digital experiences for businesses."
    },
    {
      year: "2013",
      title: "First Major Product",
      description: "Launched our flagship collaboration platform that revolutionized team workflows."
    },
    {
      year: "2016",
      title: "International Expansion",
      description: "Opened offices in Europe and Asia to better serve our global customer base."
    },
    {
      year: "2019",
      title: "AI Integration",
      description: "Incorporated artificial intelligence capabilities across our product suite."
    },
    {
      year: "2022",
      title: "Strategic Partnerships",
      description: "Formed key alliances with industry leaders to enhance our technology ecosystem."
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <HeroSection
        title="About Us"
        subtitle="Our story, our mission, and the people behind our innovative solutions"
        backgroundImage="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3"
        overlayOpacity="bg-black/60"
        blurAmount="backdrop-blur-md"
        highlightFeature={{
          icon: <Globe className="h-5 w-5 text-white" />,
          text: "Global presence in 20+ countries",
          position: "bottom"
        }}
      />

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Mission & Vision"
            subtitle="Driving innovation and delivering exceptional value to our clients"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div 
              className="bg-gradient-to-br from-muted/50 to-muted/30 p-8 rounded-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <div className="rounded-full bg-primary/20 w-14 h-14 flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital era. We are committed to delivering exceptional value through cutting-edge products and services tailored to meet the unique needs of our clients.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-muted/50 to-muted/30 p-8 rounded-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="rounded-full bg-primary/20 w-14 h-14 flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the global leader in digital transformation, recognized for our innovation, excellence, and the measurable impact we create for our clients. We envision a future where our technology solutions set the standard for quality, reliability, and forward-thinking design across industries worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container-custom">
          <SectionHeader
            title="Our Leadership"
            subtitle="Meet the team driving our vision forward"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="aspect-square w-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.title}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Journey"
            subtitle="The milestones that have shaped our company"
          />
          
          <div className="relative mt-16 max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary/20 -translate-x-1/2"></div>
            
            {/* Timeline Items */}
            {history.map((item, index) => (
              <motion.div 
                key={index}
                className={`relative mb-12 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className={`${index % 2 === 0 ? 'right-0' : 'left-0'} absolute top-0 text-primary font-bold text-xl`}>
                    {item.year}
                  </div>
                  <div className={`bg-gradient-to-br from-muted/40 to-muted/10 rounded-lg p-6 border border-muted/30 ${index % 2 === 0 ? 'mr-6' : 'ml-6'}`}>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container-custom">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <div className="rounded-full bg-primary/20 w-14 h-14 flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We are committed to delivering exceptional quality in everything we do, constantly pushing boundaries and exceeding expectations.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="rounded-full bg-primary/20 w-14 h-14 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of teamwork, fostering an environment where diverse perspectives come together to create innovative solutions.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <div className="rounded-full bg-primary/20 w-14 h-14 flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-muted-foreground">
                We conduct our business with the highest ethical standards, building trust through honesty, transparency, and accountability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
