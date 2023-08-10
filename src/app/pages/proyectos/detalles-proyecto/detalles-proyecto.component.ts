import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
//import { Proyectos } from 'src/app/shared/models/proyectos.model';
//import { ProyectoServicesService } from 'src/app/services/proyecto.services.service';
import { Tutorial } from 'src/app/shared/models/tutorials.model';
import { TutorialsService } from 'src/app/services/tutorials.service';
import { Proyectos } from 'src/app/shared/models/proyectos.model';

@Component({
  selector: 'app-detalles-proyecto',
  templateUrl: './detalles-proyecto.component.html',
  styleUrls: ['./detalles-proyecto.component.scss']
})
export class DetallesProyectoComponent implements OnInit {
  @Input() tutorial?: Tutorial;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentTutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };
  message = '';

  constructor(private tutorialService: TutorialsService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentTutorial = { ...this.tutorial };
  }

  updatePublished(status: boolean): void {
    if (this.currentTutorial.id) {
      this.tutorialService.update(this.currentTutorial.id, { published: status })
      .then(() => {
        this.currentTutorial.published = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  updateTutorial(): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description
    };

    if (this.currentTutorial.id) {
      this.tutorialService.update(this.currentTutorial.id, data)
        .then(() => this.message = 'The tutorial was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteTutorial(): void {
    if (this.currentTutorial.id) {
      this.tutorialService.delete(this.currentTutorial.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }

  
  /*
  @Input() tutorial?: Proyectos;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentTutorial: Proyectos = {
    nombre: '',
    descripcion: '',
    estado: '',
    date_log: '',
    date_update: '',
  };
  message = '';

  constructor(private tutorialService: ProyectoServicesService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentTutorial = { ...this.tutorial };
  }
/*
  updatePublished(status: boolean): void {
    if (this.currentTutorial.id) {
      this.tutorialService.update(this.currentTutorial.id, { published: status })
      .then(() => {
        this.currentTutorial.published = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }
*/
/*
  updateTutorial(): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description
    };

    if (this.currentTutorial.id) {
      this.tutorialService.update(this.currentTutorial.id, data)
        .then(() => this.message = 'The tutorial was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteTutorial(): void {
    if (this.currentTutorial.id) {
      this.tutorialService.delete(this.currentTutorial.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
  */
}