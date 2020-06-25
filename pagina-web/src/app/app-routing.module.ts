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
import { BodyComponent } from "./modules/body/body.component";
import { LoginGuard } from "./guards/login.guard";
import { LoanNewComponent } from "./modules/loan-new/loan-new.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: BodyComponent,
    canActivate: [LoginGuard],
    children: [
      { path: "not-found", component: NotFoundComponent },

      { path: "usuario/lista", component: UserListComponent },
      { path: "usuario/nuevo", component: UserNewComponent },
      { path: "usuario/cobros", component: UserEditComponent },
      { path: "usuario/:id", component: UserEditComponent },

      { path: "cobro/lista", component: UserListComponent },
      { path: "cobro/nuevo", component: UserNewComponent },

      { path: "cliente", component: ClientListComponent },
      { path: "cliente/nuevo", component: ClientNewComponent },
      { path: "cliente/editar/:id", component: ClientEditComponent },
      { path: "cliente/:id", component: ClientEditComponent },

      { path: "prestamo/nuevo", component: LoanNewComponent },
      {
        path: "cobro/:id",
        component: UserEditComponent,
        children: [
          { path: "cliente", component: ClientListComponent },
          { path: "cliente/nuevo", component: ClientNewComponent },
          { path: "cliente/editar/:id", component: ClientEditComponent },
          {
            path: "cliente/:id",
            component: ClientEditComponent,
            children: [
              { path: "prestamo", component: ClientListComponent },
              { path: "prestamo/nuevo", component: ClientNewComponent },
              { path: "prestamo/editar/:id", component: ClientEditComponent },
              { path: "prestamo/:id", component: ClientEditComponent },
            ],
          },
          { path: "gastos/lista", component: UserListComponent },
          { path: "gastos/nuevo", component: UserNewComponent },
          { path: "gastos/:id", component: UserEditComponent },
        ],
      },

      { path: "**", pathMatch: "full", redirectTo: "not-found" },
    ],
  },
  { path: "**", pathMatch: "full", redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes /* ,{useHash:true} */)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
