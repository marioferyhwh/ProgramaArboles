import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TypeaModels } from "src/app/shared/models/typea.models";

@Component({
  selector: "app-table-typea",
  templateUrl: "./table-typea.component.html",
  styleUrls: ["./table-typea.component.scss"],
})
export class TableTypeaComponent implements OnInit {
  @Input() data: TypeaModels[];
  @Output() edit: EventEmitter<number>;
  @Output() delete: EventEmitter<number>;
  constructor() {}

  ngOnInit(): void {}

  removeItem(id: number) {}
  selectItem(id: number) {}
  editItem(id: number) {}
}
