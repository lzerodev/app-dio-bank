import { DioAccount} from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'

// const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Leandro Neves', 2);
// console.log(peopleAccount)
// peopleAccount.deposit()
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 13)
companyAccount.deposit()
console.log(companyAccount)