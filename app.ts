import { DioAccount} from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Leandro Neves', 2, 500);
console.log(peopleAccount)



peopleAccount.getBalance()


const depositAmount = 100; // The amount you want to deposit
peopleAccount.setDeposit(depositAmount);

// const withdrawAmount = 10; // The amount you want to deposit
// peopleAccount.setWithdraw(withdrawAmount);

peopleAccount.getBalance()
