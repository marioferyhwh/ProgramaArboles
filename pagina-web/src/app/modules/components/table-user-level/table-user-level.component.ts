import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { UserLevelModel } from "src/app/shared/models/user-level.model";
import { UserService } from "src/app/services/user.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-table-user-level",
  templateUrl: "./table-user-level.component.html",
  styleUrls: ["./table-user-level.component.scss"],
})
export class TableUserLevelComponent implements OnInit {
  @Input() data: UserLevelModel[];
  @Input() edit: boolean;
  @Output() onReload: EventEmitter<string>;
  public debug: boolean;

  constructor(private _router: Router, private _userService: UserService) {
    this.edit = false;
    this.onReload = new EventEmitter();
  }

  ngOnInit(): void {}

  deleteItem(id: number) {
    const toast = Swal.mixin({
      title: "SEGURO",
      text: "no se podra revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, borrar!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    });
    toast.fire().then((result) => {
      if (result.value) {
        this._userService.deleteLevel(id).subscribe(
          (resp) => {
            const toast = Swal.mixin({
              title: "BORRADO",
              text: "nivel de usuario borrado",
              icon: "success",
            });
            toast.fire();
            this.onReload.emit("");
            console.log(resp);
          },
          (err) => {
            console.log(err);
          }
        );
      } else {
        const toast = Swal.mixin({
          title: "CANCELADO",
          text: "nivel de usuario esta asalvo",
          icon: "error",
        });
        toast.fire();
      }
    });
  }
  selectItem(id: number) {
    this._router.navigate(["/gasto", id, "editar"]);
  }
  editItem(id: number) {
    this._router.navigate(["/gasto", id]);
  }
}
