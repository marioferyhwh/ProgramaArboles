import { Component, OnInit } from "@angular/core";
import { ExpenseDescriptionModel } from "src/app/shared/models/expense-description.model";
import { ExpenseService } from "src/app/services/expense.service";

@Component({
  selector: "app-expense-description-list",
  templateUrl: "./expense-description-list.component.html",
  styleUrls: ["./expense-description-list.component.scss"],
})
export class ExpenseDescriptionListComponent implements OnInit {
  public expenseDescriptions: ExpenseDescriptionModel[];

  constructor(private _expenseService: ExpenseService) {}

  ngOnInit(): void {
    this._expenseService.getDescriptionList(1).subscribe(
      (res) => {
        this.expenseDescriptions = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onNew() {
    this._expenseService.routeNewdescription();
  }
}
