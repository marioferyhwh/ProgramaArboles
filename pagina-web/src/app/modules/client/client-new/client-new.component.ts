import { Component, OnInit, Input } from "@angular/core";
import { ClientModel } from "src/app/shared/models/client.model";
import { ClientService } from "src/app/services/client.service";
import Swal from "sweetalert2";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { UserModel } from "src/app/shared/models/user.model";

@Component({
  selector: "app-client-new",
  templateUrl: "./client-new.component.html",
  styleUrls: ["./client-new.component.scss"],
})
export class ClientNewComponent implements OnInit {
  public client: ClientModel;
  constructor(private _clientService: ClientService) {}

  ngOnInit(): void {
    this.client = new ClientModel();
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
