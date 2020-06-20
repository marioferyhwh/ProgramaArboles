import { Component, OnInit, Input } from "@angular/core";
import { ExpenseModel } from "src/app/shared/models/expense.model";

@Component({
  selector: "app-table-expense",
  templateUrl: "./table-expense.component.html",
  styleUrls: ["./table-expense.component.scss"],
})
export class TableExpenseComponent implements OnInit {
  @Input() public gastos: ExpenseModel[];
  constructor() {}

  ngOnInit(): void {}
}
