import { Component, OnInit, Input } from "@angular/core";
import { ClientModel } from "src/app/shared/models/client.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-form-client",
  templateUrl: "./form-client.component.html",
  styleUrls: ["./form-client.component.scss"],
})
export class FormClienteComponent implements OnInit {
  @Input() public client: ClientModel;
  constructor() {}

  ngOnInit(): void {}
  onAction(fl: NgForm) {
    console.log({fl});
    if(fl.invalid){
      Object.values(fl.controls).forEach(c=>{
        c.markAsTouched();
      })
      return
    }
    console.log(this.client);
  }
}
