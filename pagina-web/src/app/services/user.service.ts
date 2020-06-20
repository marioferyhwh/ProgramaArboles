import { Injectable } from "@angular/core";
import { UserModel } from "../shared/models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private users: UserModel[];
  constructor() {
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
  createUser(user: UserModel) {}
  editUser(User: UserModel) {}
  deleteUser(id: number): UserModel {
    return this.users[id];
  }
}
