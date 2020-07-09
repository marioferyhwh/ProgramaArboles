import { Injectable } from "@angular/core";
import { ApiServerService } from "./api-server.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { RespModel } from "../shared/models/resp.model";
import { DocumentTypeModel } from "../shared/models/document-type.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class DocumentTypeService {
  private _urlA: String = "document";

  constructor(private _api: ApiServerService, private _router: Router) {}

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

  create(dt: DocumentTypeModel): Observable<DocumentTypeModel> {
    return this._api.PostQuery(`${this._urlA}`, dt).pipe(
      map((data: RespModel) => {
        return <DocumentTypeModel>data.data;
      })
    );
  }

  edit(dt: DocumentTypeModel): Observable<DocumentTypeModel> {
    let id = dt.id;
    return this._api.PutQuery(`${this._urlA}/${id}`, dt).pipe(
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

  routeList() {
    this._router.navigate(["/documento"]);
  }
  routeNew() {
    this._router.navigate(["/documento", "nuevo"]);
  }
  routeEdit(id: number) {
    this._router.navigate(["/documento", id, "editar"]);
  }
  routeSee(id: number) {
    this._router.navigate(["/documento", id]);
  }
}
