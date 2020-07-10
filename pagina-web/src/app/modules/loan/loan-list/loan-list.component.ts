import { Component, OnInit } from "@angular/core";
import { LoanModel } from "src/app/shared/models/loan.model";
import { LoanService } from "src/app/services/loan.service";
import { GlobalService } from "src/app/services/global.service";

@Component({
  selector: "app-loan-list",
  templateUrl: "./loan-list.component.html",
  styleUrls: ["./loan-list.component.scss"],
})
export class LoanListComponent implements OnInit {
  public loans: LoanModel[];

  constructor /* private _loanService: LoanService,
    private _globalService: GlobalService*/() {
    console.log("sadas");
  }

  ngOnInit(): void {
    this.getData();
    console.log("sadas");
    console.log("sadas");
  }

  getData() {
    // console.log(1);
    // let c = this._globalService.getVarCollection;
    // this._loanService.getList(c.id).subscribe(
    //   (res) => {
    //     this.loans = res;
    //     console.log(res);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }

  onNew() {
    // this._loanService.routeNew();
  }
}
