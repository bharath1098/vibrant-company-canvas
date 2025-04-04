
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    subject: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: false,
    errorMsg: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: false, error: false, errorMsg: '' });
    
    // Add validation
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus({
        submitted: false,
        success: false,
        error: true,
        errorMsg: 'Please fill in all required fields.',
      });
      return;
    }
    
    // Simulating form submission
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: true,
        error: false,
        errorMsg: '',
      });
      
      // Reset form after successful submission
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        subject: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          error: false,
          errorMsg: '',
        });
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6 animate-on-scroll">
      {formStatus.success ? (
        <div className="text-center py-8">
          <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-green-100 rounded-full">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
          <p className="text-muted-foreground">
            Thank you for reaching out. We'll get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary/20 focus:border-primary outline-none transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary/20 focus:border-primary outline-none transition"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary/20 focus:border-primary outline-none transition"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-1">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formState.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary/20 focus:border-primary outline-none transition"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary/20 focus:border-primary outline-none transition"
            >
              <option value="">Select a subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Product Information">Product Information</option>
              <option value="Partnership">Partnership</option>
              <option value="Support">Support</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary/20 focus:border-primary outline-none transition"
            />
          </div>
          
          {formStatus.error && (
            <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg">
              {formStatus.errorMsg}
            </div>
          )}
          
          <button
            type="submit"
            disabled={formStatus.submitted}
            className="cta-button w-full"
          >
            {formStatus.submitted ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
