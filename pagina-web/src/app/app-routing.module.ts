import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./modules/login/login.component";
import { NotFoundComponent } from "./modules/not-found/not-found.component";
import { ClientListComponent } from "./modules/client-list/client-list.component";
import { ClientNewComponent } from "./modules/client-new/client-new.component";
import { ClientEditComponent } from "./modules/client-edit/client-edit.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "cliente", component: ClientListComponent },
  { path: "cliente/nuevo", component: ClientNewComponent },
  { path: "cliente/edit/:id", component: ClientEditComponent },
  { path: "cliente/:id", component: ClientEditComponent },
  { path: "**", pathMatch: "full", redirectTo: "not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes /* ,{useHash:true} */)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
