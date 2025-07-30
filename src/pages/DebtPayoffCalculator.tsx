import { useState } from "react";
import { Calculator } from "lucide-react";
import toWords from "number-to-words";

function numberToWords(amount) {
  if (!amount || isNaN(amount)) return "";
  const rounded = Math.round(amount);
  const words = toWords.toWords(rounded);
  return words.charAt(0).toUpperCase() + words.slice(1);
}

export default function DebtPayoffCalculator() {
  const [balance, setBalance] = useState();
  const [interestRate, setInterestRate] = useState();
  const [monthlyPayment, setMonthlyPayment] = useState();
  const [additionalMonthly, setAdditionalMonthly] = useState();
  const [lumpSum, setLumpSum] = useState();
  const [lumpSumFreq, setLumpSumFreq] = useState("everyYear");

  const [originalMonths, setOriginalMonths] = useState(null);
  const [originalInterest, setOriginalInterest] = useState("0");
  const [optimizedMonths, setOptimizedMonths] = useState(null);
  const [optimizedInterest, setOptimizedInterest] = useState("0");

  const calculatePayoff = () => {
    const monthlyRate = interestRate / 100 / 12;

    let bal1 = balance;
    let interest1 = 0;
    let m1 = 0;
    while (bal1 > 0 && m1 < 1000) {
      const int = bal1 * monthlyRate;
      const prin = monthlyPayment - int;
      if (prin <= 0) break;
      bal1 -= prin;
      interest1 += int;
      m1++;
    }

    let bal2 = balance;
    let interest2 = 0;
    let m2 = 0;
    while (bal2 > 0 && m2 < 1000) {
      const int = bal2 * monthlyRate;
      const lumpCondition =
        (lumpSumFreq === "once" && m2 === 1) ||
        (lumpSumFreq === "everyYear" && m2 % 12 === 0 && m2 !== 0) ||
        (lumpSumFreq === "2year" && m2 % 24 === 0 && m2 !== 0) ||
        (lumpSumFreq === "3year" && m2 % 36 === 0 && m2 !== 0);
      const lump = lumpCondition ? lumpSum : 0;
      const totalPayment = monthlyPayment + (additionalMonthly || 0) + lump;
      const prin = totalPayment - int;
      if (prin <= 0) break;
      bal2 -= prin;
      interest2 += int;
      m2++;
    }

    setOriginalMonths(bal1 > 0 ? "N/A" : m1);
    setOriginalInterest(bal1 > 0 ? "N/A" : interest1.toFixed(0));
    setOptimizedMonths(bal2 > 0 ? "N/A" : m2);
    setOptimizedInterest(bal2 > 0 ? "N/A" : interest2.toFixed(0));
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calculator className="h-8 w-8 text-indigo-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Debt Payoff Calculator</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Optimize your loan repayments and save on interest
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount / Outstanding Principal (₹)</label>
              <input
                type="number"
                value={balance || ""}
                onChange={(e) => setBalance(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
              {balance && <p className="text-sm text-gray-600 mt-1">{numberToWords(balance)}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (% p.a.)</label>
              <input
                type="number"
                value={interestRate || ""}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Monthly EMI (₹)</label>
              <input
                type="number"
                value={monthlyPayment || ""}
                onChange={(e) => setMonthlyPayment(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
              {monthlyPayment && <p className="text-sm text-gray-600 mt-1">{numberToWords(monthlyPayment)}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional EMI you can pay every month (₹)</label>
              <input
                type="number"
                value={additionalMonthly || ""}
                onChange={(e) => setAdditionalMonthly(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
              {additionalMonthly && <p className="text-sm text-gray-600 mt-1">{numberToWords(additionalMonthly)}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lump Sum Payment (₹)</label>
              <input
                type="number"
                value={lumpSum || ""}
                onChange={(e) => setLumpSum(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
              {lumpSum && <p className="text-sm text-gray-600 mt-1">{numberToWords(lumpSum)}</p>}
              <select
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
                value={lumpSumFreq}
                onChange={(e) => setLumpSumFreq(e.target.value)}
              >
                <option value="once">Only Once</option>
                <option value="everyYear">Every Year</option>
                <option value="2year">Every 2 Years</option>
                <option value="3year">Every 3 Years</option>
              </select>
            </div>
            <button
              onClick={calculatePayoff}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg hover:bg-indigo-700"
            >
              Calculate
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h2 className="text-xl font-semibold text-green-600 mb-2">Interest Savings</h2>
              <div className="text-3xl font-bold text-gray-900">
                ₹
                {originalInterest !== "N/A" && optimizedInterest !== "N/A"
                  ? (parseFloat(originalInterest) - parseFloat(optimizedInterest)).toLocaleString()
                  : "0"}
              </div>
              {originalInterest !== "N/A" && optimizedInterest !== "N/A" && (
                <p className="text-sm text-gray-600 mt-1">{numberToWords(parseFloat(originalInterest) - parseFloat(optimizedInterest))}</p>
              )}
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Result Summary</h3>
              <div className="space-y-3">
                <div className="border-b pb-3">
                  <h4 className="text-indigo-600 font-medium mb-1">Original Plan</h4>
                  <div className="flex justify-between"><span>Principal:</span><span className="text-right">₹{balance?.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span>Interest:</span><span className="text-right">₹{originalInterest}</span></div>
                  <div className="flex justify-between"><span>Tenure:</span><span className="text-right">{originalMonths} months</span></div>
                </div>
                <div className="pt-3">
                  <h4 className="text-green-600 font-medium mb-1">Optimized Plan</h4>
                  <div className="flex justify-between"><span>Principal:</span><span className="text-right">₹{balance?.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span>Interest:</span><span className="text-right">₹{optimizedInterest}</span></div>
                  <div className="flex justify-between"><span>Tenure:</span><span className="text-right">{optimizedMonths} months</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
