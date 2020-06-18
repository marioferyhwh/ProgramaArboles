import { Component, OnInit } from "@angular/core";
import { Expense } from "src/app/shared/models/expense";

@Component({
  selector: "app-table-expense",
  templateUrl: "./table-expense.component.html",
  styleUrls: ["./table-expense.component.scss"],
})
export class TableExpenseComponent implements OnInit {
  public gastos: Expense[];
  constructor() {}

  ngOnInit(): void {}
}
