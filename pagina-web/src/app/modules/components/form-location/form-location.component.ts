import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ClientLocationModel } from "src/app/shared/models/client-location.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-form-location",
  templateUrl: "./form-location.component.html",
  styleUrls: ["./form-location.component.scss"],
})
export class FormLocationComponent implements OnInit {
  @Input() public data: ClientLocationModel;
  @Output() public onData: EventEmitter<ClientLocationModel>;

  public forma: FormGroup;
  public debug: boolean;

  constructor(private _fb: FormBuilder, private _router: Router) {
    this.debug = false;
    this.onData = new EventEmitter();
    this.initForm();
  }

  ngOnInit(): void {}

  ngOnChanges() {
    this.dataForm();
  }

  dataForm() {
    if (this.data != null) {
      this.forma.reset({ ...this.data });
    }
    this.forma.get("id").disable();
    this.forma.get("id_collection").disable();
  }

  onAction() {
    console.log(this.forma);
    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach((c) => {
        c.markAsTouched();
      });
      return;
    }
    const d = <ClientLocationModel>this.forma.value;
    d.id = this.data.id;
    this.onData.emit(d);
  }

  initForm() {
    this.forma = this._fb.group({
      id: [],
      id_collection: [0, Validators.required],
      name: ["", Validators.required],
    });
  }

  cancel() {
    this._router.navigate(["/sector"]);
  }

  InvalidField(Field: string): boolean {
    return this.forma.get(Field).invalid && this.forma.get(Field).touched;
  }

  get id_collectionInvalid(): boolean {
    return this.InvalidField("id_collection");
  }
  get nameInvalid(): boolean {
    return this.InvalidField("name");
  }
}
