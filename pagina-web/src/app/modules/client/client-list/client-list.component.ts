import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";
import { ClientModel } from "src/app/shared/models/client.model";
import { GlobalService } from "src/app/services/global.service";

@Component({
  selector: "app-client-list",
  templateUrl: "./client-list.component.html",
  styleUrls: ["./client-list.component.scss"],
})
export class ClientListComponent implements OnInit {
  public clients: ClientModel[];
  constructor(
    private _clientService: ClientService,
    private _globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    let c = this._globalService.varCollection;
    this._clientService.getList(c.id).subscribe(
      (res: ClientModel[]) => {
        this.clients = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onNew() {
    this._clientService.routeNew();
  }
}
