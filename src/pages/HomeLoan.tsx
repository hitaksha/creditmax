import React from 'react';
import { Users, CheckCircle, Clock, Shield, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import EMICalculator from '../components/EMICalculator';

const HomeLoan: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Dream Home',
      description: 'Turn your dream of owning a home into reality',
    },
    {
      icon: Clock,
      title: 'Quick Approval',
      description: 'Get approval in 24-48 hours with minimal documentation',
    },
    {
      icon: Shield,
      title: 'Low Interest Rates',
      description: 'Competitive rates starting from 7.5% per annum',
    },
    {
      icon: CheckCircle,
      title: 'High Loan Amount',
      description: 'Get up to ₹10 crores for your dream home',
    },
  ];

  const eligibility = [
    'Age between 21-65 years',
    'Minimum income of ₹3 lakhs per annum',
    'Good credit score (700+)',
    'Stable employment for at least 2 years',
    'Down payment of 10-20% of property value',
  ];

  const documents = [
    'Identity and address proof',
    'Income proof (Salary slips, ITR)',
    'Bank statements for last 6 months',
    'Property documents',
    'NOC from builder/society',
    'Passport size photographs',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Home Loan
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                Turn your dream home into reality with our affordable home loans 
                starting from 7.5% annual interest rate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">7.5%*</div>
                  <div className="text-sm">Starting Rate</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">₹10Cr</div>
                  <div className="text-sm">Max Amount</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">30 Years</div>
                  <div className="text-sm">Max Tenure</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Home Loan Calculator</h3>
                </div>
                <EMICalculator 
                  defaultPrincipal={3000000}
                  defaultRate={7.5}
                  defaultTenure={20}
                  primaryColor="purple"
                  accentColor="purple"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Home Loan?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Make your dream of owning a home come true with our affordable home loan options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Eligibility Criteria</h2>
              <div className="space-y-4">
                {eligibility.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Required Documents</h2>
              <div className="space-y-4">
                {documents.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <ArrowRight className="h-6 w-6 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Home Loan Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover why our home loan is the perfect choice for your dream home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-4">7.5%*</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Low Interest Rate</h3>
              <p className="text-gray-600">Starting from 7.5% annual interest rate</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-4">₹10Cr</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">High Loan Amount</h3>
              <p className="text-gray-600">Get up to ₹10 crores for your dream home</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-4">30 Years</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Tenure</h3>
              <p className="text-gray-600">Repayment tenure up to 30 years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Loan Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Home Loans
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the home loan that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Purchase Home Loan</h3>
              <p className="text-gray-600 mb-4">
                Finance your dream home purchase with our competitive home loan rates.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Up to 90% financing</li>
                <li>• Competitive interest rates</li>
                <li>• Quick processing</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Construction Home Loan</h3>
              <p className="text-gray-600 mb-4">
                Build your dream home with our flexible construction home loan options.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Stage-wise disbursement</li>
                <li>• Flexible repayment</li>
                <li>• Expert guidance</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Home Improvement Loan</h3>
              <p className="text-gray-600 mb-4">
                Renovate or improve your existing home with our home improvement loans.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Quick approval</li>
                <li>• Minimal documentation</li>
                <li>• Flexible tenure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Buy Your Dream Home?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Apply for a home loan today and make your dream of owning a home come true. 
                Our experts will help you every step of the way.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quick Processing</h4>
                    <p className="text-gray-600">Get approval in 24-48 hours</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Low Interest Rates</h4>
                    <p className="text-gray-600">Starting from 7.5% annual interest</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Support</h4>
                    <p className="text-gray-600">Dedicated support throughout the process</p>
                  </div>
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

export default HomeLoan;