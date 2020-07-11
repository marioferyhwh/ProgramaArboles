import { Component, OnInit } from "@angular/core";
import { ClientLocationModel } from "src/app/shared/models/client-location.model";
import { ClientService } from "src/app/services/client.service";
import { GlobalService } from "src/app/services/global.service";

@Component({
  selector: "app-cliente-location-list",
  templateUrl: "./cliente-location-list.component.html",
  styleUrls: ["./cliente-location-list.component.scss"],
})
export class ClienteLocationListComponent implements OnInit {
  public locations: ClientLocationModel[];

  constructor(
    private _clientService: ClientService,
    private _globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    let c = this._globalService.varCollection;
    this._clientService.getLocationList(c.id).subscribe(
      (res) => {
        this.locations = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onNew() {
    this._clientService.routeNewlocation();
  }
}
