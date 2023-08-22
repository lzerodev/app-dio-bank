export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  private status: boolean = true;
  deposit?: number
  withdraw?: number
  balance: number = 0;

  constructor(name: string, accountNumber: number, balance: number) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Name has been changed");
  };

  getName = (): string => {
    return this.name;
  };

  setDeposit = (deposit: number): number => {
    if (this.validateStatus()) {
      this.balance = this.balance + deposit
      console.log("You desposed " + "R$" + deposit + " to your account" );
    }
    return deposit
  };

  setWithdraw = (withdraw: number): number => {
    if (this.validateStatus() && withdraw > this.balance) {
      this.balance = this.balance - withdraw;
      console.log("You withdraw " + "R$" + withdraw);
      return withdraw;
    }
    throw new Error('Insufficient funds');
  };

  getBalance = (): void => {
    console.log("Seu saldo atual é " + this.balance);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Invalid Account');
  };
}
