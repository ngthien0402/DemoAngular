import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

declare var jQuery:any

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  providers: [TransactionService],
})
export class PaymentComponent implements OnInit {
  payment = {
    fromAccount: 'My Personal Account: € 50000',
    balance: 50000
  };
  form: FormGroup | undefined;
  transactionlist: any = []

  constructor(
    private transactionService: TransactionService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      toAccount: [null, Validators.required],
      amount: [null, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit(event: Event) {
    console.log(this.form)
    if (this.form.valid) {
      jQuery('#confirmation').modal('show')
    } else {
      this.validateAllFormFields(this.form)
    }
  }

  onConfirm() {
    const payment = { 
      toAccount: this.form.controls.toAccount.value,
      amount: this.form.controls.amount.value
    }
    this.transactionService.addTransactions(payment)
      .then(() => {
        jQuery('#confirmation').modal('hide')
        return this.transactionService.getTransactions().then(response => this.transactionlist = response);
      })
      .then(() => {
        const balance = this.payment.balance - this.form.controls.amount.value
        this.payment = {
          fromAccount: `My Personal Account: € ${ balance }`,
          balance: balance
        };
        this.form.reset()
      });
  }

  closeModal() {
    jQuery('#confirmation').modal('hide')
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field)
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true })
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control)
      }
    })
  }
}

