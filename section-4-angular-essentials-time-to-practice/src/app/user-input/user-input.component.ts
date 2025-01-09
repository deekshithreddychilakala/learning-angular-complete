import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  constructor(private investmentService: InvestmentService) { }

  // @Output() calculate = new EventEmitter<InvestmentInput>();
  // calculate = output<InvestmentInput>();

  enteredInitialInvestment = signal(0);
  enteredAnnualInvestment = signal(0);
  enteredExpectedReturn = signal(5);
  enteredDuration = signal(10);

  onSubmit() {
    // this.calculate.emit({
    //   initialInvestment: +this.enteredInitialInvestment(),
    //   annualInvestment: +this.enteredAnnualInvestment(),
    //   expectedReturn: +this.enteredExpectedReturn(),
    //   duration: +this.enteredDuration()
    // });

    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration()
    })

    this.enteredInitialInvestment.set(0)
    this.enteredAnnualInvestment.set(0)
    this.enteredDuration.set(10)
    this.enteredExpectedReturn.set(5)
  }

}
