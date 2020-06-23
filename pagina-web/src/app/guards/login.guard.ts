import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { ApiServerService } from "../services/api-server.service";

@Injectable({
  providedIn: "root",
})
export class LoginGuard implements CanActivate {
  constructor(private _api: ApiServerService, private _router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // console.log("guard login");
    if (this._api.isAutentication()) {
      return true;
    }
    this._router.navigate(["/login"]);
    return false;
  }
}
