// src/components/PortfolioManagement/LiabilitiesAndDebts.tsx
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';

const LiabilitiesAndDebts = () => {
  const theme = useTheme();
  const [liabilities, setLiabilities] = useState({
    mortgage: "",
    studentLoans: "",
    personalLoans: "",
    creditCardDebt: "",
    autoLoans: "",
    otherLiabilities: ""
  });

  const inputStyle = {
    padding: '6px',
    borderRadius: '4px',
    border: `1px solid ${theme.palette.grey[400]}`,
    outline: 'none',
    width: '120px'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setLiabilities({
      ...liabilities,
      [field]: e.target.value // Update specific field value
    });
  };

  return (
    <div>
      <h2 style={{ color: theme.palette.primary[300] }}>Liabilities and Debts</h2>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Mortgage:</label>
        <input
          type="number"
          style={inputStyle}
          value={liabilities.mortgage}
          placeholder="Enter amount"
          onChange={(e) => handleInputChange(e, 'mortgage')}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Student Loans:</label>
        <input
          type="number"
          style={inputStyle}
          value={liabilities.studentLoans}
          placeholder="Enter amount"
          onChange={(e) => handleInputChange(e, 'studentLoans')}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Personal Loans:</label>
        <input
          type="number"
          style={inputStyle}
          value={liabilities.personalLoans}
          placeholder="Enter amount"
          onChange={(e) => handleInputChange(e, 'personalLoans')}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Credit Card Debt:</label>
        <input
          type="number"
          style={inputStyle}
          value={liabilities.creditCardDebt}
          placeholder="Enter amount"
          onChange={(e) => handleInputChange(e, 'creditCardDebt')}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Auto Loans:</label>
        <input
          type="number"
          style={inputStyle}
          value={liabilities.autoLoans}
          placeholder="Enter amount"
          onChange={(e) => handleInputChange(e, 'autoLoans')}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Other Liabilities:</label>
        <input
          type="number"
          style={inputStyle}
          value={liabilities.otherLiabilities}
          placeholder="Enter amount"
          onChange={(e) => handleInputChange(e, 'otherLiabilities')}
        />
      </div>
    </div>
  );
};

export default LiabilitiesAndDebts;
