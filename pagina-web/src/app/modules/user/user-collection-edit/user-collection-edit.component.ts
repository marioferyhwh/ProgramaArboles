import { Component, OnInit } from "@angular/core";
import { UserCollectionModel } from "src/app/shared/models/user-collection.model";
import { UserService } from "src/app/services/user.service";
import { ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-user-collection-edit",
  templateUrl: "./user-collection-edit.component.html",
  styleUrls: ["./user-collection-edit.component.scss"],
})
export class UserCollectionEditComponent implements OnInit {
  public userColection: UserCollectionModel;

  constructor(
    private _userService: UserService,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._activedRoute.params.subscribe((params) => {
      this._userService.getCollection(params["id"]).subscribe(
        (res) => {
          this.userColection = res;
          //console.log(res);
        },
        (err) => {
          const toast2 = Swal.mixin({
            title: "usuario en cobro no encontredo",
            text: "",
            icon: "info",
          });
          toast2.fire();
          //console.log({ err });
          this._userService.routeListcollection();
        }
      );
    });
  }

  onUpdate(c: UserCollectionModel) {
    console.log({ c });
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    this._userService.editCollection(c).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "usuario en cobro editado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._userService.routeListcollection();
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
