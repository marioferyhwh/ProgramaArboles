import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { UserLevelModel } from "src/app/shared/models/user-level.model";

@Component({
  selector: "app-table-user-level",
  templateUrl: "./table-user-level.component.html",
  styleUrls: ["./table-user-level.component.scss"],
})
export class TableUserLevelComponent implements OnInit {
  @Input() data: UserLevelModel[];
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
