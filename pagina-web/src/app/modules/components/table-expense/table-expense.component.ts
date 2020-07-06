import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ExpenseModel } from "src/app/shared/models/expense.model";

@Component({
  selector: "app-table-expense",
  templateUrl: "./table-expense.component.html",
  styleUrls: ["./table-expense.component.scss"],
})
export class TableExpenseComponent implements OnInit {
  @Input() data: ExpenseModel[];
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  deleteItem(id: number) {}
  selectItem(id: number) {
    this._router.navigate(["/gasto", id, "editar"]);
  }
  editItem(id: number) {
    this._router.navigate(["/gasto", id]);
  }
}
