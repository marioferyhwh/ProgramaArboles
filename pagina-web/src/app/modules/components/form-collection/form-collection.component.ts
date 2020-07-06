import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
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
  CollectionModel;
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
