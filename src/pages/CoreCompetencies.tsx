
import { Code, BarChart3, Users, Globe, LucideIcon, Lightbulb, Database, ServerCog, Lock, Network, PieChart } from 'lucide-react';
import { ReactNode, useState } from 'react';
import HeroSection from '../components/common/HeroSection';
import SectionHeader from '../components/common/SectionHeader';
import { Link } from 'react-router-dom';

interface CompetencyData {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: {
    overview: string;
    capabilities: string[];
    approach: string;
    casestudy: {
      title: string;
      description: string;
      results: {
        stat: string;
        label: string;
      }[];
    };
  };
}

const competencies: CompetencyData[] = [
  {
    id: 'tech-innovation',
    icon: Lightbulb,
    title: "Technology Innovation",
    description: "Cutting-edge solutions built with the latest technologies to keep your business ahead of the curve.",
    details: {
      overview: "We focus on developing and implementing innovative technology solutions that address complex business challenges. Our approach combines emerging technologies with strategic thinking to create transformative outcomes.",
      capabilities: [
        "Emerging technology assessment and integration",
        "Innovation labs and proof-of-concept development",
        "Custom software development",
        "API development and integration",
        "Cloud migration and optimization",
        "IoT solutions and smart systems"
      ],
      approach: "Our innovation process starts with understanding your business needs and challenges. We then explore potential solutions using emerging technologies, develop prototypes, iterate based on feedback, and implement final solutions with ongoing support and evolution.",
      casestudy: {
        title: "Global Retailer Transformation",
        description: "We helped a global retailer implement an AI-powered inventory management system that integrated with IoT sensors throughout their warehouses. The solution provided real-time visibility and predictive analytics for inventory optimization.",
        results: [
          { stat: "35%", label: "Reduction in stockouts" },
          { stat: "28%", label: "Decrease in excess inventory" },
          { stat: "$4.2M", label: "Annual savings" }
        ]
      }
    }
  },
  {
    id: 'digital-transformation',
    icon: Code,
    title: "Digital Transformation",
    description: "End-to-end digital transformation services to modernize and optimize your business operations.",
    details: {
      overview: "Our digital transformation services help organizations reimagine their business models and processes through the strategic application of digital technologies, creating more efficient operations and enhanced customer experiences.",
      capabilities: [
        "Digital strategy development",
        "Process automation and optimization",
        "Legacy system modernization",
        "Data-driven decision making frameworks",
        "Customer experience transformation",
        "Digital workplace solutions"
      ],
      approach: "We follow a comprehensive approach to digital transformation, starting with assessing current systems and processes, developing a strategic roadmap, implementing solutions in phased rollouts, and measuring outcomes with continuous improvement cycles.",
      casestudy: {
        title: "Financial Services Modernization",
        description: "We helped a mid-sized financial institution transform their outdated systems and manual processes into a fully digital customer experience, reducing processing times and improving customer satisfaction.",
        results: [
          { stat: "70%", label: "Reduction in processing time" },
          { stat: "45%", label: "Increase in customer satisfaction" },
          { stat: "89%", label: "Digital adoption rate" }
        ]
      }
    }
  },
  {
    id: 'business-solutions',
    icon: BarChart3,
    title: "Business Solutions",
    description: "Tailored business solutions designed to address specific challenges and drive measurable results.",
    details: {
      overview: "We develop comprehensive business solutions that address operational challenges, improve efficiency, and drive growth. Our solutions combine industry best practices with cutting-edge technology to deliver measurable business outcomes.",
      capabilities: [
        "Business process optimization",
        "ERP and CRM implementation",
        "Supply chain management",
        "Financial systems integration",
        "Business intelligence and analytics",
        "Compliance and risk management"
      ],
      approach: "Our business solutions are developed through a collaborative process that includes thorough requirements gathering, solution design, agile implementation, change management, and continuous performance monitoring and optimization.",
      casestudy: {
        title: "Manufacturing Process Optimization",
        description: "We implemented an end-to-end business solution for a manufacturing company, integrating their production systems, supply chain, and customer management into a unified platform with real-time reporting and analytics.",
        results: [
          { stat: "32%", label: "Increase in operational efficiency" },
          { stat: "25%", label: "Reduction in production costs" },
          { stat: "40%", label: "Faster order-to-delivery time" }
        ]
      }
    }
  },
  {
    id: 'work-solutions',
    icon: Users,
    title: "Work Solutions",
    description: "Collaborative tools and platforms that enhance team productivity and efficiency.",
    details: {
      overview: "Our work solutions focus on enhancing collaboration, productivity, and employee experience through integrated platforms and tools designed for the modern workplace, whether remote, hybrid, or in-office.",
      capabilities: [
        "Collaboration platforms and intranets",
        "Project and task management systems",
        "Knowledge management solutions",
        "Virtual team collaboration tools",
        "Employee engagement platforms",
        "Workflow automation"
      ],
      approach: "We develop work solutions by understanding your organization's unique culture and workflows, designing user-centered experiences, implementing scalable systems, and providing training and adoption support to ensure successful rollout and sustained usage.",
      casestudy: {
        title: "Global Professional Services Firm",
        description: "We developed a comprehensive work solution for a professional services firm with 5,000+ employees across 15 countries, creating a unified digital workplace that improved collaboration and knowledge sharing.",
        results: [
          { stat: "48%", label: "Increase in cross-team collaboration" },
          { stat: "30%", label: "Reduction in time spent searching for information" },
          { stat: "92%", label: "Employee satisfaction with new tools" }
        ]
      }
    }
  }
];

