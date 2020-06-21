import { Component, OnInit } from "@angular/core";
import { UserModel } from "src/app/shared/models/user.model";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-new",
  templateUrl: "./user-new.component.html",
  styleUrls: ["./user-new.component.scss"],
})
export class UserNewComponent implements OnInit {
  constructor(private _userService: UserService) {}

  ngOnInit(): void {}
  onCreateUser(u: UserModel) {
    console.log(u);
    this._userService.createUser(u).subscribe((resp: UserModel) => {
      console.log(resp);
    });
  }
}
