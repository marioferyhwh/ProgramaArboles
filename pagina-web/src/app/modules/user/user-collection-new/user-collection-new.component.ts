import { Component, OnInit } from "@angular/core";
import { UserCollectionModel } from "src/app/shared/models/user-collection.model";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-collection-new",
  templateUrl: "./user-collection-new.component.html",
  styleUrls: ["./user-collection-new.component.scss"],
})
export class UserCollectionNewComponent implements OnInit {
  public userColection: UserCollectionModel;

  constructor(private _userService: UserService) {}

  ngOnInit(): void {}
}
