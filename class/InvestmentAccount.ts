import { DioAccount } from "./DioAccount";

export class InvestmentAccount extends DioAccount {
  investment: number = 0;

  constructor(name: string, accountNumber: number, balance: number) {
    super(name, accountNumber, balance);
  }

  setInvestment = (investment: number): number => {
    this.investment = investment + 10;
    this.setDeposit(this.investment);
    return investment;
  };
}