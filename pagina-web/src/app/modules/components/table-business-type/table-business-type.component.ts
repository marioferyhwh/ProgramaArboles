import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { BusinessTypeModel } from "src/app/shared/models/business-type.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-table-business-type",
  templateUrl: "./table-business-type.component.html",
  styleUrls: ["./table-business-type.component.scss"],
})
export class TableBusinessTypeComponent implements OnInit {
  @Input() data: BusinessTypeModel[];
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  deleteItem(id: number) {}
  selectItem(id: number) {
    this._router.navigate(["/negocio", id, "editar"]);
  }
  editItem(id: number) {
    this._router.navigate(["/negocio", id]);
  }
}
