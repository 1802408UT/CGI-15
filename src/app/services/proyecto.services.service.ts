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

  create(proyectos: Proyectos): any {
    return this.proyectosRef.add({ ...proyectos });
  }

  update(id: string, data: any): Promise<void> {
    return this.proyectosRef.doc(id).update(data);
  }
  //Funcional
  delete(id: string): Promise<void> {
    //window.location.reload();
    console.log(id);
    return this.proyectosRef.doc(id).delete();
  }

  // Funcional Firestore Proyectos

  getDocumentoPorId(coleccion: string, id: string): Observable<any> {
    // Accedemos al documento en la colección especificada utilizando su ID
    return this.db.collection(coleccion).doc(id).valueChanges();
  }

  agregarDocumento(coleccion: string, id: string, datos: any): Promise<void> {
    // Agregamos el documento con el ID personalizado
    return this.db.collection(coleccion).doc(id).set(datos);
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
