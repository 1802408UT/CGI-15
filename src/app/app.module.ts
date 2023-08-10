import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material.module';
/** FORMS */
import { MatFormFieldModule } from '@angular/material/form-field'; 
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsuariosModule } from './pages/admin/usuarios/usuarios.module';
import { UsuariosListModule } from './pages/admin/usuarios-list/usuarios-list.module';
import { LoginModule } from './pages/admin/login/login.module';
/* Angular */
/*import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';*/
//import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { InicioModule } from './pages/inicio/inicio.module';
import { RegisterModule } from './pages/admin/register/register.module';
//import { VerProyectosModule } from './pages/proyectos/ver-proyectos/ver-proyectos.module';
//import { DetallesProyectoModule } from './pages/proyectos/detalles-proyecto/detalles-proyectos.module';
//import { AgregarProyectoModule } from './pages/proyectos/agregar-proyecto/agregar-proyecto.module';
import { VerProyectosComponent } from './pages/proyectos/ver-proyectos/ver-proyectos.component';
import { AgregarProyectoComponent } from './pages/proyectos/agregar-proyecto/agregar-proyecto.component';
import { DetallesProyectoComponent } from './pages/proyectos/detalles-proyecto/detalles-proyecto.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VerProyectosComponent,
    AgregarProyectoComponent,
    DetallesProyectoComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    UsuariosModule,
    UsuariosListModule,
    LoginModule,
    InicioModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
