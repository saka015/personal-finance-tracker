// models/kpi.js
import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

// Load currency types for Mongoose
loadType(mongoose);

// Define schema for KPI
const Schema = mongoose.Schema;

// KPI Schema Definition
const kpiSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  monthlyData: [
    {
      month: { type: String, required: true },
      incomeDetails: {
        salary: { type: mongoose.Types.Currency, currency: 'INR' },
        rentalIncome: { type: mongoose.Types.Currency, currency: 'INR' },
        businessIncome: { type: mongoose.Types.Currency, currency: 'INR' },
        dividends: { type: mongoose.Types.Currency, currency: 'INR' },
        otherSource: { type: mongoose.Types.Currency, currency: 'INR' },
        totalIncome: { type: mongoose.Types.Currency, currency: 'INR' }
      },
      expenseDetails: {
        housing: { type: mongoose.Types.Currency, currency: 'INR' },
        utilities: { type: mongoose.Types.Currency, currency: 'INR' },
        groceries: { type: mongoose.Types.Currency, currency: 'INR' },
        transportation: { type: mongoose.Types.Currency, currency: 'INR' },
        healthcare: { type: mongoose.Types.Currency, currency: 'INR' },
        education: { type: mongoose.Types.Currency, currency: 'INR' },
        entertainment: { type: mongoose.Types.Currency, currency: 'INR' },
        otherExpenses: { type: mongoose.Types.Currency, currency: 'INR' },
        totalExpenses: { type: mongoose.Types.Currency, currency: 'INR' }
      },
      assetsAndInvestments: {
        realEstate: { type: mongoose.Types.Currency, currency: 'INR' },
        stockBond: { type: mongoose.Types.Currency, currency: 'INR' },
        retirementAccount: { type: mongoose.Types.Currency, currency: 'INR' },
        businessOwnership: { type: mongoose.Types.Currency, currency: 'INR' },
        savingsAccount: { type: mongoose.Types.Currency, currency: 'INR' },
        otherInvestments: { type: mongoose.Types.Currency, currency: 'INR' },
        totalAssets: { type: mongoose.Types.Currency, currency: 'INR' }
      },
      liabilitiesAndDebts: {
        mortgage: { type: mongoose.Types.Currency, currency: 'INR' },
        studentLoan: { type: mongoose.Types.Currency, currency: 'INR' },
        personalLoan: { type: mongoose.Types.Currency, currency: 'INR' },
        creditCardDebts: { type: mongoose.Types.Currency, currency: 'INR' },
        autoLoans: { type: mongoose.Types.Currency, currency: 'INR' },
        otherLiabilities: { type: mongoose.Types.Currency, currency: 'INR' },
        totalLiabilities: { type: mongoose.Types.Currency, currency: 'INR' }
      },
      emergencyFund: {
        amount: { type: mongoose.Types.Currency, currency: 'INR' },
        target: { type: mongoose.Types.Currency, currency: 'INR' },
        monthsOfExpenses: { type: String }
      },
      insuranceDetails: {
        healthInsurance: { type: mongoose.Types.Currency, currency: 'INR' },
        lifeInsurance: { type: mongoose.Types.Currency, currency: 'INR' },
        homeInsurance: { type: mongoose.Types.Currency, currency: 'INR' },
        autoInsurance: { type: mongoose.Types.Currency, currency: 'INR' },
        otherInsurance: { type: mongoose.Types.Currency, currency: 'INR' },
        totalInsurance: { type: mongoose.Types.Currency, currency: 'INR' }
      },
      retirementPlan: {
        retirementSavings: { type: mongoose.Types.Currency, currency: 'INR' },
        pensionPlan: { type: mongoose.Types.Currency, currency: 'INR' },
        expectedRetirementAge: { type: Number },
        currentAge: { type: Number },
        monthlyContribution: { type: mongoose.Types.Currency, currency: 'INR' },
        totalRetirementSavings: { type: mongoose.Types.Currency, currency: 'INR' }
      }
    }
  ]
});

// Export KPI model
export default mongoose.model('KPI', kpiSchema);
