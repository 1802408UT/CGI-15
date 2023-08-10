import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import {MatInputModule} from '@angular/material/input';
import { InicioComponent } from './inicio.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [InicioComponent],
  imports: [CommonModule, 
    ReactiveFormsModule, 
    MatInputModule, 
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule],
})
export class InicioModule { }
