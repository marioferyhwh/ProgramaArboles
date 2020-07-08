import { Component, OnInit, Input } from "@angular/core";
import { UserModel } from "src/app/shared/models/user.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-table-user",
  templateUrl: "./table-user.component.html",
  styleUrls: ["./table-user.component.scss"],
})
export class TableUserComponent implements OnInit {
  @Input() data: UserModel[];
  public debug: boolean;

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  deleteItem(id: number) {}
  selectItem(id: number) {
    this._router.navigate(["/usuario", id, "editar"]);
  }
  editItem(id: number) {
    this._router.navigate(["/usuario", id]);
  }
}
