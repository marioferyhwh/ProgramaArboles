import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { UserLevelModel } from "src/app/shared/models/user-level.model";
import Swal from "sweetalert2";

@Component({
  selector: "app-user-level-new",
  templateUrl: "./user-level-new.component.html",
  styleUrls: ["./user-level-new.component.scss"],
})
export class UserLevelNewComponent implements OnInit {
  public userLevel: UserLevelModel;

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.userLevel = new UserLevelModel();
  }

  onCreate(data: UserLevelModel) {
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    console.log(data);
    this._userService.createLevel(data).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "nivel de usuario creado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._userService.routeListLevel();
      },
      (err) => {
        const toast = Swal.mixin({
          title: "error al crear nivel de usuario",
          text: err["error"].message,
          icon: "error",
        });
        toast.fire();
      }
    );
  }
}
