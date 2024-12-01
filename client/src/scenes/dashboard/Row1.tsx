 /* eslint-disable */

 import React, { useMemo } from 'react';
 import { Theme } from '@mui/material';
 import DashboardBox from '@/components/DashboardBox';
 import { useGetKpisQuery } from '@/state/api';
 import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Area, Tooltip, Line } from 'recharts';
 import { useTheme } from '@mui/material/styles';
 import BoxHeader from '@/components/BoxHeader';
 
//  const { data, isLoading, error } = useGetKpisQuery();

// console.log("Data:", data);
// console.log("Is Loading:", isLoading);
// console.log("Error:", error);

 type Props = {};
 
 const Row1 = (props: Props) => {
   const { palette } = useTheme();
   const { data } = useGetKpisQuery();
 
   const incomeExpenses = useMemo(() => {
     return (
       data &&
       data[0]?.monthlyData.map(({ month, incomeDetails, expenseDetails }) => {
         return {
           name: month.substring(0, 3),
           income: incomeDetails,
           expenses: expenseDetails,
         };
       })
     );
   }, [data]);
 
   return (
     <>
       {/* Chart for Income and Expenses */}
       <DashboardBox gridArea="a">
         <BoxHeader 
           title="Income and Expenses"
           subtitle="Top line represents revenue, bottom line represents expenses"
           sideText="-4%"
         />
         <ResponsiveContainer width="100%" height="100%">
           <AreaChart
             data={incomeExpenses}
             margin={{ top: 15, right: 25, left: -10, bottom: 60 }}
           >
             <defs>
               <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.5} />
                 <stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0} />
               </linearGradient>
               <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="5%" stopColor={palette.error.light} stopOpacity={0.5} />
                 <stop offset="95%" stopColor={palette.error.light} stopOpacity={0} />
               </linearGradient>
             </defs>
             <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }} />
             <YAxis
               tickLine={false}
               axisLine={false}
               style={{ fontSize: "10px" }}
               domain={[8000, 23000]}
             />
             <Tooltip />
             <Area
               type="monotone"
               dataKey="income"
               stroke={palette.primary.main}
               fillOpacity={1}
               fill="url(#colorIncome)"
             />
             <Area
               type="monotone"
               dataKey="expenses"
               stroke={palette.error.main}
               fillOpacity={1}
               fill="url(#colorExpenses)"
             />
           </AreaChart>
         </ResponsiveContainer>
       </DashboardBox>
 
       {/* Line Chart for Revenue and Expenses */}
       <DashboardBox gridArea="b">
         <BoxHeader 
           title="Revenue vs Expenses"
           subtitle="Detailed comparison of revenue and expenses"
           sideText="-4%"
         />
         <ResponsiveContainer width="100%" height="100%">
           <AreaChart
             data={incomeExpenses}
             margin={{ top: 15, right: 25, left: -10, bottom: 60 }}
           >
             <defs>
               <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="5%" stopColor={palette.success.light} stopOpacity={0.5} />
                 <stop offset="95%" stopColor={palette.success.light} stopOpacity={0} />
               </linearGradient>
               <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="5%" stopColor={palette.error.light} stopOpacity={0.5} />
                 <stop offset="95%" stopColor={palette.error.light} stopOpacity={0} />
               </linearGradient>
             </defs>
             <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }} />
             <YAxis yAxisId="left" tickLine={false} axisLine={false} style={{ fontSize: "10px" }} />
             <YAxis yAxisId="right" orientation="right" tickLine={false} axisLine={false} style={{ fontSize: "10px" }} />
             <Tooltip />
             <Line
               yAxisId="left"
               type="monotone"
               dataKey="income"
               stroke={palette.success.main}
               dot={true}
             />
             <Line
               yAxisId="right"
               type="monotone"
               dataKey="expenses"
               stroke={palette.error.main}
               dot={true}
             />
           </AreaChart>
         </ResponsiveContainer>
       </DashboardBox>
 
       {/* Placeholder for future content */}
       <DashboardBox gridArea="c"></DashboardBox>
     </>
   );
 };
 
 export default Row1;
 
 /* eslint-disable */


//  import React, { useMemo } from 'react';
// import { useTheme } from '@mui/material/styles';
// import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Area, Tooltip } from 'recharts';
// import DashboardBox from '@/components/DashboardBox';
// import BoxHeader from '@/components/BoxHeader';
// import { useGetKpisQuery } from '@/state/api';
// import { GetKpisResponse, MonthlyFinancialData } from '@/state/types';

