import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { Router } from "@angular/router";

import { UserModel } from "src/app/shared/models/user.model";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-new",
  templateUrl: "./user-new.component.html",
  styleUrls: ["./user-new.component.scss"],
})
export class UserNewComponent implements OnInit {
  public user: UserModel;
  constructor(private _userService: UserService) {
    this.user = new UserModel();
    this.user.actived = true;
    this.user.change_password = true;
    this.user.time_zone = -5;
  }

  ngOnInit(): void {}
  onCreate(u: UserModel) {
    console.log(u);
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    this._userService.create(u).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "Usuario creado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        console.log(resp);
        this._userService.routeList();
      },
      (err) => {
        const toast = Swal.mixin({
          title: "error al crear usuario",
          text: err["error"].message,
          icon: "error",
        });
        toast.fire();
        console.log(err);
        console.log(err.error);
      }
    );
  }
}
