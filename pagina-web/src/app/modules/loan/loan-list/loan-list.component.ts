import { Component, OnInit } from "@angular/core";
import { LoanModel } from "src/app/shared/models/loan.model";
import { LoanService } from "src/app/services/loan.service";

@Component({
  selector: "app-loan-list",
  templateUrl: "./loan-list.component.html",
  styleUrls: ["./loan-list.component.scss"],
})
export class LoanListComponent implements OnInit {
  public loans: LoanModel[];

  constructor(private _loanService: LoanService) {}

  ngOnInit(): void {
    this._loanService.getList(1).subscribe(
      (res) => {
        this.loans = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
