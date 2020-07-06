import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { LoanModel } from "src/app/shared/models/loan.model";

@Component({
  selector: "app-table-loan",
  templateUrl: "./table-loan.component.html",
  styleUrls: ["./table-loan.component.scss"],
})
export class TableLoanComponent implements OnInit {
  @Input() data: LoanModel[];
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  deleteItem(id: number) {}
  selectItem(id: number) {
    this._router.navigate(["/prestamo", id, "editar"]);
  }
  editItem(id: number) {
    this._router.navigate(["/prestamo", id]);
  }
}
