import { Component, OnInit } from "@angular/core";
import { ExpenseModel } from "src/app/shared/models/expense.model";
import { ExpenseService } from "src/app/services/expense.service";
import { ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { UserModel } from "src/app/shared/models/user.model";
import { GlobalService } from "src/app/services/global.service";
import { UserService } from "src/app/services/user.service";
import { ExpenseDescriptionModel } from "src/app/shared/models/expense-description.model";

@Component({
  selector: "app-expense-edit",
  templateUrl: "./expense-edit.component.html",
  styleUrls: ["./expense-edit.component.scss"],
})
export class ExpenseEditComponent implements OnInit {
  public expense: ExpenseModel;
  public colllections: CollectionModel[];
  public users: UserModel[];
  public expenseDescriptions: ExpenseDescriptionModel[];

  constructor(
    private _expenseService: ExpenseService,
    private _activedRoute: ActivatedRoute,
    private _globalService: GlobalService,
    private _userService: UserService
  ) {
    this.colllections = [_globalService.getVarCollection];
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._activedRoute.params.subscribe((params) => {
      this._expenseService.get(params["id"]).subscribe(
        (res) => {
          this.expense = res;
          //console.log(res);
          this._userService.get(res.id_user).subscribe((resp) => {
            this.users = [resp];
          });

          this._expenseService
            .getDescription(res.id_expense)
            .subscribe((resp) => {
              this.expenseDescriptions = [resp];
            });
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
