import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { LogoComponent } from './library/bb-ui/components/logo/logo.component';
import { FooterComponent } from './library/bb-ui/components/footer/footer.component';
import { SubmitButtonComponent } from './library/bb-ui/components/submit-button/submit-button.component';
import { FilterComponent } from './library/bb-ui/components/filter/filter.component';
import { TransactionItemComponent } from './library/bb-ui/components/transaction-item/transaction-item.component';
import { PaymentComponent } from './components/payment/payment.component';
import { TransactionlistComponent } from './components/transactionlist/transactionlist.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    LogoComponent,
    FooterComponent,
    SubmitButtonComponent,
    FilterComponent,
    TransactionItemComponent,
    PaymentComponent,
    TransactionlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
