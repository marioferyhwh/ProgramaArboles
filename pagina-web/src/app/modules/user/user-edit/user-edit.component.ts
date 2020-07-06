import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { UserModel } from "src/app/shared/models/user.model";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.scss"],
})
export class UserEditComponent implements OnInit {
  public user: UserModel;

  constructor(private _userService: UserService) {}

  ngOnInit(): void {}
}
