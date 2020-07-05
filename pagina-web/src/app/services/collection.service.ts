import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CollectionModel } from "../shared/models/collection.model";
import { ApiServerService } from "./api-server.service";
import { RespModel } from "../shared/models/resp.model";
import { CollectionCashModel } from "../shared/models/collection-cash.model";

@Injectable({
  providedIn: "root",
})
export class CollectionService {
  private _urlA: String = "collection";
  private _urlB: String = "collectioncash";

  constructor(private _api: ApiServerService) {}

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

  create(client: CollectionModel): Observable<CollectionModel> {
    return this._api.PostQuery(`${this._urlA}`, client).pipe(
      map((data: RespModel) => {
        return <CollectionModel>data.data;
      })
    );
  }

  edit(client: CollectionModel): Observable<CollectionModel> {
    let id = client.id;
    return this._api.PutQuery(`${this._urlA}/${id}`, client).pipe(
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

  createCash(client: CollectionCashModel): Observable<CollectionCashModel> {
    return this._api.PostQuery(`${this._urlB}`, client).pipe(
      map((data: RespModel) => {
        return <CollectionCashModel>data.data;
      })
    );
  }

  editCash(client: CollectionCashModel): Observable<CollectionCashModel> {
    let id = client.id;
    return this._api.PutQuery(`${this._urlB}/${id}`, client).pipe(
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
}
