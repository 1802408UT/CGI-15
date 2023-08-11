import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { UsuariosComponent } from './pages/admin/usuarios/usuarios.component';
import { UsuariosListComponent } from './pages/admin/usuarios-list/usuarios-list.component';
import { VerProyectosComponent } from './pages/proyectos/ver-proyectos/ver-proyectos.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegisterComponent } from './pages/admin/register/register.component';
import { DetallesProyectoComponent } from './pages/proyectos/detalles-proyecto/detalles-proyecto.component';
import { AgregarProyectoComponent } from './pages/proyectos/agregar-proyecto/agregar-proyecto.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegisterComponent},
  { path: 'crear-usuarios', component: UsuariosComponent, canActivate: [AuthGuard] },
  { path: 'usuarios', component: UsuariosListComponent},
  { path: 'ver-proyectos', component: VerProyectosComponent},
  { path: 'proyectos/:id', component: DetallesProyectoComponent},
  { path: 'agregar-proyectos', component: AgregarProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
