import { Component, OnInit } from "@angular/core";
import { LoanPaymentModel } from "src/app/shared/models/loan-payment.model";
import { LoanService } from "src/app/services/loan.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-loan-loan-payment-new",
  templateUrl: "./loan-loan-payment-new.component.html",
  styleUrls: ["./loan-loan-payment-new.component.scss"],
})
export class LoanLoanPaymentNewComponent implements OnInit {
  public loanPayment: LoanPaymentModel;

  constructor(private _loanService: LoanService) {}

  ngOnInit(): void {
    this.loanPayment = new LoanPaymentModel();
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
        this._loanService.routeListPayment();
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
