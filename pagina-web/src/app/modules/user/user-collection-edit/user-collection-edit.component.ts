import { Component, OnInit } from "@angular/core";
import { UserCollectionModel } from "src/app/shared/models/user-collection.model";
import { UserService } from "src/app/services/user.service";
import { ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";
import { UserModel } from "src/app/shared/models/user.model";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { CollectionService } from "src/app/services/collection.service";

@Component({
  selector: "app-user-collection-edit",
  templateUrl: "./user-collection-edit.component.html",
  styleUrls: ["./user-collection-edit.component.scss"],
})
export class UserCollectionEditComponent implements OnInit {
  public userColection: UserCollectionModel;
  public users: UserModel[];
  public collections: CollectionModel[];

  constructor(
    private _userService: UserService,
    private _collectionService: CollectionService,
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
          console.log(res);

          this._userService.get(res.id_user).subscribe(
            (resp) => {
              this.users = [resp];
              console.log(resp);
            },
            (err) => {
              console.log({ err });
            }
          );
          this._collectionService.get(res.id_collection).subscribe(
            (resp) => {
              this.collections = [resp];
              console.log(resp);
            },
            (err) => {
              console.log({ err });
            }
          );
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
