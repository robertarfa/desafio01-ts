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
    console.log('Nome alterado com sucesso!');
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (balance: number): void => {
    this.balance = balance;
    if (this.validateStatus()) {
      console.log(`Voce depositou ${balance} reais!`);
    }
  };

  withdraw = (amount: number): void => {
    if (this.validateStatus() && amount <= this.balance) {
      console.log(`Voce sacou ${amount} reais!`);
    } else {
      console.log(this.validateStatus() ? 'Saldo insuficiente!' : 'Conta inativa');
    }

  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  };
}
