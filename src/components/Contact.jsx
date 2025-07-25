import { 
  HiMail, 
  HiPhone,
  HiLocationMarker,
  HiClock,
  HiGlobeAlt,
  HiChatAlt2,
  HiArrowRight,
  HiCheck
} from 'react-icons/hi';
import { FaWhatsapp } from "react-icons/fa";
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappNumber = "447739406932"; 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatWhatsAppMessage = () => {
    const { firstName, lastName, email, phone, subject, message } = formData;
    
    return `Hello Grey Falcon Travels!

*Contact Details:*
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

*Subject:* ${subject}

*Message:*
${message}

Looking forward to hearing from you!`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappMessage = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: HiMail,
      title: "Email Us",
      subtitle: "Get a response within 24 hours",
      contact: "sales@greyfalcontravels.com",
      href: "mailto:sales@greyfalcontravels.com",
      color: "blue"
    },
    {
      icon: HiPhone,
      title: "Call Us",
      subtitle: "Speak with our travel experts",
      contact: "+44 7739 406932",
      href: "tel:+447739406932",
      color: "green"
    },
    {
      icon: HiLocationMarker,
      title: "Visit Us",
      subtitle: "UK-based travel specialists",
      contact: "United Kingdom",
      href: "#",
      color: "purple"
    }
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM GMT" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM GMT" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg p-6 lg:p-8 relative overflow-hidden">
              {/* Background Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 border border-blue-100 rounded-full opacity-50"></div>
              <div className="absolute bottom-6 left-4 w-12 h-12 border border-cyan-100 rounded-full opacity-50"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Send us a WhatsApp Message</h3>
                  </div>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaWhatsapp className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">WhatsApp Opened!</h4>
                    <p className="text-gray-600">Your message has been prepared. Send it to start the conversation!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                          placeholder="+265998552002"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        placeholder="What can we help you with?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell us about your travel plans, preferred destinations, dates, or any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center space-x-2 group"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>Send via WhatsApp</span>
                      <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>

                    {/* Preview Message */}
                    {(formData.firstName || formData.lastName || formData.email || formData.phone || formData.subject || formData.message) && (
                      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                        <h4 className="text-sm font-semibold text-green-800 mb-2">WhatsApp Message Preview:</h4>
                        <div className="text-xs text-green-700 whitespace-pre-line font-mono bg-white p-3 rounded-lg">
                          {formatWhatsAppMessage()}
                        </div>
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const colorClasses = {
                  blue: "bg-blue-50 border-blue-200 hover:bg-blue-100 text-blue-600",
                  green: "bg-green-50 border-green-200 hover:bg-green-100 text-green-600",
                  purple: "bg-purple-50 border-purple-200 hover:bg-purple-100 text-purple-600"
                };

                return (
                  <a
                    key={index}
                    href={method.href}
                    className="block group"
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-colors duration-200 ${colorClasses[method.color]}`}>
                          <method.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 mb-1">{method.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{method.subtitle}</p>
                          <p className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                            {method.contact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-2xl lg:pb-27 shadow-lg p-6 border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-orange-50 border border-orange-200 rounded-xl flex items-center justify-center">
                  <HiClock className="w-5 h-5 text-orange-600" />
                </div>
                <h4 className="font-bold text-gray-800">Working Hours</h4>
              </div>
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{schedule.day}</span>
                    <span className="text-sm font-medium text-gray-800">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

 
          </div>
        </div>
      </div>
    </section>
  );
}