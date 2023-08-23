export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private status: boolean = true;
  private deposit: number = 0;
  private withdraw: number = 0;
  private balance: number = 0;

  constructor(name: string, accountNumber: number, balance: number) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  setDeposit = (deposit: number): void => {
    if (this.validateStatus()) {
      this.balance += deposit;
      console.log(
        "A deposit of " + "R$" + deposit + " was made to your account"
      );
    }
  };

  setWithdraw = (withdraw: number): number => {
    if (this.validateStatus() && withdraw <= this.balance) {
      this.balance -= withdraw;
      console.log("You withdrew " + "R$" + withdraw);
      return withdraw;
    }
    throw new Error(
      "Insufficient funds." + " R$" + withdraw + " requested to withdraw"
    );
  };

  getBalance = (): void => {
    console.log("Your current balance is " + this.balance);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Invalid Account");
  };
}
