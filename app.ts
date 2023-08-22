import { DioAccount} from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Leandro Neves', 2, 500);
console.log(peopleAccount)



peopleAccount.getBalance()// Show your current balance


const depositAmount = 100; // The amount you want to deposit
peopleAccount.setDeposit(depositAmount);

const withdrawAmount = 150; // The amount you want to withdraw
peopleAccount.setWithdraw(withdrawAmount);


peopleAccount.getBalance()// Show your new current balance
