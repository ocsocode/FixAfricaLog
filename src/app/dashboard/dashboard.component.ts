import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userName: string = 'User';
  balance: number = 0;
  recentTransactions = [];
  recentTips = [];
  lastTransactionInfo: string = '';

  constructor(private walletService: WalletService, private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.updateLastTransactionInfo();
    this.loadUserData();
  }

  updateLastTransactionInfo(): void {
    // Hypothetical logic to fetch the last transaction info, including selected PFI
    const bestProvider = this.transactionService.getLastTransactionProvider(); // Example method, replace with actual implementation
    this.lastTransactionInfo = `Last transaction used ${bestProvider.name}.`;
  }

  loadUserData() {
    this.walletService.getBalance().subscribe(balance => this.balance = balance);
    this.walletService.getRecentTransactions().subscribe(transactions => this.recentTransactions = transactions);
    this.walletService.getRecentTips().subscribe(tips => this.recentTips = tips);
  }

}
