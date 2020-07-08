import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "moneda",
})
export class MonedaPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if (!value) {
      value = 0;
    }
    return `$${value},00`;
  }
}
