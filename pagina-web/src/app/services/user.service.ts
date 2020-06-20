import { Injectable } from "@angular/core";
import { UserModel } from "../shared/models/user.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private users: UserModel[];
  private _url = "http://localhost:8080/api/v1/";
  constructor(private _http: HttpClient) {
    console.log("inicia servicio Usuario");
  }
  login(user: UserModel) {}
  logout() {}
  getUser(id: number): UserModel {
    return this.users[id];
  }
  getUsers(): UserModel[] {
    return this.users;
  }
  createUser(user: UserModel) {
    let token = ""; //?authorization=
    return this._http.post(`${this._url}user${token}`, user);
  }
  editUser(User: UserModel) {}
  deleteUser(id: number): UserModel {
    return this.users[id];
  }
}
