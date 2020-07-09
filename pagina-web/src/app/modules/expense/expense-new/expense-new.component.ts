import { Component, OnInit } from "@angular/core";
import { ExpenseModel } from "src/app/shared/models/expense.model";
import { ExpenseService } from "src/app/services/expense.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-expense-new",
  templateUrl: "./expense-new.component.html",
  styleUrls: ["./expense-new.component.scss"],
})
export class ExpenseNewComponent implements OnInit {
  public expense: ExpenseModel;

  constructor(private _expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expense = new ExpenseModel();
  }

  onCreate(data: ExpenseModel) {
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    console.log(data);
    this._expenseService.create(data).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "gasto creado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._expenseService.routeList();
      },
      (err) => {
        const toast = Swal.mixin({
          title: "error al crear gasto",
          text: err["error"].message,
          icon: "error",
        });
        toast.fire();
      }
    );
  }
}
