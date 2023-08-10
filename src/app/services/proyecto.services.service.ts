import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Proyectos } from '../shared/models/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoServicesService {

  private dbPath = '/proyecto';

  proyectosRef: AngularFirestoreCollection<Proyectos>;

  constructor(private db: AngularFirestore) {
    this.proyectosRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Proyectos> {
    return this.proyectosRef;
  }

  create(proyectos: Proyectos): any {
    return this.proyectosRef.add({ ...proyectos });
  }

  update(id: string, data: any): Promise<void> {
    return this.proyectosRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.proyectosRef.doc(id).delete();
  }
}
