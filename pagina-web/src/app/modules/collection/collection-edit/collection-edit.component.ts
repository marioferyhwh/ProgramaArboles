import { Component, OnInit } from "@angular/core";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { CollectionService } from "src/app/services/collection.service";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-collection-edit",
  templateUrl: "./collection-edit.component.html",
  styleUrls: ["./collection-edit.component.scss"],
})
export class CollectionEditComponent implements OnInit {
  public collection: CollectionModel;

  constructor(
    private _collectionService: CollectionService,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._activedRoute.params.subscribe((params) => {
      this._collectionService.get(params["id"]).subscribe(
        (res) => {
          this.collection = res;
          //console.log(res);
        },
        (err) => {
          const toast2 = Swal.mixin({
            title: "cobro no encontredo",
            text: "",
            icon: "info",
          });
          toast2.fire();
          //console.log({ err });
          this._collectionService.routeList();
        }
      );
    });
  }

  onUpdate(c) {
    console.log({ c });
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    this._collectionService.edit(c).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "cobro editado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._collectionService.routeList();
      },
      (err) => {
        console.log({ err });
      }
    );
  }
}
