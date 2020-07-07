import { Component, OnInit } from "@angular/core";
import { UserLevelModel } from "src/app/shared/models/user-level.model";
import { UserService } from "src/app/services/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-level-edit",
  templateUrl: "./user-level-edit.component.html",
  styleUrls: ["./user-level-edit.component.scss"],
})
export class UserLevelEditComponent implements OnInit {
  public userLevel: UserLevelModel;

  constructor(
    private _userService: UserService,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activedRoute.params.subscribe((params) => {
      this._userService.getLevel(params["id"]).subscribe(
        (res) => {
          this.userLevel = res;
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
