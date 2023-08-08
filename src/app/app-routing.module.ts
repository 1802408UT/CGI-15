import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { UsuariosComponent } from './pages/admin/usuarios/usuarios.component';
import { UsuariosListComponent } from './pages/admin/usuarios-list/usuarios-list.component';
import { VerProyectosComponent } from './pages/proyectos/ver-proyectos/ver-proyectos.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'crear-usuarios', component: UsuariosComponent},
  { path: 'usuarios', component: UsuariosListComponent},
  { path: 'ver-proyectos', component: VerProyectosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
