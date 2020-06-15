import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./modules/login/login.component";
import { NotFoundComponent } from "./modules/not-found/not-found.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "**", pathMatch: "full", redirectTo: "not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes /* ,{useHash:true} */)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
