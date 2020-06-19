import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ClientService } from "src/app/services/client.service";
import { Client } from "src/app/shared/models/client";

@Component({
  selector: "app-client-edit",
  templateUrl: "./client-edit.component.html",
  styleUrls: ["./client-edit.component.scss"],
})
export class ClientEditComponent implements OnInit {
  public client: Client;
  constructor(
    private _activedRoute: ActivatedRoute,
    private _clientService: ClientService
  ) {
    this._activedRoute.params.subscribe((parms) => {
      this.client = this._clientService.getClient(parms["id"]);
      console.log(this.client);
    });
  }

  ngOnInit(): void {}
}
