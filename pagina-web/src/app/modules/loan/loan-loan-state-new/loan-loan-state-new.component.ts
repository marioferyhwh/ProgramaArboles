import { Component, OnInit } from "@angular/core";
import { LoanStateModel } from "src/app/shared/models/loan-state.model";
import { LoanService } from "src/app/services/loan.service";

@Component({
  selector: "app-loan-loan-state-new",
  templateUrl: "./loan-loan-state-new.component.html",
  styleUrls: ["./loan-loan-state-new.component.scss"],
})
export class LoanLoanStateNewComponent implements OnInit {
  public loanState: LoanStateModel;

  constructor(private _clientService: LoanService) {}

  ngOnInit(): void {}
}
