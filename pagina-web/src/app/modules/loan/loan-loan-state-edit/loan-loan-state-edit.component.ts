import { Component, OnInit } from "@angular/core";
import { LoanStateModel } from "src/app/shared/models/loan-state.model";
import { LoanService } from "src/app/services/loan.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-loan-loan-state-edit",
  templateUrl: "./loan-loan-state-edit.component.html",
  styleUrls: ["./loan-loan-state-edit.component.scss"],
})
export class LoanLoanStateEditComponent implements OnInit {
  public loanState: LoanStateModel;

  constructor(
    private _loanService: LoanService,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activedRoute.params.subscribe((params) => {
      this._loanService.getLoanState(params["id"]).subscribe(
        (res) => {
          this.loanState = res;
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
