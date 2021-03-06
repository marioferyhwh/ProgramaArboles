import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ApiServerService } from "./api-server.service";
import { RespModel } from "../shared/models/resp.model";
import { BusinessTypeModel } from "../shared/models/business-type.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class BusinessTypeService {
  private _urlA: String = "busindess";

  constructor(private _api: ApiServerService, private _router: Router) {}

  getList(c: number): Observable<BusinessTypeModel[]> {
    return this._api.GetQuery(`${this._urlA}/list/${c}`).pipe(
      map((data: RespModel) => {
        return <Array<BusinessTypeModel>>data.data;
      })
    );
  }

  get(id: number): Observable<BusinessTypeModel> {
    return this._api.GetQuery(`${this._urlA}/${id}`).pipe(
      map((data: RespModel) => {
        return <BusinessTypeModel>data.data;
      })
    );
  }

  create(bt: BusinessTypeModel): Observable<BusinessTypeModel> {
    return this._api.PostQuery(`${this._urlA}`, bt).pipe(
      map((data: RespModel) => {
        return <BusinessTypeModel>data.data;
      })
    );
  }

  edit(bt: BusinessTypeModel): Observable<BusinessTypeModel> {
    let id = bt.id;
    return this._api.PutQuery(`${this._urlA}/${id}`, bt).pipe(
      map((data: RespModel) => {
        return <BusinessTypeModel>data.data;
      })
    );
  }

  delete(id: number): Observable<BusinessTypeModel> {
    return this._api.DeleteQuery(`${this._urlA}/${id}`).pipe(
      map((data: RespModel) => {
        return <BusinessTypeModel>data.data;
      })
    );
  }

  routeList() {
    this._router.navigate(["/negocio"]);
  }
  routeNew() {
    this._router.navigate(["/negocio", "nuevo"]);
  }
  routeEdit(id: number) {
    this._router.navigate(["/negocio", id, "editar"]);
  }
  routeSee(id: number) {
    this._router.navigate(["/negocio", id]);
  }
}
