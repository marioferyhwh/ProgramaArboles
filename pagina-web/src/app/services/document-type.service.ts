import { Injectable } from "@angular/core";
import { ApiServerService } from "./api-server.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { RespModel } from "../shared/models/resp.model";
import { DocumentTypeModel } from "../shared/models/document-type.model";

@Injectable({
  providedIn: "root",
})
export class DocumentTypeService {
  private _urlA: String = "document";

  constructor(private _api: ApiServerService) {}

  getList(c: number): Observable<DocumentTypeModel[]> {
    return this._api.GetQuery(`${this._urlA}/list/${c}`).pipe(
      map((data: RespModel) => {
        return <Array<DocumentTypeModel>>data.data;
      })
    );
  }

  get(id: number): Observable<DocumentTypeModel> {
    return this._api.GetQuery(`${this._urlA}/${id}`).pipe(
      map((data: RespModel) => {
        return <DocumentTypeModel>data.data;
      })
    );
  }

  create(client: DocumentTypeModel): Observable<DocumentTypeModel> {
    return this._api.PostQuery(`${this._urlA}`, client).pipe(
      map((data: RespModel) => {
        return <DocumentTypeModel>data.data;
      })
    );
  }

  edit(client: DocumentTypeModel): Observable<DocumentTypeModel> {
    let id = client.id;
    return this._api.PutQuery(`${this._urlA}/${id}`, client).pipe(
      map((data: RespModel) => {
        return <DocumentTypeModel>data.data;
      })
    );
  }

  delete(id: number): Observable<DocumentTypeModel> {
    return this._api.DeleteQuery(`${this._urlA}/${id}`).pipe(
      map((data: RespModel) => {
        return <DocumentTypeModel>data.data;
      })
    );
  }
}
