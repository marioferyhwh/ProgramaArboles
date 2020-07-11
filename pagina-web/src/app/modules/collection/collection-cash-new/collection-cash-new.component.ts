import { Component, OnInit } from "@angular/core";
import { CollectionCashModel } from "src/app/shared/models/collection-cash.model";
import { CollectionService } from "src/app/services/collection.service";
import Swal from "sweetalert2";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { UserModel } from "src/app/shared/models/user.model";
import { GlobalService } from "src/app/services/global.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-collection-cash-new",
  templateUrl: "./collection-cash-new.component.html",
  styleUrls: ["./collection-cash-new.component.scss"],
})
export class CollectionCashNewComponent implements OnInit {
  public cash: CollectionCashModel;
  public collections: CollectionModel[];
  public users: UserModel[];

  constructor(
    private _collectionService: CollectionService,
    private _globalService: GlobalService,
    private _userService: UserService
  ) {
    this.collections = [this._globalService.getVarCollection];
  }

  ngOnInit(): void {
    this.cash = new CollectionCashModel();
    this.cash.id_collection = this.collections[0].id;
    this._userService.getListByCollection(this.cash.id_collection).subscribe(
      (resp) => {
        this.users = resp;
        console.log({ resp });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onCreate(data: CollectionCashModel) {
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    console.log(data);
    this._collectionService.createCash(data).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "movimento creado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._collectionService.routeListcash();
      },
      (err) => {
        const toast = Swal.mixin({
          title: "error al crear movimento",
          text: err["error"].message,
          icon: "error",
        });
        toast.fire();
      }
    );
  }
}
