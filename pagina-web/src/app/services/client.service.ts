import { Injectable } from "@angular/core";
import { ClientModel } from "../shared/models/client.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ApiServerService } from "./api-server.service";
import { RespModel } from "../shared/models/resp.model";
import { TelModel } from "../shared/models/tel.model";
import { ClientLocationModel } from "../shared/models/client-location.model";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  private _urlA: String = "client";
  private _urlB: String = "clienttel";
  private _urlC: String = "clientlocation";

  constructor(private _api: ApiServerService) {}

  getList(c: number): Observable<ClientModel[]> {
    return this._api.GetQuery(`${this._urlA}/list/${c}`).pipe(
      map((data: RespModel) => {
        return <Array<ClientModel>>data.data;
      })
    );
  }

  get(id: number): Observable<ClientModel> {
    return this._api.GetQuery(`${this._urlA}/${id}`).pipe(
      map((data: RespModel) => {
        return <ClientModel>data.data;
      })
    );
  }

  create(client: ClientModel): Observable<ClientModel> {
    return this._api.PostQuery(`${this._urlA}`, client).pipe(
      map((data: RespModel) => {
        return <ClientModel>data.data;
      })
    );
  }

  edit(client: ClientModel): Observable<ClientModel> {
    let id = client.id;
    return this._api.PutQuery(`${this._urlA}/${id}`, client).pipe(
      map((data: RespModel) => {
        return <ClientModel>data.data;
      })
    );
  }

  delete(id: number): Observable<ClientModel> {
    return this._api.DeleteQuery(`${this._urlA}/${id}`).pipe(
      map((data: RespModel) => {
        return <ClientModel>data.data;
      })
    );
  }

  getTelList(c: number): Observable<TelModel[]> {
    return this._api.GetQuery(`${this._urlB}/list/${c}`).pipe(
      map((data: RespModel) => {
        return <Array<TelModel>>data.data;
      })
    );
  }

  getTel(id: number): Observable<TelModel> {
    return this._api.GetQuery(`${this._urlB}/${id}`).pipe(
      map((data: RespModel) => {
        return <TelModel>data.data;
      })
    );
  }

  createTel(client: TelModel): Observable<TelModel> {
    return this._api.PostQuery(`${this._urlB}`, client).pipe(
      map((data: RespModel) => {
        return <TelModel>data.data;
      })
    );
  }

  editTel(client: TelModel): Observable<TelModel> {
    let id = client.id;
    return this._api.PutQuery(`${this._urlB}/${id}`, client).pipe(
      map((data: RespModel) => {
        return <TelModel>data.data;
      })
    );
  }

  deleteTel(id: number): Observable<TelModel> {
    return this._api.DeleteQuery(`${this._urlB}/${id}`).pipe(
      map((data: RespModel) => {
        return <TelModel>data.data;
      })
    );
  }

  getLocationList(c: number): Observable<ClientLocationModel[]> {
    return this._api.GetQuery(`${this._urlC}/list/${c}`).pipe(
      map((data: RespModel) => {
        return <Array<ClientLocationModel>>data.data;
      })
    );
  }

  getLocation(id: number): Observable<ClientLocationModel> {
    return this._api.GetQuery(`${this._urlC}/${id}`).pipe(
      map((data: RespModel) => {
        return <ClientLocationModel>data.data;
      })
    );
  }

  createLocation(client: ClientLocationModel): Observable<ClientLocationModel> {
    return this._api.PostQuery(`${this._urlC}`, client).pipe(
      map((data: RespModel) => {
        return <ClientLocationModel>data.data;
      })
    );
  }

  editLocation(client: ClientLocationModel): Observable<ClientLocationModel> {
    let id = client.id;
    return this._api.PutQuery(`${this._urlC}/${id}`, client).pipe(
      map((data: RespModel) => {
        return <ClientLocationModel>data.data;
      })
    );
  }

  deleteLocation(id: number): Observable<ClientLocationModel> {
    return this._api.DeleteQuery(`${this._urlC}/${id}`).pipe(
      map((data: RespModel) => {
        return <ClientLocationModel>data.data;
      })
    );
  }
}
