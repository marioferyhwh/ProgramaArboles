import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { LoanModel } from "src/app/shared/models/loan.model";
import { LoanService } from "src/app/services/loan.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-table-loan",
  templateUrl: "./table-loan.component.html",
  styleUrls: ["./table-loan.component.scss"],
})
export class TableLoanComponent implements OnInit {
  @Input() data: LoanModel[];
  @Input() edit: boolean;
  @Output() onReload: EventEmitter<string>;
  public debug: boolean;

  constructor(private _router: Router, private _loanService: LoanService) {
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
        this._loanService.delete(id).subscribe(
          (resp) => {
            const toast = Swal.mixin({
              title: "BORRADO",
              text: "prestamo borrado",
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
          text: "prestamo esta asalvo",
          icon: "error",
        });
        toast.fire();
      }
    });
  }
  selectItem(id: number) {
    this._router.navigate(["/prestamo", id, "editar"]);
  }
  editItem(id: number) {
    this._router.navigate(["/prestamo", id]);
  }
}
