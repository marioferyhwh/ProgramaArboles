import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button-create-edit",
  templateUrl: "./button-create-edit.component.html",
  styleUrls: ["./button-create-edit.component.scss"],
})
export class ButtonCreateEditComponent implements OnInit {
  @Input() private edit: boolean;
  @Input() private id: number;
  @Output() onCancel: EventEmitter<any>;

  public editar: boolean;

  constructor() {
    this.editar = false;
    this.onCancel = new EventEmitter();
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.edit || (this.id && this.id > 0)) {
      this.editar = true;
    }
  }

  cancel() {
    this.onCancel.emit();
  }
}
