import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-button-create-edit",
  templateUrl: "./button-create-edit.component.html",
  styleUrls: ["./button-create-edit.component.scss"],
})
export class ButtonCreateEditComponent implements OnInit {
  @Input() private edit: boolean;
  @Input() private id: number;
  public buttonText: string;

  constructor() {
    this.buttonText = "crear";
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.edit || (this.id && this.id > 0)) {
      this.buttonText = "editar";
    }
  }
}
