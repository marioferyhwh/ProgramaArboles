import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ClientLocationModel } from "src/app/shared/models/client-location.model";

@Component({
  selector: "app-form-location",
  templateUrl: "./form-location.component.html",
  styleUrls: ["./form-location.component.scss"],
})
export class FormLocationComponent implements OnInit {
  @Input() public data: ClientLocationModel;
  @Output() public onData: EventEmitter<ClientLocationModel>;
  public forma: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.onData = new EventEmitter();
  }

  ngOnInit(): void {}

  onAction() {
    console.log(this.forma);
    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach((c) => {
        c.markAsTouched();
      });
      return;
    }
    this.onData.emit(this.data);
  }

  initForm() {
    this.forma = this._fb.group({
      id: [],
    });
  }
}
