import { Component, OnInit } from "@angular/core";
import { LoanStateModel } from "src/app/shared/models/loan-state.model";
import { LoanService } from "src/app/services/loan.service";

@Component({
  selector: "app-loan-loan-state-list",
  templateUrl: "./loan-loan-state-list.component.html",
  styleUrls: ["./loan-loan-state-list.component.scss"],
})
export class LoanLoanStateListComponent implements OnInit {
  public loanStates: LoanStateModel[];

  constructor(private _loanService: LoanService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._loanService.getLoanStateList(1).subscribe(
      (res) => {
        this.loanStates = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onNew() {
    this._loanService.routeNewstate();
  }
}
