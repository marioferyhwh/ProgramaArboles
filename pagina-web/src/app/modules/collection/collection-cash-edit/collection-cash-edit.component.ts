import { Component, OnInit } from "@angular/core";
import { CollectionCashModel } from "src/app/shared/models/collection-cash.model";
import { CollectionService } from "src/app/services/collection.service";
import { ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { UserModel } from "src/app/shared/models/user.model";
import { GlobalService } from "src/app/services/global.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-collection-cash-edit",
  templateUrl: "./collection-cash-edit.component.html",
  styleUrls: ["./collection-cash-edit.component.scss"],
})
export class CollectionCashEditComponent implements OnInit {
  public cash: CollectionCashModel;
  public collections: CollectionModel[];
  public users: UserModel[];

  constructor(
    private _collectionService: CollectionService,
    private _activedRoute: ActivatedRoute,
    private _globalService: GlobalService,
    private _userService: UserService
  ) {
    this.collections = [_globalService.varCollection];
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._activedRoute.params.subscribe((params) => {
      this._collectionService.getCash(params["id"]).subscribe(
        (res) => {
          this.cash = res;
          //console.log(res);
          this._userService.get(res.id_user).subscribe((res) => {
            this.users = [res];
          });
        },
        (err) => {
          const toast2 = Swal.mixin({
            title: "pago no encontredo",
            text: "",
            icon: "info",
          });
          toast2.fire();
          //console.log({ err });
          this._collectionService.routeListcash();
        }
      );
    });
  }

  onUpdate(c: CollectionCashModel) {
    console.log({ c });
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    this._collectionService.editCash(c).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "pago editado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._collectionService.routeListcash();
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
