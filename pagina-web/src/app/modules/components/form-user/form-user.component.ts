import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserModel } from "src/app/shared/models/user.model";
@Component({
  selector: "app-form-user",
  templateUrl: "./form-user.component.html",
  styleUrls: ["./form-user.component.scss"],
})
export class FormUserComponent implements OnInit {
  @Input() public user: UserModel;
  @Output() UserData: EventEmitter<UserModel>;
  constructor() {
    this.UserData = new EventEmitter();
  }

  ngOnInit(): void {}
  onAction(form: NgForm) {
    this.UserData.emit(this.user);
  }
}
