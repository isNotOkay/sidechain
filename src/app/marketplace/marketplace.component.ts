import { Component, OnInit } from '@angular/core';
import { Account, AccountService } from '../account.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {
  public account: Account;

  constructor(private accountService: AccountService) {
  }

  public ngOnInit(): void {
    this.account = this.accountService.account;
  }

}
