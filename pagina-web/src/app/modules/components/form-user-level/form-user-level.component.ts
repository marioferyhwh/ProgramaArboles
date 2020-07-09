import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserLevelModel } from "src/app/shared/models/user-level.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-form-user-level",
  templateUrl: "./form-user-level.component.html",
  styleUrls: ["./form-user-level.component.scss"],
})
export class FormUserLevelComponent implements OnInit {
  @Input() public data: UserLevelModel;
  @Output() public onData: EventEmitter<UserLevelModel>;

  public forma: FormGroup;
  public debug: boolean;

  constructor(private _fb: FormBuilder, private _router: Router) {
    this.debug = false;
    this.onData = new EventEmitter();
    this.initForm();
  }

  ngOnInit(): void {
    this.dataForm();
  }

  dataForm() {
    if (this.data != null) {
      this.forma.reset({ ...this.data });
    }
    this.forma.get("id").disable();
  }

  onAction() {
    console.log(this.forma);
    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach((c) => {
        c.markAsTouched();
      });
      return;
    }
    const d = <UserLevelModel>this.forma.value;
    d.id = this.data.id;
    this.onData.emit(d);
  }
  initForm() {
    this.forma = this._fb.group({
      id: [],
      level: ["", Validators.required],
    });
  }

  cancel() {
    this._router.navigate(["/usuario/nivel"]);
  }

  InvalidField(Field: string): boolean {
    return this.forma.get(Field).invalid && this.forma.get(Field).touched;
  }

  get levelInvalid(): boolean {
    return this.InvalidField("level");
  }
}
