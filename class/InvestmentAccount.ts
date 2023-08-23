import { DioAccount } from "./DioAccount";

export class InvestmentAccount extends DioAccount {

  constructor(name: string, accountNumber: number, balance: number) {
    super(name, accountNumber, balance);
  }

  setInvestment = (investment: number): number => {
    const addAmount: number = 10;
    this.setDeposit(investment + addAmount);
    return investment;
  };
}