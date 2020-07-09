import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { LoanModel } from "../shared/models/loan.model";
import { ApiServerService } from "./api-server.service";
import { RespModel } from "../shared/models/resp.model";
import { LoanStateModel } from "../shared/models/loan-state.model";
import { LoanPaymentModel } from "../shared/models/loan-payment.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class LoanService {
  private _urlA: String = "loan";
  private _urlB: String = "loanloan_state";
  private _urlC: String = "loanloan_payment";

  constructor(private _api: ApiServerService, private _router: Router) {}

  getList(c: number): Observable<LoanModel[]> {
    return this._api.GetQuery(`${this._urlA}/list/${c}`).pipe(
      map((data: RespModel) => {
        return <Array<LoanModel>>data.data;
      })
    );
  }

  get(id: number): Observable<LoanModel> {
    return this._api.GetQuery(`${this._urlA}/${id}`).pipe(
      map((data: RespModel) => {
        return <LoanModel>data.data;
      })
    );
  }

  create(l: LoanModel): Observable<LoanModel> {
    return this._api.PostQuery(`${this._urlA}`, l).pipe(
      map((data: RespModel) => {
        return <LoanModel>data.data;
      })
    );
  }

  edit(l: LoanModel): Observable<LoanModel> {
    let id = l.id;
    return this._api.PutQuery(`${this._urlA}/${id}`, l).pipe(
      map((data: RespModel) => {
        return <LoanModel>data.data;
      })
    );
  }

  delete(id: number): Observable<LoanModel> {
    return this._api.DeleteQuery(`${this._urlA}/${id}`).pipe(
      map((data: RespModel) => {
        return <LoanModel>data.data;
      })
    );
  }

  getLoanStateList(c: number): Observable<LoanStateModel[]> {
    return this._api.GetQuery(`${this._urlB}/list/${c}`).pipe(
      map((data: RespModel) => {
        return <Array<LoanStateModel>>data.data;
      })
    );
  }

  getLoanState(id: number): Observable<LoanStateModel> {
    return this._api.GetQuery(`${this._urlB}/${id}`).pipe(
      map((data: RespModel) => {
        return <LoanStateModel>data.data;
      })
    );
  }

  createLoanState(ls: LoanStateModel): Observable<LoanStateModel> {
    return this._api.PostQuery(`${this._urlB}`, ls).pipe(
      map((data: RespModel) => {
        return <LoanStateModel>data.data;
      })
    );
  }

  editLoanState(ls: LoanStateModel): Observable<LoanStateModel> {
    let id = ls.id;
    return this._api.PutQuery(`${this._urlB}/${id}`, ls).pipe(
      map((data: RespModel) => {
        return <LoanStateModel>data.data;
      })
    );
  }

  deleteLoanState(id: number): Observable<LoanStateModel> {
    return this._api.DeleteQuery(`${this._urlB}/${id}`).pipe(
      map((data: RespModel) => {
        return <LoanStateModel>data.data;
      })
    );
  }

  getLoanPaymentList(c: number): Observable<LoanPaymentModel[]> {
    return this._api.GetQuery(`${this._urlC}/list/${c}`).pipe(
      map((data: RespModel) => {
        return <Array<LoanPaymentModel>>data.data;
      })
    );
  }

  getLoanPayment(id: number): Observable<LoanPaymentModel> {
    return this._api.GetQuery(`${this._urlC}/${id}`).pipe(
      map((data: RespModel) => {
        return <LoanPaymentModel>data.data;
      })
    );
  }

  createLoanPayment(lp: LoanPaymentModel): Observable<LoanPaymentModel> {
    return this._api.PostQuery(`${this._urlC}`, lp).pipe(
      map((data: RespModel) => {
        return <LoanPaymentModel>data.data;
      })
    );
  }

  editLoanPayment(lp: LoanPaymentModel): Observable<LoanPaymentModel> {
    let id = lp.id;
    return this._api.PutQuery(`${this._urlC}/${id}`, lp).pipe(
      map((data: RespModel) => {
        return <LoanPaymentModel>data.data;
      })
    );
  }

  deleteLoanPayment(id: number): Observable<LoanPaymentModel> {
    return this._api.DeleteQuery(`${this._urlC}/${id}`).pipe(
      map((data: RespModel) => {
        return <LoanPaymentModel>data.data;
      })
    );
  }

  routeList() {
    this._router.navigate(["/prestamo"]);
  }
  routeNew() {
    this._router.navigate(["/prestamo", "nuevo"]);
  }
  routeEdit(id: number) {
    this._router.navigate(["/prestamo", id, "editar"]);
  }
  routeSee(id: number) {
    this._router.navigate(["/prestamo", id]);
  }
  routeListstate() {
    this._router.navigate(["/prestamo", "estado"]);
  }
  routeNewstate() {
    this._router.navigate(["/prestamo", "estado", "nuevo"]);
  }
  routeEditstate(id: number) {
    this._router.navigate(["/prestamo", "estado", id, "editar"]);
  }
  routeSeestate(id: number) {
    this._router.navigate(["/prestamo", "estado", id]);
  }
  routeListPayment() {
    this._router.navigate(["/prestamo", "pago"]);
  }
  routeNewPayment() {
    this._router.navigate(["/prestamo", "pago", "nuevo"]);
  }
  routeEditPayment(id: number) {
    this._router.navigate(["/prestamo", "pago", id, "editar"]);
  }
  routeSeePayment(id: number) {
    this._router.navigate(["/prestamo", "pago", id]);
  }
}
