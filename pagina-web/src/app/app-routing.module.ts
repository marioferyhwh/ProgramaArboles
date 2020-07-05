import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./modules/login/login.component";
import { NotFoundComponent } from "./modules/not-found/not-found.component";
import { ClientListComponent } from "./modules/client/client-list/client-list.component";
import { ClientNewComponent } from "./modules/client/client-new/client-new.component";
import { ClientEditComponent } from "./modules/client/client-edit/client-edit.component";
import { UserNewComponent } from "./modules/user/user-new/user-new.component";
import { UserListComponent } from "./modules/user/user-list/user-list.component";
import { UserEditComponent } from "./modules/user/user-edit/user-edit.component";
import { BodyComponent } from "./modules/body/body.component";
import { LoginGuard } from "./guards/login.guard";
import { LoanNewComponent } from "./modules/loan/loan-new/loan-new.component";
import { BusinessTypeListComponent } from "./modules/business/business-type-list/business-type-list.component";
import { BusinessTypeNewComponent } from "./modules/business/business-type-new/business-type-new.component";
import { BusinessTypeEditComponent } from "./modules/business/business-type-edit/business-type-edit.component";
import { LocationListComponent } from "./modules/location/location-list/location-list.component";
import { LocationNewComponent } from "./modules/location/location-new/location-new.component";
import { LocationEditComponent } from "./modules/location/location-edit/location-edit.component";

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
      { path: "usuario", component: UserListComponent },

      { path: "cobro/lista", component: UserListComponent },
      { path: "cobro/nuevo", component: UserNewComponent },

      { path: "cliente/nuevo", component: ClientNewComponent },
      { path: "cliente/editar/:id", component: ClientEditComponent },
      { path: "cliente/:id", component: ClientEditComponent },
      { path: "cliente", component: ClientListComponent },

      { path: "cliente/sector/lista", component: LocationListComponent },
      { path: "cliente/sector/nuevo", component: LocationNewComponent },
      {
        path: "cliente/sector/editar/:id",
        component: LocationEditComponent,
      },
      { path: "cliente/sector/:id", component: LocationEditComponent },
      { path: "cliente/sector", component: LocationListComponent },

      { path: "negocio/lista", component: BusinessTypeListComponent },
      { path: "negocio/nuevo", component: BusinessTypeNewComponent },
      { path: "negocio/editar/:id", component: BusinessTypeEditComponent },
      { path: "negocio/:id", component: BusinessTypeEditComponent },
      { path: "negocio", component: BusinessTypeListComponent },

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
