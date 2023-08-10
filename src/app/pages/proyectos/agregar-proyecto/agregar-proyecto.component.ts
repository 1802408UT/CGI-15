import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

import { Tutorial } from 'src/app/shared/models/tutorials.model';
import { TutorialsService } from 'src/app/services/tutorials.service';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Proyectos } from 'src/app/shared/models/proyectos.model';
import { ProyectoServicesService } from 'src/app/services/proyecto.services.service';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.scss']
})
export class AgregarProyectoComponent implements OnInit {

  usuarioForm: FormGroup;

  tutorial: Tutorial = new Tutorial();
  submitted = false;

  constructor(private tutorialService: ProyectoServicesService, private fb: FormBuilder) {this.usuarioForm = this.fb.group({
    id: [''],
    nombre: [''],
    descripcion: [''],
    estado: ['activo'],
    date_log: [new Date()],
    date_update: [new Date()]
  }); }

  submitForm() {
    if (this.usuarioForm.valid) {
      const usuarioData: Proyectos = this.usuarioForm.value;
      this.tutorialService.create(usuarioData).then(() => {
        console.log('Exito Proyecto');
        this.submitted = true;

    });
  }
}


  ngOnInit(): void {
  }
  
  newTutorial(): void {
    this.submitted = false;
    this.tutorial = new Tutorial();
  }

  
}