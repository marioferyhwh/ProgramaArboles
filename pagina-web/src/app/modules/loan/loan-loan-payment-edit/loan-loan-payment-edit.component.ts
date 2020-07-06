import { Component, OnInit } from "@angular/core";
import { LoanPaymentModel } from "src/app/shared/models/loan-payment.model";
import { LoanService } from "src/app/services/loan.service";

@Component({
  selector: "app-loan-loan-payment-edit",
  templateUrl: "./loan-loan-payment-edit.component.html",
  styleUrls: ["./loan-loan-payment-edit.component.scss"],
})
export class LoanLoanPaymentEditComponent implements OnInit {
  public loanPayment: LoanPaymentModel;

  constructor(private _clientService: LoanService) {}

  ngOnInit(): void {}
}
