import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { UserLevelModel } from "src/app/shared/models/user-level.model";

@Component({
  selector: "app-user-level-new",
  templateUrl: "./user-level-new.component.html",
  styleUrls: ["./user-level-new.component.scss"],
})
export class UserLevelNewComponent implements OnInit {
  public userLevel: UserLevelModel;

  constructor(private _userService: UserService) {}

  ngOnInit(): void {}
}
