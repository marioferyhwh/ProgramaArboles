import { Component, OnInit } from "@angular/core";
import { LoanPaymentModel } from "src/app/shared/models/loan-payment.model";
import { LoanService } from "src/app/services/loan.service";

@Component({
  selector: "app-loan-loan-payment-list",
  templateUrl: "./loan-loan-payment-list.component.html",
  styleUrls: ["./loan-loan-payment-list.component.scss"],
})
export class LoanLoanPaymentListComponent implements OnInit {
  public loanPayments: LoanPaymentModel[];

  constructor(private _clientService: LoanService) {}

  ngOnInit(): void {}
}
