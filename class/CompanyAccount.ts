import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  private loan: number = 0;

  constructor(name: string, accountNumber: number, balance: number) {
    super(name, accountNumber, balance);
  }

  getLoan = (loan: number): number => {
    this.setDeposit(loan);
    console.log(
      "You loan " +
        "R$" +
        loan +
        ". You better pay as established in the contract kkk"
    );
    return loan;
  };
}
