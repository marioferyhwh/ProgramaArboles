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

@Injectable({
  providedIn: "root",
})
export class UserService {
  private _urlA: String = "user";
  private _urlB: String = "usertel";
  private _urlC: String = "userlevel";
  private _urlD: String = "usercollection";

  constructor(private _api: ApiServerService, private _global: GlobalService) {
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

  get(id: number): Observable<UserModel[]> {
    return this._api.GetQuery(`${this._urlA}/${id}`).pipe(
      map((data: RespModel) => {
        return <Array<UserModel>>data.data;
      })
    );
  }

  getlist(id: number): Observable<UserModel> {
    return this._api.GetQuery(`${this._urlA}/list/${id}`).pipe(
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

  createLevel(client: UserLevelModel): Observable<UserLevelModel> {
    return this._api.PostQuery(`${this._urlC}`, client).pipe(
      map((data: RespModel) => {
        return <UserLevelModel>data.data;
      })
    );
  }

  editLevel(client: UserLevelModel): Observable<UserLevelModel> {
    let id = client.id;
    return this._api.PutQuery(`${this._urlC}/${id}`, client).pipe(
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

  createCollection(
    client: UserCollectionModel
  ): Observable<UserCollectionModel> {
    return this._api.PostQuery(`${this._urlD}`, client).pipe(
      map((data: RespModel) => {
        return <UserCollectionModel>data.data;
      })
    );
  }

  editCollection(client: UserCollectionModel): Observable<UserCollectionModel> {
    let id = client.id;
    return this._api.PutQuery(`${this._urlD}/${id}`, client).pipe(
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
}
