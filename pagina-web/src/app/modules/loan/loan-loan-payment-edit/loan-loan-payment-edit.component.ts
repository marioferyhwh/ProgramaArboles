import { Component, OnInit } from "@angular/core";
import { LoanPaymentModel } from "src/app/shared/models/loan-payment.model";
import { LoanService } from "src/app/services/loan.service";
import { ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { UserModel } from "src/app/shared/models/user.model";
import { LoanModel } from "src/app/shared/models/loan.model";
import { GlobalService } from "src/app/services/global.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-loan-loan-payment-edit",
  templateUrl: "./loan-loan-payment-edit.component.html",
  styleUrls: ["./loan-loan-payment-edit.component.scss"],
})
export class LoanLoanPaymentEditComponent implements OnInit {
  public loanPayment: LoanPaymentModel;
  public collections: CollectionModel[];
  public users: UserModel[];
  public loans: LoanModel[];
  private _idLoan: number;

  constructor(
    private _loanService: LoanService,
    private _activedRoute: ActivatedRoute,
    private _globalService: GlobalService,
    private _userService: UserService
  ) {
    this.collections = [_globalService.varCollection];
  }

  ngOnInit(): void {
    console.log(this.collections);
    this.getData();
  }

  getData() {
    this._activedRoute.params.subscribe((params) => {
      this._idLoan = params["loan"];
      this._loanService.getLoanPayment(params["id"]).subscribe(
        (res) => {
          this.loanPayment = res;
          this._userService.get(res.id_user).subscribe((resp) => {
            this.users = [resp];
          });
          this._loanService.get(res.id_loan).subscribe((resp) => {
            this.loans = [resp];
          });
          //console.log(res);
        },
        (err) => {
          const toast2 = Swal.mixin({
            title: "pago de pretamo no encontredo",
            text: "",
            icon: "info",
          });
          toast2.fire();
          //console.log({ err });
          this._loanService.routeSee(this._idLoan);
        }
      );
    });
  }

  onUpdate(c: LoanPaymentModel) {
    console.log({ c });
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    this._loanService.editLoanPayment(c).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "pago de pretamo editado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._loanService.routeSee(this._idLoan);
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
