import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Recaptcha } from "./ui/recaptcha";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  User, 
  Building, 
  Briefcase,
  CheckCircle,
  ArrowRight,
  Globe,
  Linkedin,
  Twitter,
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    details: "+91 83444 74556",
    description: "Speak directly with our team",
    action: "Call Now"
  },
  {
    icon: Mail,
    title: "General Inquiries",
    details: "enquiries@emuski.com",
    description: "Send us a detailed message",
    action: "Email Us"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Electronic City Phase 2, Bangalore, Karnataka 560100",
    description: "Schedule an in-person meeting",
    action: "Get Directions"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Fri: 9:00 AM - 6:00 PM IST",
    description: "We're here when you need us",
    action: "Schedule Meeting"
  }
];

const offices = [
  {
    city: "Headquarters & Manufacturing",
    address: "Rudhra Coworks - Coworking Space\n126, RNS Plaza, KIADB Industrial Area, 1\nnear Tech Mahindra Gate, next to Hyderabad Magic\nElectronic City Phase 2\nBengaluru, Karnataka 560100",
    phone: "+91 83444 74556",
    email: "enquiries@emuski.com",
    mapUrl: "https://maps.google.com/maps?q=Rudhra+Coworks+Electronic+City+Phase+2+Bangalore+126+RNS+Plaza+KIADB+Industrial+Area+near+Tech+Mahindra+Gate+next+to+Hyderabad+Magic+Bengaluru+Karnataka+560100&t=&z=15&ie=UTF8&iwloc=&output=embed"
  }
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    phone: "",
    subject: "",
    message: "",
    projectType: "",
    timeline: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);


  useEffect(() => {
    document.title = "Contact EMUSKI | Get In Touch - Manufacturing Solutions";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Contact EMUSKI for manufacturing solutions. Speak with our experts about your OEM manufacturing, precision engineering, and AI-powered production needs.');
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const sendEmail = async (data: any, type: 'contact' | 'quote') => {
    // Email configuration
    const emailData = {
      to: 'abushan.isro@gmail.com',
      from: 'noreply@emuski.com',
      subject: type === 'contact' ? `New Contact Form Submission - ${data.subject}` : `New Quote Request - ${data.projectDescription}`,
      html: type === 'contact' ? `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Title:</strong> ${data.title || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Project Type:</strong> ${data.projectType || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${data.timeline || 'Not specified'}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      ` : `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Quantity:</strong> ${data.quantity || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${data.timeline || 'Not specified'}</p>
        <p><strong>Project Description:</strong></p>
        <p>${data.projectDescription}</p>
        <p><strong>Files Attached:</strong> ${data.attachmentCount || 0}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `
    };

    // For now, we'll store in localStorage and log the email data
    // In production, you would integrate with an email service like SendGrid, EmailJS, or Nodemailer
    console.log('📧 EMAIL TO SEND TO abushan.isro@gmail.com:', emailData);
    
    // You can integrate with EmailJS here:
    // const result = await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailData, 'YOUR_USER_ID');
    
    return Promise.resolve({ success: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if reCAPTCHA is verified
    if (!recaptchaToken) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send email notification
      await sendEmail(formData, 'contact');
      
      // Store in localStorage as fallback
      const contacts = JSON.parse(localStorage.getItem("emuski_contacts") || "[]");

      const newContact = {
        id: Date.now().toString(),
        ...formData,
        recaptchaToken,
        timestamp: new Date().toISOString(),
        status: "new"
      };
      
      contacts.push(newContact);
      localStorage.setItem("emuski_contacts", JSON.stringify(contacts));
      
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        title: "",
        phone: "",
        subject: "",
        message: "",
        projectType: "",
        timeline: ""
      });
      setRecaptchaToken(null);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-emuski-teal-darker text-white pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            <span className="text-white/80 text-sm font-semibold tracking-wider uppercase">Get In Touch</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold" style={{color: 'rgb(18, 26, 33)'}}>
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Ready to transform your manufacturing? Let's discuss how we can help bring your vision to life.
            </p>
            <div className="h-1 w-16 sm:w-20 md:w-24 bg-white rounded-full mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Title
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
                          placeholder="Your job title"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
                      >
                        <option value="">Select project type</option>
                        <option value="manufacturing">Manufacturing Services</option>
                        <option value="engineering">Precision Engineering</option>
                        <option value="ai-solutions">AI Solutions</option>
                        <option value="consultation">Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
                      placeholder="Brief description of your project"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent resize-vertical"
                      placeholder="Tell us more about your project requirements, timeline, and how we can help..."
                    />
                  </div>


                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (Within 1 month)</option>
                      <option value="short">Short term (1-3 months)</option>
                      <option value="medium">Medium term (3-6 months)</option>
                      <option value="long">Long term (6+ months)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  {/* reCAPTCHA */}
                  <div>
                    <Recaptcha 
                      onVerify={setRecaptchaToken}
                      onError={() => setRecaptchaToken(null)}
                      theme="light"
                      size="normal"
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting || submitStatus === "success" || !recaptchaToken}
                    className="w-full bg-emuski-teal hover:bg-emuski-teal/90 text-white font-semibold py-3 sm:py-4 text-base sm:text-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : submitStatus === "success" ? (
                      <>
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 text-sm">
                        Thank you for your message! We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 text-sm">
                        {!recaptchaToken 
                          ? "Please complete the security verification before submitting the form."
                          : "Sorry, there was an error sending your message. Please try again or contact us directly."
                        }
                      </p>
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Our Locations
                  </h2>
                  <p className="text-gray-600">
                    Visit us at any of our facilities or connect with our team online.
                  </p>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  {offices.map((office, index) => (
                    <Card key={index} className="p-6 border-2 border-gray-200 hover:border-emuski-teal/50 transition-colors">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{office.city}</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-emuski-teal mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-gray-700 whitespace-pre-line">{office.address}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-emuski-teal flex-shrink-0" />
                          <p className="text-gray-700">{office.phone}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-emuski-teal flex-shrink-0" />
                          <p className="text-gray-700">{office.email}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Google Maps */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Find Us on Map</h3>
                  <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden border-2 border-gray-200">
                    <iframe
                      src={offices[0].mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="EMUSKI Office Location - Rudhra Coworks, Electronic City Phase 2, Bangalore"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="mt-4 text-center">
                    <Button 
                      variant="outline" 
                      className="border-emuski-teal text-emuski-teal hover:bg-emuski-teal hover:text-white"
                      onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=Rudhra+Coworks+Electronic+City+Phase+2+Bangalore+126+RNS+Plaza+KIADB+Industrial+Area+near+Tech+Mahindra+Gate+next+to+Hyderabad+Magic+Bengaluru+Karnataka+560100`, '_blank')}
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Us</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" size="sm" className="flex items-center space-x-2">
                      <Linkedin className="h-4 w-4" />
                      <span>LinkedIn</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center space-x-2">
                      <Twitter className="h-4 w-4" />
                      <span>Twitter</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center space-x-2">
                      <Globe className="h-4 w-4" />
                      <span>Website</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">How to Reach Us</h2>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                Choose the method that works best for you. We're here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={index} className="p-6 sm:p-8 text-center border-2 border-gray-200 hover:border-emuski-teal hover:bg-emuski-teal/5 transition-all duration-300 group relative hover:shadow-lg">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emuski-teal/10 group-hover:bg-emuski-teal rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                      <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-emuski-teal group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-900 transition-colors duration-300">{method.title}</h3>
                    <p className="font-semibold text-emuski-teal mb-2 text-sm sm:text-base group-hover:text-emuski-teal transition-colors duration-300">{method.details}</p>
                    <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300">{method.description}</p>
                    <Button variant="outline" size="sm" className="group-hover:border-emuski-teal group-hover:text-emuski-teal group-hover:bg-white transition-all duration-300">
                      {method.action}
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};