import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { CollectionCashModel } from "src/app/shared/models/collection-cash.model";

@Component({
  selector: "app-table-cash",
  templateUrl: "./table-cash.component.html",
  styleUrls: ["./table-cash.component.scss"],
})
export class TableCashComponent implements OnInit {
  @Input() data: CollectionCashModel[];
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  deleteItem(id: number) {}
  selectItem(id: number) {
    this._router.navigate(["/cobro", "caja", id, "editar"]);
  }
  editItem(id: number) {
    this._router.navigate(["/cobro", "caja", id]);
  }
}
