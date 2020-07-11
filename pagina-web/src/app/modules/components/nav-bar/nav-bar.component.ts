import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { GlobalService } from "src/app/services/global.service";
import { ApiServerService } from "src/app/services/api-server.service";
import { CollectionModel } from "src/app/shared/models/collection.model";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit {
  private levenNow: number;
  private Colllection: CollectionModel;
  public admin: boolean;
  constructor(
    private _userServer: UserService,
    private _globalService: GlobalService,
    private _apiService: ApiServerService
  ) {
    this.levenNow = 3;
    this.admin = _apiService.userToken().admin;
  }

  ngOnInit(): void {}
  ngDoCheck(): void {
    this.getData();
  }
  getData() {
    this.Colllection = this._globalService.varCollection;
    this.levenNow = this._globalService.varUserCollection.id_user_level;
  }
  logOut() {
    this._globalService.clearVar();
    this._userServer.logout();
  }

  minLevel(level: number) {
    return level >= this.levenNow;
  }
  minLevelandCollection(level: number) {
    return this.Colllection && this.Colllection.id && this.minLevel(level);
  }
}
