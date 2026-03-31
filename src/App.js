// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from "react";

function App() {

  const [rates, setRates] = useState(null);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/PKR")
      .then((response) => response.json())
      .then((data) => {
        setRates(data.rates);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">

      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform hover:scale-105 transition-transform duration-300">

        <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-700">
          💱 Live Exchange Rates
        </h1>

        {!rates ? (
          <h2 className="text-center text-lg font-semibold text-gray-600 animate-pulse">
            Fetching live rates...
          </h2>
        ) : (

          <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-purple-200 text-purple-900 uppercase text-sm">
                <th className="p-3 text-left">Currency</th>
                <th className="p-3 text-right">Rate</th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-purple-50 hover:bg-purple-100 transition-colors">
                <td className="p-3 font-medium">USD</td>
                <td className="p-3 text-right font-semibold">{rates.USD}</td>
              </tr>
              <tr className="bg-white hover:bg-purple-50 transition-colors">
                <td className="p-3 font-medium">EUR</td>
                <td className="p-3 text-right font-semibold">{rates.EUR}</td>
              </tr>
              <tr className="bg-purple-50 hover:bg-purple-100 transition-colors">
                <td className="p-3 font-medium">GBP</td>
                <td className="p-3 text-right font-semibold">{rates.GBP}</td>
              </tr>
            </tbody>
          </table>

        )}

        <div className="mt-6 text-center">
          <button 
            className="bg-purple-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-purple-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            🔄 Refresh Rates
          </button>
        </div>

      </div>

    </div>
  );
}

export default App;