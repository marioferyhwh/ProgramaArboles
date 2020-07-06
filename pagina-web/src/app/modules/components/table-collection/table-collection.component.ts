import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { CollectionModel } from "src/app/shared/models/collection.model";

@Component({
  selector: "app-table-collection",
  templateUrl: "./table-collection.component.html",
  styleUrls: ["./table-collection.component.scss"],
})
export class TableCollectionComponent implements OnInit {
  @Input() data: CollectionModel[];
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  deleteItem(id: number) {}
  selectItem(id: number) {
    this._router.navigate(["/cobro", id, "editar"]);
  }
  editItem(id: number) {
    this._router.navigate(["/cobro", id]);
  }
}
