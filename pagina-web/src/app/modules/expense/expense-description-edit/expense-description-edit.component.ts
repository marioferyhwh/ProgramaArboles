import { Component, OnInit } from "@angular/core";
import { ExpenseDescriptionModel } from "src/app/shared/models/expense-description.model";
import { ExpenseService } from "src/app/services/expense.service";
import { ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { GlobalService } from "src/app/services/global.service";

@Component({
  selector: "app-expense-description-edit",
  templateUrl: "./expense-description-edit.component.html",
  styleUrls: ["./expense-description-edit.component.scss"],
})
export class ExpenseDescriptionEditComponent implements OnInit {
  public expenseDescription: ExpenseDescriptionModel;
  public collections: CollectionModel[];

  constructor(
    private _expenseService: ExpenseService,
    private _activedRoute: ActivatedRoute,
    private _globalService: GlobalService
  ) {
    this.collections = [this._globalService.getVarCollection];
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._activedRoute.params.subscribe((params) => {
      this._expenseService.getDescription(params["id"]).subscribe(
        (res) => {
          this.expenseDescription = res;
          //console.log(res);
        },
        (err) => {
          const toast2 = Swal.mixin({
            title: "descripcion de gasto no encontredo",
            text: "",
            icon: "info",
          });
          toast2.fire();
          //console.log({ err });
          this._expenseService.routeListdescription();
        }
      );
    });
  }

  onUpdate(c: ExpenseDescriptionModel) {
    console.log({ c });
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    this._expenseService.editDescription(c).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "descripcion de gasto editado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._expenseService.routeListdescription();
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
