import { Component, OnInit } from "@angular/core";
import { ClientLocationModel } from "src/app/shared/models/client-location.model";
import { ClientService } from "src/app/services/client.service";

@Component({
  selector: "app-cliente-location-list",
  templateUrl: "./cliente-location-list.component.html",
  styleUrls: ["./cliente-location-list.component.scss"],
})
export class ClienteLocationListComponent implements OnInit {
  public locations: ClientLocationModel[];

  constructor(private _clientService: ClientService) {}

  ngOnInit(): void {
    this._clientService.getLocationList(1).subscribe(
      (res) => {
        this.locations = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
