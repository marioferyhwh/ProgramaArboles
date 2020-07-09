import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { LoanStateModel } from "src/app/shared/models/loan-state.model";
import { LoanService } from "src/app/services/loan.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-table-loan-state",
  templateUrl: "./table-loan-state.component.html",
  styleUrls: ["./table-loan-state.component.scss"],
})
export class TableLoanStateComponent implements OnInit {
  @Input() data: LoanStateModel[];
  @Input() edit: boolean;
  @Output() onReload: EventEmitter<string>;
  public debug: boolean;

  constructor(private _loanService: LoanService) {
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
        this._loanService.deleteLoanState(id).subscribe(
          (resp) => {
            const toast = Swal.mixin({
              title: "BORRADO",
              text: "estado de prestamos borrado",
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
          text: "estado de prestamos esta asalvo",
          icon: "error",
        });
        toast.fire();
      }
    });
  }
  selectItem(id: number) {
    this._loanService.routeSeestate(id);
  }
  editItem(id: number) {
    this._loanService.routeEditstate(id);
  }
}
