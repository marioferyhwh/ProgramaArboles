import { Injectable } from "@angular/core";
import { GlobalModel } from "../shared/models/global.model";
import { ApiServerService } from "./api-server.service";
import { RespModel } from "../shared/models/resp.model";
import { map } from "rxjs/operators";
import { Observable, observable } from "rxjs";
import { GlovalVarModel } from "../shared/models/gloval-var.model";

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  private _global: GlobalModel;
  constructor(private _api: ApiServerService) {}

  private _nameVar = "forest-var";

  get(): Observable<GlobalModel> {
    if (this._global == null) {
      return this._api.GetQuery("general").pipe(
        map((data: RespModel) => {
          this._global = <GlobalModel>data.data;
          return this._global;
        })
      );
    } else {
      return new Observable((observer) => {
        observer.next(this._global);
      });
    }
  }

  clear() {
    this._global = null;
  }

  getVar(): GlovalVarModel {
    if (localStorage.getItem(this._nameVar)) {
      return JSON.parse(localStorage.getItem(this._nameVar));
    }
    return new GlovalVarModel();
  }

  setVar(data: GlovalVarModel) {
    var dataOld: GlovalVarModel = this.getVar();
    if (data.user) {
      dataOld.user = data.user;
    }
    if (data.collection) {
      dataOld.collection = data.collection;
    }
    if (data.client) {
      dataOld.client = data.client;
    }
    if (data.expense) {
      dataOld.expense = data.expense;
    }
    if (data.sesion) {
      dataOld.sesion = data.sesion;
    }

    localStorage.setItem(this._nameVar, JSON.stringify(dataOld));
  }

  clearVar() {
    if (localStorage.getItem(this._nameVar)) {
      localStorage.removeItem(this._nameVar);
    }
  }
}
