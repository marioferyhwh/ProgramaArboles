import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ExpenseDescriptionModel } from "src/app/shared/models/expense-description.model";

@Component({
  selector: "app-table-expense-description",
  templateUrl: "./table-expense-description.component.html",
  styleUrls: ["./table-expense-description.component.scss"],
})
export class TableExpenseDescriptionComponent implements OnInit {
  @Input() data: ExpenseDescriptionModel[];
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
