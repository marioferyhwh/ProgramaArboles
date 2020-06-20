import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";
import { ClientModel } from "src/app/shared/models/client.model";

@Component({
  selector: "app-client-list",
  templateUrl: "./client-list.component.html",
  styleUrls: ["./client-list.component.scss"],
})
export class ClientListComponent implements OnInit {
  public clients: ClientModel[];
  constructor(private _clientService: ClientService) {}

  ngOnInit(): void {
    this.clients = this._clientService.getClients();
  }
}
