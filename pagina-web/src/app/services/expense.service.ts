import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ExpenseModel } from "../shared/models/expense.model";
import { ApiServerService } from "./api-server.service";
import { RespModel } from "../shared/models/resp.model";
import { ExpenseDescriptionModel } from "../shared/models/expense-description.model";

@Injectable({
  providedIn: "root",
})
export class ExpenseService {
  private _urlA: String = "expense";
  private _urlB: String = "expensedescrip";

  constructor(private _api: ApiServerService) {}

  getList(c: number): Observable<ExpenseModel[]> {
    return this._api.GetQuery(`${this._urlA}/list/${c}`).pipe(
      map((data: RespModel) => {
        return <Array<ExpenseModel>>data.data;
      })
    );
  }

  get(id: number): Observable<ExpenseModel> {
    return this._api.GetQuery(`${this._urlA}/${id}`).pipe(
      map((data: RespModel) => {
        return <ExpenseModel>data.data;
      })
    );
  }

  create(client: ExpenseModel): Observable<ExpenseModel> {
    return this._api.PostQuery(`${this._urlA}`, client).pipe(
      map((data: RespModel) => {
        return <ExpenseModel>data.data;
      })
    );
  }

  edit(client: ExpenseModel): Observable<ExpenseModel> {
    let id = client.id;
    return this._api.PutQuery(`${this._urlA}/${id}`, client).pipe(
      map((data: RespModel) => {
        return <ExpenseModel>data.data;
      })
    );
  }

  delete(id: number): Observable<ExpenseModel> {
    return this._api.DeleteQuery(`${this._urlA}/${id}`).pipe(
      map((data: RespModel) => {
        return <ExpenseModel>data.data;
      })
    );
  }

  getDescriptionList(c: number): Observable<ExpenseDescriptionModel[]> {
    return this._api.GetQuery(`${this._urlB}/list/${c}`).pipe(
      map((data: RespModel) => {
        return <Array<ExpenseDescriptionModel>>data.data;
      })
    );
  }

  getDescription(id: number): Observable<ExpenseDescriptionModel> {
    return this._api.GetQuery(`${this._urlB}/${id}`).pipe(
      map((data: RespModel) => {
        return <ExpenseDescriptionModel>data.data;
      })
    );
  }

  createDescription(
    client: ExpenseDescriptionModel
  ): Observable<ExpenseDescriptionModel> {
    return this._api.PostQuery(`${this._urlB}`, client).pipe(
      map((data: RespModel) => {
        return <ExpenseDescriptionModel>data.data;
      })
    );
  }

  editDescription(
    client: ExpenseDescriptionModel
  ): Observable<ExpenseDescriptionModel> {
    let id = client.id;
    return this._api.PutQuery(`${this._urlB}/${id}`, client).pipe(
      map((data: RespModel) => {
        return <ExpenseDescriptionModel>data.data;
      })
    );
  }

  deleteDescription(id: number): Observable<ExpenseDescriptionModel> {
    return this._api.DeleteQuery(`${this._urlB}/${id}`).pipe(
      map((data: RespModel) => {
        return <ExpenseDescriptionModel>data.data;
      })
    );
  }
}
