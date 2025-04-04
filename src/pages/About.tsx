
import { Calendar, User, Briefcase, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/common/HeroSection';
import SectionHeader from '../components/common/SectionHeader';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="About Our Company"
        subtitle="A team of innovators dedicated to transforming businesses through technology"
        backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3"
      />

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
              <p className="text-lg mb-4 text-muted-foreground">
                Founded with a vision to bridge the gap between technology and business needs, our company has been at the forefront of digital innovation for over a decade.
              </p>
              <p className="mb-6 text-muted-foreground">
                We started as a small team of passionate technologists and have grown into a global company serving businesses across industries. Our journey has been defined by our commitment to excellence, innovation, and delivering transformative solutions that make a real difference.
              </p>
              <div className="flex flex-wrap gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary">10+</p>
                  <p className="text-muted-foreground">Years of Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">200+</p>
                  <p className="text-muted-foreground">Projects Delivered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-muted-foreground">Global Clients</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl animate-on-scroll">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Team meeting" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-[200px] animate-on-scroll">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="text-yellow-500 h-8 w-8" />
                </div>
                <p className="font-bold text-center">Award-winning solutions since 2014</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md animate-on-scroll">
              <div className="p-4 bg-primary/10 inline-flex rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower organizations through innovative technology solutions that drive growth, efficiency, and competitive advantage. We strive to be a trusted partner that helps businesses navigate and succeed in the digital landscape.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md animate-on-scroll">
              <div className="p-4 bg-primary/10 inline-flex rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the global leader in digital transformation, recognized for our innovative solutions, exceptional talent, and commitment to creating positive impact for our clients, employees, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Journey"
            subtitle="How we evolved from a startup to an industry leader"
          />
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 w-px h-full bg-primary/20 -translate-x-1/2 hidden md:block"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12 relative">
              {/* Item 1 */}
              <div className="md:flex animate-on-scroll">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <div className="p-6 bg-white shadow rounded-lg inline-block">
                    <h3 className="font-bold text-xl mb-2 flex items-center md:justify-end">
                      <Calendar className="h-5 w-5 mr-2 md:order-2 md:ml-2 md:mr-0" /> 
                      2012: Foundation
                    </h3>
                    <p className="text-muted-foreground">Our company was founded with a mission to provide innovative technology solutions for businesses.</p>
                  </div>
                </div>
                <div className="hidden md:block absolute w-4 h-4 bg-primary rounded-full left-1/2 -translate-x-1/2 mt-6"></div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              
              {/* Item 2 */}
              <div className="md:flex animate-on-scroll">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="hidden md:block absolute w-4 h-4 bg-primary rounded-full left-1/2 -translate-x-1/2 mt-6"></div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="p-6 bg-white shadow rounded-lg inline-block">
                    <h3 className="font-bold text-xl mb-2 flex items-center">
                      <Calendar className="h-5 w-5 mr-2" /> 
                      2015: First Major Success
                    </h3>
                    <p className="text-muted-foreground">Launched our first product, Upskila LMS, which quickly gained recognition in the industry.</p>
                  </div>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="md:flex animate-on-scroll">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <div className="p-6 bg-white shadow rounded-lg inline-block">
                    <h3 className="font-bold text-xl mb-2 flex items-center md:justify-end">
                      <Calendar className="h-5 w-5 mr-2 md:order-2 md:ml-2 md:mr-0" /> 
                      2018: Global Expansion
                    </h3>
                    <p className="text-muted-foreground">Expanded our operations globally and opened offices in multiple countries.</p>
                  </div>
                </div>
                <div className="hidden md:block absolute w-4 h-4 bg-primary rounded-full left-1/2 -translate-x-1/2 mt-6"></div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              
              {/* Item 4 */}
              <div className="md:flex animate-on-scroll">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="hidden md:block absolute w-4 h-4 bg-primary rounded-full left-1/2 -translate-x-1/2 mt-6"></div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="p-6 bg-white shadow rounded-lg inline-block">
                    <h3 className="font-bold text-xl mb-2 flex items-center">
                      <Calendar className="h-5 w-5 mr-2" /> 
                      2020: Innovation Award
                    </h3>
                    <p className="text-muted-foreground">Received industry recognition for our innovative approach to digital transformation.</p>
                  </div>
                </div>
              </div>
              
              {/* Item 5 */}
              <div className="md:flex animate-on-scroll">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <div className="p-6 bg-white shadow rounded-lg inline-block">
                    <h3 className="font-bold text-xl mb-2 flex items-center md:justify-end">
                      <Calendar className="h-5 w-5 mr-2 md:order-2 md:ml-2 md:mr-0" /> 
                      2022: Launch of Bablon
                    </h3>
                    <p className="text-muted-foreground">Introduced our second flagship product, Bablon, enhancing our product portfolio.</p>
                  </div>
                </div>
                <div className="hidden md:block absolute w-4 h-4 bg-primary rounded-full left-1/2 -translate-x-1/2 mt-6"></div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              
              {/* Item 6 */}
              <div className="md:flex animate-on-scroll">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="hidden md:block absolute w-4 h-4 bg-primary rounded-full left-1/2 -translate-x-1/2 mt-6"></div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="p-6 bg-white shadow rounded-lg inline-block">
                    <h3 className="font-bold text-xl mb-2 flex items-center">
                      <Calendar className="h-5 w-5 mr-2" /> 
                      Today: Continued Growth
                    </h3>
                    <p className="text-muted-foreground">Continuing to expand our reach and develop cutting-edge solutions for our global client base.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeader
            title="Our Leadership Team"
            subtitle="Meet the experts driving innovation and excellence"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md group animate-on-scroll">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/men/41.jpg" 
                  alt="CEO" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Robert Johnson</h3>
                <p className="text-secondary mb-3">Chief Executive Officer</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Visionary leader with over 20 years of experience in technology and business strategy.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-primary hover:text-secondary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-secondary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-secondary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md group animate-on-scroll">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/women/32.jpg" 
                  alt="CTO" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Amanda Chen</h3>
                <p className="text-secondary mb-3">Chief Technology Officer</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Tech innovator with extensive experience in software development and AI solutions.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-primary hover:text-secondary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-secondary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-secondary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md group animate-on-scroll">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="COO" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">David Rodriguez</h3>
                <p className="text-secondary mb-3">Chief Operations Officer</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Operations expert focused on efficiency and scaling business processes.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-primary hover:text-secondary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-secondary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-secondary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md group animate-on-scroll">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/women/68.jpg" 
                  alt="CMO" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Sarah Thompson</h3>
                <p className="text-secondary mb-3">Chief Marketing Officer</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Strategic marketer with a track record of building strong B2B technology brands.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-primary hover:text-secondary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-secondary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-secondary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/careers" className="cta-button">
              Join Our Team <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-lg mb-8 text-white/90">
              Let's collaborate to create innovative solutions that drive your business forward.
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

export default About;
