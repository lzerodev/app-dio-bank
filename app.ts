import { DioAccount} from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { InvestmentAccount } from './class/InvestmentAccount'

//People Account - PF

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Leandro Morais Neves', 2, 500);
console.log(peopleAccount)

peopleAccount.getBalance()// Show your current balance

const depositAmount = 100; // The amount you want to deposit
peopleAccount.setDeposit(depositAmount);

const withdrawAmount = 150; // The amount you want to withdraw
peopleAccount.setWithdraw(withdrawAmount);

peopleAccount.getBalance()// Show your new current balance

//Company Account - PJ

const companyAccount: CompanyAccount = new CompanyAccount('LMZ Consultoria', 5, 5000);
console.log(companyAccount);

companyAccount.getBalance()// Show your current PJ balance

const depositAmountPJ = 1000; // The amount you want to deposit in your PJ account
companyAccount.setDeposit(depositAmountPJ);

const withdrawAmountPJ = 1500; // The amount you want to withdraw from you PJ account
companyAccount.setWithdraw(withdrawAmountPJ);

const loanAmountPJ = 10000; // The amount you want to loan
companyAccount.getLoan(loanAmountPJ)

companyAccount.getBalance()// Show your new current balance



//Investment Account

const investmentAccount: InvestmentAccount = new InvestmentAccount('LMZ Consultoria', 5, 5000);
console.log(investmentAccount);

investmentAccount.getBalance()// Show your current Investment Account balance

const depositAmountInvest = 1000; // The amount you want to deposit in your Investment Account account
investmentAccount.setInvestment(depositAmountInvest);

const withdrawAmountInvest = 1500; // The amount you want to withdraw from you Investment Account account
investmentAccount.setWithdraw(withdrawAmountInvest);

investmentAccount.getBalance()// Show your new current balance