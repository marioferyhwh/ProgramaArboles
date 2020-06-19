import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./modules/login/login.component";
import { NotFoundComponent } from "./modules/not-found/not-found.component";
import { ClientListComponent } from "./modules/client-list/client-list.component";
import { ClientNewComponent } from "./modules/client-new/client-new.component";
import { ClientEditComponent } from "./modules/client-edit/client-edit.component";
import { UserNewComponent } from "./modules/user-new/user-new.component";
import { UserListComponent } from "./modules/user-list/user-list.component";
import { UserEditComponent } from "./modules/user-edit/user-edit.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "cliente", component: ClientListComponent },
  { path: "cliente/nuevo", component: ClientNewComponent },
  { path: "cliente/editar/:id", component: ClientEditComponent },
  { path: "cliente/:id", component: ClientEditComponent },
  { path: "usuario/nuevo", component: UserNewComponent },
  { path: "usuario/lista", component: UserListComponent },
  { path: "usuario/:id", component: UserEditComponent },
  { path: "**", pathMatch: "full", redirectTo: "not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes /* ,{useHash:true} */)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
