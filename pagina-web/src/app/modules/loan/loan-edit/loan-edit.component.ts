import { Component, OnInit } from "@angular/core";
import { LoanModel } from "src/app/shared/models/loan.model";
import { LoanService } from "src/app/services/loan.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-loan-edit",
  templateUrl: "./loan-edit.component.html",
  styleUrls: ["./loan-edit.component.scss"],
})
export class LoanEditComponent implements OnInit {
  public loan: LoanModel;

  constructor(
    private _loanService: LoanService,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activedRoute.params.subscribe((params) => {
      this._loanService.get(params["id"]).subscribe(
        (res) => {
          this.loan = res;
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
