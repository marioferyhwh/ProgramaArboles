import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { UserModel } from "src/app/shared/models/user.model";

@Component({
  selector: "app-form-login",
  templateUrl: "./form-login.component.html",
  styleUrls: ["./form-login.component.scss"],
})
export class FormLoginComponent implements OnInit {
  public user: UserModel = new UserModel();
  constructor(private _userService: UserService) {}

  ngOnInit(): void {}

  onLogin(fl: NgForm) {
    console.log(fl);
    // if (fl.invalid) {
    //   return;
    // }
    console.log(this.user);
    this._userService.login(this.user).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => console.log({ err })
    );
  }
}
