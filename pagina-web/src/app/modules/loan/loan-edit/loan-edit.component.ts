import { Component, OnInit } from "@angular/core";
import { LoanModel } from "src/app/shared/models/loan.model";
import { LoanService } from "src/app/services/loan.service";
import { ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { UserModel } from "src/app/shared/models/user.model";
import { ClientModel } from "src/app/shared/models/client.model";
import { GlobalService } from "src/app/services/global.service";
import { UserService } from "src/app/services/user.service";
import { ClientService } from "src/app/services/client.service";
import { LoanPaymentModel } from "src/app/shared/models/loan-payment.model";

@Component({
  selector: "app-loan-edit",
  templateUrl: "./loan-edit.component.html",
  styleUrls: ["./loan-edit.component.scss"],
})
export class LoanEditComponent implements OnInit {
  public loan: LoanModel;
  public collections: CollectionModel[];
  public users: UserModel[];
  public clients: ClientModel[];
  public loanPayments: LoanPaymentModel[];

  constructor(
    private _loanService: LoanService,
    private _activedRoute: ActivatedRoute,
    private _globalService: GlobalService,
    private _userService: UserService,
    private _clientService: ClientService
  ) {
    this.collections = [_globalService.varCollection];
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._activedRoute.params.subscribe((params) => {
      this._loanService.get(params["id"]).subscribe(
        (res) => {
          this.loan = res;
          console.log(res);
          this._userService.get(res.id_user).subscribe((resp) => {
            this.users = [resp];
          });
          this._clientService.get(res.id_client).subscribe((resp) => {
            this.clients = [resp];
          });
          this._loanService.getLoanPaymentList(res.id).subscribe(
            (res) => {
              this.loanPayments = res;
              console.log(res);
            },
            (err) => {
              console.log(err);
            }
          );
        },
        (err) => {
          // const toast2 = Swal.mixin({
          //   title: "prestamo no encontredo",
          //   text: "",
          //   icon: "info",
          // });
          // toast2.fire();
          console.log(err.error);
          // this._loanService.routeList();
        }
      );
    });
  }

  onUpdate(c: LoanModel) {
    this._loanService.routeList();
    // console.log({ c });
    // const toast = Swal.mixin({
    //   allowOutsideClick: false,
    //   text: "espere por favor",
    //   icon: "info",
    // });
    // toast.fire();
    // toast.showLoading();
    // this._loanService.edit(c).subscribe(
    //   (resp) => {
    //     toast.close();
    //     const toast2 = Swal.mixin({
    //       title: "prestamo editado",
    //       text: "",
    //       icon: "success",
    //     });
    //     toast2.fire();
    //     this._loanService.routeList();
    //   },
    //   (err) => {
    //     toast.close();
    //     const toast2 = Swal.mixin({
    //       title: "error",
    //       text: err.error.message,
    //       icon: "error",
    //     });
    //     toast2.fire();
    //     console.log({ err });
    //   }
    // );
  }
  onLista() {
    this._loanService.routeNewPayment(this.loan.id);
  }
}
