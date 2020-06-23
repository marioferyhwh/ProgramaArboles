import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { UserModel } from "src/app/shared/models/user.model";
import Swal from "sweetalert2";
import { Router } from "@angular/router";

@Component({
  selector: "app-form-login",
  templateUrl: "./form-login.component.html",
  styleUrls: ["./form-login.component.scss"],
})
export class FormLoginComponent implements OnInit {
  public user: UserModel = new UserModel();
  public remember: boolean = false;
  private emailLS: string = "forest-email";
  constructor(private _userService: UserService, private _router: Router) {
    if (localStorage.getItem(this.emailLS)) {
      this.user.email = localStorage.getItem(this.emailLS);
      this.remember = true;
    }
  }

  ngOnInit(): void {}

  onLogin(fl: NgForm) {
    console.log(fl);
    if (fl.invalid) {
      return;
    }

    const toast = Swal.mixin({
      allowOutsideClick: false,
      icon: "info",
      text: "Espere Por favor",
    });
    toast.fire();
    toast.showLoading();

    console.log(this.user);
    this._userService.login(this.user).subscribe(
      (resp) => {
        toast.close();
        if (this.remember) {
          localStorage.setItem(this.emailLS, this.user.email);
        } else if (localStorage.getItem(this.emailLS)) {
          localStorage.removeItem(this.emailLS);
        }
        console.log(resp);
        this._router.navigate(["/cliente"]);
      },
      (err) => {
        const toast = Swal.mixin({
          icon: "error",
          title: "Error al autentificar",
          text: err["error"].message,
        });
        toast.fire();
        toast.fire();
        console.log({ err });
      }
    );
  }
}
