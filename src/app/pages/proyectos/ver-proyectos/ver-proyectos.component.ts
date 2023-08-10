import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Proyectos } from 'src/app/shared/models/proyectos.model';
import { ProyectoServicesService } from 'src/app/services/proyecto.services.service';
import { map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ver-proyectos',
  templateUrl: './ver-proyectos.component.html',
  styleUrls: ['./ver-proyectos.component.scss']
})
export class VerProyectosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'estado', 'date_log','date_update','actions'];
  dataSource = new MatTableDataSource;

  
  @ViewChild(MatSort)
  sort!: MatSort;

  tutorials?: Proyectos[];
  currentTutorial?: Proyectos;
  currentIndex = -1;
  title = '';

 

  constructor(private tutorialService: ProyectoServicesService) {
  }
  

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  refreshList(): void {
    this.currentTutorial = undefined;
    this.currentIndex = -1;
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.tutorials = data;
      this.dataSource.data = data;
      console.log(this.tutorials);
    });
  }

  setActiveTutorial(tutorials: Proyectos, index: number): void {
    this.currentTutorial = tutorials;
    this.currentIndex = index;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
/*
SetUserData(user: any) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(
        `users/${user.uid}`
      );
      const userData: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
      };
      return userRef.set(userData, {
        merge: true,
      });
    }

    /*
id?: any;
    nombre?: string;
    descripcion?: string;
    estado?: string;
    createdAt?: string;
    updatedAt?: string;
*/ 