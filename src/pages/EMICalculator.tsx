import React, { useState, useEffect } from 'react';
import { Calculator, Info } from 'lucide-react';
import jsPDF from 'jspdf';

// Helper: Number to words (Indian style: thousand, lakh, crore)
const numberToWords = (num) => {
  num = String(num).replace(/[^0-9.]/g, '');
  if (!num || isNaN(Number(num))) return '';
  const n = Number(num);
  if (n === 0) return 'zero';
  if (n < 1000) return `${n}`;
  if (n < 100000) return (
    `${Math.floor(n / 1000)} thousand${n % 1000 !== 0 ? ' ' + (n % 1000) : ''}`
  );
  if (n < 10000000) return (
    `${Math.floor(n / 100000)} lakh${n % 100000 !== 0 ? ' ' + (n % 100000) : ''}`
  );
  return (
    `${Math.floor(n / 10000000)} crore${n % 10000000 !== 0 ? ' ' + (n % 10000000) : ''}`
  );
};

const formatCurrency = (amount) =>
  Number.isFinite(amount) && amount !== 0
    ? new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
      }).format(amount)
    : '-';

// EMI and related calculations
function calculateNumbers(principal, rate, tenure, processingFeePercent) {
  const valid = Number(principal) > 0 && Number(rate) > 0 && Number(tenure) > 0;
  if (!valid) {
    return {
      emi: 0,
      totalAmount: 0,
      totalInterest: 0,
      processingFee: 0,
      gstOnFee: 0,
    };
  }
  const p = Number(principal);
  const r = Number(rate);
  const t = Number(tenure);
  const f = Number(processingFeePercent) || 0;

  const monthlyRate = r / 100 / 12;
  const n = t * 12;
  const emi = monthlyRate === 0
    ? p / n
    : (p * monthlyRate * Math.pow(1 + monthlyRate, n)) /
      (Math.pow(1 + monthlyRate, n) - 1);

  const totalAmount = emi * n;
  const totalInterest = totalAmount - p;
  const processingFee = (p * f) / 100;
  const gstOnFee = processingFee * 0.18;

  return {
    emi,
    totalAmount: totalAmount + processingFee + gstOnFee,
    totalInterest,
    processingFee,
    gstOnFee,
  };
}

// Amortization logic
const getAmortizationSchedule = (principal, rate, tenure, emi) => {
  if (
    !principal ||
    !rate ||
    !tenure ||
    !emi ||
    Number(principal) === 0 ||
    Number(rate) === 0 ||
    Number(tenure) === 0
  ) return [];
  let balance = Number(principal);
  const monthlyRate = Number(rate) / 100 / 12;
  const months = Number(tenure) * 12;
  let schedule = [];
  for (let i = 1; i <= months; i++) {
    const interest = balance * monthlyRate;
    let principalComp = emi - interest;
    if (balance < principalComp) principalComp = balance;
    schedule.push({
      month: i,
      principalPaid: principalComp,
      interestPaid: interest,
      closingBalance: Math.max(0, balance - principalComp),
    });
    balance -= principalComp;
    if (balance <= 0) break;
  }
  return schedule;
};

// Export PDF function
const handleExportPDF = ({
  principal,
  rate,
  tenure,
  processingFeePercent,
  emi,
  totalInterest,
  processingFee,
  gstOnFee,
  totalAmount,
  schedule,
  formatCurrency,
}) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  let y = 15;

  doc.setFontSize(18);
  doc.text('Loan EMI & Amortization Schedule', 15, y); y += 12;

  doc.setFontSize(12);
  doc.text(`Loan Amount: ${formatCurrency(Number(principal)) || '-'}`, 15, y);
  doc.text(`Interest Rate: ${rate} %`, 110, y); y += 9;
  doc.text(`Tenure: ${tenure} years`, 15, y);
  doc.text(`Processing Fee: ${processingFeePercent || 0} %`, 110, y); y += 14;

  doc.setFontSize(14);
  doc.text('Summary', 15, y); y += 9;

  doc.setFontSize(12);
  doc.text(`Monthly EMI: ${formatCurrency(emi)}`, 15, y); y += 7;
  doc.text(`Total Interest: ${formatCurrency(totalInterest)}`, 15, y); y += 7;
  doc.text(`Processing Fee: ${formatCurrency(processingFee)}`, 15, y); y += 7;
  doc.text(`GST on Fee: ${formatCurrency(gstOnFee)}`, 15, y); y += 7;
  doc.text(`Total Cost: ${formatCurrency(totalAmount)}`, 15, y); y += 14;

  doc.setFontSize(14);
  doc.text('Amortization Schedule', 15, y); y += 9;

  // Table header
  doc.setFontSize(11);
  doc.text('Month', 15, y);
  doc.text('Principal', 40, y);
  doc.text('Interest', 75, y);
  doc.text('Balance', 110, y);
  y += 7;

  schedule.forEach((row) => {
    if (y > 280) {
      doc.addPage();
      y = 15;
    }
    doc.text(`${row.month}`, 15, y);
    doc.text(formatCurrency(row.principalPaid), 40, y);
    doc.text(formatCurrency(row.interestPaid), 75, y);
    doc.text(formatCurrency(row.closingBalance), 110, y);
    y += 7;
  });

  doc.save('EMI-Amortization-Summary.pdf');
};

