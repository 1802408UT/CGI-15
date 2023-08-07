import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosListComponent } from './usuarios-list.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [UsuariosListComponent],
  imports: [CommonModule, 
    MaterialModule
], 
})
export class UsuariosListModule { }
