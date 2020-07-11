import { Component, OnInit } from "@angular/core";
import { LoanPaymentModel } from "src/app/shared/models/loan-payment.model";
import { LoanService } from "src/app/services/loan.service";
import Swal from "sweetalert2";
import { ActivatedRoute } from "@angular/router";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { UserModel } from "src/app/shared/models/user.model";
import { LoanModel } from "src/app/shared/models/loan.model";
import { GlobalService } from "src/app/services/global.service";
import { ApiServerService } from "src/app/services/api-server.service";

@Component({
  selector: "app-loan-loan-payment-new",
  templateUrl: "./loan-loan-payment-new.component.html",
  styleUrls: ["./loan-loan-payment-new.component.scss"],
})
export class LoanLoanPaymentNewComponent implements OnInit {
  public loanPayment: LoanPaymentModel;
  public collections: CollectionModel[];
  public users: UserModel[];
  public loans: LoanModel[];
  private _idLoan: number;

  constructor(
    private _loanService: LoanService,
    private _activedRoute: ActivatedRoute,
    private _globalService: GlobalService,
    private _apiService: ApiServerService
  ) {
    this.collections = [_globalService.varCollection];
    this.users = [this._apiService.userToken()];
    this._loanService.getList(this.collections[0].id).subscribe(
      (resp) => {
        this.loans = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.loanPayment = new LoanPaymentModel();
    this._activedRoute.params.subscribe((params) => {
      this._idLoan = params["loan"];
      this.loanPayment.id_loan = this._idLoan;
    });
    this.loanPayment.id_collection = this.collections[0].id;
    this.loanPayment.id_user = this.users[0].id;

    // this.loanPayment.id_loan =this._globalService.getVarCollection.id;
  }

  onCreate(data: LoanPaymentModel) {
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    console.log(data);
    this._loanService.createLoanPayment(data).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "pago de prestamo creado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._loanService.routeSee(this._idLoan);
      },
      (err) => {
        const toast = Swal.mixin({
          title: "error al crear pago de prestamo",
          text: err["error"].message,
          icon: "error",
        });
        toast.fire();
      }
    );
  }
}