const EMICalculator = () => {
  // Inputs (all blank by default)
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [processingFeePercent, setProcessingFeePercent] = useState('');

  // Outputs
  const [emi, setEmi] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [processingFee, setProcessingFee] = useState(0);
  const [gstOnFee, setGstOnFee] = useState(0);
  const [schedule, setSchedule] = useState([]);

  // Compute all values on field change
  useEffect(() => {
    const {
      emi: calcEmi,
      totalAmount: calcTotalAmount,
      totalInterest: calcTotalInterest,
      processingFee: calcProcessingFee,
      gstOnFee: calcGST,
    } = calculateNumbers(principal, rate, tenure, processingFeePercent);

    setEmi(calcEmi);
    setTotalAmount(calcTotalAmount);
    setTotalInterest(calcTotalInterest);
    setProcessingFee(calcProcessingFee);
    setGstOnFee(calcGST);

    const amort = getAmortizationSchedule(principal, rate, tenure, calcEmi);
    setSchedule(amort);
  }, [principal, rate, tenure, processingFeePercent]);

  // Reset
  const handleReset = () => {
    setPrincipal('');
    setRate('');
    setTenure('');
    setProcessingFeePercent('');
  };

  const loanBreakdown = [
    { label: 'Principal Amount', value: Number(principal) || 0, color: 'bg-blue-600' },
    { label: 'Total Interest', value: totalInterest || 0, color: 'bg-red-600' },
    { label: 'Processing Fee', value: processingFee || 0, color: 'bg-green-600' },
    { label: 'GST on Fee', value: gstOnFee || 0, color: 'bg-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calculator className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">EMI Calculator</h1>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            Calculate your loan EMI and plan your finances better
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Inputs */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Loan Details</h2>
                <button
                  onClick={handleReset}
                  className="text-lg text-blue-600 hover:underline font-medium"
                  type="button"
                >
                  Reset to Default
                </button>
              </div>
              <div className="space-y-10">
                {/* Loan Amount */}
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Loan Amount
                  </label>
                  <input
                    type="number"
                    value={principal}
                    min={100000}
                    max={10000000}
                    placeholder="Enter loan amount"
                    onChange={(e) => setPrincipal(e.target.value.replace(/^0+/, ''))}
                    className="w-full px-5 py-4 text-lg border border-gray-300 rounded-lg"
                  />
                  <input
                    type="range"
                    min="100000"
                    max="10000000"
                    step="10000"
                    value={principal || 100000}
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="w-full mt-3 accent-blue-600"
                  />
                  {principal && (
                    <div className="text-md text-gray-500 mt-2">{numberToWords(principal)}</div>
                  )}
                </div>
                {/* Interest Rate */}
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Interest Rate (% p.a.)
                  </label>
                  <input
                    type="number"
                    value={rate}
                    min={1}
                    max={25}
                    step={0.01}
                    placeholder="Enter interest rate"
                    onChange={(e) => setRate(e.target.value.replace(/^0+/, ''))}
                    className="w-full px-5 py-4 text-lg border border-gray-300 rounded-lg"
                  />
                  <input
                    type="range"
                    min="1"
                    max="25"
                    step="0.01"
                    value={rate || 10}
                    onChange={(e) => setRate(e.target.value)}
                    className="w-full mt-3 accent-blue-600"
                  />
                  {rate && (
                    <div className="text-md text-gray-500 mt-2">{numberToWords(rate)} percent</div>
                  )}
                </div>
                {/* Tenure */}
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">Loan Tenure (Years)</label>
                  <input
                    type="number"
                    value={tenure}
                    min={1}
                    max={30}
                    placeholder="Enter tenure in years"
                    onChange={(e) => setTenure(e.target.value.replace(/^0+/, ''))}
                    className="w-full px-5 py-4 text-lg border border-gray-300 rounded-lg"
                  />
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={tenure || 5}
                    onChange={(e) => setTenure(e.target.value)}
                    className="w-full mt-3 accent-blue-600"
                  />
                  {tenure && (
                    <div className="text-md text-gray-500 mt-2">
                      {numberToWords(tenure)} {tenure === "1" ? "year" : "years"}
                    </div>
                  )}
                </div>
                {/* Processing Fee */}
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Processing Fee (% of Principal)
                  </label>
                  <input
                    type="number"
                    value={processingFeePercent}
                    min={0}
                    max={5}
                    step={0.01}
                    placeholder="Enter processing fee"
                    onChange={(e) => setProcessingFeePercent(e.target.value.replace(/^0+/, ''))}
                    className="w-full px-5 py-4 text-lg border border-gray-300 rounded-lg"
                  />
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="0.01"
                    value={processingFeePercent || 2}
                    onChange={(e) => setProcessingFeePercent(e.target.value)}
                    className="w-full mt-3 accent-blue-600"
                  />
                  {processingFeePercent && (
                    <div className="text-md text-gray-500 mt-2">{numberToWords(processingFeePercent)} percent</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Results & breakdown */}
          <div className="space-y-8">
            {/* EMI */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-5">Monthly EMI</h3>
              <div className="text-4xl font-bold text-blue-600 mb-3">
                {emi ? formatCurrency(emi) : '-'}
              </div>
              <p className="text-lg text-gray-600">Your monthly installment</p>
            </div>
            {/* Loan Summary */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-5">Loan Summary</h3>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between">
                  <span className="text-gray-600">Principal Amount</span>
                  <span className="font-semibold">{formatCurrency(Number(principal))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Interest</span>
                  <span className="font-semibold">{formatCurrency(totalInterest)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="font-semibold">{formatCurrency(processingFee)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GST on Fee</span>
                  <span className="font-semibold">{formatCurrency(gstOnFee)}</span>
                </div>
                <div className="flex justify-between border-t pt-4 text-xl font-semibold">
                  <span>Total Amount</span>
                  <span>{formatCurrency(totalAmount)}</span>
                </div>
              </div>

              <button
                onClick={() =>
                  handleExportPDF({
                    principal,
                    rate,
                    tenure,
                    processingFeePercent,
                    emi,
                    totalInterest,
                    processingFee,
                    gstOnFee,
                    totalAmount,
                    schedule,
                    formatCurrency,
                  })
                }
                disabled={
                  !(
                    principal &&
                    rate &&
                    tenure &&
                    emi &&
                    schedule &&
                    schedule.length > 0
                  )
                }
                className={`mt-8 w-full py-3 rounded text-white text-lg font-semibold
                  ${
                    principal &&
                    rate &&
                    tenure &&
                    emi &&
                    schedule &&
                    schedule.length > 0
                      ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                      : 'bg-blue-600 opacity-50 cursor-not-allowed'
                  }`}
              >
                Export PDF Summary
              </button>
            </div>
            {/* Loan Breakdown Bars */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-5">Loan Breakdown</h3>
              <div className="space-y-5 text-lg">
                {loanBreakdown.map(
                  (item, index) =>
                    totalAmount > 0 && (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-600">{item.label}</span>
                          <span className="font-medium">{formatCurrency(item.value)}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className={`${item.color} h-3 rounded-full`}
                            style={{
                              width: `${(item.value / totalAmount) * 100}%`,
                              minWidth: '2%',
                            }}
                          />
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
            {/* Important Note */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 text-lg">
              <div className="flex items-start space-x-3">
                <Info className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2 text-xl">Important Note</h4>
                  <p className="text-blue-800">
                    This is an indicative calculation. Actual EMI may vary based on the bank's
                    terms and conditions, processing fees, and other charges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Amortization Table */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Loan Amortization Schedule</h2>
          {schedule && schedule.length > 0 ? (
            <div className="overflow-auto max-h-[28rem] border rounded-lg text-lg">
              <table className="min-w-full">
                <thead className="bg-gray-100 sticky top-0">
                  <tr>
                    <th className="px-4 py-3 border-b border-gray-300 text-left">Month</th>
                    <th className="px-4 py-3 border-b border-gray-300 text-left">Principal Paid</th>
                    <th className="px-4 py-3 border-b border-gray-300 text-left">Interest Paid</th>
                    <th className="px-4 py-3 border-b border-gray-300 text-left">Closing Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="px-4 py-2">{row.month}</td>
                      <td className="px-4 py-2">{formatCurrency(row.principalPaid)}</td>
                      <td className="px-4 py-2">{formatCurrency(row.interestPaid)}</td>
                      <td className="px-4 py-2">{formatCurrency(row.closingBalance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-gray-500 text-lg">
              Please fill all loan details to see amortization schedule.
            </div>
          )}
        </div>

        {/* Quick loan options */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Loan Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-lg">
            {[
              { rate: '7.5%', name: 'Home Loan' },
              { rate: '10.5%', name: 'Personal Loan' },
              { rate: '8.5%', name: 'Mortgage Loan' },
              { rate: '15%', name: 'Business Loan' },
            ].map(({ rate, name }, i) => (
              <div
                key={i}
                className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-400 transition-colors cursor-pointer"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{rate}</div>
                <div className="text-gray-700">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
