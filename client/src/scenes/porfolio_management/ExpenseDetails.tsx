// src/components/PortfolioManagement/ExpenseDetails.tsx
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';

const ExpenseDetails = () => {
  const theme = useTheme();
  const [expenses, setExpenses] = useState({
    housing: "",
    utilities: "",
    groceries: "",
    transportation: "",
    healthcare: "",
    education: "",
    entertainment: "",
    otherExpenses: ""
  });

  const handleChange = (field: string, value: string) => {
    setExpenses((prevExpenses) => ({
      ...prevExpenses,
      [field]: value
    }));
  };

  const inputStyle = {
    padding: '6px',
    borderRadius: '4px',
    border: `1px solid ${theme.palette.grey[400]}`,
    outline: 'none',
    width: '100px'
  };

  return (
    <div>
      <h2 style={{ color: theme.palette.primary[300] }}>Expense Details</h2>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Housing:</label>
        <input
          type="number"
          style={inputStyle}
          value={expenses.housing}
          placeholder="Enter amount"
          onChange={(e) => handleChange('housing', e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Utilities:</label>
        <input
          type="number"
          style={inputStyle}
          value={expenses.utilities}
          placeholder="Enter amount"
          onChange={(e) => handleChange('utilities', e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Groceries:</label>
        <input
          type="number"
          style={inputStyle}
          value={expenses.groceries}
          placeholder="Enter amount"
          onChange={(e) => handleChange('groceries', e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Transportation:</label>
        <input
          type="number"
          style={inputStyle}
          value={expenses.transportation}
          placeholder="Enter amount"
          onChange={(e) => handleChange('transportation', e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Healthcare:</label>
        <input
          type="number"
          style={inputStyle}
          value={expenses.healthcare}
          placeholder="Enter amount"
          onChange={(e) => handleChange('healthcare', e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Education:</label>
        <input
          type="number"
          style={inputStyle}
          value={expenses.education}
          placeholder="Enter amount"
          onChange={(e) => handleChange('education', e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Entertainment:</label>
        <input
          type="number"
          style={inputStyle}
          value={expenses.entertainment}
          placeholder="Enter amount"
          onChange={(e) => handleChange('entertainment', e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Other Expenses:</label>
        <input
          type="number"
          style={inputStyle}
          value={expenses.otherExpenses}
          placeholder="Enter amount"
          onChange={(e) => handleChange('otherExpenses', e.target.value)}
        />
      </div>
    </div>
  );
};

export default ExpenseDetails;
