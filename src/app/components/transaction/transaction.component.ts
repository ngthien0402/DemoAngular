import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  providers: [TransactionService]
})
export class TransactionComponent implements OnInit {
  transactions: any = [];
  constructor(
    private transactionService: TransactionService
  ) {}

  getTransactions(){
    return this.transactionService.getTransactions().then(response => {
      this.transactions = response;
    });
  }

  ngOnInit(): void {
    this.getTransactions();
  }

  saveChange() {

  }
}
