import { Component, OnInit } from "@angular/core";
import { ExpenseDescriptionModel } from "src/app/shared/models/expense-description.model";
import { ExpenseService } from "src/app/services/expense.service";

@Component({
  selector: "app-expense-description-edit",
  templateUrl: "./expense-description-edit.component.html",
  styleUrls: ["./expense-description-edit.component.scss"],
})
export class ExpenseDescriptionEditComponent implements OnInit {
  public expenseDescription: ExpenseDescriptionModel;

  constructor(private _clientService: ExpenseService) {}

  ngOnInit(): void {}
}
