import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { LoanStateModel } from "src/app/shared/models/loan-state.model";

@Component({
  selector: "app-table-loan-state",
  templateUrl: "./table-loan-state.component.html",
  styleUrls: ["./table-loan-state.component.scss"],
})
export class TableLoanStateComponent implements OnInit {
  @Input() data: LoanStateModel[];
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
