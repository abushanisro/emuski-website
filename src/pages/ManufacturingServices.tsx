import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Upload, X, FileText, AlertTriangle, Send } from "lucide-react";

const services = [
  {
    title: "OEM Manufacturing",
    description: "Complete manufacturing solutions from concept to production, ensuring quality and precision at every step.",
    image: "/assets/componets/Matica-Photos2/DSC_1008.JPG",
    features: [
      "End-to-end manufacturing process",
      "Quality control and assurance",
      "Scalable production capabilities",
      "Custom specifications support"
    ]
  },
  {
    title: "Custom Manufacturing",
    description: "Tailored manufacturing services meeting your specific requirements and quality standards.",
    image: "/assets/componets/Part-Photos/IMG-20250206-WA0025.jpg",
    features: [
      "Custom design solutions",
      "Flexible production volumes",
      "Specialized manufacturing processes",
      "Technical consultation"
    ]
  },
  {
    title: "Rapid Prototyping",
    description: "Fast and efficient prototyping services to bring your designs to life quickly.",
    image: "/assets/componets/forus/WhatsApp Image 2025-08-23 at 10.06.37 PM.jpeg",
    features: [
      "Quick turnaround times",
      "Multiple material options",
      "Iterative design support",
      "Cost-effective solutions"
    ]
  },
  {
    title: "Production Scaling",
    description: "Seamless scaling from prototype to full production with optimized processes.",
    image: "/assets/componets/3-Oct-25/cent_fixture/WhatsApp Image 2025-10-27 at 3.21.23 PM.jpeg",
    features: [
      "Production optimization",
      "Supply chain management",
      "Volume pricing advantages",
      "Quality consistency"
    ]
  }
];

