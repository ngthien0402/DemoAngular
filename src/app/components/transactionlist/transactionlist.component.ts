import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-transactionlist',
  templateUrl: './transactionlist.component.html',
  styleUrls: ['./transactionlist.component.scss']
})

export class TransactionlistComponent implements OnInit {
  @Input() transactions: any;
  filteredTransactions: any;

  constructor() {}

  getTextChange(text: string) {
    if (text) {
      this.filteredTransactions = this.transactions.filter(item => 
        item.merchant.name.indexOf(text) !== -1
      )
    } else {
      this.filteredTransactions = this.transactions
    }
  }

  getColorText(amount: number) {
    return amount < 0 ? 'color-red' : 'color-green'
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.filteredTransactions = this.transactions
    }, 100);
  }
}
