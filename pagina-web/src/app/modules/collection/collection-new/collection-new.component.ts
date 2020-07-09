import { Component, OnInit } from "@angular/core";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { CollectionService } from "src/app/services/collection.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-collection-new",
  templateUrl: "./collection-new.component.html",
  styleUrls: ["./collection-new.component.scss"],
})
export class CollectionNewComponent implements OnInit {
  public collection: CollectionModel;

  constructor(private _collectionService: CollectionService) {}

  ngOnInit(): void {
    this.collection = new CollectionModel();
    this.collection.actived = true;
    this.collection.balance_total = 0;
  }

  onCreate(data: CollectionModel) {
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    console.log(data);
    this._collectionService.create(data).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "Cobro creado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._collectionService.routeList();
      },
      (err) => {
        const toast = Swal.mixin({
          title: "error al crear Cobro",
          text: err["error"].message,
          icon: "error",
        });
        toast.fire();
      }
    );
  }
}
