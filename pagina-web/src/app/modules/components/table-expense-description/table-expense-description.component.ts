import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ExpenseDescriptionModel } from "src/app/shared/models/expense-description.model";
import { ExpenseService } from "src/app/services/expense.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-table-expense-description",
  templateUrl: "./table-expense-description.component.html",
  styleUrls: ["./table-expense-description.component.scss"],
})
export class TableExpenseDescriptionComponent implements OnInit {
  @Input() data: ExpenseDescriptionModel[];
  @Input() edit: boolean;
  @Output() onReload: EventEmitter<string>;
  public debug: boolean;

  constructor(private _expenseService: ExpenseService) {
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
        this._expenseService.deleteDescription(id).subscribe(
          (resp) => {
            const toast = Swal.mixin({
              title: "BORRADO",
              text: "descripcion de gasto borrado",
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
          text: "descripcion de gasto esta asalvo",
          icon: "error",
        });
        toast.fire();
      }
    });
  }
  selectItem(id: number) {
    this._expenseService.routeSeedescription(id);
  }
  editItem(id: number) {
    this._expenseService.routeEditdescription(id);
  }
}
