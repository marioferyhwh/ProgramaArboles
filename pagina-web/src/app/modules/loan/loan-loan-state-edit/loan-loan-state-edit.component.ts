import { Component, OnInit } from "@angular/core";
import { LoanStateModel } from "src/app/shared/models/loan-state.model";
import { LoanService } from "src/app/services/loan.service";
import { ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-loan-loan-state-edit",
  templateUrl: "./loan-loan-state-edit.component.html",
  styleUrls: ["./loan-loan-state-edit.component.scss"],
})
export class LoanLoanStateEditComponent implements OnInit {
  public loanState: LoanStateModel;

  constructor(
    private _loanService: LoanService,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._activedRoute.params.subscribe((params) => {
      this._loanService.getLoanState(params["id"]).subscribe(
        (res) => {
          this.loanState = res;
          //console.log(res);
        },
        (err) => {
          const toast2 = Swal.mixin({
            title: "estado de cobro no encontredo",
            text: "",
            icon: "info",
          });
          toast2.fire();
          //console.log({ err });
          this._loanService.routeListstate();
        }
      );
    });
  }

  onUpdate(c: LoanStateModel) {
    console.log({ c });
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    this._loanService.editLoanState(c).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "estado de cobro editado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._loanService.routeListstate();
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
