import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserLevelModel } from "src/app/shared/models/user-level.model";

@Component({
  selector: "app-form-user-level",
  templateUrl: "./form-user-level.component.html",
  styleUrls: ["./form-user-level.component.scss"],
})
export class FormUserLevelComponent implements OnInit {
  @Input() public data: UserLevelModel;
  @Output() public onData: EventEmitter<UserLevelModel>;
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
