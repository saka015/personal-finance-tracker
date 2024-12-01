// src/components/PortfolioManagement/RetirementPlan.tsx
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';

const RetirementPlan = () => {
  const theme = useTheme();
  const [retirement, setRetirement] = useState({
    retirementSavings: "",
    pensionPlan: "",
    expectedRetirementAge: "",
    currentAge: "",
    monthlyContribution: ""
  });

  const inputStyle = {
    padding: '6px',
    borderRadius: '4px',
    border: `1px solid ${theme.palette.grey[400]}`,
    outline: 'none',
    width: '120px'
  };

  return (
    <div>
      <h2 style={{ color: theme.palette.primary[300] }}>Retirement Plan</h2>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Retirement Savings:</label>
        <input
          type="number"
          style={inputStyle}
          value={retirement.retirementSavings}
          placeholder="Enter amount"
          onChange={(e) => setRetirement({ ...retirement, retirementSavings: e.target.value })}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Pension Plan:</label>
        <input
          type="number"
          style={inputStyle}
          value={retirement.pensionPlan}
          placeholder="Enter amount"
          onChange={(e) => setRetirement({ ...retirement, pensionPlan: e.target.value })}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Expected Retirement Age:</label>
        <input
          type="number"
          style={inputStyle}
          value={retirement.expectedRetirementAge}
          placeholder="Enter age"
          onChange={(e) => setRetirement({ ...retirement, expectedRetirementAge: e.target.value })}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Current Age:</label>
        <input
          type="number"
          style={inputStyle}
          value={retirement.currentAge}
          placeholder="Enter age"
          onChange={(e) => setRetirement({ ...retirement, currentAge: e.target.value })}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Monthly Contribution:</label>
        <input
          type="number"
          style={inputStyle}
          value={retirement.monthlyContribution}
          placeholder="Enter amount"
          onChange={(e) => setRetirement({ ...retirement, monthlyContribution: e.target.value })}
        />
      </div>
    </div>
  );
};

export default RetirementPlan;
