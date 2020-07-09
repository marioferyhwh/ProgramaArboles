import { Component, OnInit } from "@angular/core";
import { UserCollectionModel } from "src/app/shared/models/user-collection.model";
import { UserService } from "src/app/services/user.service";
import Swal from "sweetalert2";
import { UserModel } from "src/app/shared/models/user.model";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { CollectionService } from "src/app/services/collection.service";

@Component({
  selector: "app-user-collection-new",
  templateUrl: "./user-collection-new.component.html",
  styleUrls: ["./user-collection-new.component.scss"],
})
export class UserCollectionNewComponent implements OnInit {
  public userColection: UserCollectionModel;
  public users: UserModel[];
  public collections: CollectionModel[];

  constructor(
    private _userService: UserService,
    private _collectionService: CollectionService
  ) {}

  ngOnInit(): void {
    this.userColection = new UserCollectionModel();
    this.userColection.actived = true;
    this._userService.getList(0).subscribe(
      (resp) => {
        this.users = resp;
        console.log(resp);
      },
      (err) => {
        console.log({ err });
      }
    );
    this._collectionService.getList(0).subscribe(
      (resp) => {
        this.collections = resp;
        console.log(resp);
      },
      (err) => {
        console.log({ err });
      }
    );
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