// const Row1 = () => {
//   const { palette } = useTheme();
//   const { data } = useGetKpisQuery();

//   // Ensure the data is an array and check if there is at least one response
//   const monthlyData = useMemo(() => {
//     if (data && Array.isArray(data) && data.length > 0) {
//       return data[0].monthlyData; // Assuming you only need the first item from the array
//     }
//     return []; // Return an empty array if no data is found
//   }, [data]);

//   // Transform the data into a format compatible with the chart
//   const incomeExpenses = useMemo(() => {
//     return (
//       monthlyData &&
//       monthlyData.map(({ month, incomeDetails, expenseDetails }) => {
//         return {
//           name: month.substring(0, 3), // Display the first 3 characters of the month
//           totalIncome: incomeDetails.totalIncome,
//           totalExpenses: expenseDetails.totalExpenses,
//         };
//       })
//     );
//   }, [monthlyData]);

//   return (
//     <>
//       <DashboardBox gridArea="a">
//         <BoxHeader
//           title="Income and Expenses"
//           subtitle="Top line represents total income, bottom line represents total expenses"
//           sideText="-4%"
//         />
//         <ResponsiveContainer width="100%" height="100%">
//           <AreaChart
//             data={incomeExpenses}
//             margin={{
//               top: 15,
//               right: 25,
//               left: -10,
//               bottom: 60,
//             }}
//           >
//             <defs>
//               <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor={palette.success.main} stopOpacity={0.5} />
//                 <stop offset="95%" stopColor={palette.success.main} stopOpacity={0} />
//               </linearGradient>
//               <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor={palette.error.main} stopOpacity={0.5} />
//                 <stop offset="95%" stopColor={palette.error.main} stopOpacity={0} />
//               </linearGradient>
//             </defs>

//             <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }} />
//             <YAxis
//               tickLine={false}
//               axisLine={{ strokeWidth: "0" }}
//               style={{ fontSize: "10px" }}
//               domain={[0, 'auto']}
//             />
//             <Tooltip />
//             <Area
//               type="monotone"
//               dataKey="totalIncome"
//               dot={true}
//               stroke={palette.success.main}
//               fillOpacity={1}
//               fill="url(#colorIncome)"
//             />
//             <Area
//               type="monotone"
//               dataKey="totalExpenses"
//               dot={true}
//               stroke={palette.error.main}
//               fillOpacity={1}
//               fill="url(#colorExpenses)"
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       </DashboardBox>

//       <DashboardBox gridArea="b">
//         <BoxHeader
//           title="Income and Expenses"
//           subtitle="Top line represents total income, bottom line represents total expenses"
//           sideText="-4%"
//         />
//         <ResponsiveContainer width="100%" height="100%">
//           <AreaChart
//             data={incomeExpenses}
//             margin={{
//               top: 15,
//               right: 25,
//               left: -10,
//               bottom: 60,
//             }}
//           >
//             <defs>
//               <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor={palette.success.main} stopOpacity={0.5} />
//                 <stop offset="95%" stopColor={palette.success.main} stopOpacity={0} />
//               </linearGradient>
//               <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor={palette.error.main} stopOpacity={0.5} />
//                 <stop offset="95%" stopColor={palette.error.main} stopOpacity={0} />
//               </linearGradient>
//             </defs>

//             <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }} />
//             <YAxis
//               yAxisId="left"
//               tickLine={false}
//               axisLine={false}
//               style={{ fontSize: "10px" }}
//             />
//             <YAxis
//               yAxisId="right"
//               orientation="right"
//               tickLine={false}
//               axisLine={false}
//               style={{ fontSize: "10px" }}
//             />
//             <Tooltip />
//             <Area
//               type="monotone"
//               dataKey="totalIncome"
//               dot={true}
//               stroke={palette.success.main}
//               fillOpacity={1}
//               fill="url(#colorIncome)"
//             />
//             <Area
//               type="monotone"
//               dataKey="totalExpenses"
//               dot={true}
//               stroke={palette.error.main}
//               fillOpacity={1}
//               fill="url(#colorExpenses)"
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       </DashboardBox>

//       <DashboardBox gridArea="c">
//         {/* Placeholder for any additional chart or content */}
//       </DashboardBox>
//     </>
//   );
// };

// export default Row1;
