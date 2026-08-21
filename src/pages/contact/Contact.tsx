import { LinkText } from "@/components/ui/LinkText";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { useState } from "react";
import contact from "@/assets/Contact/contact.jpeg";
import SEO from "@/components/SEO";

const Contact = () => {
  // Form state for the main contact form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });

  // Form state for the resume drop form
  const [resumeData, setResumeData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
  });

  // Add submission status states
  const [contactSubmitStatus, setContactSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [resumeSubmitStatus, setResumeSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Add loading states
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [isResumeSubmitting, setIsResumeSubmitting] = useState(false);

  // Form handling for main contact form
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form handling for resume form
  const handleResumeChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({ ...prev, [name]: value }));
  };

  // File handling for resume upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  // Updated contact form submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitStatus({ type: null, message: "" });
    setIsContactSubmitting(true); // Start loading

    // Get checkbox value
    const callbackCheckbox = document.getElementById(
      "callback",
    ) as HTMLInputElement;
    const callbackValue = callbackCheckbox?.checked || false;

    const API_BASE_URL = import.meta.env.VITE_CMS_API_URL || "";

    const payload = {
      name: formData.name,
      department: formData.department || "General Inquiry",
      email: formData.email,
      phone: formData.phone,
      productOrService: formData.department
        ? `${formData.department} Inquiry`
        : "Contact Page Inquiry",
      callback: callbackValue,
      status: "New",
      message: formData.message,
    };

    try {
      // 1. Submit directly to CMS Enquiries endpoint
      await fetch(`${API_BASE_URL}/api/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // 2. Also forward to legacy php endpoint
      fetch("https://kumarpower.com/wep-api.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          form_type: "contact_inquiry",
          callback: callbackValue,
        }),
      }).catch(() => {});

      setContactSubmitStatus({
        type: "success",
        message: "✓ Message sent successfully! We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        department: "",
        message: "",
      });
      // Reset checkbox
      if (callbackCheckbox) callbackCheckbox.checked = false;

      // Clear success message after 5 seconds
      setTimeout(() => {
        setContactSubmitStatus({ type: null, message: "" });
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      setContactSubmitStatus({
        type: "error",
        message: "✗ Network error. Please check your connection and try again.",
      });
    } finally {
      setIsContactSubmitting(false); // Stop loading
    }
  };

  // Updated resume form submit handler
  const handleResumeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResumeSubmitStatus({ type: null, message: "" });
    setIsResumeSubmitting(true); // Start loading

    const API_BASE_URL = import.meta.env.VITE_CMS_API_URL || "";

    const careerPayload = {
      name: resumeData.fullName,
      department: "Careers / Job Application",
      email: resumeData.email,
      phone: resumeData.phone,
      productOrService: "Resume Submission",
      callback: false,
      status: "New",
      message: resumeData.message || "Resume dropped via Careers page.",
    };

    const formDataObj = new FormData();
    formDataObj.append("form_type", "resume_submission");
    formDataObj.append("fullName", resumeData.fullName);
    formDataObj.append("email", resumeData.email);
    formDataObj.append("phone", resumeData.phone);
    formDataObj.append("message", resumeData.message);
    if (resumeData.resume) {
      formDataObj.append("resume", resumeData.resume);
    }

    try {
      // 1. Log lead to CMS Enquiries
      await fetch(`${API_BASE_URL}/api/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(careerPayload),
      });

      // 2. Also send to file upload webhook
      fetch("https://kumarpower.com/wep-api.php", {
        method: "POST",
        body: formDataObj,
      }).catch(() => {});

      setResumeSubmitStatus({
        type: "success",
        message:
          "✓ Resume submitted successfully! We'll review your application and get back to you.",
      });
      setResumeData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        resume: null,
      });
      // Reset file input
      const fileInput = document.getElementById("resume") as HTMLInputElement;
      if (fileInput) fileInput.value = "";

      // Clear success message after 5 seconds
      setTimeout(() => {
        setResumeSubmitStatus({ type: null, message: "" });
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      setResumeSubmitStatus({
        type: "error",
        message: "✗ Network error. Please check your connection and try again.",
      });
    } finally {
      setIsResumeSubmitting(false); // Stop loading
    }
  };

  return (
    <>
      <SEO
        title="Kumar Power | Contact us for Your Power Queries in Delhi"
        description="Get in touch with Kumar Power today. Whether you need generator assistance, installation info, or pricing details, our experts team are always ready to help."
        canonical="https://kumarpower.com/contact"
      />
      {/* <SEOJsonLD /> */}
      <Header />

      <main>
        {/* FIRST SECTION: Powering Connections Section */}
        <section
          className="py-20 bg-[#2D6FBA] relative overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to right, #0a1535, #1a2a59)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0 z-0 bg-no-repeat bg-cover opacity-60"
            style={{
              backgroundImage: "url(" + contact + ")",
              mixBlendMode: "normal",
              backgroundPosition: "center -380px", // move image up
            }}
          ></div>

          <div className="container mx-auto px-4 relative z-10 flex justify-center items-center min-h-[280px]">
            {/* Glassmorphism Card */}
            <div className="max-w-3xl mx-auto px-10 py-12 bg-black/60    shadow-2xl text-center relative overflow-hidden">
              {/* Additional glass effect layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-20 z-0"></div>

              {/* Content with improved contrast */}
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white drop-shadow-md">
                  Powering Connections That Matter
                </h2>
                <p className="text-base text-white tracking-tighter font-extralight mb-8 drop-shadow">
                  Let's build something extraordinary. Talk to our experts
                  today.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="#contact-form"
                    className="bg-[#2D6FBA] hover:bg-[#2360a0] text-white px-8 py-3 rounded-[5px] font-medium transition-colors shadow-lg"
                  >
                    Start Your Inquiry
                  </a>
                  <a
                    href="https://wa.me/+919773851767"
                    target="_blank"
                    rel="noreferrer"
                    className="backdrop-blur-sm border border-[#2D6FBA] hover:bg-[#2D6FBA]/50 text-white px-8 py-3 rounded-[5px] font-medium transition-colors shadow-lg"
                  >
                    Connect on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get in Touch Form - Part of First Section */}
        <section id="contact-form" className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-[18px] shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-black mb-2">
                  Get in Touch
                </h2>
                <div className="mx-auto w-24 h-1 bg-[#2D6FBA] rounded mb-2"></div>
              </div>

              {/* Contact Form Success/Error Message */}
              {contactSubmitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    contactSubmitStatus.type === "success"
                      ? "bg-green-50 border border-green-200 text-green-800"
                      : "bg-red-50 border border-red-200 text-red-800"
                  }`}
                >
                  <p className="text-sm font-medium">
                    <LinkText
                      text={contactSubmitStatus.message}
                      linkClassName="text-[#2D6FBA] hover:underline font-bold"
                    />
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-black mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 rounded-[7px] bg-gray-100 text-black border border-gray-300 placeholder-gray-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-black mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 rounded-[7px] bg-gray-100 text-black border border-gray-300 placeholder-gray-500"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-black mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 rounded-[7px] bg-gray-100 text-black border border-gray-300 placeholder-gray-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="department"
                      className="block text-sm font-medium text-black mb-1"
                    >
                      Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full p-3 rounded-[7px] bg-gray-100 text-black border border-gray-300"
                    >
                      <option value="">Select Department</option>
                      <option value="sales">Sales</option>
                      <option value="support">Technical Support</option>
                      <option value="service">Service</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-[7px] bg-gray-100 text-black border border-gray-300 placeholder-gray-500"
                    placeholder="Tell us about your requirements"
                  ></textarea>
                </div>
                <div>
                  <div className="flex mb-20 md:mb-0 items-center translate-y-10 mt-2 gap-2">
                    <input
                      type="checkbox"
                      id="callback"
                      name="callback"
                      className="h-4 w-4 text-[#2D6FBA]  border-gray-300 rounded focus:ring-[#2D6FBA]"
                    />
                    <label
                      htmlFor="callback"
                      className="block text-sm text-black cursor-pointer"
                    >
                      Request a callback
                    </label>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button
                      type="submit"
                      disabled={isContactSubmitting}
                      className="bg-[#2D6FBA] hover:bg-[#2360a0] text-white font-medium py-3 px-8 rounded-[7px] transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isContactSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Secure Message
                          <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* SECOND SECTION: Contact Information Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Office Hours */}
                <div className="bg-black text-white p-6 rounded-md">
                  <div className="items-center mb-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-3 text-lg font-bold">Office Hours</h3>
                  </div>
                  <p className="text-gray-300 text-sm">Monday - Saturday</p>
                  <p className="text-gray-300 text-sm">10:00 AM - 7:00 PM</p>
                  <p className="text-gray-300 text-sm mt-1">
                    Closed on Sundays & National Holidays
                  </p>
                </div>

                {/* Phone */}
                <div className="bg-black text-white p-6 rounded-md">
                  <div className=" items-center mb-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-3 text-lg font-bold">Phone</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-white/60 w-20">Main: </span>
                    <a
                      href="tel:+919773851767"
                      className="hover:text-blue-300 transition-colors font-medium"
                    >
                      9773851767
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300 mt-1">
                    <span className="text-white/60 w-20">Support: </span>
                    <a
                      href="tel:+919773877796"
                      className="hover:text-blue-300 transition-colors"
                    >
                      9773877796
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300 mt-1">
                    <span className="text-white/60 w-20">Landline: </span>
                    <a
                      href="tel:01146701273"
                      className="hover:text-blue-300 transition-colors"
                    >
                      011-46701273
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-black text-white p-6 rounded-md">
                  <div className="items-center mb-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-3 text-lg font-bold">Email</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/60 w-20">Sales: </span>
                    <a
                      href="mailto:Sales@kumarpower.com"
                      className="hover:text-blue-300 transition-colors font-medium"
                    >
                      Sales@kumarpower.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/60 w-20">Accounts: </span>
                    <a
                      href="mailto:Accounts@kumarpower.com"
                      className="hover:text-blue-300 transition-colors font-medium"
                    >
                      Accounts@kumarpower.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/60 w-20">Support: </span>
                    <a
                      href="mailto:Support@kumarpower.com"
                      className="hover:text-blue-300 transition-colors font-medium"
                    >
                      Support@kumarpower.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Drop and Map Section - Part of Second Section */}
        <section className="bg-black text-white py-12">
          <div className="container mx-auto ">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Side: Resume Drop */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Drop Your Resume</h2>
                  <p className="text-gray-300 mb-6">
                    Didn't find your role? We're always looking for great talent
                    to join our team. Submit your resume and we'll contact you
                    when a suitable position opens up.
                  </p>

                  <div className="space-y-6">
                    {/* Feature Points */}
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">
                          Industry Leading Company
                        </h3>
                        <p className="text-gray-400 text-sm">
                          One of India's most respected power generation brands
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">
                          Career Growth
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Continuous learning and advancement opportunities
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">
                          Comprehensive Benefits
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Sales incentives, PF, and more
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Resume Form - Updated to match image */}
                <div className="bg-white p-6 rounded-md text-black">
                  {/* Resume Form Success/Error Message */}
                  {resumeSubmitStatus.type && (
                    <div
                      className={`mb-6 p-4 rounded-lg ${
                        resumeSubmitStatus.type === "success"
                          ? "bg-green-50 border border-green-200 text-green-800"
                          : "bg-red-50 border border-red-200 text-red-800"
                      }`}
                    >
                      <p className="text-sm font-medium">
                        <LinkText
                          text={resumeSubmitStatus.message}
                          linkClassName="text-[#2D6FBA] hover:underline font-bold"
                        />
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleResumeSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-medium text-black mb-1"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={resumeData.fullName}
                          onChange={handleResumeChange}
                          className="w-full p-3 bg-gray-100 border border-gray-300 rounded text-black placeholder-gray-500"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="resumeEmail"
                          className="block text-sm font-medium text-black mb-1"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="resumeEmail"
                          name="email"
                          value={resumeData.email}
                          onChange={handleResumeChange}
                          className="w-full p-3 bg-gray-100 border border-gray-300 rounded text-black placeholder-gray-500"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="resumePhone"
                        className="block text-sm font-medium text-black mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="resumePhone"
                        name="phone"
                        value={resumeData.phone}
                        onChange={handleResumeChange}
                        className="w-full p-3 bg-gray-100 border border-gray-300 rounded text-black placeholder-gray-500"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="resumeMessage"
                        className="block text-sm font-medium text-black mb-1"
                      >
                        Message / Cover Note
                      </label>
                      <textarea
                        id="resumeMessage"
                        name="message"
                        rows={4}
                        value={resumeData.message}
                        onChange={handleResumeChange}
                        className="w-full p-3 bg-gray-100 border border-gray-300 rounded text-black placeholder-gray-500"
                        placeholder="Tell us about yourself and why you're interested in joining our team"
                      ></textarea>
                    </div>

                    <div>
                      <label
                        htmlFor="resume"
                        className="block text-sm font-medium text-black mb-1"
                      >
                        Upload Resume (PDF/DOC)
                      </label>
                      <div className="relative">
                        <div className="border-2 border-dashed border-gray-300 rounded p-8 text-center bg-gray-50">
                          <div className="flex justify-center mb-2">
                            <svg
                              className="w-6 h-6 text-gray-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-gray-600">
                            Drag and drop your resume here or click to browse
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Maximum file size: 5MB
                          </p>
                          <input
                            type="file"
                            id="resume"
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isResumeSubmitting}
                      className="w-full bg-[#2D6FBA] hover:bg-[#2360a0] text-white font-medium py-3 px-4 rounded transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isResumeSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Map Section */}
              {/* Full-width Map Section */}
              <div className="relative w-screen mt-10 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.002710082035!2d77.07707537557323!3d28.629680875666285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04bf7f6ae361%3A0x88c15da012435142!2sWestend%20Mall%20Janakpuri%20West%20Delhi!5e0!3m2!1sen!2sin!4v1756473543698!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kumar Power Office Location"
                />

                {/* Overlay info card */}
                <div className="absolute left-4 md:left-12 bottom-4 md:bottom-8 bg-black/80 text-white rounded-lg shadow-lg py-4 px-5 md:py-6 md:px-8 max-w-xs flex flex-col gap-2">
                  <div className="flex items-center gap-2 mb-1">
                    <svg
                      className="w-5 h-5 text-[#2D6FBA]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <circle cx="12" cy="11" r="3" fill="currentColor" />
                    </svg>
                    <span className="font-semibold text-lg">Our Office</span>
                  </div>
                  <div className="text-sm font-extralight leading-snug tracking-tighter">
                    New Address: 904, 9th Floor, Westend Mall,
                    <br />
                    Janakpuri, New Delhi - 110058
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
