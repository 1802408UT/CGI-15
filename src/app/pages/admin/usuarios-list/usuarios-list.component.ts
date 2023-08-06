import { Component, ViewChild } from '@angular/core';
import { Usuarios } from 'src/app/shared/models/usuarios.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss']
})
export class UsuariosListComponent {

  displayedColumns: string[] = ['id', 'first_name', 'second_name', 'first_apellido', 'second_apellido','birthday','active', 'email', 'password', 'area', 'rol', 'img', 'createdAt', 'updatedAt'];
  dataSource = new MatTableDataSource;

  usuarios?: Usuarios[];

  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private usersService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.getall();
  }

  getall(): void {
    this.usersService.getAll()
      .subscribe({
        next: (data) => {
          this.usuarios = data;
          this.dataSource.data = this.usuarios;
          this.router.navigateByUrl('/usuarios');
        },
        error: (e) => console.error(e)
      });
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

/*
  Usuarios: {
    id: [''],
    first_name: ['', Validators.required],
    second_name: [''],
    first_apellido: ['', Validators.required],
    second_apellido: [''],
    birthday: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    area: ['']
  }
*/
}
