import { Component, OnInit } from "@angular/core";
import { LoanModel } from "src/app/shared/models/loan.model";
import { LoanService } from "src/app/services/loan.service";
import Swal from "sweetalert2";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { UserModel } from "src/app/shared/models/user.model";
import { ClientModel } from "src/app/shared/models/client.model";
import { GlobalService } from "src/app/services/global.service";
import { ApiServerService } from "src/app/services/api-server.service";
import { ClientService } from "src/app/services/client.service";

@Component({
  selector: "app-loan-new",
  templateUrl: "./loan-new.component.html",
  styleUrls: ["./loan-new.component.scss"],
})
export class LoanNewComponent implements OnInit {
  public loan: LoanModel;
  public collections: CollectionModel[];
  public users: UserModel[];
  public clients: ClientModel[];

  constructor(
    private _loanService: LoanService,
    private _globalService: GlobalService,
    private _apiService: ApiServerService,
    private _clientService: ClientService
  ) {
    this.collections = [this._globalService.varCollection];
    this.users = [this._apiService.userToken()];
    this._clientService.getList(this.collections[0].id).subscribe(
      (resp) => {
        this.clients = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.loan = new LoanModel();
    this.loan.id_collection = this.collections[0].id;
    this.loan.id_user = this.users[0].id;
    this.loan.interest = 20;
    this.loan.quota = 30;
    this.loan.id_loan_state = 1;
  }

  onCreate(data: LoanModel) {
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    console.log(data);
    this._loanService.create(data).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "prestamo creado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._loanService.routeList();
      },
      (err) => {
        const toast = Swal.mixin({
          title: "error al crear prestamo",
          text: err["error"].message,
          icon: "error",
        });
        toast.fire();
      }
    );
  }
}
