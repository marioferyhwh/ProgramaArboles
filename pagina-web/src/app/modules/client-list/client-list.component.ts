import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";
import { Client } from "src/app/shared/models/client";

@Component({
  selector: "app-client-list",
  templateUrl: "./client-list.component.html",
  styleUrls: ["./client-list.component.scss"],
})
export class ClientListComponent implements OnInit {
  public clients: Client[];
  constructor(private _clientService: ClientService) {}

  ngOnInit(): void {
    this.clients = this._clientService.getClients();
  }
}
