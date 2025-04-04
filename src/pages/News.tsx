
import { useState } from 'react';
import { CalendarDays, Clock, Search, Tag, ChevronRight } from 'lucide-react';
import HeroSection from '../components/common/HeroSection';
import SectionHeader from '../components/common/SectionHeader';
import NewsCard from '../components/common/NewsCard';
import { Link } from 'react-router-dom';

// News article interface
interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  tags: string[];
}

// Sample news articles data
const newsArticles: NewsArticle[] = [
  {
    id: "news-1",
    title: "Launch of Upskila 2.0: Revolutionizing Corporate Learning",
    excerpt: "Our latest release introduces AI-powered personalized learning paths and advanced analytics.",
    content: `We are excited to announce the launch of Upskila 2.0, the next generation of our learning management system. This major update introduces several groundbreaking features designed to enhance the learning experience and drive better outcomes for organizations.

    The centerpiece of this update is our new AI-powered personalized learning engine, which dynamically adjusts content and recommendations based on individual performance, learning styles, and career goals. This ensures that each learner receives a tailored experience that maximizes engagement and knowledge retention.
    
    Additionally, Upskila 2.0 includes enhanced analytics capabilities, providing organizations with deeper insights into learning patterns, skill gaps, and ROI metrics. The new dashboard makes it easier than ever to track progress and measure the impact of training initiatives.
    
    Other key features include:
    - Integration with major HR and talent management systems
    - Enhanced mobile experience for learning on-the-go
    - Expanded content library with industry-specific modules
    - Improved collaboration tools for peer-to-peer learning
    
    Early adopters have reported a 40% increase in course completion rates and significantly higher satisfaction scores compared to previous training solutions.
    
    "Upskila 2.0 has transformed how we approach employee development," said Maria Rodriguez, Chief Learning Officer at Global Innovations Inc. "The personalized learning paths have made a tangible difference in engagement levels, and the analytics help us demonstrate the value of our training investments to leadership."
    
    The update is available now for all current customers at no additional cost, and new customers can sign up for a free 30-day trial.`,
    date: "June 15, 2023",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Product",
    author: {
      name: "Jennifer Chen",
      role: "Product Director",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    tags: ["Learning", "Product Launch", "AI", "Analytics"]
  },
  {
    id: "news-2",
    title: "Company Expands Global Operations with New Office in Singapore",
    excerpt: "Strategic expansion strengthens our presence in the Asia-Pacific region to better serve our growing customer base.",
    content: `We are pleased to announce the opening of our newest office in Singapore, marking a significant milestone in our global expansion strategy. This new location will serve as our Asia-Pacific headquarters, allowing us to better support our growing customer base in the region.

    The Singapore office, located in the vibrant Central Business District, will house sales, customer success, and technical support teams, ensuring that our clients in the region receive timely and localized support. The office will also include a state-of-the-art innovation lab where our engineers will collaborate with local partners to develop solutions tailored for Asia-Pacific markets.
    
    "Singapore's strategic location, world-class infrastructure, and strong talent pool make it the ideal hub for our regional operations," said Robert Johnson, our CEO. "This investment reflects our commitment to the Asia-Pacific market and our confidence in the tremendous growth opportunities it presents."
    
    The expansion comes in response to the increasing demand for our products and services in countries such as Japan, Australia, Indonesia, and India. Over the past year, our customer base in the region has grown by 75%, necessitating a stronger local presence.
    
    The new office will initially employ 30 professionals, with plans to double that number within the next 18 months. We are actively recruiting for various roles across sales, marketing, customer success, and engineering.
    
    To celebrate this milestone, we will be hosting an official opening ceremony and customer event on July 10, featuring keynote presentations from industry experts and demonstrations of our latest innovations.
    
    This expansion is part of our broader internationalization strategy, which aims to establish regional hubs in key markets to provide localized support and accelerate growth. It follows the successful opening of our European headquarters in London last year.`,
    date: "May 22, 2023",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1602206304384-8d3efdf773be?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Company",
    author: {
      name: "Michael Wong",
      role: "Communications Director",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    tags: ["Global Expansion", "Singapore", "Asia-Pacific"]
  },
  {
    id: "news-3",
    title: "Introducing Bablon: A New Era in Team Collaboration",
    excerpt: "Our newest product offers an integrated workspace for modern teams to communicate, collaborate, and manage projects seamlessly.",
    content: `Today marks a significant milestone in our company's journey as we unveil Bablon, our newest product designed to revolutionize how teams work together. After 18 months of development and extensive beta testing with select customers, we're thrilled to introduce this comprehensive collaboration platform to the world.

    Bablon is built on the premise that effective teamwork shouldn't require switching between multiple tools and platforms. It provides an integrated workspace where teams can communicate, share documents, manage projects, and track progress—all in one unified interface.
    
    Key features of Bablon include:
    
    - Unified communication: Real-time messaging, voice, and video capabilities that keep teams connected regardless of location
    - Smart project management: Intuitive task tracking with customizable workflows and automation to eliminate repetitive work
    - Knowledge base: A centralized repository for team documentation with powerful search capabilities
    - Seamless integrations: Connections with over 100 popular tools and services
    - Enterprise-grade security: Advanced protection for sensitive information with granular permission controls
    
    "We built Bablon to solve the challenges we experienced ourselves—tool fatigue, fragmented information, and communication gaps," explained Amanda Chen, our CTO. "The result is a platform that brings everything together in a way that feels natural and enhances productivity rather than hindering it."
    
    Early adopters have reported significant improvements in team productivity and satisfaction. TechForward Inc., one of our beta customers, saw a 32% reduction in time spent switching between tools and a 28% increase in project completion rates.
    
    "Bablon has transformed how our teams collaborate," said James Martinez, CIO of TechForward. "Having everything in one place has eliminated the friction points in our workflow and helped us deliver projects faster without sacrificing quality."
    
    Bablon is available in three tiers—Standard, Professional, and Enterprise—to accommodate teams of all sizes and needs. We're offering a free 30-day trial for organizations interested in experiencing the benefits firsthand.
    
    To learn more about Bablon and how it can transform your team's collaboration, join our virtual launch event on August 3rd featuring demos, customer success stories, and a live Q&A with our product team.`,
    date: "July 27, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Product",
    author: {
      name: "David Rodriguez",
      role: "Marketing Manager",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    tags: ["Collaboration", "Product Launch", "Remote Work"]
  },
  {
    id: "news-4",
    title: "Company Recognized as Industry Leader in Digital Transformation",
    excerpt: "Prestigious industry report highlights our innovative approach and strong customer outcomes.",
    content: `We are proud to announce that our company has been recognized as a Leader in the 2023 Digital Transformation Consulting Services report by IndustryWatch, a leading global technology research firm. This recognition reflects our commitment to helping organizations navigate complex digital transformations and achieve measurable business results.

    The annual report evaluates providers on two primary criteria: the strength of their current offerings and their strategic vision. Our company received the highest scores in several categories, including implementation methodology, change management capabilities, technology expertise, and client success outcomes.
    
    "This recognition validates our approach to digital transformation, which goes beyond technology to encompass people, processes, and organizational culture," said Sarah Thompson, our Chief Strategy Officer. "We're honored to be acknowledged for the value we deliver to our clients and will continue to innovate and refine our approach to stay ahead of evolving market needs."
    
    IndustryWatch highlighted several strengths in their evaluation, including:
    
    - A comprehensive transformation framework that balances technical implementation with organizational change management
    - Deep expertise across multiple industries, enabling the transfer of best practices and innovative solutions
    - Strong partnerships with leading technology providers that enhance solution capabilities
    - Consistent delivery of measurable business outcomes and ROI for clients
    - Investments in proprietary tools and accelerators that speed up transformation initiatives
    
    The report also featured feedback from our clients, who praised the company's collaborative approach, technical expertise, and focus on sustainable results that extend beyond the initial implementation.
    
    "Working with this team has been transformative for our organization," said a Fortune 500 client quoted in the report. "They didn't just implement technology; they helped us reimagine our entire approach to digital engagement and developed our internal capabilities so we could sustain momentum after the initial project."
    
    This recognition follows a year of significant growth for our digital transformation practice, including the addition of specialized teams focused on AI implementation, data strategy, and customer experience design. We have also expanded our training programs to ensure our consultants remain at the forefront of emerging technologies and methodologies.
    
    The full report is available to IndustryWatch subscribers, and a complimentary excerpt can be downloaded from our website.`,
    date: "August 5, 2023",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Awards",
    author: {
      name: "Emily Johnson",
      role: "PR Specialist",
      image: "https://randomuser.me/api/portraits/women/62.jpg"
    },
    tags: ["Award", "Industry Recognition", "Digital Transformation"]
  },
  {
    id: "news-5",
    title: "Annual Tech Summit Highlights Future of Work",
    excerpt: "Our flagship event brought together industry leaders to discuss emerging trends and technologies shaping the workplace.",
    content: `Last week, we hosted our annual Tech Summit, bringing together over 500 industry leaders, technology experts, and business executives to explore the future of work and digital innovation. The two-day event, held at the Grand Tech Conference Center, featured keynote presentations, panel discussions, workshops, and networking opportunities.

    This year's theme, "Redefining Work in the Digital Age," focused on how emerging technologies and shifting workplace dynamics are transforming how organizations operate and deliver value. Attendees gained insights into practical applications of AI, automation, collaborative technologies, and new management approaches designed for hybrid and remote work environments.
    
    In his opening keynote, our CEO Robert Johnson highlighted the accelerating pace of change and the need for organizations to embrace continuous transformation. "The future of work isn't something that will arrive suddenly—it's evolving every day," he noted. "The organizations that thrive will be those that can adapt quickly, leverage new technologies thoughtfully, and create cultures that embrace change as an opportunity rather than a threat."
    
    Other notable sessions included:
    
    - "AI and the Augmented Workforce" by Dr. Lisa Chen, AI Research Director at TechFuture Institute
    - "Building Resilient Digital Organizations" panel featuring CIOs from leading global companies
    - "The Human Element in Digital Transformation" workshop led by renowned organizational psychologist Dr. Mark Williams
    - "Next-Generation Collaboration Tools" showcase featuring demos of upcoming features in Bablon
    
    Day two featured the much-anticipated "Innovation Challenge," where six startups presented solutions addressing workplace challenges. Quantum Workspace, a company developing AI-powered workspace optimization tools, took home the $50,000 prize and an opportunity to collaborate with our R&D team.
    
    "The quality of discussions and level of engagement at this year's summit exceeded our expectations," said Jennifer Martinez, our VP of Events. "We created an environment where leaders could learn from each other, challenge assumptions, and develop practical strategies for navigating the evolving workplace landscape."
    
    Summit attendees expressed appreciation for the blend of strategic insights and practical takeaways. "Unlike many industry events that focus on abstract concepts, this summit provided concrete examples and actionable strategies that I can implement right away," said Thomas Nguyen, CIO of Global Enterprises.
    
    All sessions were recorded and will be available to registered participants through our digital platform. Selected highlights will be shared on our YouTube channel and social media platforms in the coming weeks.
    
    Plans are already underway for next year's Tech Summit, which will expand to include regional events in Europe and Asia before culminating in the global gathering.`,
    date: "September 18, 2023",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Events",
    author: {
      name: "Alex Martinez",
      role: "Events Coordinator",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    tags: ["Event", "Tech Summit", "Future of Work"]
  },
  {
    id: "news-6",
    title: "Company Partners with Leading University on AI Research Initiative",
    excerpt: "Strategic collaboration aims to advance practical applications of artificial intelligence in business environments.",
    content: `We are excited to announce a new research partnership with Stanford University's AI Lab to explore innovative applications of artificial intelligence for business environments. This three-year collaboration will focus on developing practical AI solutions that enhance decision-making, improve operational efficiency, and create more personalized customer experiences.

    The partnership brings together our industry expertise and real-world use cases with Stanford's cutting-edge research capabilities and academic excellence. Together, we'll work on projects that bridge the gap between theoretical AI advancements and practical business applications.
    
    "This collaboration represents a significant investment in the future of AI-powered business solutions," said Amanda Chen, our CTO. "By combining our industry knowledge with Stanford's research capabilities, we aim to develop innovations that solve real business challenges while advancing the field of applied AI."
    
    Professor James Wilson, Director of Stanford's AI Lab, shared similar enthusiasm: "Working with industry partners gives our researchers valuable context and real-world problems to solve. This partnership will accelerate the translation of research into practical applications while providing our students with exposure to enterprise challenges."
    
    The research initiative will focus on three primary areas:
    
    1. Interpretable AI for Business Decision Support - Developing AI systems that provide not just predictions or recommendations but also clear explanations that business users can understand and trust
    
    2. Adaptive Process Automation - Creating systems that can learn from human experts and continuously improve automation routines based on changing conditions and feedback
    
    3. Personalization at Scale - Advancing techniques for delivering highly personalized experiences while maintaining privacy and ethical use of data
    
    The partnership includes funding for doctoral candidates and research fellows, access to anonymized datasets for testing and validation, and opportunities for our technical team to collaborate with academic researchers. Regular workshops and knowledge-sharing sessions will ensure that insights flow between academia and industry.
    
    Initial projects are already underway, with the first research outcomes expected to be published in Q1 2024. We anticipate that some innovations will be incorporated into our product offerings by mid-2024, with Stanford publishing academic findings in peer-reviewed journals.
    
    "This partnership exemplifies our commitment to responsible innovation," said Robert Johnson, our CEO. "By collaborating with leading academic institutions, we ensure that our AI initiatives are not only commercially viable but also ethically sound and socially beneficial."
    
    The collaboration with Stanford is part of our broader commitment to advancing the field of business technology through academic partnerships, with similar initiatives planned with institutions in Europe and Asia.`,
    date: "October 3, 2023",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Research",
    author: {
      name: "Sarah Johnson",
      role: "Research Director",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    tags: ["AI", "Research", "Partnership", "Innovation"]
  }
];

const News = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  
  // Extract unique categories for filter
  const categories = ['All', ...new Set(newsArticles.map(article => article.category))];
  
  // Filter news articles
  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || article.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="News & Updates"
        subtitle="Stay informed about our latest announcements, product updates, and industry insights"
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3"
      />

      {/* News Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {selectedArticle ? (
            // Article Detail View
            <div className="max-w-4xl mx-auto">
              <div className="mb-6 animate-on-scroll">
                <button 
                  className="flex items-center text-primary hover:text-secondary transition-colors mb-4"
                  onClick={() => setSelectedArticle(null)}
                >
                  <svg className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Articles
                </button>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={selectedArticle.image} 
                    alt={selectedArticle.title} 
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {selectedArticle.category}
                      </span>
                      <span className="flex items-center">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        {selectedArticle.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {selectedArticle.readTime}
                      </span>
                    </div>
                    
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{selectedArticle.title}</h1>
                    <p className="text-lg text-muted-foreground mb-6">{selectedArticle.excerpt}</p>
                    
                    <div className="flex items-center mb-8 pb-6 border-b">
                      <img 
                        src={selectedArticle.author.image} 
                        alt={selectedArticle.author.name} 
                        className="h-12 w-12 rounded-full mr-4"
                      />
                      <div>
                        <p className="font-bold">{selectedArticle.author.name}</p>
                        <p className="text-sm text-muted-foreground">{selectedArticle.author.role}</p>
                      </div>
                    </div>
                    
                    <div className="prose max-w-none">
                      {selectedArticle.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t flex flex-wrap gap-2">
                      {selectedArticle.tags.map(tag => (
                        <span key={tag} className="inline-flex items-center px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                          <Tag className="h-3.5 w-3.5 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 animate-on-scroll">
                <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {newsArticles
                    .filter(article => 
                      article.id !== selectedArticle.id && 
                      (article.category === selectedArticle.category || 
                       article.tags.some(tag => selectedArticle.tags.includes(tag)))
                    )
                    .slice(0, 2)
                    .map(article => (
                      <div 
                        key={article.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => setSelectedArticle(article)}
                      >
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                          <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">{article.date}</span>
                            <span className="inline-flex items-center text-primary font-medium">
                              Read More <ChevronRight className="h-4 w-4 ml-1" />
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ) : (
            // Articles List View
            <>
              <SectionHeader
                title="Latest News & Updates"
                subtitle="Stay informed about our company announcements, product updates, and industry insights"
              />
              
              <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Search input */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10 pr-4 py-2 border rounded-md w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                {/* Category filter */}
                <div>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category === 'All' ? 'All Categories' : category}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Featured article */}
              <div className="mb-12 animate-on-scroll">
                <div 
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedArticle(filteredArticles[0])}
                >
                  <div className="h-64 lg:h-auto">
                    <img 
                      src={filteredArticles[0]?.image} 
                      alt={filteredArticles[0]?.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
                      {filteredArticles[0]?.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-3">{filteredArticles[0]?.title}</h3>
                    <p className="text-muted-foreground mb-6">{filteredArticles[0]?.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        <span>{filteredArticles[0]?.date}</span>
                      </div>
                      <span className="inline-flex items-center text-primary font-medium">
                        Read More <ChevronRight className="h-4 w-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* News grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.slice(1).map(article => (
                  <NewsCard 
                    key={article.id}
                    title={article.title}
                    excerpt={article.excerpt}
                    date={article.date}
                    image={article.image}
                    category={article.category}
                    link="#"
                    onClick={() => setSelectedArticle(article)}
                  />
                ))}
              </div>
              
              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">No articles found. Please try a different search term or category.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      {!selectedArticle && (
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get the latest news, product updates, and insights delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="cta-button whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action (only show if not viewing article) */}
      {!selectedArticle && (
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Learn More?</h2>
              <p className="text-lg mb-8 text-white/90">
                Connect with our team to discover how our solutions can help your business thrive.
              </p>
              <Link to="/contact" className="cta-button-secondary text-lg">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default News;
