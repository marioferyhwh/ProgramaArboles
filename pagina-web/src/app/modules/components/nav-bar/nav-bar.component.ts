import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit {
  constructor(private _userServer: UserService) {}

  ngOnInit(): void {
    // $('#main_navbar').bootnavbar({})
  }
  logOut() {
    this._userServer.logout();
  }
}
