import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { ClientModel } from "src/app/shared/models/client.model";
import { ClientService } from "src/app/services/client.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-table-client",
  templateUrl: "./table-client.component.html",
  styleUrls: ["./table-client.component.scss"],
})
export class TableClientComponent implements OnInit {
  @Input() data: ClientModel[];
  @Input() edit: boolean;
  @Output() onReload: EventEmitter<string>;
  public debug: boolean;

  constructor(private _router: Router, private _clientService: ClientService) {
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
        this._clientService.delete(id).subscribe(
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
          text: "tu cobro esta asalvo",
          icon: "error",
        });
        toast.fire();
      }
    });
  }
  clientEdit(id: number) {
    // this.cargarCliete.emit(id)
    this._router.navigate(["cliente", "editar", id]);
  }
  clientView(id: number) {
    this._router.navigate(["cliente", id]);
  }
}
