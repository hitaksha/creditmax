import React, { useState, useEffect } from 'react';

interface EMICalculatorProps {
  defaultPrincipal?: number;
  defaultRate?: number;
  defaultTenure?: number;
  primaryColor?: string;
  accentColor?: string;
}

const EMICalculator: React.FC<EMICalculatorProps> = ({
  defaultPrincipal = 500000,
  defaultRate = 10,
  defaultTenure = 5,
  primaryColor = 'blue',
  accentColor = 'blue'
}) => {
  const [principal, setPrincipal] = useState<number>(defaultPrincipal);
  const [rate, setRate] = useState<number>(defaultRate);
  const [tenure, setTenure] = useState<number>(defaultTenure);
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

  // Define color classes based on the primary color
  const getColorClasses = () => {
    switch (primaryColor) {
      case 'blue':
        return {
          focus: 'focus:ring-blue-500',
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          text: 'text-blue-600'
        };
      case 'green':
        return {
          focus: 'focus:ring-green-500',
          bg: 'bg-green-50',
          border: 'border-green-200',
          text: 'text-green-600'
        };
      case 'purple':
        return {
          focus: 'focus:ring-purple-500',
          bg: 'bg-purple-50',
          border: 'border-purple-200',
          text: 'text-purple-600'
        };
      case 'orange':
        return {
          focus: 'focus:ring-orange-500',
          bg: 'bg-orange-50',
          border: 'border-orange-200',
          text: 'text-orange-600'
        };
      default:
        return {
          focus: 'focus:ring-blue-500',
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          text: 'text-blue-600'
        };
    }
  };

  const colors = getColorClasses();

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Loan Amount (₹)
        </label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
          className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${colors.focus} focus:border-transparent text-gray-900`}
          placeholder="Enter loan amount"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Interest Rate (% per annum)
        </label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          step="0.1"
          className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${colors.focus} focus:border-transparent text-gray-900`}
          placeholder="Enter interest rate"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Loan Tenure (Years)
        </label>
        <input
          type="number"
          value={tenure}
          onChange={(e) => setTenure(Number(e.target.value))}
          className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${colors.focus} focus:border-transparent text-gray-900`}
          placeholder="Enter loan tenure"
        />
      </div>

      <div className={`${colors.bg} rounded-lg p-4 ${colors.border}`}>
        <h4 className="font-semibold text-gray-900 mb-3">EMI Calculation</h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Monthly EMI:</span>
            <span className="font-bold text-gray-900">{formatCurrency(emi)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Total Interest:</span>
            <span className="font-semibold text-gray-900">{formatCurrency(totalInterest)}</span>
          </div>
          <div className="flex justify-between border-t pt-2">
            <span className="text-gray-900 font-medium">Total Amount:</span>
            <span className="font-bold text-lg text-gray-900">{formatCurrency(totalAmount)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;