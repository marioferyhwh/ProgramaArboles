import { Component, OnInit } from "@angular/core";
import { Client } from "src/app/shared/models/client";

@Component({
  selector: "app-form-client",
  templateUrl: "./form-client.component.html",
  styleUrls: ["./form-client.component.scss"],
})
export class FormClientComponent implements OnInit {
  public client: Client;
  constructor() {}

  ngOnInit(): void {}
}
