import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import axios from 'axios';

type Assets = {
  realEstate: number;
  stocksBonds: number;
  retirementAccounts: number;
  businessOwnership: number;
  savingsAccount: number;
  otherInvestments: number;
};

const AssetsAndInvestments = () => {
  const theme = useTheme();
  const [assets, setAssets] = useState<Assets>({
    realEstate: 0,
    stocksBonds: 0,
    retirementAccounts: 0,
    businessOwnership: 0,
    savingsAccount: 0,
    otherInvestments: 0,
  });

  const inputStyle: React.CSSProperties = {
    padding: '2px', // Further reduced padding
    borderRadius: '3px', // Smaller border radius
    border: `1px solid ${theme.palette.grey[400]}`,
    outline: 'none',
    width: '100px', // Smaller width for inputs
    fontSize: '0.625rem', // Smaller font size
    color: 'white',
    backgroundColor: theme.palette.background.default,
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    color: 'white',
    fontSize: '0.625rem', // Smaller font size
    marginRight: '6px', // Smaller margin to place text and input side by side
    display: 'inline-block',
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row', // Side-by-side layout
    alignItems: 'center', // Align items vertically centered
    gap: '6px', // Reduced gap between label and input
    marginBottom: '8px', // Reduced bottom margin
    width: '100%',
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Assets) => {
    let value = e.target.value;

    if (value) {
      value = value.replace(/[^\d.]/g, ''); // Allows only numbers and one decimal point
    }

    if (value && value.startsWith('0') && !value.startsWith('0.') && value.length > 1) {
      value = value.substring(1); // Remove leading zero
    }

    setAssets({
      ...assets,
      [field]: value === '' ? 0 : parseFloat(value), // Parse to float for decimal handling
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/portfolio/save', assets);
      console.log('Portfolio saved successfully:', response.data);
    } catch (error) {
      console.error('Error saving portfolio:', error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}> {/* Further reduced max width */}
      <h2 style={{ color: theme.palette.primary[300], marginBottom: '12px', fontSize: '1rem' }}>
        Assets and Investments
      </h2>

      <form onSubmit={handleSubmit}>
        <div style={containerStyle}>
          <label style={labelStyle}>Real Estate:</label>
          <input
            type="text"
            style={inputStyle}
            value={assets.realEstate}
            placeholder="Amount"
            onChange={(e) => handleInputChange(e, 'realEstate')}
          />
        </div>

        <div style={containerStyle}>
          <label style={labelStyle}>Stocks/Bonds:</label>
          <input
            type="text"
            style={inputStyle}
            value={assets.stocksBonds}
            placeholder="Amount"
            onChange={(e) => handleInputChange(e, 'stocksBonds')}
          />
        </div>

        <div style={containerStyle}>
          <label style={labelStyle}>Retirement:</label>
          <input
            type="text"
            style={inputStyle}
            value={assets.retirementAccounts}
            placeholder="Amount"
            onChange={(e) => handleInputChange(e, 'retirementAccounts')}
          />
        </div>

        <div style={containerStyle}>
          <label style={labelStyle}>Business:</label>
          <input
            type="text"
            style={inputStyle}
            value={assets.businessOwnership}
            placeholder="Amount"
            onChange={(e) => handleInputChange(e, 'businessOwnership')}
          />
        </div>

        <div style={containerStyle}>
          <label style={labelStyle}>Savings:</label>
          <input
            type="text"
            style={inputStyle}
            value={assets.savingsAccount}
            placeholder="Amount"
            onChange={(e) => handleInputChange(e, 'savingsAccount')}
          />
        </div>

        <div style={containerStyle}>
          <label style={labelStyle}>Other:</label>
          <input
            type="text"
            style={inputStyle}
            value={assets.otherInvestments}
            placeholder="Amount"
            onChange={(e) => handleInputChange(e, 'otherInvestments')}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '4px 8px', // Reduced padding for the button
            backgroundColor: theme.palette.primary.main,
            color: 'black',
            border: 'none',
            borderRadius: '3px', // Smaller border radius
            marginTop: '10px',
            width: '100%',
            fontSize: '0.625rem', // Smaller font size for the button
          }}
        >
          Save Portfolio
        </button>
      </form>
    </div>
  );
};

export default AssetsAndInvestments;
