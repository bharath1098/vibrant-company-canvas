
import React from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import TestimonialCard from './TestimonialCard';
import { Separator } from '@/components/ui/separator';

interface Client {
  logo: string;
  name: string;
}

interface ClientSectionProps {
  clients: Client[];
  testimonials: {
    quote: string;
    name: string;
    title: string;
    company: string;
    image?: string;
    rating?: number;
  }[];
}

const ClientSection: React.FC<ClientSectionProps> = ({ clients, testimonials }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
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
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've partnered with innovative companies across various industries to deliver transformative solutions.
          </motion.p>
        </motion.div>

        {/* Client Logos */}
        <motion.div 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="w-24 h-16 md:w-32 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-w-full max-h-full object-contain" 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Separator className="mb-16" />

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Clients Say
          </motion.h2>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <TestimonialCard
                      quote={testimonial.quote}
                      name={testimonial.name}
                      title={testimonial.title}
                      company={testimonial.company}
                      image={testimonial.image}
                      rating={testimonial.rating}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSection;
