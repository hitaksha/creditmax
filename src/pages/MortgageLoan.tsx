import React from 'react';
import { Shield, CheckCircle, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import EMICalculator from '../components/EMICalculator';

const MortgageLoan: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Investment',
      description: 'Property-backed loans with competitive interest rates',
    },
    {
      icon: Clock,
      title: 'Quick Approval',
      description: 'Fast processing with minimal documentation',
    },
    {
      icon: TrendingUp,
      title: 'Flexible Terms',
      description: 'Repayment tenure up to 20 years',
    },
    {
      icon: CheckCircle,
      title: 'High Loan Amount',
      description: 'Get up to 80% of property value',
    },
  ];

  const eligibility = [
    'Age between 21-65 years',
    'Minimum income of ₹3 lakhs per annum',
    'Good credit score (700+)',
    'Property documents should be clear',
    'Stable employment/business history',
  ];

  const documents = [
    'Property documents (Sale deed, Title deed)',
    'Income proof (Salary slips, ITR)',
    'Bank statements for last 6 months',
    'Identity and address proof',
    'Property valuation report',
    'NOC from society/builder',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Mortgage Loan
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Secure your property investment with our competitive mortgage loans 
                starting from 8.5% annual interest rate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">8.5%*</div>
                  <div className="text-sm">Starting Rate</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">₹5Cr</div>
                  <div className="text-sm">Max Amount</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">80%</div>
                  <div className="text-sm">LTV Ratio</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Mortgage Calculator</h3>
                </div>
                <EMICalculator 
                  defaultPrincipal={2000000}
                  defaultRate={8.5}
                  defaultTenure={15}
                  primaryColor="green"
                  accentColor="green"
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
              Why Choose Our Mortgage Loan?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Secure your property investment with our competitive mortgage loan options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-green-600" />
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
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
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
                    <ArrowRight className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
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
              Mortgage Loan Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover why our mortgage loan is the right choice for your property investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-green-600 mb-4">8.5%*</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Rates</h3>
              <p className="text-gray-600">Starting from 8.5% annual interest rate</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-green-600 mb-4">80%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">High LTV Ratio</h3>
              <p className="text-gray-600">Get up to 80% of property value</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-green-600 mb-4">20 Years</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Tenure</h3>
              <p className="text-gray-600">Repayment tenure up to 20 years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Secure Your Property?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Apply for a mortgage loan today and make your property investment dreams come true. 
                Our experts will guide you through the entire process.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quick Processing</h4>
                    <p className="text-gray-600">Fast approval with minimal documentation</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Secure Investment</h4>
                    <p className="text-gray-600">Property-backed loans with competitive rates</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">High Loan Amount</h4>
                    <p className="text-gray-600">Get up to ₹5 crores loan amount</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-lg p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MortgageLoan;