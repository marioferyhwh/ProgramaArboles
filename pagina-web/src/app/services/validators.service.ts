import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

interface ErrorValidate {
  [s: string]: boolean;
}
@Injectable({
  providedIn: "root",
})
export class ValidatorsService {
  constructor() {}

  document(control: FormControl): ErrorValidate {
    // return { document: true }
    return null;
  }

  documentCode(control: FormControl): ErrorValidate {
    // return { document: true }
    return null;
  }

  passwordEquals(pass1: string, pass2: string) {
    return (fg: FormGroup) => {
      const pas1 = fg.controls[pass1];
      const pas2 = fg.controls[pass2];
      if (pas1.value === pas2.value) {
        pas2.setErrors(null);
      } else {
        pas2.setErrors({ passnoequals: true });
      }
    };
  }

  userExists(
    control: FormGroup
  ): Promise<ErrorValidate> | Observable<ErrorValidate> {
    if (!control.value) {
      return Promise.resolve(null);
    }
    return new Promise((res, rej) => {
      //se consultara si el usario eciste por api

      //ejemplo por momento
      console.log("ll");
      console.log({ control });
      setTimeout(() => {
        // console.log(control.value);
        // console.log(control.value === "usuario");
        if (control.value === "usuario") {
          res({ existe: true });
        } else {
          res(null);
        }
      }, 3500);
    });
  }
}
