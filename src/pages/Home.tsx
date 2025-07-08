import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Calculator, Users, Clock, Shield, TrendingUp } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  const products = [
    {
      title: 'Business Loan',
      rate: '15%',
      tagline: 'Grow your business with flexible financing',
      description: 'Unsecured business loans to fuel your entrepreneurial dreams',
      href: '/business-loan',
      icon: TrendingUp,
      color: 'bg-blue-600',
    },
    {
      title: 'Mortgage Loan',
      rate: '8.5%',
      tagline: 'Secure your property investment',
      description: 'Competitive mortgage rates for your dream property',
      href: '/mortgage-loan',
      icon: Shield,
      color: 'bg-green-600',
    },
    {
      title: 'Home Loan',
      rate: '7.5%',
      tagline: 'Turn your dream home into reality',
      description: 'Affordable home loans with quick approval process',
      href: '/home-loan',
      icon: Users,
      color: 'bg-purple-600',
    },
    {
      title: 'Personal Loan',
      rate: '7.5%',
      tagline: 'Meet your personal financial needs',
      description: 'Instant personal loans for all your requirements',
      href: '/personal-loan',
      icon: Clock,
      color: 'bg-orange-600',
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: 'Quick Approval',
      description: 'Get loan approval in as little as 24 hours',
    },
    {
      icon: Shield,
      title: 'Secure Process',
      description: 'Your data is protected with bank-grade security',
    },
    {
      icon: Calculator,
      title: 'Transparent Rates',
      description: 'No hidden charges, competitive interest rates',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 customer support from loan experts',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your Financial
                <span className="text-blue-300"> Dreams</span>
                <br />
                Start Here
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Get the best loan deals with competitive rates and instant approvals. 
                Your trusted partner in financial growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/emi-calculator"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center"
                >
                  Calculate EMI
                  <Calculator className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-300">10,000+</div>
                    <div className="text-sm">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-300">₹500Cr+</div>
                    <div className="text-sm">Loans Disbursed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-300">24 Hours</div>
                    <div className="text-sm">Quick Approval</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-300">99%</div>
                    <div className="text-sm">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Loan Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our wide range of loan products designed to meet your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className={`${product.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                  <product.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.tagline}</p>
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  Starting from {product.rate}*
                </div>
                <p className="text-sm text-gray-500 mb-6">{product.description}</p>
                <Link
                  to={product.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CreditMax?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer the best loan experience with transparent processes and competitive rates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Fill out the form and our loan experts will get back to you within 24 hours 
                with a customized loan offer.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">No processing fees</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Quick approval process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Competitive interest rates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Flexible repayment options</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;