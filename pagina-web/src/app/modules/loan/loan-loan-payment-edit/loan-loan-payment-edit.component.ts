import { Component, OnInit } from "@angular/core";
import { LoanPaymentModel } from "src/app/shared/models/loan-payment.model";
import { LoanService } from "src/app/services/loan.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-loan-loan-payment-edit",
  templateUrl: "./loan-loan-payment-edit.component.html",
  styleUrls: ["./loan-loan-payment-edit.component.scss"],
})
export class LoanLoanPaymentEditComponent implements OnInit {
  public loanPayment: LoanPaymentModel;

  constructor(
    private _loanService: LoanService,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activedRoute.params.subscribe((params) => {
      this._loanService.getLoanPayment(params["id"]).subscribe(
        (res) => {
          this.loanPayment = res;
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
