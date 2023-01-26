import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Llavero } from '../models/llavero';


@Injectable({
  providedIn: 'root'
})
export class LlaverosService {

  llaverosRef: AngularFireList<any>;    
  llaveroRef: AngularFireObject<any>; 

  constructor(private _db: AngularFireDatabase) { }

  // Fetch Keys List
  obtenerLlaveros() {
    this.llaverosRef = this._db.list('llaveros', ref => ref.orderByChild("numero"));
    return this.llaverosRef;
  }

  // Fetch Single Key Object
  obtenerLlaveroPorId(id: string) {
    this.llaveroRef = this._db.object('llaveros/' + id);
    return this.llaveroRef;
  }

  // Create Keys
  agregarLlavero(llavero: Llavero) {
    this._db.database.ref('llaveros').push().set({
      nombre: llavero.nombre,
      material: llavero.material,
      numero: llavero.numero,
      comentarios: llavero.comentarios,
      pais: llavero.pais,
      img: llavero.img
    });
  }

  // Update Key Object
  //TODO: revisar sintaxis de update con nueva actualizacion de firebase
  actualizarLlavero(llavero: Llavero) {
    this._db.database.ref('llaveros/' + llavero.$key).update({
      nombre: llavero.nombre,
      material: llavero.material,
      numero: llavero.numero,
      comentarios: llavero.comentarios,
      pais: llavero.pais 
    });
  }

  // Delete Key Object
  eliminarLlavero(id: string) {
    this.llaveroRef = this._db.object('llaveros/' + id);
    this.llaveroRef.remove();
  }

  obtenerLlaverosPorMaterial(material: string) {
    this.llaverosRef = this._db.list('llaveros', ref => ref.orderByChild("material").equalTo(material));
    return this.llaverosRef;
  }

  obtenerLlaverosPorPais(pais: string) {
    this.llaverosRef = this._db.list('llaveros', ref => ref.orderByChild("pais").equalTo(pais));
    return this.llaverosRef;
  }

}
