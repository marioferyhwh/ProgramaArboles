import { Component, OnInit } from "@angular/core";
import { ClientLocationModel } from "src/app/shared/models/client-location.model";
import { ClientService } from "src/app/services/client.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-cliente-location-new",
  templateUrl: "./cliente-location-new.component.html",
  styleUrls: ["./cliente-location-new.component.scss"],
})
export class ClienteLocationNewComponent implements OnInit {
  public location: ClientLocationModel;

  constructor(private _clienteService: ClientService) {}

  ngOnInit(): void {
    this.location = new ClientLocationModel();
  }

  onCreate(data: ClientLocationModel) {
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    console.log(data);
    this._clienteService.createLocation(data).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "sector creado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._clienteService.routeListlocation();
      },
      (err) => {
        const toast = Swal.mixin({
          title: "error al crear sector",
          text: err["error"].message,
          icon: "error",
        });
        toast.fire();
      }
    );
  }
}
