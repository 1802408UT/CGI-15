import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
//import { Proyectos } from 'src/app/shared/models/proyectos.model';
//import { ProyectoServicesService } from 'src/app/services/proyecto.services.service';
import { Tutorial } from 'src/app/shared/models/tutorials.model';
import { TutorialsService } from 'src/app/services/tutorials.service';
import { Proyectos } from 'src/app/shared/models/proyectos.model';
import { ProyectoServicesService } from 'src/app/services/proyecto.services.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detalles-proyecto',
  templateUrl: './detalles-proyecto.component.html',
  styleUrls: ['./detalles-proyecto.component.scss']
})
export class DetallesProyectoComponent implements OnInit {
  
  
  tutorials?: Proyectos[];
  items: any;

  constructor(private route: ActivatedRoute,private tutorialService: ProyectoServicesService) {
    this.items = tutorialService.getItems()
   }


  ngOnInit(): void {
    }
    //  this.route.paramMap.subscribe(params => this.proyectos = Proyectos[this.x]);
    //this.retrieveTutorials();
    
/*
  retrieveTutorials(): void {
    ;
    console.log(id);
    this.tutorialService.getAll().then(() => {
      console.log('Exito Proyecto');
      this.submitted = true;
  });
    /*this.tutorialService.getbyId(id).snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.tutorials = data;
      console.log(this.tutorials);
    });
    
  }*/



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