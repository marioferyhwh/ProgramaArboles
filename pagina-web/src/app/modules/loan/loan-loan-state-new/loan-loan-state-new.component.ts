import { Component, OnInit } from "@angular/core";
import { LoanStateModel } from "src/app/shared/models/loan-state.model";
import { LoanService } from "src/app/services/loan.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-loan-loan-state-new",
  templateUrl: "./loan-loan-state-new.component.html",
  styleUrls: ["./loan-loan-state-new.component.scss"],
})
export class LoanLoanStateNewComponent implements OnInit {
  public loanState: LoanStateModel;

  constructor(private _loanService: LoanService) {}

  ngOnInit(): void {
    this.loanState = new LoanStateModel("");
  }

  onCreate(data: LoanStateModel) {
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    console.log(data);
    this._loanService.createLoanState(data).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "estado de prestamo creado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._loanService.routeListstate();
      },
      (err) => {
        const toast = Swal.mixin({
          title: "error al crear estado de prestamo",
          text: err["error"].message,
          icon: "error",
        });
        toast.fire();
      }
    );
  }
}
