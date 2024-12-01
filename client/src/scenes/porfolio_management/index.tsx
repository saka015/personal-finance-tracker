import React from 'react';
import { Box, useMediaQuery } from '@mui/material';

import Row1 from './Row1'; // New file for row 1
import Row2 from './Row2'; // New file for row 2
import Row3 from './Row3'; // New file for row 3

const gridTemplateLargeScreens = 
`"a b c"
"a b c"
"a b c"
"a b c"
"a b c"
"d e f"
"d e f" 
"d e f"
"d e f"
"g . ."
"g . ."
"g . ."
"g . ."
"g . ."
"g . ."`
;

const gridTemplateSmallScreens = 
`"a"
"a"
"a"
"a"
"b"
"b"
"b"
"b"
"c"
"c"
"c"
"c"
"d"
"d"
"d"
"d"
"e"
"e"
"e"
"e"
"f"
"f"
"f"
"f"
"g"
"g"
"g"
"g"`
;

const PortfolioManagement = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width:900px)');
  
  return (
    <Box
      width="100%"
      height="100%"
      minHeight="100vh"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: 'repeat(3, minmax(370px, 1fr))',
              gridTemplateRows: 'repeat(12, minmax(60px, 1fr))',
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: '1fr',
              gridAutoRows: '80px',
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      {/* Row 1 */}
      <Row1 />

      {/* Row 2 */}
      <Row2 />

      {/* Row 3 */}
      <Row3 />
    </Box>
  );
};

export default PortfolioManagement;
