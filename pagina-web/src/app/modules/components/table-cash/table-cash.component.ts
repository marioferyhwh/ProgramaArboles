import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CollectionCashModel } from "src/app/shared/models/collection-cash.model";
import { CollectionService } from "src/app/services/collection.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-table-cash",
  templateUrl: "./table-cash.component.html",
  styleUrls: ["./table-cash.component.scss"],
})
export class TableCashComponent implements OnInit {
  @Input() data: CollectionCashModel[];
  @Input() edit: boolean;
  @Output() onReload: EventEmitter<string>;
  public debug: boolean;

  constructor(private _collectionService: CollectionService) {
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
        this._collectionService.deleteCash(id).subscribe(
          (resp) => {
            const toast = Swal.mixin({
              title: "BORRADO",
              text: "movimiento borrado",
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
          text: "movimiento esta asalvo",
          icon: "error",
        });
        toast.fire();
      }
    });
  }

  selectItem(id: number) {
    this._collectionService.routeSeecash(id);
  }
  editItem(id: number) {
    this._collectionService.routeEditcash(id);
  }
}
