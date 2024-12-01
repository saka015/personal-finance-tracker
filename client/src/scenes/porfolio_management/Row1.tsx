import React from 'react';
import DashboardBox from '@/components/DashboardBox';

import IncomeDetails from './IncomeDetails';
import ExpenseDetails from './ExpenseDetails';
import AssetsAndInvestments from './AssetsAndInvestments';

const Row1 = () => {
  return (
    <>
      <DashboardBox gridArea="a">
        <IncomeDetails />
      </DashboardBox>
      <DashboardBox gridArea="b">
        <ExpenseDetails />
      </DashboardBox>
      <DashboardBox gridArea="c">
        <AssetsAndInvestments/>
      </DashboardBox>
    </>
  );
};

export default Row1;
