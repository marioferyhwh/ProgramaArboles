import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ApiServerService } from "./api-server.service";
import { RespModel } from "../shared/models/resp.model";
import { BusinessTypeModel } from "../shared/models/business-type.model";

@Injectable({
  providedIn: "root",
})
export class BusinessTypeService {
  private _urlA: String = "document";

  constructor(private _api: ApiServerService) {}

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
}
