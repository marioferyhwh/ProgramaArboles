import { Component, OnInit } from "@angular/core";
import { LoanPaymentModel } from "src/app/shared/models/loan-payment.model";
import { LoanService } from "src/app/services/loan.service";
import { GlobalService } from "src/app/services/global.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-loan-loan-payment-list",
  templateUrl: "./loan-loan-payment-list.component.html",
  styleUrls: ["./loan-loan-payment-list.component.scss"],
})
export class LoanLoanPaymentListComponent implements OnInit {
  public loanPayments: LoanPaymentModel[];
  private _idLoan: number;

  constructor(
    private _loanService: LoanService,
    private _activedRoute: ActivatedRoute,
    private _globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._activedRoute.params.subscribe((params) => {
      this._idLoan = params["loan"];
      this._loanService.getLoanPaymentList(params["loan"]).subscribe(
        (res) => {
          this.loanPayments = res;
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  onNew() {
    this._loanService.routeNewPayment(this._idLoan);
  }
}
