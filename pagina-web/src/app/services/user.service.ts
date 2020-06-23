import { Injectable } from "@angular/core";
import { UserModel } from "../shared/models/user.model";
import { ApiServerService } from "./api-server.service";
import { RespModel } from "../shared/models/resp.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private users: UserModel[];
  constructor(private _api: ApiServerService) {
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
    this._api.setToken("");
  }
  getUser(id: number): Observable<UserModel[]> {
    return this._api.GetQuery(`user/list/${id}`).pipe(
      map((data: RespModel) => {
        return <Array<UserModel>>data.data;
      })
    );
  }
  getUsers(id: number): Observable<UserModel> {
    return this._api.GetQuery(`user/list/${id}`).pipe(
      map((data: RespModel) => {
        return <UserModel>data.data;
      })
    );
  }
  createUser(user: UserModel): Observable<UserModel> {
    return this._api.PostQuery(`user`, user).pipe(
      map((data: RespModel) => {
        return <UserModel>data.data;
      })
    );
  }
  editUser(user: UserModel): Observable<UserModel> {
    let id = user.id;
    return this._api.PutQuery(`user/${id}`, user).pipe(
      map((data: RespModel) => {
        return <UserModel>data.data;
      })
    );
  }
  deleteUser(id: number): Observable<UserModel> {
    return this._api.DeleteQuery(`user/${id}`).pipe(
      map((data: RespModel) => {
        return <UserModel>data.data;
      })
    );
  }
}
