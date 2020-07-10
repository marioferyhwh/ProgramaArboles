import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserModel } from "../shared/models/user.model";
import { ApiServerService } from "./api-server.service";
import { RespModel } from "../shared/models/resp.model";
import { GlobalService } from "./global.service";
import { TelModel } from "../shared/models/tel.model";
import { UserLevelModel } from "../shared/models/user-level.model";
import { UserCollectionModel } from "../shared/models/user-collection.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private _urlA: String = "user";
  private _urlB: String = "usertel";
  private _urlC: String = "userlevel";
  private _urlD: String = "usercollection";

  constructor(
    private _api: ApiServerService,
    private _global: GlobalService,
    private _router: Router
  ) {
    console.log("inicia servicio Usuario");
  }

  login(user: UserModel) {
    return this._api.PostQuery(`user/login`, user, false).pipe(
      map((data: RespModel) => {
        if (data.new_token) {
          this._api.setToken(data.new_token);
        }
        return data;
      })
    );
  }

  logout() {
    this._api.deleteToken();
    this._global.clear();
  }

  getuserNow(): UserModel {
    return this._api.userToken();
  }

  getList(id: number): Observable<UserModel[]> {
    return this._api.GetQuery(`${this._urlA}/list/${id}`).pipe(
      map((data: RespModel) => {
        return <Array<UserModel>>data.data;
      })
    );
  }

  get(id: number): Observable<UserModel> {
    return this._api.GetQuery(`${this._urlA}/${id}`).pipe(
      map((data: RespModel) => {
        return <UserModel>data.data;
      })
    );
  }

  create(user: UserModel): Observable<UserModel> {
    return this._api.PostQuery(`${this._urlA}`, user).pipe(
      map((data: RespModel) => {
        return <UserModel>data.data;
      })
    );
  }

  edit(user: UserModel): Observable<UserModel> {
    let id = user.id;
    return this._api.PutQuery(`${this._urlA}/${id}`, user).pipe(
      map((data: RespModel) => {
        return <UserModel>data.data;
      })
    );
  }

  delete(id: number): Observable<UserModel> {
    return this._api.DeleteQuery(`${this._urlA}/${id}`).pipe(
      map((data: RespModel) => {
        return <UserModel>data.data;
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

  createTel(ut: TelModel): Observable<TelModel> {
    return this._api.PostQuery(`${this._urlB}`, ut).pipe(
      map((data: RespModel) => {
        return <TelModel>data.data;
      })
    );
  }

  editTel(ut: TelModel): Observable<TelModel> {
    let id = ut.id;
    return this._api.PutQuery(`${this._urlB}/${id}`, ut).pipe(
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

  getLevelList(c: number): Observable<UserLevelModel[]> {
    return this._api.GetQuery(`${this._urlC}/list/${c}`).pipe(
      map((data: RespModel) => {
        return <Array<UserLevelModel>>data.data;
      })
    );
  }

  getLevel(id: number): Observable<UserLevelModel> {
    return this._api.GetQuery(`${this._urlC}/${id}`).pipe(
      map((data: RespModel) => {
        return <UserLevelModel>data.data;
      })
    );
  }

  createLevel(ul: UserLevelModel): Observable<UserLevelModel> {
    return this._api.PostQuery(`${this._urlC}`, ul).pipe(
      map((data: RespModel) => {
        return <UserLevelModel>data.data;
      })
    );
  }

  editLevel(ul: UserLevelModel): Observable<UserLevelModel> {
    let id = ul.id;
    return this._api.PutQuery(`${this._urlC}/${id}`, ul).pipe(
      map((data: RespModel) => {
        return <UserLevelModel>data.data;
      })
    );
  }

  deleteLevel(id: number): Observable<UserLevelModel> {
    return this._api.DeleteQuery(`${this._urlC}/${id}`).pipe(
      map((data: RespModel) => {
        return <UserLevelModel>data.data;
      })
    );
  }

  getCollectionList(c: number): Observable<UserCollectionModel[]> {
    return this._api.GetQuery(`${this._urlD}/list/${c}`).pipe(
      map((data: RespModel) => {
        return <Array<UserCollectionModel>>data.data;
      })
    );
  }

  getCollection(id: number): Observable<UserCollectionModel> {
    return this._api.GetQuery(`${this._urlD}/${id}`).pipe(
      map((data: RespModel) => {
        return <UserCollectionModel>data.data;
      })
    );
  }

  getCollectionByCollection(id: number): Observable<UserCollectionModel> {
    return this._api.GetQuery(`${this._urlD}/0?collection=${id}`).pipe(
      map((data: RespModel) => {
        return <UserCollectionModel>data.data;
      })
    );
  }

  getCollectionByUser(id: number): Observable<UserCollectionModel> {
    return this._api.GetQuery(`${this._urlD}/0?user=${id}`).pipe(
      map((data: RespModel) => {
        return <UserCollectionModel>data.data;
      })
    );
  }

  createCollection(uc: UserCollectionModel): Observable<UserCollectionModel> {
    return this._api.PostQuery(`${this._urlD}`, uc).pipe(
      map((data: RespModel) => {
        return <UserCollectionModel>data.data;
      })
    );
  }

  editCollection(uc: UserCollectionModel): Observable<UserCollectionModel> {
    let id = uc.id;
    return this._api.PutQuery(`${this._urlD}/${id}`, uc).pipe(
      map((data: RespModel) => {
        return <UserCollectionModel>data.data;
      })
    );
  }

  deleteCollection(id: number): Observable<UserCollectionModel> {
    return this._api.DeleteQuery(`${this._urlD}/${id}`).pipe(
      map((data: RespModel) => {
        return <UserCollectionModel>data.data;
      })
    );
  }

  routeLogin() {
    this._router.navigate(["/login"]);
  }
  routeList() {
    this._router.navigate(["/usuario"]);
  }
  routeNew() {
    this._router.navigate(["/usuario", "nuevo"]);
  }
  routeEdit(id: number) {
    this._router.navigate(["/usuario", id, "editar"]);
  }
  routeSee(id: number) {
    this._router.navigate(["/usuario", id]);
  }
  routeListLevel() {
    this._router.navigate(["/usuario", "nivel"]);
  }
  routeNewLevel() {
    this._router.navigate(["/usuario", "nivel", "nuevo"]);
  }
  routeEditLevel(id: number) {
    this._router.navigate(["/usuario", "nivel", id, "editar"]);
  }
  routeSeeLevel(id: number) {
    this._router.navigate(["/usuario", "nivel", id]);
  }
  routeListcollection() {
    this._router.navigate(["/usuario", "cobro"]);
  }
  routeNewcollection() {
    this._router.navigate(["/usuario", "cobro", "nuevo"]);
  }
  routeEditcollection(id: number) {
    this._router.navigate(["/usuario", "cobro", id, "editar"]);
  }
  routeSeecollection(id: number) {
    this._router.navigate(["/usuario", "cobro", id]);
  }
}
