import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { UserModel } from "src/app/shared/models/user.model";
import { ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.scss"],
})
export class UserEditComponent implements OnInit {
  public user: UserModel;

  constructor(
    private _userService: UserService,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activedRoute.params.subscribe((params) => {
      this._userService.get(params["id"]).subscribe(
        (res: UserModel) => {
          this.user = res;
          console.log(res);
        },
        (err) => {
          const toast2 = Swal.mixin({
            title: "usuario no encontredo",
            text: "",
            icon: "info",
          });
          toast2.fire();
          //console.log({ err });
          this._userService.routeList();
        }
      );
    });
  }

  onUpdate(u: UserModel) {
    //console.log({ u });
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    this._userService.edit(u).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "Usuario editado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._userService.routeList();
      },
      (err) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "error",
          text: err.error.message,
          icon: "error",
        });
        toast2.fire();
        console.log({ err });
      }
    );
  }
}
