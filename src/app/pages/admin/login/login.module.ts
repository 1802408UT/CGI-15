import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, 
    ReactiveFormsModule, 
    MatInputModule, 
    MatFormFieldModule,
    MatCardModule],
})
export class LoginModule { }
