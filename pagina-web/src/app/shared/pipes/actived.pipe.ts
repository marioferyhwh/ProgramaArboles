import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "actived",
})
export class ActivedPipe implements PipeTransform {
  transform(value: boolean, ...args: unknown[]): string {
    if (value) {
      return "Activo";
    }
    return "Inactivo";
  }
}
