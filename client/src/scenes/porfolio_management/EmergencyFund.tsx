// src/components/PortfolioManagement/EmergencyFund.tsx
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';

const EmergencyFund = () => {
  const theme = useTheme();
  const [fund, setFund] = useState({
    amount: "",
    targetAmount: "",
    monthsOfExpenses: ""
  });

  const inputStyle = {
    padding: '6px',
    borderRadius: '4px',
    border: `1px solid ${theme.palette.grey[400]}`,
    outline: 'none',
    width: '100px'
  };

  return (
    <div>
      <h2 style={{ color: theme.palette.primary[300] }}>Emergency Fund</h2>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Amount Saved:</label>
        <input
          type="number"
          style={inputStyle}
          value={fund.amount}
          placeholder="Enter amount"
          onChange={(e) => setFund({ ...fund, amount: e.target.value })}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Target Amount:</label>
        <input
          type="number"
          style={inputStyle}
          value={fund.targetAmount}
          placeholder="Enter target"
          onChange={(e) => setFund({ ...fund, targetAmount: e.target.value })}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Months of Expenses:</label>
        <input
          type="number"
          style={inputStyle}
          value={fund.monthsOfExpenses}
          placeholder="Enter months"
          onChange={(e) => setFund({ ...fund, monthsOfExpenses: e.target.value })}
        />
      </div>
    </div>
  );
};

export default EmergencyFund;
