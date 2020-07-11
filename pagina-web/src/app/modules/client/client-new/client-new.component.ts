import { Component, OnInit, Input } from "@angular/core";
import { ClientModel } from "src/app/shared/models/client.model";
import { ClientService } from "src/app/services/client.service";
import Swal from "sweetalert2";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { UserModel } from "src/app/shared/models/user.model";
import { GlobalService } from "src/app/services/global.service";
import { ClientLocationModel } from "src/app/shared/models/client-location.model";
import { ApiServerService } from "src/app/services/api-server.service";

@Component({
  selector: "app-client-new",
  templateUrl: "./client-new.component.html",
  styleUrls: ["./client-new.component.scss"],
})
export class ClientNewComponent implements OnInit {
  public client: ClientModel;
  public collections: CollectionModel[];
  public users: UserModel[];
  public locations: ClientLocationModel[];
  constructor(
    private _clientService: ClientService,
    private _globalService: GlobalService,
    private _apiService: ApiServerService
  ) {
    this.collections = [this._globalService.varCollection];
    this.users = [this._apiService.userToken()];
    this._clientService.getLocationList(this.collections[0].id).subscribe(
      (resp) => {
        this.locations = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.client = new ClientModel();
    this.client.id_collection = this.collections[0].id;
    this.client.id_user = this.users[0].id;
  }

  onCreate(data: ClientModel) {
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    console.log(data);
    this._clientService.create(data).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "cliente creado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._clientService.routeList();
      },
      (err) => {
        const toast = Swal.mixin({
          title: "error al crear cliente",
          text: err["error"].message,
          icon: "error",
        });
        toast.fire();
      }
    );
  }
}
