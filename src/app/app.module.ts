import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { PaymentComponent } from './components/payment/payment.component';
import { TransactionlistComponent } from './components/transactionlist/transactionlist.component';
import { BbUIModule } from './library/bb-ui/bb-ui.module';


@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    PaymentComponent,
    TransactionlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BbUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
