
import { useState } from 'react';
import { Check, Search, ArrowRight, Building, MapPin, Briefcase, DollarSign } from 'lucide-react';
import HeroSection from '../components/common/HeroSection';
import SectionHeader from '../components/common/SectionHeader';
import { Link } from 'react-router-dom';

// Job opening type definition
interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

// Sample job openings data
const jobOpenings: JobOpening[] = [
  {
    id: "job-1",
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    posted: "2 weeks ago",
    description: "We're looking for an experienced software engineer to join our product development team. You'll work on building scalable solutions for our flagship products.",
    responsibilities: [
      "Design, develop, and maintain high-performance applications",
      "Collaborate with cross-functional teams to define and implement new features",
      "Write clean, testable code with comprehensive test coverage",
      "Participate in code reviews and mentor junior developers",
      "Troubleshoot and resolve complex technical issues"
    ],
    requirements: [
      "5+ years of experience in software development",
      "Strong proficiency in JavaScript/TypeScript and React",
      "Experience with cloud services (AWS, Azure, or GCP)",
      "Knowledge of CI/CD pipelines and DevOps practices",
      "Bachelor's degree in Computer Science or related field"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "Generous paid time off"
    ]
  },
  {
    id: "job-2",
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    posted: "1 week ago",
    description: "We're seeking a talented UX/UI Designer to create exceptional user experiences for our digital products. You'll work closely with product managers and engineers to bring concepts to life.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Develop and maintain design systems",
      "Collaborate with product and engineering teams",
      "Stay current with UX/UI trends and best practices"
    ],
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency in design tools such as Figma, Sketch, or Adobe XD",
      "Strong portfolio demonstrating user-centered design process",
      "Experience with responsive web design and mobile applications",
      "Excellent communication and collaboration skills"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "Generous paid time off"
    ]
  },
  {
    id: "job-3",
    title: "Product Marketing Manager",
    department: "Marketing",
    location: "New York, NY (On-site)",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    posted: "3 days ago",
    description: "Join our marketing team to develop and execute product marketing strategies for our growing suite of products. You'll play a key role in driving product adoption and customer engagement.",
    responsibilities: [
      "Develop and implement product marketing strategies",
      "Create compelling messaging and positioning for product launches",
      "Conduct competitive analysis and market research",
      "Collaborate with sales to develop enablement materials",
      "Track and analyze campaign performance metrics"
    ],
    requirements: [
      "4+ years of experience in product marketing, preferably in B2B SaaS",
      "Proven track record of successful product launches",
      "Strong analytical and project management skills",
      "Excellent written and verbal communication abilities",
      "Bachelor's degree in Marketing, Business, or related field"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "Generous paid time off"
    ]
  },
  {
    id: "job-4",
    title: "Data Scientist",
    department: "Analytics",
    location: "Remote (Global)",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    posted: "1 month ago",
    description: "We're looking for a skilled Data Scientist to join our analytics team. You'll analyze complex data sets to provide insights that drive product improvements and business decisions.",
    responsibilities: [
      "Build and optimize machine learning models",
      "Extract, transform, and analyze large datasets",
      "Develop data visualization and dashboards",
      "Collaborate with product and engineering teams",
      "Present findings and recommendations to stakeholders"
    ],
    requirements: [
      "3+ years of experience in data science or related field",
      "Strong programming skills in Python, R, or similar languages",
      "Experience with SQL and data visualization tools",
      "Knowledge of statistical analysis and machine learning algorithms",
      "Master's or PhD in Computer Science, Statistics, or related field"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "Generous paid time off"
    ]
  }
];

