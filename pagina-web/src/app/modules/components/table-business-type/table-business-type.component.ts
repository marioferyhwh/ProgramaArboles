import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { BusinessTypeModel } from "src/app/shared/models/business-type.model";

@Component({
  selector: "app-table-business-type",
  templateUrl: "./table-business-type.component.html",
  styleUrls: ["./table-business-type.component.scss"],
})
export class TableBusinessTypeComponent implements OnInit {
  @Input() data: BusinessTypeModel[];
  @Output() edit: EventEmitter<number>;
  @Output() delete: EventEmitter<number>;
  constructor() {}

  ngOnInit(): void {}

  removeItem(id: number) {}
  selectItem(id: number) {}
}
