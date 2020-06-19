import { Component, OnInit, Input } from "@angular/core";
import { Client } from "src/app/shared/models/client";

@Component({
  selector: "app-form-client",
  templateUrl: "./form-client.component.html",
  styleUrls: ["./form-client.component.scss"],
})
export class FormClienteComponent implements OnInit {
  @Input() public client: Client;
  constructor() {}

  ngOnInit(): void {}
}
