import { Component, OnInit } from "@angular/core";
import { ExpenseModel } from "src/app/shared/models/expense.model";
import { ExpenseService } from "src/app/services/expense.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-expense-edit",
  templateUrl: "./expense-edit.component.html",
  styleUrls: ["./expense-edit.component.scss"],
})
export class ExpenseEditComponent implements OnInit {
  public expense: ExpenseModel;

  constructor(
    private _expenseService: ExpenseService,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activedRoute.params.subscribe((params) => {
      this._expenseService.get(params["id"]).subscribe(
        (res) => {
          this.expense = res;
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
