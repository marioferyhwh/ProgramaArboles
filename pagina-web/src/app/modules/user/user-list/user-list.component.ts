import { Component, OnInit } from "@angular/core";
import { UserModel } from "src/app/shared/models/user.model";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  public users: UserModel[];

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._userService.getList(0).subscribe(
      (res) => {
        this.users = res;
        console.log({ res });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onNew() {
    this._userService.routeNew();
  }
}
