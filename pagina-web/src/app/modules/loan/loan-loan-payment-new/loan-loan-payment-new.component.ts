import { Component, OnInit } from "@angular/core";
import { LoanPaymentModel } from "src/app/shared/models/loan-payment.model";
import { LoanService } from "src/app/services/loan.service";

@Component({
  selector: "app-loan-loan-payment-new",
  templateUrl: "./loan-loan-payment-new.component.html",
  styleUrls: ["./loan-loan-payment-new.component.scss"],
})
export class LoanLoanPaymentNewComponent implements OnInit {
  public loanPayment: LoanPaymentModel;

  constructor(private _clientService: LoanService) {}

  ngOnInit(): void {
    this.loanPayment = new LoanPaymentModel();
  }
}
