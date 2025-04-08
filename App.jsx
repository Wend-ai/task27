import React, { useState } from "react"; // Ensure React is imported
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is installed

function BankApp() {
  // State variables to manage balance, amount input, interest rate, and fee rate
  const [balance, setBalance] = useState(1000);
  const [amount, setAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [feeRate, setFeeRate] = useState("");

  // Function to handle deposit transactions
  const handleDeposit = () => {
    if (!isNaN(amount) && amount > 0) {
      setBalance(balance + parseFloat(amount)); // Add input amount to balance
      setAmount(""); // Clear input field
    }
  };

  // Function to handle withdrawals
  const handleWithdraw = () => {
    if (!isNaN(amount) && amount > 0) {
      const newBalance = balance - parseFloat(amount);
      setBalance(newBalance);
      setAmount("");
      if (newBalance < 0) {
        alert("Warning: Your balance is negative!"); // Alert user if balance goes negative
      }
    }
  };

  // Function to apply interest to the balance
  const handleInterest = () => {
    if (!isNaN(interestRate) && interestRate > 0) {
      setBalance(balance + (balance * parseFloat(interestRate)) / 100); // Calculate and add interest
      setInterestRate(""); // Clear input field
    }
  };

  // Function to apply bank fees
  const handleBankFee = () => {
    if (!isNaN(feeRate) && feeRate > 0) {
      setBalance(balance - (balance * parseFloat(feeRate)) / 100); // Calculate and deduct fee
      setFeeRate(""); // Clear input field
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Banking System</h2>
      <div className="card p-4 shadow-lg">
        <h3>Current Balance: ${balance.toFixed(2)}</h3>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button className="btn btn-success mt-2" onClick={handleDeposit}>
            Deposit
          </button>
          <button className="btn btn-danger mt-2 ms-2" onClick={handleWithdraw}>
            Withdraw
          </button>
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Interest Rate (%)"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
          <button className="btn btn-primary mt-2" onClick={handleInterest}>
            Add Interest
          </button>
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Bank Fee Rate (%)"
            value={feeRate}
            onChange={(e) => setFeeRate(e.target.value)}
          />
          <button className="btn btn-warning mt-2" onClick={handleBankFee}>
            Charge Bank Fee
          </button>
        </div>
      </div>
    </div>
  );
}

export default BankApp;
