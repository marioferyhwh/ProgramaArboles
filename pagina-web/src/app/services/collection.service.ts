import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CollectionModel } from "../shared/models/collection.model";
import { ApiServerService } from "./api-server.service";
import { RespModel } from "../shared/models/resp.model";
import { CollectionCashModel } from "../shared/models/collection-cash.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class CollectionService {
  private _urlA: String = "collection";
  private _urlB: String = "collectioncash";

  constructor(private _api: ApiServerService, private _router: Router) {}

  getList(c: number): Observable<CollectionModel[]> {
    return this._api.GetQuery(`${this._urlA}/list/${c}`).pipe(
      map((data: RespModel) => {
        return <Array<CollectionModel>>data.data;
      })
    );
  }

  get(id: number): Observable<CollectionModel> {
    return this._api.GetQuery(`${this._urlA}/${id}`).pipe(
      map((data: RespModel) => {
        return <CollectionModel>data.data;
      })
    );
  }

  create(collection: CollectionModel): Observable<CollectionModel> {
    return this._api.PostQuery(`${this._urlA}`, collection).pipe(
      map((data: RespModel) => {
        return <CollectionModel>data.data;
      })
    );
  }

  edit(collection: CollectionModel): Observable<CollectionModel> {
    let id = collection.id;
    return this._api.PutQuery(`${this._urlA}/${id}`, collection).pipe(
      map((data: RespModel) => {
        return <CollectionModel>data.data;
      })
    );
  }

  delete(id: number): Observable<CollectionModel> {
    return this._api.DeleteQuery(`${this._urlA}/${id}`).pipe(
      map((data: RespModel) => {
        return <CollectionModel>data.data;
      })
    );
  }

  getCashList(c: number): Observable<CollectionCashModel[]> {
    return this._api.GetQuery(`${this._urlB}/list/${c}`).pipe(
      map((data: RespModel) => {
        return <Array<CollectionCashModel>>data.data;
      })
    );
  }

  getCash(id: number): Observable<CollectionCashModel> {
    return this._api.GetQuery(`${this._urlB}/${id}`).pipe(
      map((data: RespModel) => {
        return <CollectionCashModel>data.data;
      })
    );
  }

  createCash(cash: CollectionCashModel): Observable<CollectionCashModel> {
    return this._api.PostQuery(`${this._urlB}`, cash).pipe(
      map((data: RespModel) => {
        return <CollectionCashModel>data.data;
      })
    );
  }

  editCash(cash: CollectionCashModel): Observable<CollectionCashModel> {
    let id = cash.id;
    return this._api.PutQuery(`${this._urlB}/${id}`, cash).pipe(
      map((data: RespModel) => {
        return <CollectionCashModel>data.data;
      })
    );
  }

  deleteCash(id: number): Observable<CollectionCashModel> {
    return this._api.DeleteQuery(`${this._urlB}/${id}`).pipe(
      map((data: RespModel) => {
        return <CollectionCashModel>data.data;
      })
    );
  }
  routeList() {
    this._router.navigate(["/cobro"]);
  }
  routeNew() {
    this._router.navigate(["/cobro", "nuevo"]);
  }
  routeEdit(id: number) {
    this._router.navigate(["/cobro", id, "editar"]);
  }
  routeSee(id: number) {
    this._router.navigate(["/cobro", id]);
  }
  routeListcash() {
    this._router.navigate(["/cobro", "caja"]);
  }
  routeNewcash() {
    this._router.navigate(["/cobro", "caja", "nuevo"]);
  }
  routeEditcash(id: number) {
    this._router.navigate(["/cobro", "caja", id, "editar"]);
  }
  routeSeecash(id: number) {
    this._router.navigate(["/cobro", "caja", id]);
  }
}
