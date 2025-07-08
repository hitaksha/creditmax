import React from 'react';
import { Clock, CheckCircle, Shield, Users, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import EMICalculator from '../components/EMICalculator';

const PersonalLoan: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: 'Instant Approval',
      description: 'Get instant approval and funds within 24 hours',
    },
    {
      icon: Shield,
      title: 'No Collateral',
      description: 'Unsecured personal loans with minimal documentation',
    },
    {
      icon: Users,
      title: 'Flexible Use',
      description: 'Use the loan for any personal financial need',
    },
    {
      icon: CheckCircle,
      title: 'Easy Repayment',
      description: 'Flexible repayment options up to 5 years',
    },
  ];

  const eligibility = [
    'Age between 21-60 years',
    'Minimum income of ₹20,000 per month',
    'Good credit score (650+)',
    'Stable employment for at least 6 months',
    'Valid bank account and KYC documents',
  ];

  const documents = [
    'Identity proof (Aadhaar, PAN, Passport)',
    'Address proof (Utility bills, Rent agreement)',
    'Income proof (Salary slips, Bank statements)',
    'Employment proof (Offer letter, ID card)',
    'Bank statements for last 3 months',
    'Passport size photographs',
  ];

  const loanPurposes = [
    'Wedding expenses',
    'Medical emergencies',
    'Home renovation',
    'Education expenses',
    'Debt consolidation',
    'Travel and vacation',
    'Business expenses',
    'Vehicle purchase',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-900 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Personal Loan
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                Meet your personal financial needs with our instant personal loans 
                starting from 10.5% annual interest rate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">10.5%*</div>
                  <div className="text-sm">Starting Rate</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">₹25L</div>
                  <div className="text-sm">Max Amount</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">24 Hours</div>
                  <div className="text-sm">Quick Disbursal</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Personal Loan Calculator</h3>
                </div>
                <EMICalculator 
                  defaultPrincipal={500000}
                  defaultRate={10.5}
                  defaultTenure={3}
                  primaryColor="orange"
                  accentColor="orange"
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
              Why Choose Our Personal Loan?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get instant funds for all your personal needs with our flexible personal loan options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Purposes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Use Your Personal Loan For
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our personal loans can be used for any legitimate personal financial need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanPurposes.map((purpose, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-orange-50 transition-colors">
                <div className="text-lg font-semibold text-gray-900 mb-2">{purpose}</div>
                <div className="w-12 h-1 bg-orange-600 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Eligibility Criteria</h2>
              <div className="space-y-4">
                {eligibility.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
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
                    <ArrowRight className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Personal Loan Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover why our personal loan is the perfect solution for your financial needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-4">10.5%*</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Low Interest Rate</h3>
              <p className="text-gray-600">Starting from 10.5% annual interest rate</p>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-4">₹25L</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">High Loan Amount</h3>
              <p className="text-gray-600">Get up to ₹25 lakhs for your needs</p>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-4">24 Hours</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Disbursal</h3>
              <p className="text-gray-600">Get funds in your account within 24 hours</p>
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
              Get your personal loan in just 3 easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Apply Online', description: 'Fill out our simple 2-minute application form' },
              { step: '02', title: 'Upload Documents', description: 'Submit required documents digitally' },
              { step: '03', title: 'Get Funds', description: 'Receive funds in your account within 24 hours' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
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
                Ready to Get Your Personal Loan?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Apply for a personal loan today and get instant funds for all your needs. 
                Our simple process ensures you get the money you need, when you need it.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instant Approval</h4>
                    <p className="text-gray-600">Get approval in minutes, not days</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">No Collateral</h4>
                    <p className="text-gray-600">Unsecured loans with minimal documentation</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Flexible Use</h4>
                    <p className="text-gray-600">Use the loan for any personal need</p>
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

export default PersonalLoan;