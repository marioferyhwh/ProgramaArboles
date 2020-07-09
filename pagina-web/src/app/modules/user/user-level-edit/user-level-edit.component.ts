import { Component, OnInit } from "@angular/core";
import { UserLevelModel } from "src/app/shared/models/user-level.model";
import { UserService } from "src/app/services/user.service";
import { ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-user-level-edit",
  templateUrl: "./user-level-edit.component.html",
  styleUrls: ["./user-level-edit.component.scss"],
})
export class UserLevelEditComponent implements OnInit {
  public userLevel: UserLevelModel;

  constructor(
    private _userService: UserService,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._activedRoute.params.subscribe((params) => {
      this._userService.getLevel(params["id"]).subscribe(
        (res) => {
          this.userLevel = res;
          //console.log(res);
        },
        (err) => {
          const toast2 = Swal.mixin({
            title: "nivel de usuario no encontredo",
            text: "",
            icon: "info",
          });
          toast2.fire();
          //console.log({ err });
          this._userService.routeListLevel();
        }
      );
    });
  }

  onUpdate(c: UserLevelModel) {
    console.log({ c });
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    this._userService.editLevel(c).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "nivel de usuario editado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._userService.routeListLevel();
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
