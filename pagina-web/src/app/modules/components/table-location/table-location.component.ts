import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router as _clientService } from "@angular/router";
import { ClientLocationModel } from "src/app/shared/models/client-location.model";
import { ClientService } from "src/app/services/client.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-table-location",
  templateUrl: "./table-location.component.html",
  styleUrls: ["./table-location.component.scss"],
})
export class TableLocationComponent implements OnInit {
  @Input() data: ClientLocationModel[];
  @Input() edit: boolean;
  @Output() onReload: EventEmitter<string>;
  public debug: boolean;

  constructor(
    private _router: _clientService,
    private _collectionService: ClientService
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
        this._collectionService.deleteLocation(id).subscribe(
          (resp) => {
            const toast = Swal.mixin({
              title: "BORRADO",
              text: "sector borrado",
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
          text: "sector esta asalvo",
          icon: "error",
        });
        toast.fire();
      }
    });
  }
  selectItem(id: number) {
    this._router.navigate(["/sector", id, "editar"]);
  }
  editItem(id: number) {
    this._router.navigate(["/sector", id]);
  }
}
