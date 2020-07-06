import { Component, OnInit } from "@angular/core";
import { UserCollectionModel } from "src/app/shared/models/user-collection.model";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-collection-edit",
  templateUrl: "./user-collection-edit.component.html",
  styleUrls: ["./user-collection-edit.component.scss"],
})
export class UserCollectionEditComponent implements OnInit {
  public userColection: UserCollectionModel;

  constructor(private _userService: UserService) {}

  ngOnInit(): void {}
}
