export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Name has been changed");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (): void => {
    if (this.validadeStatus()) {
      console.log("You deposit");
    }
  };

  withdraw = (): void => {
    console.log("You withdraw");
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  private validadeStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Invalid Account');
  };
}
