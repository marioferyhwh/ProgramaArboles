import { Component, OnInit } from "@angular/core";
import { ClientLocationModel } from "src/app/shared/models/client-location.model";
import { ClientService } from "src/app/services/client.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-cliente-location-edit",
  templateUrl: "./cliente-location-edit.component.html",
  styleUrls: ["./cliente-location-edit.component.scss"],
})
export class ClienteLocationEditComponent implements OnInit {
  public location: ClientLocationModel;

  constructor(
    private _clientService: ClientService,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activedRoute.params.subscribe((params) => {
      this._clientService.getLocation(params["id"]).subscribe(
        (res) => {
          this.location = res;
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
