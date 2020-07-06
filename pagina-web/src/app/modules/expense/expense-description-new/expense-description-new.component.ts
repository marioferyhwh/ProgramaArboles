import { Component, OnInit } from "@angular/core";
import { ExpenseDescriptionModel } from "src/app/shared/models/expense-description.model";
import { ExpenseService } from "src/app/services/expense.service";

@Component({
  selector: "app-expense-description-new",
  templateUrl: "./expense-description-new.component.html",
  styleUrls: ["./expense-description-new.component.scss"],
})
export class ExpenseDescriptionNewComponent implements OnInit {
  public expenseDescription: ExpenseDescriptionModel;

  constructor(private _clientService: ExpenseService) {}

  ngOnInit(): void {}
}
