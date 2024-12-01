import React from 'react';
import DashboardBox from '@/components/DashboardBox';

import LiabilitiesAndDebts from './LiabilitiesAndDebts';

const Row3 = () => {
  return (
    <>
      <DashboardBox gridArea="g">
        <LiabilitiesAndDebts />
      </DashboardBox>
   
    </>
  );
};

export default Row3;
