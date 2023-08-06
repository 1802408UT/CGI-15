import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import {MatInputModule} from '@angular/material/input';
import { UsuariosComponent } from './usuarios.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [UsuariosComponent],
  imports: [CommonModule, 
    ReactiveFormsModule, 
    MatInputModule, 
    MatFormFieldModule,
    MatCardModule], // Asegúrate de agregar ReactiveFormsModule aquí
})
export class UsuariosModule { }
