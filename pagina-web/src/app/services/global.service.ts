import { Injectable } from "@angular/core";
import { GlobalModel } from "../shared/models/global.model";
import { ApiServerService } from "./api-server.service";
import { RespModel } from "../shared/models/resp.model";
import { map } from "rxjs/operators";
import { Observable, observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  private _global: GlobalModel;
  constructor(private _api: ApiServerService) {}

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
}
