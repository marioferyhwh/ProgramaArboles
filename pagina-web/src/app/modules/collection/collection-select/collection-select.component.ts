import { Component, OnInit } from "@angular/core";
import { CollectionService } from "src/app/services/collection.service";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { GlobalService } from "src/app/services/global.service";
import { UserService } from "src/app/services/user.service";
import { ApiServerService } from "src/app/services/api-server.service";

@Component({
  selector: "app-collection-select",
  templateUrl: "./collection-select.component.html",
  styleUrls: ["./collection-select.component.scss"],
})
export class CollectionSelectComponent implements OnInit {
  public collections: CollectionModel[];
  constructor(
    private _collectionService: CollectionService,
    private _userService: UserService,
    private _globalServer: GlobalService,
    private _apiService: ApiServerService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    let user = this._apiService.userToken();
    this._collectionService.getListByUser(user.id).subscribe(
      (res) => {
        this.collections = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  selectColletion(id: number, name: string) {
    let c = this._globalServer.getVarCollection;
    c.id = id;
    c.description = name;
    this._globalServer.varAllSave();
    this._userService.getCollectionByCollection(id).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
