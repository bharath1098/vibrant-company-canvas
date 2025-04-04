
import { ArrowRight, Check, BarChart3, Users, Globe, Shield, Zap, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/common/HeroSection';
import SectionHeader from '../components/common/SectionHeader';
import FeatureCard from '../components/common/FeatureCard';
import { useState } from 'react';

const Products = () => {
  const [activeTab, setActiveTab] = useState('upskila');
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Our Innovative Products"
        subtitle="Transformative solutions designed for the modern business landscape"
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3"
      />

      {/* Product Tab Navigation */}
      <section className="bg-white py-6 sticky top-16 z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2">
            <button 
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'upskila' 
                  ? 'bg-primary text-white' 
                  : 'bg-muted hover:bg-primary/10'
              }`}
              onClick={() => setActiveTab('upskila')}
            >
              Upskila LMS
            </button>
            <button 
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'bablon' 
                  ? 'bg-primary text-white' 
                  : 'bg-muted hover:bg-primary/10'
              }`}
              onClick={() => setActiveTab('bablon')}
            >
              Bablon
            </button>
          </div>
        </div>
      </section>

      {/* Upskila LMS Section */}
      <section 
        id="upskila" 
        className={`section-padding bg-white ${activeTab !== 'upskila' ? 'hidden' : ''}`}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-on-scroll">
              <span className="inline-block text-secondary font-semibold mb-2">Learning Management System</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Upskila LMS</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Upskila is a comprehensive learning management system designed to help organizations train, develop, and retain talent through personalized learning experiences.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-1" />
                  <p>Customizable learning paths for targeted skill development</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-1" />
                  <p>Advanced analytics and reporting for tracking progress</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-1" />
                  <p>Interactive content creation tools and quiz builders</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-1" />
                  <p>Certification management and compliance tracking</p>
                </div>
              </div>
              <Link to="/contact" className="cta-button">
                Request a Demo
              </Link>
            </div>
            <div className="relative animate-on-scroll">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Upskila LMS Dashboard" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg md:max-w-[200px]">
                <div className="flex items-center justify-center mb-2">
                  <Users className="text-primary h-8 w-8" />
                </div>
                <p className="font-bold text-center">500+ organizations trust Upskila</p>
              </div>
            </div>
          </div>

          <SectionHeader
            title="Key Features"
            subtitle="Upskila is designed with powerful features to make learning effective and engaging"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <FeatureCard 
              icon={<Lightbulb className="h-6 w-6" />}
              title="Personalized Learning Paths"
              description="Create custom learning journeys based on roles, skill gaps, and career development goals."
            />
            <FeatureCard 
              icon={<Globe className="h-6 w-6" />}
              title="Multilingual Support"
              description="Deliver training content in multiple languages to support global teams."
            />
            <FeatureCard 
              icon={<BarChart3 className="h-6 w-6" />}
              title="Advanced Analytics"
              description="Track progress, completion rates, and skill development with comprehensive dashboards."
            />
            <FeatureCard 
              icon={<Zap className="h-6 w-6" />}
              title="Gamification"
              description="Engage learners with points, badges, leaderboards, and achievement systems."
            />
            <FeatureCard 
              icon={<Shield className="h-6 w-6" />}
              title="Compliance Management"
              description="Ensure regulatory compliance with automated tracking and certification management."
            />
            <FeatureCard 
              icon={<Check className="h-6 w-6" />}
              title="Assessment Tools"
              description="Create quizzes, tests, and assignments to evaluate knowledge retention."
            />
          </div>

          <div className="bg-muted rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="animate-on-scroll">
                <h3 className="text-2xl font-bold mb-4">Success Story</h3>
                <blockquote className="text-lg italic mb-6">
                  "Upskila has transformed how we develop talent at our organization. We've seen a 40% increase in course completion rates and significant improvements in skill development across teams."
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/men/85.jpg" 
                    alt="Client" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">Michael Roberts</p>
                    <p className="text-sm text-muted-foreground">Learning & Development Director, Fortune 500 Company</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 animate-on-scroll">
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <p className="text-3xl font-bold text-primary">40%</p>
                  <p className="text-sm">Increase in course completion</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <p className="text-3xl font-bold text-primary">60%</p>
                  <p className="text-sm">Reduction in training costs</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <p className="text-3xl font-bold text-primary">25%</p>
                  <p className="text-sm">Improvement in skill proficiency</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <p className="text-3xl font-bold text-primary">90%</p>
                  <p className="text-sm">User satisfaction rating</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="cta-button inline-flex items-center">
              Get Started with Upskila <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bablon Section */}
      <section 
        id="bablon" 
        className={`section-padding bg-white ${activeTab !== 'bablon' ? 'hidden' : ''}`}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 relative animate-on-scroll">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Bablon Dashboard" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg md:max-w-[200px]">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="text-secondary h-8 w-8" />
                </div>
                <p className="font-bold text-center">30% productivity boost with Bablon</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-on-scroll">
              <span className="inline-block text-secondary font-semibold mb-2">Collaboration Platform</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Bablon</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Bablon is a unified workspace that brings together team communication, project management, and document collaboration in one seamless platform.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-1" />
                  <p>Real-time communication and messaging across teams</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-1" />
                  <p>Intuitive project management with visual workflows</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-1" />
                  <p>Document collaboration with version control</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-1" />
                  <p>Integration with 100+ essential business tools</p>
                </div>
              </div>
              <Link to="/contact" className="cta-button">
                Request a Demo
              </Link>
            </div>
          </div>

          <SectionHeader
            title="Key Features"
            subtitle="Bablon streamlines your workflow with powerful tools for collaboration and productivity"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <FeatureCard 
              icon={<Users className="h-6 w-6" />}
              title="Team Collaboration"
              description="Communicate seamlessly with team members through channels, direct messages, and threads."
            />
            <FeatureCard 
              icon={<BarChart3 className="h-6 w-6" />}
              title="Visual Project Management"
              description="Manage projects with customizable boards, lists, and Gantt charts."
            />
            <FeatureCard 
              icon={<Shield className="h-6 w-6" />}
              title="Security & Permissions"
              description="Enterprise-grade security with granular permission controls and data encryption."
            />
            <FeatureCard 
              icon={<Lightbulb className="h-6 w-6" />}
              title="Knowledge Base"
              description="Create and organize company knowledge with searchable documentation."
            />
            <FeatureCard 
              icon={<Zap className="h-6 w-6" />}
              title="Workflow Automation"
              description="Automate routine tasks and processes with no-code workflow builder."
            />
            <FeatureCard 
              icon={<Globe className="h-6 w-6" />}
              title="Integration Hub"
              description="Connect with your favorite tools through our extensive integration marketplace."
            />
          </div>

          <div className="bg-secondary/10 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="animate-on-scroll">
                <h3 className="text-2xl font-bold mb-4">Client Testimonial</h3>
                <blockquote className="text-lg italic mb-6">
                  "Bablon has revolutionized how our teams work together. The seamless integration of communication, project management, and documentation has eliminated silos and accelerated our delivery timelines."
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/women/45.jpg" 
                    alt="Client" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">Jennifer Lopez</p>
                    <p className="text-sm text-muted-foreground">Project Director, Tech Solutions Inc.</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 animate-on-scroll">
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <p className="text-3xl font-bold text-secondary">30%</p>
                  <p className="text-sm">Increase in productivity</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <p className="text-3xl font-bold text-secondary">45%</p>
                  <p className="text-sm">Reduction in email volume</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <p className="text-3xl font-bold text-secondary">25%</p>
                  <p className="text-sm">Faster project delivery</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <p className="text-3xl font-bold text-secondary">98%</p>
                  <p className="text-sm">Team adoption rate</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="cta-button inline-flex items-center">
              Get Started with Bablon <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeader
            title="Flexible Pricing Plans"
            subtitle="Choose the right plan for your organization's needs"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow animate-on-scroll">
              <div className="text-center pb-6 border-b">
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-muted-foreground ml-2">/ month per user</span>
                </div>
                <p className="text-muted-foreground">Perfect for small teams and startups</p>
              </div>
              <div className="pt-6 space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                  <p>Up to 10 users</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                  <p>Core features included</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                  <p>Community support</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                  <p>1GB storage per user</p>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="w-full inline-block text-center py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                  Get Started
                </Link>
              </div>
            </div>
            
            {/* Business Plan */}
            <div className="bg-white rounded-xl shadow-md p-6 relative border-2 border-primary hover:shadow-lg transition-shadow animate-on-scroll">
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="text-center pb-6 border-b">
                <h3 className="text-xl font-bold mb-2">Business</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-muted-foreground ml-2">/ month per user</span>
                </div>
                <p className="text-muted-foreground">Ideal for growing organizations</p>
              </div>
              <div className="pt-6 space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                  <p>Up to 50 users</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                  <p>All core and advanced features</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                  <p>Priority email support</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                  <p>5GB storage per user</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                  <p>Advanced analytics</p>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="w-full inline-block text-center py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  Get Started
                </Link>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow animate-on-scroll">
              <div className="text-center pb-6 border-b">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
                <p className="text-muted-foreground">For large organizations with specific needs</p>
              </div>
              <div className="pt-6 space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                  <p>Unlimited users</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                  <p>All features included</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                  <p>24/7 dedicated support</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                  <p>Unlimited storage</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                  <p>Custom integrations</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                  <p>SLA guarantees</p>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="w-full inline-block text-center py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-white/90">
              Contact our team to schedule a personalized demo and discover how our products can transform your business.
            </p>
            <Link to="/contact" className="cta-button-secondary text-lg">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
