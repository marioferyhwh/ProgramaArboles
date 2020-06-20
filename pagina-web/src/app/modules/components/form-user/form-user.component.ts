import { Component, OnInit, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserModel } from "src/app/shared/models/user.model";

@Component({
  selector: "app-form-user",
  templateUrl: "./form-user.component.html",
  styleUrls: ["./form-user.component.scss"],
})
export class FormUserComponent implements OnInit {
  @Input() public user: UserModel = new UserModel();
  constructor() {}

  ngOnInit(): void {}
  onAction(form: NgForm) {
    console.log(this.user);
  }
}
