import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { UserModel } from "src/app/shared/models/user.model";
import { UserService } from "src/app/services/user.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-table-user",
  templateUrl: "./table-user.component.html",
  styleUrls: ["./table-user.component.scss"],
})
export class TableUserComponent implements OnInit {
  @Input() data: UserModel[];
  @Input() edit: boolean;
  @Output() onReload: EventEmitter<string>;
  public debug: boolean;

  constructor(private _userService: UserService) {
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
        this._userService.delete(id).subscribe(
          (resp) => {
            const toast = Swal.mixin({
              title: "BORRADO",
              text: "usuario borrado",
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
          text: "usuario esta asalvo",
          icon: "error",
        });
        toast.fire();
      }
    });
  }

  selectItem(id: number) {
    this._userService.routeSee(id);
  }

  editItem(id: number) {
    this._userService.routeEdit(id);
  }
}
