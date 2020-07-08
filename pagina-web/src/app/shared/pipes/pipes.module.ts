import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivedPipe } from "./actived.pipe";
import { MonedaPipe } from "./moneda.pipe";

@NgModule({
  declarations: [ActivedPipe, MonedaPipe],
  imports: [CommonModule],
  exports: [ActivedPipe, MonedaPipe],
})
export class PipesModule {}
