import React from 'react';
import './index.css';

const InputBox = ({
  label,
  amount,
  onAmountChange,
  amountDisable = false,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
  currencyDisable = false,
}) => {
  return (
    <div className="input-box-container">
      <div className="input-group">
        <label htmlFor="amount" className="input-label">{label}</label>
        <input
          type="number"
          id="amount"
          placeholder="Enter Amount"
          value={amount}
          disabled={amountDisable}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          className="amount-input"
        />
      </div>
      <div className="input-group">
        <p className="currency-label">Currency Type</p>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="currency-select"
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
