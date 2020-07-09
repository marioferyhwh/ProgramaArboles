import { Component, OnInit } from "@angular/core";
import { ExpenseModel } from "src/app/shared/models/expense.model";
import { ExpenseService } from "src/app/services/expense.service";
import { ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-expense-edit",
  templateUrl: "./expense-edit.component.html",
  styleUrls: ["./expense-edit.component.scss"],
})
export class ExpenseEditComponent implements OnInit {
  public expense: ExpenseModel;

  constructor(
    private _expenseService: ExpenseService,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._activedRoute.params.subscribe((params) => {
      this._expenseService.get(params["id"]).subscribe(
        (res) => {
          this.expense = res;
          //console.log(res);
        },
        (err) => {
          const toast2 = Swal.mixin({
            title: "gasto no encontredo",
            text: "",
            icon: "info",
          });
          toast2.fire();
          //console.log({ err });
          this._expenseService.routeList();
        }
      );
    });
  }

  onUpdate(c: ExpenseModel) {
    console.log({ c });
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    this._expenseService.edit(c).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "gasto editado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._expenseService.routeList();
      },
      (err) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "error",
          text: err.error.message,
          icon: "error",
        });
        toast2.fire();
        console.log({ err });
      }
    );
  }
}
