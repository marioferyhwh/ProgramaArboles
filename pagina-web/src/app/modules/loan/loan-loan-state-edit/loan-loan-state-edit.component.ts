import { Component, OnInit } from "@angular/core";
import { LoanStateModel } from "src/app/shared/models/loan-state.model";
import { LoanService } from "src/app/services/loan.service";

@Component({
  selector: "app-loan-loan-state-edit",
  templateUrl: "./loan-loan-state-edit.component.html",
  styleUrls: ["./loan-loan-state-edit.component.scss"],
})
export class LoanLoanStateEditComponent implements OnInit {
  public loanState: LoanStateModel;

  constructor(private _clientService: LoanService) {}

  ngOnInit(): void {}
}
