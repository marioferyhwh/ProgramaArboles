import { Component, OnInit } from "@angular/core";
import { UserLevelModel } from "src/app/shared/models/user-level.model";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-level-list",
  templateUrl: "./user-level-list.component.html",
  styleUrls: ["./user-level-list.component.scss"],
})
export class UserLevelListComponent implements OnInit {
  public userLevels: UserLevelModel[];

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._userService.getLevelList(1).subscribe(
      (res) => {
        this.userLevels = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onNew() {
    this._userService.routeNew();
  }
}
