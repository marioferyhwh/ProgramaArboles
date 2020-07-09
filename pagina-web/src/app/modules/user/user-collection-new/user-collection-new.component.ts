import { Component, OnInit } from "@angular/core";
import { UserCollectionModel } from "src/app/shared/models/user-collection.model";
import { UserService } from "src/app/services/user.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-user-collection-new",
  templateUrl: "./user-collection-new.component.html",
  styleUrls: ["./user-collection-new.component.scss"],
})
export class UserCollectionNewComponent implements OnInit {
  public userColection: UserCollectionModel;

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.userColection = new UserCollectionModel();
  }

  onCreate(data: UserCollectionModel) {
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    console.log(data);
    this._userService.createCollection(data).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "asignacion de usuario a cobro creado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._userService.routeListcollection();
      },
      (err) => {
        const toast = Swal.mixin({
          title: "error al crear asignacion de usuario a cobro",
          text: err["error"].message,
          icon: "error",
        });
        toast.fire();
      }
    );
  }
}
