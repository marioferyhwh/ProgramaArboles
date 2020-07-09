import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { UserCollectionModel } from "src/app/shared/models/user-collection.model";

@Component({
  selector: "app-user-collection-list",
  templateUrl: "./user-collection-list.component.html",
  styleUrls: ["./user-collection-list.component.scss"],
})
export class UserCollectionListComponent implements OnInit {
  public userColections: UserCollectionModel[];

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._userService.getCollectionList(0).subscribe(
      (res) => {
        this.userColections = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onNew() {
    this._userService.routeNewcollection();
  }
}
