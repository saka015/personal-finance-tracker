// src/components/PortfolioManagement/InsuranceDetails.tsx
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';

const InsuranceDetails = () => {
  const theme = useTheme();
  const [insurance, setInsurance] = useState({
    healthInsurance: "",
    lifeInsurance: "",
    homeInsurance: "",
    autoInsurance: "",
    otherInsurance: ""
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
      <h2 style={{ color: theme.palette.primary[300] }}>Insurance Details</h2>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Health Insurance:</label>
        <input
          type="number"
          style={inputStyle}
          value={insurance.healthInsurance}
          placeholder="Enter amount"
          onChange={(e) => setInsurance({ ...insurance, healthInsurance: e.target.value })}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Life Insurance:</label>
        <input
          type="number"
          style={inputStyle}
          value={insurance.lifeInsurance}
          placeholder="Enter amount"
          onChange={(e) => setInsurance({ ...insurance, lifeInsurance: e.target.value })}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Home Insurance:</label>
        <input
          type="number"
          style={inputStyle}
          value={insurance.homeInsurance}
          placeholder="Enter amount"
          onChange={(e) => setInsurance({ ...insurance, homeInsurance: e.target.value })}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Auto Insurance:</label>
        <input
          type="number"
          style={inputStyle}
          value={insurance.autoInsurance}
          placeholder="Enter amount"
          onChange={(e) => setInsurance({ ...insurance, autoInsurance: e.target.value })}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ color: theme.palette.grey[300], marginRight: '10px' }}>Other Insurance:</label>
        <input
          type="number"
          style={inputStyle}
          value={insurance.otherInsurance}
          placeholder="Enter amount"
          onChange={(e) => setInsurance({ ...insurance, otherInsurance: e.target.value })}
        />
      </div>
    </div>
  );
};

export default InsuranceDetails;
