import { Component, OnInit } from "@angular/core";
import { ExpenseDescriptionModel } from "src/app/shared/models/expense-description.model";
import { ExpenseService } from "src/app/services/expense.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-expense-description-new",
  templateUrl: "./expense-description-new.component.html",
  styleUrls: ["./expense-description-new.component.scss"],
})
export class ExpenseDescriptionNewComponent implements OnInit {
  public expenseDescription: ExpenseDescriptionModel;

  constructor(private _expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseDescription = new ExpenseDescriptionModel();
  }

  onCreate(data: ExpenseDescriptionModel) {
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    console.log(data);
    this._expenseService.createDescription(data).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "gasto creado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._expenseService.routeListdescription();
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
