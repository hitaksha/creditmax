import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      info: '+91 9987593277',
      description: 'Call us for immediate assistance',
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@creditmax.in',
      description: 'Send us your queries',
    },
    {
      icon: MapPin,
      title: 'Address',
      info: 'A-504, Mahindra Vaibhav C.H.S, Asha Nagar, Kandivali East, Mumbai 400101',
      description: 'Visit our office',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      info: 'Mon - Sat: 9:00 AM - 6:00 PM',
      description: 'Sunday: Closed',
    },
  ];

  const services = [
    'Business Loan Consultation',
    'Home Loan Advisory',
    'Personal Loan Guidance',
    'Mortgage Loan Support',
    'Credit Score Assessment',
    'Financial Planning',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get in touch with our loan experts for personalized assistance and guidance 
              on your financial journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 font-medium mb-2">{item.info}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to get started? Fill out the form and our experts will contact you 
                within 24 hours to discuss your loan requirements.
              </p>
              <ContactForm />
            </div>

            {/* Services & Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We offer comprehensive financial services to help you achieve your goals.
              </p>
              <div className="space-y-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Quick Contact</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Need immediate assistance? Call us now for instant support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+919987593277"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                  >
                    Call Now
                  </a>
                  <a
                    href="mailto:info@creditmax.in"
                    className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Mumbai, we're easily accessible by public transport
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">CreditMax Office</h3>
                <p className="text-gray-600 max-w-md">
                  A-504, Mahindra Vaibhav C.H.S, Asha Nagar, Kandivali East, Mumbai 400101
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our loan services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How long does the loan approval process take?',
                answer: 'Our loan approval process typically takes 24-48 hours from the time we receive all required documents.',
              },
              {
                question: 'What documents do I need to apply for a loan?',
                answer: 'Required documents vary by loan type, but generally include identity proof, address proof, income proof, and bank statements.',
              },
              {
                question: 'Can I prepay my loan without penalties?',
                answer: 'Yes, we offer flexible prepayment options. Some loans may have minimal prepayment charges as per terms and conditions.',
              },
              {
                question: 'What is the minimum credit score required?',
                answer: 'The minimum credit score requirement varies by loan type. Generally, we accept applications with scores from 650 and above.',
              },
              {
                question: 'Do you offer loans to self-employed individuals?',
                answer: 'Yes, we offer loans to both salaried and self-employed individuals with appropriate documentation.',
              },
              {
                question: 'How can I check my loan application status?',
                answer: 'You can check your application status by calling our customer service or through our online portal.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;