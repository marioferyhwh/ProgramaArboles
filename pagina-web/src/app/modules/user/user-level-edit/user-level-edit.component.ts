import { Component, OnInit } from "@angular/core";
import { UserLevelModel } from "src/app/shared/models/user-level.model";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-level-edit",
  templateUrl: "./user-level-edit.component.html",
  styleUrls: ["./user-level-edit.component.scss"],
})
export class UserLevelEditComponent implements OnInit {
  public userLevel: UserLevelModel;

  constructor(private _userService: UserService) {}

  ngOnInit(): void {}
}
