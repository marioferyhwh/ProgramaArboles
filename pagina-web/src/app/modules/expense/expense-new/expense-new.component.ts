import { Component, OnInit } from "@angular/core";
import { ExpenseModel } from "src/app/shared/models/expense.model";
import { ExpenseService } from "src/app/services/expense.service";
import Swal from "sweetalert2";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { UserModel } from "src/app/shared/models/user.model";
import { GlobalService } from "src/app/services/global.service";
import { ApiServerService } from "src/app/services/api-server.service";
import { ExpenseDescriptionModel } from "src/app/shared/models/expense-description.model";

@Component({
  selector: "app-expense-new",
  templateUrl: "./expense-new.component.html",
  styleUrls: ["./expense-new.component.scss"],
})
export class ExpenseNewComponent implements OnInit {
  public expense: ExpenseModel;
  public colllections: CollectionModel[];
  public users: UserModel[];
  public expenseDescriptions: ExpenseDescriptionModel[];

  constructor(
    private _expenseService: ExpenseService,
    private _globalService: GlobalService,
    private _apiService: ApiServerService
  ) {
    this.colllections = [this._globalService.getVarCollection];
    this.users = [this._apiService.userToken()];
    this._expenseService.getDescriptionList(this.colllections[0].id).subscribe(
      (resp) => {
        this.expenseDescriptions = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.expense = new ExpenseModel();
    this.expense.id_collection = this.colllections[0].id;
    this.expense.id_user = this.users[0].id;
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
