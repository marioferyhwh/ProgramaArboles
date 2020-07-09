import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ClientService } from "src/app/services/client.service";
import { ClientModel } from "src/app/shared/models/client.model";
import Swal from "sweetalert2";

@Component({
  selector: "app-client-edit",
  templateUrl: "./client-edit.component.html",
  styleUrls: ["./client-edit.component.scss"],
})
export class ClientEditComponent implements OnInit {
  public client: ClientModel;
  constructor(
    private _activedRoute: ActivatedRoute,
    private _clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._activedRoute.params.subscribe((params) => {
      this._clientService.get(params["id"]).subscribe(
        (res) => {
          this.client = res;
          //console.log(res);
        },
        (err) => {
          const toast2 = Swal.mixin({
            title: "cliente no encontredo",
            text: "",
            icon: "info",
          });
          toast2.fire();
          //console.log({ err });
          this._clientService.routeList();
        }
      );
    });
  }

  onUpdate(c: ClientModel) {
    console.log({ c });
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    this._clientService.edit(c).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "cliente editado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._clientService.routeList();
      },
      (err) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "error",
          text: err.error.message,
          icon: "error",
        });
        toast2.fire();
        console.log({ err });
      }
    );
  }
}
