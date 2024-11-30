import React, { useState } from "react";
import useCurrency from "./useCurrency";
import InputBox from "./InputBox";
import './index.css';

const App = () => {
  const [from, setFrom] = useState("usd");
  const [amount, setAmount] = useState(0);
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Currency Converter</h1>
      <form
        className="converter-form"
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={options}
          selectCurrency={from}
          onCurrencyChange={(currency) => setFrom(currency)}
          onAmountChange={(value) => setAmount(value)}
        />
        <button type="button" onClick={swap} className="swap-button">
          Swap
        </button>
        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          selectCurrency={to}
          onCurrencyChange={(currency) => setTo(currency)}
        />
        <button type="submit" className="convert-button">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  );
};

export default App;
