import { Component } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent {
  amount: number = 0;
  transactionResult: string = '';

  constructor(private transactionService: TransactionService) {}

  executeTransaction(): void {
    const senderDid = 'did:example:sender'; // Replace with actual sender DID
    const receiverDid = 'did:example:receiver'; // Replace with actual receiver DID
    const result = this.transactionService.executeTransaction(this.amount, senderDid, receiverDid);
    this.transactionResult = result ? `Transaction Successful` : `Transaction Failed`;
  }
}
