import { Component, OnInit } from "@angular/core";
import { ExpenseModel } from "src/app/shared/models/expense.model";
import { ExpenseService } from "src/app/services/expense.service";
import { GlobalService } from "src/app/services/global.service";

@Component({
  selector: "app-expense-list",
  templateUrl: "./expense-list.component.html",
  styleUrls: ["./expense-list.component.scss"],
})
export class ExpenseListComponent implements OnInit {
  public expenses: ExpenseModel[];

  constructor(
    private _expenseService: ExpenseService,
    private _globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    let c = this._globalService.getVarCollection;
    this._expenseService.getList(c.id).subscribe(
      (res) => {
        this.expenses = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onNew() {
    this._expenseService.routeNew();
  }
}
