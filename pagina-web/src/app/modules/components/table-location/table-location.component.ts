import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { ClientLocationModel } from "src/app/shared/models/client-location.model";

@Component({
  selector: "app-table-location",
  templateUrl: "./table-location.component.html",
  styleUrls: ["./table-location.component.scss"],
})
export class TableLocationComponent implements OnInit {
  @Input() data: ClientLocationModel[];
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  deleteItem(id: number) {}
  selectItem(id: number) {
    this._router.navigate(["/sector", id, "editar"]);
  }
  editItem(id: number) {
    this._router.navigate(["/sector", id]);
  }
}
