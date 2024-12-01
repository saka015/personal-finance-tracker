// export interface ExpensesByCategory{
//     salaries : number;
//     supplies : number;
//     services : number;
// }

// export interface Month{
//     id : string;
//     month : string;
//     revenue : number;
//     expenses : number;
//     nonOperationalExpenses : number;
//     OperationalExpenses : number;
// }

// export interface Day{
//     id : string;
//     date : string;
//     revenue : number;
//     expenses : number;
    
// }
// export interface GetKpisResponse{
//     id : string;
//     _id : string;
//     __v:number;
//     totalProfit: number;
//     totalRevenue: number;
//     totalExpenses: number;
//     expensesByCategory: ExpensesByCategory;
//     monthlyData : Array<Month>;
//     dailyData : Array<Day>;

// }

export interface IncomeDetails  {
    salary: number;
    rentalIncome: number;
    businessIncome: number;
    dividends: number;
    otherSource: number;
    totalIncome: number;
  };
  
export  interface ExpenseDetails  {
    housing: number;
    utilities: number;
    groceries: number;
    transportation: number;
    healthcare: number;
    education: number;
    entertainment: number;
    otherExpenses: number;
    totalExpenses: number;
  };
  
 export interface AssetsAndInvestments  {
    realEstate: number;
    stockBond: number;
    retirementAccount: number;
    businessOwnership: number;
    savingsAccount: number;
    otherInvestments: number;
    totalAssets: number;
  };
  
  export interface LiabilitiesAndDebts {
    mortgage: number;
    studentLoan: number;
    personalLoan: number;
    creditCardDebts: number;
    autoLoans: number;
    otherLiabilities: number;
    totalLiabilities: number;
  };
  
  export interface EmergencyFund  {
    amount: number;
    target: number;
    monthsOfExpenses: string; // Typically a string representation of a number
  };
  
 export interface InsuranceDetails  {
    healthInsurance: number;
    lifeInsurance: number;
    homeInsurance: number;
    autoInsurance: number;
    otherInsurance: number;
    totalInsurance: number;
  };
  
export  interface RetirementPlan  {
    retirementSavings: number;
    pensionPlan: number;
    expectedRetirementAge: number;
    currentAge: number;
    monthlyContribution: number;
    totalRetirementSavings: number;
  };
  
export  interface MonthlyFinancialData  {
    month: string; // Example: "January 2023"
    incomeDetails: IncomeDetails;
    expenseDetails: ExpenseDetails;
    assetsAndInvestments: AssetsAndInvestments;
    liabilitiesAndDebts: LiabilitiesAndDebts;
    emergencyFund: EmergencyFund;
    insuranceDetails: InsuranceDetails;
    retirementPlan: RetirementPlan;
    _id: { $oid: string };
  };
  
  // Interface for the overall response structure
  export interface GetKpisResponse {
    _id: string;
    totalProfit: number;
    revenue:number;
    totalIncome: number;
    totalExpenses: number;
    monthlyData: MonthlyFinancialData[]; // Array of MonthlyFinancialData objects
  }
  