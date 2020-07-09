import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { BusinessTypeModel } from "src/app/shared/models/business-type.model";
import { BusinessTypeService } from "src/app/services/business-type.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-table-business-type",
  templateUrl: "./table-business-type.component.html",
  styleUrls: ["./table-business-type.component.scss"],
})
export class TableBusinessTypeComponent implements OnInit {
  @Input() data: BusinessTypeModel[];
  @Input() edit: boolean;
  @Output() onReload: EventEmitter<string>;
  public debug: boolean;

  constructor(private _businessTypeService: BusinessTypeService) {
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
        this._businessTypeService.delete(id).subscribe(
          (resp) => {
            const toast = Swal.mixin({
              title: "BORRADO",
              text: "tipo de negocio borrado",
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
          text: "tipo de negocio esta asalvo",
          icon: "error",
        });
        toast.fire();
      }
    });
  }
  selectItem(id: number) {
    this._businessTypeService.routeSee(id);
  }
  editItem(id: number) {
    this._businessTypeService.routeEdit(id);
  }
}
