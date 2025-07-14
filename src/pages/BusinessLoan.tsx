import React from 'react';
import { TrendingUp, CheckCircle, Clock, Shield, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import EMICalculator from '../components/EMICalculator';
import { Helmet } from 'react-helmet';

const BusinessLoan: React.FC = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Grow Your Business',
      description: 'Expand operations, purchase equipment, or invest in new opportunities',
    },
    {
      icon: Clock,
      title: 'Quick Disbursement',
      description: 'Get funds within 24-48 hours of approval',
    },
    {
      icon: Shield,
      title: 'No Collateral Required',
      description: 'Unsecured business loans with minimal documentation',
    },
    {
      icon: CheckCircle,
      title: 'Flexible Terms',
      description: 'Choose repayment tenure from 1 to 5 years',
    },
  ];

  const eligibility = [
    'Business should be operational for at least 2 years',
    'Annual turnover of minimum ₹20 lakhs',
    'Good credit score (650+)',
    'Valid business registration documents',
    'Bank statements for the last 12 months',
  ];

  const documents = [
    'Business registration certificate',
    'PAN card of business and proprietor',
    'ITR for last 2 years',
    'Bank statements for last 12 months',
    'GST registration certificate',
    'Financial statements (P&L, Balance Sheet)',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Unsecured Business Loan in Mumbai | CreditMax</title>
        <meta
          name="description"
          content="Apply for unsecured business loans in Mumbai with CreditMax. Quick approval, no collateral, and expert support 	  for SMEs across India."
        />
	<link rel="canonical" href="https://www.creditmax.in/unsecured-business-loan-mumbai" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Unsecured Business Loan in Mumbai for SMEs
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Looking for a fast and collateral-free unsecured business loan in Mumbai? 
                CreditMax helps SMEs grow with flexible funding starting from 15% interest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">15%*</div>
                  <div className="text-sm">Starting Rate</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">₹50L</div>
                  <div className="text-sm">Max Amount</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">5 Years</div>
                  <div className="text-sm">Max Tenure</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Business Loan Calculator</h3>
                </div>
                <EMICalculator 
                  defaultPrincipal={1000000}
                  defaultRate={15}
                  defaultTenure={3}
                  primaryColor="blue"
                  accentColor="blue"
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
              Why Choose Our Unsecured Business Loan in Mumbai?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Designed specifically for businesses looking to grow and expand their operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
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
                    <ArrowRight className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get your business loan in just 4 easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply Online', description: 'Fill out our simple application form' },
              { step: '02', title: 'Document Verification', description: 'Submit required documents online' },
              { step: '03', title: 'Approval', description: 'Get approval within 24-48 hours' },
              { step: '04', title: 'Disbursement', description: 'Receive funds in your account' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Based in Mumbai? Apply for an unsecured business loan today and take your business to the next level. 
                Our experts will help you choose the best loan option for your needs.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quick Processing</h4>
                    <p className="text-gray-600">Get approval in 24-48 hours</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">No Collateral</h4>
                    <p className="text-gray-600">Unsecured loans with minimal documentation</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Competitive Rates</h4>
                    <p className="text-gray-600">Starting from 15% annual interest</p>
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

      {/* Hidden SEO Keywords */}
      <div className="hidden">
        unsecured business loan in Mumbai, SME funding Mumbai, collateral-free business loan, business finance Mumbai
      </div>
    </div>
  );
};

export default BusinessLoan;
