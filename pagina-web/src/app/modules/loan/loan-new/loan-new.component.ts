import { Component, OnInit } from "@angular/core";
import { LoanModel } from "src/app/shared/models/loan.model";
import { LoanService } from "src/app/services/loan.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-loan-new",
  templateUrl: "./loan-new.component.html",
  styleUrls: ["./loan-new.component.scss"],
})
export class LoanNewComponent implements OnInit {
  public loan: LoanModel;

  constructor(private _loanService: LoanService) {}

  ngOnInit(): void {
    this.loan = new LoanModel();
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
