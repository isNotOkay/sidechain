import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { Account, AccountService } from './account.service';

enum AuthenticationButtonName {
  login = 'Login',
  logout = 'Logout'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public authenticationButtonName: string = AuthenticationButtonName.login;
  public account: Account;

  constructor(private accountService: AccountService) {
    console.log('environment apiURL: ', environment.apiURL);
  }

  public onAuthenticationButtonClick(): void {
    if (this.account) {
      this.logout();
    } else {
      this.login();
    }
  }

  public login(): void {
    this.accountService.login()
      .then((account: Account) => {
        this.account = account;
        this.authenticationButtonName = AuthenticationButtonName.logout;
      })
      .catch(console.error);
  }

  public logout(): void {
    this.accountService.logout()
      .then(() => {
        this.authenticationButtonName = AuthenticationButtonName.login;
      })
      .catch(console.error);
    this.account = undefined;
  }

}
