import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuarios } from 'src/app/shared/models/usuarios.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})

export class UsuariosComponent {
  usuarioForm: FormGroup;
/*
  userForm!: FormGroup;
  
  user: Usuarios = {
    id: '',
    first_name: '',
    second_name: '',
    first_apellido: '',
    second_apellido: '',
    birthday: '',
    email: '',
    password: '',
    area: ''
  };
  submitted = false;
  */
  constructor(private userservice: UsuariosService, private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      id: [''],
      first_name: ['', Validators.required],
      second_name: [''],
      first_apellido: ['', Validators.required],
      second_apellido: [''],
      birthday: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      area: [''] 
    });
   }
   submitForm() {
    if (this.usuarioForm.valid) {
      const usuarioData: Usuarios = this.usuarioForm.value;
      // Aquí puedes enviar los datos del usuario a través de un servicio
      this.userservice.create(usuarioData)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.error(err);
        }
      })


    }
  }
}
