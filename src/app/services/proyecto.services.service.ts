import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Proyectos } from '../shared/models/proyectos.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoServicesService {

  private dbPath = '/proyecto';

  items = Proyectos;

  proyectosRef: AngularFirestoreCollection<Proyectos>;

  constructor(private db: AngularFirestore) {
    this.proyectosRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Proyectos> {
    return this.proyectosRef;
  }
  /*
  getProyectoById(id: string): AngularFirestoreCollection<Proyectos> {
    return this.proyectosRef.ref.id;
  }
*/
  /*getbyId(id: number): AngularFirestoreCollection<Proyectos> {
    this.proyectosRef = this.db.collection('/proyecto', ref => ref.where('id', '==', id));
    // Create a query against the collection.
    //const q = query(this.proyectosRef, where("state", "==", "CA"));
    return this.proyectosRef;
  }*/

  create(proyectos: Proyectos): any {
    return this.proyectosRef.add({ ...proyectos });
  }

  update(id: string, data: any): Promise<void> {
    return this.proyectosRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.proyectosRef.doc(id).delete();
  }

  // Items For Search
  addToCart(element) {
    this.items = element;
    return element;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items= null;
    return this.items;
  }

}
