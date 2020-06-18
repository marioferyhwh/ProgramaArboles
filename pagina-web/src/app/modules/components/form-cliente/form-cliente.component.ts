import { Component, OnInit } from "@angular/core";
import { Client } from "src/app/shared/models/client";

@Component({
  selector: "app-form-cliente",
  templateUrl: "./form-cliente.component.html",
  styleUrls: ["./form-cliente.component.scss"],
})
export class FormClienteComponent implements OnInit {
  public cliente: Client;
  constructor() {}

  ngOnInit(): void {}
}