export default function ManufacturingServices() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [uploadError, setUploadError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [quoteData, setQuoteData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectDescription: "",
    quantity: "",
    timeline: ""
  });

  // Security configurations
  const ALLOWED_FILE_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'image/jpeg',
    'image/png',
    'image/gif',
    'text/plain',
    'application/zip'
  ];
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
  const MAX_FILES = 5;

  const validateFile = (file: File): string | null => {
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return `File type "${file.type}" is not allowed. Please upload PDF, DOC, DOCX, XLS, XLSX, JPG, PNG, GIF, TXT, or ZIP files.`;
    }
    if (file.size > MAX_FILE_SIZE) {
      return `File size exceeds 10MB limit. Please choose a smaller file.`;
    }
    const fileName = file.name.toLowerCase();
    const dangerousExtensions = ['.exe', '.bat', '.cmd', '.scr', '.vbs', '.js', '.jar', '.com'];
    if (dangerousExtensions.some(ext => fileName.endsWith(ext))) {
      return `File type not allowed for security reasons.`;
    }
    return null;
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadError("");

    if (uploadedFiles.length + files.length > MAX_FILES) {
      setUploadError(`Maximum ${MAX_FILES} files allowed.`);
      return;
    }

    const validFiles: File[] = [];
    for (const file of files) {
      const error = validateFile(file);
      if (error) {
        setUploadError(error);
        return;
      }
      validFiles.push(file);
    }

    setUploadedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (indexToRemove: number) => {
    setUploadedFiles(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuoteData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendQuoteEmail = async (data: any, files: any[]) => {
    // Email configuration
    const emailData = {
      to: 'abushan.isro@gmail.com',
      from: 'noreply@emuski.com',
      subject: `New Quote Request - ${data.projectDescription.substring(0, 50)}...`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Quantity:</strong> ${data.quantity || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${data.timeline || 'Not specified'}</p>
        <p><strong>Project Description:</strong></p>
        <p>${data.projectDescription}</p>
        <p><strong>Files Attached:</strong> ${files.length} files</p>
        ${files.length > 0 ? `
        <p><strong>File Details:</strong></p>
        <ul>
          ${files.map(file => `<li>${file.name} (${formatFileSize(file.size)})</li>`).join('')}
        </ul>
        ` : ''}
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `
    };

    // Log email data for debugging
    console.log('📧 QUOTE EMAIL TO SEND TO abushan.isro@gmail.com:', emailData);
    
    // For production, integrate with email service
    return Promise.resolve({ success: true });
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email notification
      await sendQuoteEmail(quoteData, uploadedFiles);
      
      const quotes = JSON.parse(localStorage.getItem("emuski_quotes") || "[]");
      const fileData = await Promise.all(
        uploadedFiles.map(async (file) => ({
          name: file.name,
          size: file.size,
          type: file.type,
          lastModified: file.lastModified,
          data: `[File: ${file.name} - ${formatFileSize(file.size)}]`
        }))
      );

      const newQuote = {
        id: Date.now().toString(),
        ...quoteData,
        attachments: fileData,
        attachmentCount: uploadedFiles.length,
        timestamp: new Date().toISOString(),
        status: "new"
      };
      
      quotes.push(newQuote);
      localStorage.setItem("emuski_quotes", JSON.stringify(quotes));
      
      setSubmitStatus("success");
      setQuoteData({
        name: "",
        email: "",
        company: "",
        phone: "",
        projectDescription: "",
        quantity: "",
        timeline: ""
      });
      setUploadedFiles([]);
      setUploadError("");
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-industrial-dark text-white overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4fd3d4_1px,transparent_1px),linear-gradient(to_bottom,#4fd3d4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 mt-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Complete Manufacturing Solutions
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              From concept to production, we provide comprehensive manufacturing services that bring your designs to life with precision and excellence.
            </p>
            <div className="h-1 w-24 bg-emuski-teal rounded-full mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-emuski-teal rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="text-primary hover:text-primary/80 font-semibold transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Quote Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-emuski-teal-darker text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Start Your Manufacturing Project?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed">
              Get in touch with our manufacturing experts to discuss your requirements and receive a customized quote.
            </p>
            <div className="h-1 w-16 sm:w-20 md:w-24 bg-white rounded-full mx-auto"></div>
          </div>

          {/* Quote Request Form */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-6 text-center text-emuski-teal-darker">
              Request Quote
            </h3>
            
            <form onSubmit={handleQuoteSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={quoteData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={quoteData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={quoteData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={quoteData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    value={quoteData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
                    placeholder="e.g., 100 units, 50-200 pieces"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                  <select
                    name="timeline"
                    value={quoteData.timeline}
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
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
                <textarea
                  name="projectDescription"
                  value={quoteData.projectDescription}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent resize-vertical"
                  placeholder="Describe your manufacturing requirements, specifications, materials, and any specific needs..."
                />
              </div>

              {/* File Upload Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Attach Files (Optional)
                  <span className="text-xs text-gray-500 ml-2">
                    PDF, DOC, XLS, Images, ZIP - Max 10MB each, {MAX_FILES} files max
                  </span>
                </label>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-emuski-teal transition-colors">
                  <input
                    type="file"
                    id="quote-file-upload"
                    multiple
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.gif,.txt,.zip"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="quote-file-upload"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <Upload className="h-12 w-12 text-gray-400 mb-3" />
                    <span className="text-gray-600 font-medium mb-2">
                      Click to upload files or drag and drop
                    </span>
                    <span className="text-xs text-gray-500">
                      CAD files, drawings, specifications, RFQ documents, etc.
                    </span>
                  </label>
                </div>

                {/* Upload Error */}
                {uploadError && (
                  <div className="mt-2 flex items-center text-red-600 text-sm">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    {uploadError}
                  </div>
                )}

                {/* Uploaded Files List */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-medium text-gray-700">Uploaded Files:</h4>
                    {uploadedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
                      >
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-emuski-teal" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{file.name}</p>
                            <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className="w-full bg-emuski-teal hover:bg-emuski-teal/90 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span>Submitting Quote...</span>
                ) : submitStatus === "success" ? (
                  <span>Quote Submitted Successfully!</span>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Submit Quote Request</span>
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm text-center">
                    Thank you for your quote request! We'll review your requirements and get back to you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm text-center">
                    Sorry, there was an error submitting your quote request. Please try again or contact us directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}