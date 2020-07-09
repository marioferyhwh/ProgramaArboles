import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { CollectionService } from "src/app/services/collection.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-table-collection",
  templateUrl: "./table-collection.component.html",
  styleUrls: ["./table-collection.component.scss"],
})
export class TableCollectionComponent implements OnInit {
  @Input() data: CollectionModel[];
  @Input() edit: boolean;
  @Output() onReload: EventEmitter<string>;
  public debug: boolean;

  constructor(
    private _router: Router,
    private _collectionService: CollectionService
  ) {
    this.edit = false;
    this.onReload = new EventEmitter();
  }

  ngOnInit(): void {}

  deleteItem(id: number) {
    const toast = Swal.mixin({
      title: "SEGURO",
      text: "no se podra revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, borrar!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    });
    toast.fire().then((result) => {
      if (result.value) {
        this._collectionService.delete(id).subscribe(
          (resp) => {
            const toast = Swal.mixin({
              title: "BORRADO",
              text: "cobro borrado",
              icon: "success",
            });
            toast.fire();
            this.onReload.emit("");
            console.log(resp);
          },
          (err) => {
            console.log(err);
          }
        );
      } else {
        const toast = Swal.mixin({
          title: "CANCELADO",
          text: "cobro esta asalvo",
          icon: "error",
        });
        toast.fire();
      }
    });
  }
  selectItem(id: number) {
    this._router.navigate(["/cobro", id, "editar"]);
  }
  editItem(id: number) {
    this._router.navigate(["/cobro", id]);
  }
}
