import React, { useState, useEffect } from 'react';
import { Calculator, Info } from 'lucide-react';

const EMICalculator: React.FC = () => {
  const [principal, setPrincipal] = useState<number>(500000);
  const [rate, setRate] = useState<number>(10);
  const [tenure, setTenure] = useState<number>(5);
  const [emi, setEmi] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);

  const calculateEMI = () => {
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = tenure * 12;

    if (monthlyRate === 0) {
      const calculatedEMI = principal / numberOfPayments;
      setEmi(calculatedEMI);
      setTotalAmount(principal);
      setTotalInterest(0);
    } else {
      const calculatedEMI =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

      const calculatedTotalAmount = calculatedEMI * numberOfPayments;
      const calculatedTotalInterest = calculatedTotalAmount - principal;

      setEmi(calculatedEMI);
      setTotalAmount(calculatedTotalAmount);
      setTotalInterest(calculatedTotalInterest);
    }
  };

  useEffect(() => {
    calculateEMI();
  }, [principal, rate, tenure]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleReset = () => {
    setPrincipal(500000);
    setRate(10);
    setTenure(5);
  };

  const loanBreakdown = [
    { label: 'Principal Amount', value: principal, color: 'bg-blue-500' },
    { label: 'Total Interest', value: totalInterest, color: 'bg-red-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calculator className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            EMI Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Calculate your loan EMI and plan your finances better
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Loan Details</h2>
                <button
                  onClick={handleReset}
                  className="text-sm text-blue-600 hover:underline font-medium"
                >
                  Reset to Default
                </button>
              </div>

              <div className="space-y-6">
                {/* Loan Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={principal}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        if (!isNaN(val)) setPrincipal(val);
                      }}
                      onBlur={() => {
                        setPrincipal((prev) =>
                          Math.min(10000000, Math.max(100000, prev || 100000))
                        );
                      }}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      placeholder="Enter loan amount"
                    />
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="10000000"
                    step="50000"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="w-full mt-2 accent-blue-600"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>₹1L</span>
                    <span>₹1Cr</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interest Rate (% per annum)
                  </label>
                  <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(Math.max(1, Number(e.target.value)))}
                    step="0.1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="Enter interest rate"
                  />
                  <input
                    type="range"
                    min="1"
                    max="25"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(Math.max(1, Number(e.target.value)))}
                    className="w-full mt-2 accent-blue-600"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1%</span>
                    <span>25%</span>
                  </div>
                </div>

                {/* Loan Tenure */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Tenure (Years)
                  </label>
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(Math.max(1, Number(e.target.value)))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="Enter loan tenure"
                  />
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={tenure}
                    onChange={(e) => setTenure(Math.max(1, Number(e.target.value)))}
                    className="w-full mt-2 accent-blue-600"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1 Year</span>
                    <span>30 Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly EMI</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {formatCurrency(emi)}
              </div>
              <p className="text-sm text-gray-600">
                Your monthly installment
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Principal Amount</span>
                  <span className="font-semibold">{formatCurrency(principal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Interest</span>
                  <span className="font-semibold">{formatCurrency(totalInterest)}</span>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <span className="text-gray-900 font-medium">Total Amount</span>
                  <span className="font-bold text-lg">{formatCurrency(totalAmount)}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Breakdown</h3>
              <div className="space-y-3">
                {loanBreakdown.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">{item.label}</span>
                      <span className="font-medium">{formatCurrency(item.value)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${item.color} h-2 rounded-full`}
                        style={{
                          width: `${(item.value / totalAmount) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-start space-x-3">
                <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Important Note</h4>
                  <p className="text-sm text-blue-800">
                    This is an indicative calculation. Actual EMI may vary based on the bank's
                    terms and conditions, processing fees, and other charges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Loan Options */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Loan Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <div className="text-2xl font-bold text-blue-600">7.5%</div>
              <div className="text-sm text-gray-600">Home Loan</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <div className="text-2xl font-bold text-blue-600">10.5%</div>
              <div className="text-sm text-gray-600">Personal Loan</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <div className="text-2xl font-bold text-blue-600">8.5%</div>
              <div className="text-sm text-gray-600">Mortgage Loan</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <div className="text-2xl font-bold text-blue-600">15%</div>
              <div className="text-sm text-gray-600">Business Loan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
