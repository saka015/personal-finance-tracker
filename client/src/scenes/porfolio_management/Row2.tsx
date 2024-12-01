import React from 'react';
import DashboardBox from '@/components/DashboardBox';
import EmergencyFund from './EmergencyFund';
import InsuranceDetails from './InsuranceDetails';
import RetirementPlan from './RetirementPlan';

const Row2 = () => {
  return (
    <>
      <DashboardBox gridArea="d">
        <EmergencyFund />
      </DashboardBox>
      <DashboardBox gridArea="e">
        <InsuranceDetails />
      </DashboardBox>
      <DashboardBox gridArea="f">
        <RetirementPlan />
      </DashboardBox>
    </>
  );
};

export default Row2;
