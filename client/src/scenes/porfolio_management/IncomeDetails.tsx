// src/components/PortfolioManagement/IncomeDetails.tsx
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';

const IncomeDetails = () => {
  const theme = useTheme();
  const [income, setIncome] = useState({
    salary: "",
    businessIncome: "",
    rentalIncome: "",
    dividends: "",
    otherSources: ""
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
      <h2 style={{ color: theme.palette.primary[300] }}>Income Details</h2>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Salary:</label>
        <input
          type="number"
          style={inputStyle}
          value={income.salary}
          placeholder="Enter amount"
          onChange={(e) => setIncome({ ...income, salary: e.target.value })}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Business Income:</label>
        <input
          type="number"
          style={inputStyle}
          value={income.businessIncome}
          placeholder="Enter amount"
          onChange={(e) => setIncome({ ...income, businessIncome: e.target.value })}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Rental Income:</label>
        <input
          type="number"
          style={inputStyle}
          value={income.rentalIncome}
          placeholder="Enter amount"
          onChange={(e) => setIncome({ ...income, rentalIncome: e.target.value })}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Dividends:</label>
        <input
          type="number"
          style={inputStyle}
          value={income.dividends}
          placeholder="Enter amount"
          onChange={(e) => setIncome({ ...income, dividends: e.target.value })}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Other Sources:</label>
        <input
          type="number"
          style={inputStyle}
          value={income.otherSources}
          placeholder="Enter amount"
          onChange={(e) => setIncome({ ...income, otherSources: e.target.value })}
        />
      </div>
    </div>
  );
};

export default IncomeDetails;
