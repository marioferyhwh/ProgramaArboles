import { Component, OnInit } from "@angular/core";
import { LoanService } from "src/app/services/loan.service";
import { LoanModel } from "src/app/shared/models/loan.model";
import { GlobalService } from "src/app/services/global.service";

@Component({
  selector: "app-loan-list",
  templateUrl: "./loan-list.component.html",
  styleUrls: ["./loan-list.component.scss"],
})
export class LoanListComponent implements OnInit {
  public loans: LoanModel[];

  constructor(
    private _loanService: LoanService,
    private _globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    let c = this._globalService.varCollection;
    this._loanService.getList(c.id).subscribe(
      (res) => {
        this.loans = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onNew() {
    this._loanService.routeNew();
  }
}
