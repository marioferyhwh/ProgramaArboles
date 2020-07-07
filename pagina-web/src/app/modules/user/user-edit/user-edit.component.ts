import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { UserModel } from "src/app/shared/models/user.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.scss"],
})
export class UserEditComponent implements OnInit {
  public user: UserModel;

  constructor(
    private _userService: UserService,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activedRoute.params.subscribe((params) => {
      this._userService.get(params["id"]).subscribe(
        (res) => {
          this.user = res;
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
