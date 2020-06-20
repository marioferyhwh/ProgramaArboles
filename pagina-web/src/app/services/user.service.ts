import { Injectable } from "@angular/core";
import { User } from "../shared/models/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private users: User[] = [{}, {}];
  constructor() {
    console.log("inicia servicio Usuario");
  }
  login(user: User) {}
  logout() {}
  getUser(id: number): User {
    return this.users[id];
  }
  getUsers(): User[] {
    return this.users;
  }

  createUser(user: User) {}
  editUser(User: User) {}
  deleteUser(id: number): User {
    return this.users[id];
  }
}
