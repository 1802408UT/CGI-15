import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuarios } from 'src/app/shared/models/usuarios.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  User: Usuarios = {
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

  constructor(private userservice: UsuariosService) { }

  saveTutorial(): void {
    const data = {
      first_name: this.User.first_name,
      second_name: this.User.second_name,
      first_apellido: this.User.first_apellido,
      second_apellido: this.User.second_apellido,
      birthday: this.User.birthday,
      email: this.User.email,
      password: this.User.password,
      area: this.User.area
    };

    this.userservice.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.User = {
      first_name: '',
      second_name: '',
      first_apellido: '',
      second_apellido: '',
      birthday: '',
      email: '',
      password: '',
      area: ''
    };
  }

}
