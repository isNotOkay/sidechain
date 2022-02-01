import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface Account {
  passphrase: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private _account: Account;

  constructor(private router: Router) {
  }

  public get account(): Account  {
    return this._account;
  }

  public login(): Promise<Account> {
    this._account = {
      passphrase: 'demo-passphrase'
    };
    return this.router.navigate(['marketplace']).then(() => this._account!);
  }

  public logout(): Promise<boolean> {
    this._account = undefined;
    return this.router.navigate(['home']);
  }

}
