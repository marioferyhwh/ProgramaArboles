import { Component, OnInit, Input } from "@angular/core";
import { ClientModel } from "src/app/shared/models/client.model";

@Component({
  selector: "app-client-new",
  templateUrl: "./client-new.component.html",
  styleUrls: ["./client-new.component.scss"],
})
export class ClientNewComponent implements OnInit {
  public client: ClientModel;
  @Input() public show: boolean;
  constructor() {
    this.show = false;
    this.client = new ClientModel();
  }

  ngOnInit(): void {}
}
