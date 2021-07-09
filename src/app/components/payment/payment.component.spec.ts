import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core'
import { PaymentComponent } from './payment.component';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [ PaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('form invalid by toAccount empty', () => {
    component.form.controls.toAccount.setValue('');
    expect(component.form.valid).toBeFalsy();
  });
  
  it('form invalid by amount empty', () => {
    component.form.controls.amount.setValue('');
    expect(component.form.valid).toBeFalsy();
  });

  it('form invalid by amount negative', () => {
    component.form.controls.amount.setValue(-3);
    expect(component.form.valid).toBeFalsy();
  });

  it('form invalid by amount greater than total balance 500 euro', () => {
    component.payment.balance = 30000;
    component.form.controls.amount.setValue(31000);
    expect(component.form.valid).toBeFalsy();
  });

  it('form valid', () => {
    component.form.controls.toAccount.setValue('Backbase');
    component.form.controls.amount.setValue(100);
    expect(component.form.valid).toBeTruthy();
  });
});
