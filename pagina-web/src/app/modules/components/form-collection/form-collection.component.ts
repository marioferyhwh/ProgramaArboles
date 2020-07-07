import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CollectionModel } from "src/app/shared/models/collection.model";
@Component({
  selector: "app-form-collection",
  templateUrl: "./form-collection.component.html",
  styleUrls: ["./form-collection.component.scss"],
})
export class FormCollectionComponent implements OnInit {
  @Input() public data: CollectionModel;
  @Output() public onData: EventEmitter<CollectionModel>;
  public forma: FormGroup;

  constructor(private _fb: FormBuilder) {
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
    this.forma.controls["balance_total"].disable();
  }

  onAction() {
    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach((c) => {
        c.markAsTouched();
      });
      return;
    }
    this.data = <CollectionModel>this.forma.value;
    this.onData.emit(this.data);
  }

  initForm() {
    this.forma = this._fb.group({
      id: [0],
      description: [""],
      actived: ["", Validators.required],
      balance_total: ["", [Validators.required, Validators.min(0)]],
    });
  }

  InvalidField(Field: string): boolean {
    return this.forma.get(Field).invalid && this.forma.get(Field).touched;
  }
  get descriptionInvalid(): boolean {
    return this.InvalidField("description");
  }
  get activedInvalid(): boolean {
    return this.InvalidField("actived");
  }
  get balance_totalInvalid(): boolean {
    return this.InvalidField("balance_total");
  }
}
