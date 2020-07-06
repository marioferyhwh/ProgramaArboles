import { Component, OnInit } from "@angular/core";
import { ClientLocationModel } from "src/app/shared/models/client-location.model";
import { ClientService } from "src/app/services/client.service";

@Component({
  selector: "app-cliente-location-edit",
  templateUrl: "./cliente-location-edit.component.html",
  styleUrls: ["./cliente-location-edit.component.scss"],
})
export class ClienteLocationEditComponent implements OnInit {
  public location: ClientLocationModel;

  constructor(private _clientService: ClientService) {}

  ngOnInit(): void {}
}