const subCompetencies = [
  {
    icon: Database,
    title: "Data Management",
    description: "Comprehensive data solutions from architecture to analytics."
  },
  {
    icon: ServerCog,
    title: "Cloud Services",
    description: "Secure, scalable cloud infrastructure and migration."
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Advanced protection for your systems and data."
  },
  {
    icon: Network,
    title: "Enterprise Architecture",
    description: "Scalable and flexible system design for growth."
  },
  {
    icon: PieChart,
    title: "Analytics & AI",
    description: "Data-driven insights and intelligent automation."
  },
  {
    icon: Globe,
    title: "Digital Experience",
    description: "Customer-focused digital experiences across channels."
  }
];

const CoreCompetencies = () => {
  const [activeCompetency, setActiveCompetency] = useState<CompetencyData>(competencies[0]);
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Our Core Competencies"
        subtitle="Expertise and capabilities that drive exceptional results for our clients"
        backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3"
      />

      {/* Competencies Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Areas of Excellence"
            subtitle="Discover our specialized expertise and how we deliver value across multiple domains"
          />
          
          {/* Competency tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {competencies.map(comp => (
              <button
                key={comp.id}
                className={`px-5 py-3 rounded-lg font-medium transition-colors ${
                  activeCompetency.id === comp.id
                    ? 'bg-primary text-white'
                    : 'bg-muted hover:bg-primary/10'
                }`}
                onClick={() => setActiveCompetency(comp)}
              >
                {comp.title}
              </button>
            ))}
          </div>
          
          {/* Active competency details */}
          <div className="animate-on-scroll">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg inline-flex mb-4">
                      <activeCompetency.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{activeCompetency.title}</h3>
                    <p className="text-lg mb-6 text-muted-foreground">
                      {activeCompetency.details.overview}
                    </p>
                    <h4 className="font-bold text-lg mb-3">Our Capabilities</h4>
                    <ul className="space-y-2 mb-6">
                      {activeCompetency.details.capabilities.map((capability, index) => (
                        <li key={index} className="flex items-start">
                          <div className="bg-secondary text-white rounded-full p-1 mr-2 mt-0.5">
                            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          {capability}
                        </li>
                      ))}
                    </ul>
                    <h4 className="font-bold text-lg mb-3">Our Approach</h4>
                    <p className="text-muted-foreground mb-6">
                      {activeCompetency.details.approach}
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-muted rounded-xl p-6">
                      <h4 className="font-bold text-lg mb-2">Case Study</h4>
                      <h5 className="text-xl font-bold mb-3">{activeCompetency.details.casestudy.title}</h5>
                      <p className="mb-6 text-muted-foreground">
                        {activeCompetency.details.casestudy.description}
                      </p>
                      <div className="grid grid-cols-3 gap-4">
                        {activeCompetency.details.casestudy.results.map((result, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-secondary">{result.stat}</p>
                            <p className="text-sm">{result.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6">
                      <img 
                        src={`https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3`} 
                        alt={activeCompetency.title} 
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Competency Areas */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeader
            title="Additional Expertise"
            subtitle="Complementary capabilities that enhance our core competencies"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subCompetencies.map((subComp, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-on-scroll">
                <div className="p-3 bg-primary/10 text-primary rounded-lg inline-flex mb-4">
                  <subComp.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{subComp.title}</h3>
                <p className="text-muted-foreground">{subComp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Technology Stack"
            subtitle="Best-in-class technologies that power our solutions"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Tech logos - using placeholder colored boxes */}
            {[...Array(12)].map((_, index) => (
              <div 
                key={index} 
                className="aspect-square bg-muted flex items-center justify-center rounded-lg p-6 animate-on-scroll"
              >
                <div className={`w-full h-full rounded-md bg-gradient-to-br ${
                  index % 3 === 0 ? 'from-blue-200 to-blue-300' : 
                  index % 3 === 1 ? 'from-green-200 to-green-300' : 
                  'from-purple-200 to-purple-300'
                } flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-white">
                    Tech {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section-padding bg-gradient-to-br from-primary/90 to-primary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Methodology</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              A structured approach that ensures consistent delivery of high-quality solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="relative animate-on-scroll">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex justify-between items-center mb-4">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    1
                  </div>
                  <div className="h-1 bg-white/30 hidden md:block w-full ml-4"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Discover & Define</h3>
                <p className="text-white/80">
                  We begin by understanding your business objectives, challenges, and requirements through in-depth discovery sessions.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative animate-on-scroll">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex justify-between items-center mb-4">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    2
                  </div>
                  <div className="h-1 bg-white/30 hidden md:block w-full ml-4"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Design & Plan</h3>
                <p className="text-white/80">
                  We create detailed solution designs and project plans tailored to your specific needs and objectives.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative animate-on-scroll">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex justify-between items-center mb-4">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    3
                  </div>
                  <div className="h-1 bg-white/30 hidden md:block w-full ml-4"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Develop & Implement</h3>
                <p className="text-white/80">
                  Our expert team develops and implements solutions using agile methodologies to ensure flexibility and quality.
                </p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="animate-on-scroll">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex justify-start items-center mb-4">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    4
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Deploy & Optimize</h3>
                <p className="text-white/80">
                  We ensure smooth deployment with comprehensive support, training, and continuous optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Let's discuss how our expertise and capabilities can help you achieve your business objectives.
            </p>
            <Link to="/contact" className="cta-button text-lg">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoreCompetencies;
