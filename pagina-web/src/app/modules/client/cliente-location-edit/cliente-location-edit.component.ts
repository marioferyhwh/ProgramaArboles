import { Component, OnInit } from "@angular/core";
import { ClientLocationModel } from "src/app/shared/models/client-location.model";
import { ClientService } from "src/app/services/client.service";
import { ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { GlobalService } from "src/app/services/global.service";

@Component({
  selector: "app-cliente-location-edit",
  templateUrl: "./cliente-location-edit.component.html",
  styleUrls: ["./cliente-location-edit.component.scss"],
})
export class ClienteLocationEditComponent implements OnInit {
  public location: ClientLocationModel;
  public collections: CollectionModel[];

  constructor(
    private _clientService: ClientService,
    private _activedRoute: ActivatedRoute,
    private _globalService: GlobalService
  ) {
    this.collections = [this._globalService.varCollection];
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._activedRoute.params.subscribe((params) => {
      this._clientService.getLocation(params["id"]).subscribe(
        (res) => {
          this.location = res;
          console.log(res);
        },
        (err) => {
          const toast2 = Swal.mixin({
            title: "sector no encontredo",
            text: "",
            icon: "info",
          });
          toast2.fire();
          //console.log({ err });
          this._clientService.routeListlocation();
        }
      );
    });
  }

  onUpdate(c: ClientLocationModel) {
    console.log({ c });
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    this._clientService.editLocation(c).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "sector editado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._clientService.routeListlocation();
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
