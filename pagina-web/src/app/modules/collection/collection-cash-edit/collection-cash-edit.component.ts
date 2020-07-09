import { Component, OnInit } from "@angular/core";
import { CollectionCashModel } from "src/app/shared/models/collection-cash.model";
import { CollectionService } from "src/app/services/collection.service";
import { ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-collection-cash-edit",
  templateUrl: "./collection-cash-edit.component.html",
  styleUrls: ["./collection-cash-edit.component.scss"],
})
export class CollectionCashEditComponent implements OnInit {
  public cash: CollectionCashModel;

  constructor(
    private _collectionService: CollectionService,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._activedRoute.params.subscribe((params) => {
      this._collectionService.getCash(params["id"]).subscribe(
        (res) => {
          this.cash = res;
          //console.log(res);
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
