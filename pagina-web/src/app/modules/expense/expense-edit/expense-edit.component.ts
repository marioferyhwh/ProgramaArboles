import { Component, OnInit } from "@angular/core";
import { ExpenseModel } from "src/app/shared/models/expense.model";
import { ExpenseService } from "src/app/services/expense.service";

@Component({
  selector: "app-expense-edit",
  templateUrl: "./expense-edit.component.html",
  styleUrls: ["./expense-edit.component.scss"],
})
export class ExpenseEditComponent implements OnInit {
  public expense: ExpenseModel;

  constructor(private _clientService: ExpenseService) {}

  ngOnInit(): void {}
}
