import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ClientService } from "src/app/services/client.service";
import { ClientModel } from "src/app/shared/models/client.model";

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
  ) {
    this._activedRoute.params.subscribe((parms) => {
      this._clientService.get(parms["id"]).subscribe((res) => {
        this.client = res["data"];
      });
      console.log(this.client);
    });
  }

  ngOnInit(): void {}
}
