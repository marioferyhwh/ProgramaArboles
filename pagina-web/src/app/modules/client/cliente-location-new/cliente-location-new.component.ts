import { Component, OnInit } from "@angular/core";
import { ClientLocationModel } from "src/app/shared/models/client-location.model";
import { ClientService } from "src/app/services/client.service";

@Component({
  selector: "app-cliente-location-new",
  templateUrl: "./cliente-location-new.component.html",
  styleUrls: ["./cliente-location-new.component.scss"],
})
export class ClienteLocationNewComponent implements OnInit {
  public location: ClientLocationModel;

  constructor(private _clientService: ClientService) {}

  ngOnInit(): void {
    this.location = new ClientLocationModel();
  }
}
