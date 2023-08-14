import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

import { Tutorial } from 'src/app/shared/models/tutorials.model';
import { TutorialsService } from 'src/app/services/tutorials.service';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Proyectos } from 'src/app/shared/models/proyectos.model';
import { ProyectoServicesService } from 'src/app/services/proyecto.services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.scss']
})
export class AgregarProyectoComponent implements OnInit {

  usuarioForm: FormGroup;

  tutorial: Tutorial = new Tutorial();
  submitted = false;

  constructor(private proyectoServicesService: ProyectoServicesService, private fb: FormBuilder, private router: Router) {this.usuarioForm = this.fb.group({
    id: [''],
    nombre: [''],
    descripcion: [''],
    estado: ['Activo'],
    date_log: [new Date()],
    date_update: [new Date()]
  }); }

  submitForm() {
    if (this.usuarioForm.valid) {
      const usuarioData: Proyectos = this.usuarioForm.value;
      const coleccion = '/proyecto'; // Reemplaza con el nombre de tu colección
      const nuevoId = usuarioData.id; // Reemplaza con el ID que deseas asignar
      const datos = usuarioData
  
      this.proyectoServicesService.agregarDocumento(coleccion, nuevoId, datos)
        .then(() => {
          console.log('Documento agregado exitosamente');
          this.router.navigate(['ver-proyectos']);
          
        })
        .catch((error) => {
          console.error('Error al agregar el documento:', error);
        });
    }

    /*  this.tutorialService.create(usuarioData).then(() => {
        console.log('Exito Proyecto');
        this.submitted = true;
    });*/
  }


  ngOnInit(): void {
  }
  
  newTutorial(): void {
    this.submitted = false;
    this.tutorial = new Tutorial();
  }

  
}