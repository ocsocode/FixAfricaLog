import { Component, OnInit } from '@angular/core';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  balance: number = 0;
  transactions = [];

  constructor(private walletService: WalletService) {}

  ngOnInit(): void {
    this.loadWalletData();
  }

  loadWalletData() {
    this.walletService.getBalance().subscribe(balance => this.balance = balance);
    this.walletService.getTransactionHistory().subscribe(transactions => this.transactions = transactions);
  }

  sendFunds() {
    // Logic to send funds
  }

  receiveFunds() {
    // Logic to receive funds
  }
}
