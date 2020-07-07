import { Component, OnInit } from "@angular/core";
import { UserCollectionModel } from "src/app/shared/models/user-collection.model";
import { UserService } from "src/app/services/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-collection-edit",
  templateUrl: "./user-collection-edit.component.html",
  styleUrls: ["./user-collection-edit.component.scss"],
})
export class UserCollectionEditComponent implements OnInit {
  public userColection: UserCollectionModel;

  constructor(
    private _userService: UserService,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activedRoute.params.subscribe((params) => {
      this._userService.getCollection(params["id"]).subscribe(
        (res) => {
          this.userColection = res;
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