const Careers = () => {
  // State for job filters
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');
  
  // Get unique departments and locations for filter options
  const departments = ['All', ...new Set(jobOpenings.map(job => job.department))];
  const locations = ['All', ...new Set(jobOpenings.map(job => job.location.split('(')[0].trim()))];
  
  // Filter jobs based on search term and filters
  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = departmentFilter === 'All' || job.department === departmentFilter;
    const matchesLocation = locationFilter === 'All' || job.location.includes(locationFilter);
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });
  
  // State for selected job details
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Join Our Team"
        subtitle="Build your career with us and be part of creating innovative solutions that make a difference"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3"
      />

      {/* Why Join Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Why Work With Us"
            subtitle="Discover the benefits of being part of our innovative team"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-muted rounded-xl p-8 animate-on-scroll">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Meaningful Work</h3>
              <p className="text-muted-foreground">
                Work on challenging projects that solve real business problems and make a significant impact on organizations worldwide.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-muted rounded-xl p-8 animate-on-scroll">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Growth Opportunities</h3>
              <p className="text-muted-foreground">
                Continuous learning and development opportunities, with clear career paths and mentorship to help you reach your professional goals.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-muted rounded-xl p-8 animate-on-scroll">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m18 16 4-4-4-4" />
                  <path d="m6 8-4 4 4 4" />
                  <path d="m14.5 4-5 16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cutting-Edge Technology</h3>
              <p className="text-muted-foreground">
                Work with the latest technologies and contribute to innovative solutions that push the boundaries of what's possible.
              </p>
            </div>
            
            {/* Benefit 4 */}
            <div className="bg-muted rounded-xl p-8 animate-on-scroll">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Inclusive Culture</h3>
              <p className="text-muted-foreground">
                Be part of a diverse and inclusive team where different perspectives are valued and everyone's voice is heard.
              </p>
            </div>
            
            {/* Benefit 5 */}
            <div className="bg-muted rounded-xl p-8 animate-on-scroll">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Work-Life Balance</h3>
              <p className="text-muted-foreground">
                Flexible work arrangements and policies designed to help you maintain a healthy balance between professional and personal life.
              </p>
            </div>
            
            {/* Benefit 6 */}
            <div className="bg-muted rounded-xl p-8 animate-on-scroll">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="8" height="8" x="2" y="2" rx="2" />
                  <rect width="8" height="8" x="14" y="2" rx="2" />
                  <rect width="8" height="8" x="2" y="14" rx="2" />
                  <rect width="8" height="8" x="14" y="14" rx="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Comprehensive Benefits</h3>
              <p className="text-muted-foreground">
                Competitive compensation, health coverage, retirement plans, and additional perks designed to support your well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4 animate-on-scroll">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Team collaboration" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Team meeting" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Office environment" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Culture</h2>
              <p className="text-lg mb-6">
                We believe that great work happens when talented people feel empowered, supported, and inspired. Our culture is built on these core values:
              </p>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold">Innovation</h3>
                    <p className="text-muted-foreground">We encourage creative thinking and embrace new ideas.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold">Collaboration</h3>
                    <p className="text-muted-foreground">We work together across teams to achieve shared goals.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold">Excellence</h3>
                    <p className="text-muted-foreground">We strive for the highest quality in everything we do.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold">Integrity</h3>
                    <p className="text-muted-foreground">We act with honesty and accountability in all interactions.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold">Growth Mindset</h3>
                    <p className="text-muted-foreground">We continuously learn and develop, both as individuals and as an organization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Current Opportunities"
            subtitle="Explore our open positions and find your next career move"
          />
          
          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Search positions..."
                className="pl-10 pr-4 py-2 border rounded-md w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Department filter */}
            <div>
              <select
                className="w-full p-2 border rounded-md"
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept === 'All' ? 'All Departments' : dept}</option>
                ))}
              </select>
            </div>
            
            {/* Location filter */}
            <div>
              <select
                className="w-full p-2 border rounded-md"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc === 'All' ? 'All Locations' : loc}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Job listings */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <div key={job.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow animate-on-scroll">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button
                        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                        onClick={() => setSelectedJob(job)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                  <p className="mb-4">{job.description}</p>
                  <p className="text-sm text-muted-foreground">Posted: {job.posted}</p>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No matching positions found. Please try different search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modal for job details */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-1">{selectedJob.title}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-1" />
                      {selectedJob.department}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {selectedJob.location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {selectedJob.type}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {selectedJob.salary}
                    </div>
                  </div>
                </div>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setSelectedJob(null)}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">Job Description</h3>
                <p className="mb-4">{selectedJob.description}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">Responsibilities</h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">Benefits</h3>
                <ul className="space-y-2">
                  {selectedJob.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-center mt-8">
                <Link 
                  to="/contact" 
                  className="cta-button inline-flex items-center"
                >
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about working with us"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 animate-on-scroll">
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">What is the hiring process like?</h3>
                <p className="text-muted-foreground">
                  Our typical hiring process includes an initial application review, a phone screening, technical or skills assessment, interviews with the team, and a final discussion of offer details. The entire process usually takes 2-3 weeks.
                </p>
              </div>
              
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Do you offer remote work options?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer various work arrangements depending on the role, including fully remote, hybrid, and on-site positions. Each job posting indicates the specific work arrangement.
                </p>
              </div>
              
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">What opportunities are there for professional growth?</h3>
                <p className="text-muted-foreground">
                  We provide numerous growth opportunities including mentorship programs, training budgets, conference attendance, and clear career progression paths. We encourage internal mobility and promotion from within.
                </p>
              </div>
              
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">What benefits do you offer?</h3>
                <p className="text-muted-foreground">
                  Our comprehensive benefits package includes health, dental, and vision insurance, retirement plans with company matching, generous PTO, parental leave, wellness programs, and professional development allowances.
                </p>
              </div>
              
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">I don't see a position that matches my skills. Can I still apply?</h3>
                <p className="text-muted-foreground">
                  Yes! We're always interested in connecting with talented individuals. You can submit your resume for general consideration through our contact page, and we'll reach out if a suitable position becomes available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Team?</h2>
            <p className="text-lg mb-8 text-white/90">
              Take the first step toward an exciting new career opportunity with us.
            </p>
            <Link to="/contact" className="cta-button-secondary text-lg">
              Explore Opportunities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
