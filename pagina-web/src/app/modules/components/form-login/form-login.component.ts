import { Component, OnInit } from "@angular/core";
import { User } from "src/app/shared/models/user";
import { NgForOf } from "@angular/common";
import { NgForm } from "@angular/forms";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-form-login",
  templateUrl: "./form-login.component.html",
  styleUrls: ["./form-login.component.scss"],
})
export class FormLoginComponent implements OnInit {
  public user: User = { email: "", password: "" };
  constructor(private _userService: UserService) {}

  ngOnInit(): void {}

  onLogin(fl: NgForm) {
    console.log(fl);
    if (fl.invalid) {
      return;
    }
    console.log(this.user);
  }
}
