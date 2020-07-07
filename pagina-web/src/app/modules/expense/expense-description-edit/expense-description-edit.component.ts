import { Component, OnInit } from "@angular/core";
import { ExpenseDescriptionModel } from "src/app/shared/models/expense-description.model";
import { ExpenseService } from "src/app/services/expense.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-expense-description-edit",
  templateUrl: "./expense-description-edit.component.html",
  styleUrls: ["./expense-description-edit.component.scss"],
})
export class ExpenseDescriptionEditComponent implements OnInit {
  public expenseDescription: ExpenseDescriptionModel;

  constructor(
    private _expenseService: ExpenseService,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activedRoute.params.subscribe((params) => {
      this._expenseService.getDescription(params["id"]).subscribe(
        (res) => {
          this.expenseDescription = res;
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
