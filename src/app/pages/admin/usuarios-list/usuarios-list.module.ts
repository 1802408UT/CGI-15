import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosListComponent } from './usuarios-list.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [UsuariosListComponent],
  imports: [CommonModule, 
    MatTableModule
], 
})
export class UsuariosListModule { }
