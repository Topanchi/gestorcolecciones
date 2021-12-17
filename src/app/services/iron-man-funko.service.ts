import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { FunkoIronMan } from '../models/funko-iron-man';

@Injectable({
  providedIn: 'root'
})
export class IronManFunkoService {

  funkosRef: AngularFireList<any>;    
  funkoRef: AngularFireObject<any>;   

  constructor(private _db: AngularFireDatabase) { }

  // Fetch Keys List
  obtenerFunkosIronMan() {
    this.funkosRef = this._db.list('funkos');
    return this.funkosRef;
  }

  // Fetch Single Key Object
  obtenerFunkoIronMan(id: string) {
    this.funkoRef = this._db.object('funkos/' + id);
    return this.funkoRef;
  }

  // Create Keys
  agregarFunkoIronMan(funko: FunkoIronMan) {
    this._db.database.ref('funkos').push().set({
      name: funko.name,
      description: funko.description,
      collectionNumber: funko.collectionNumber,
      imageComplete: funko.imageComplete,
      imageSolo: funko.imageSolo
    });
  }

  // Update Key Object
  //TODO: revisar sintaxis de update con nueva actualizacion de firebase
  actualizarFunkoIronMan(funko: FunkoIronMan) {
    console.log("objeto a editar: ",funko);
    this._db.database.ref('funkos/' + funko.$key).update({
      name: funko.name,
      description: funko.description,
      collectionNumber: funko.collectionNumber,
      imageComplete: funko.imageComplete,
      imageSolo: funko.imageSolo    
    });
  }

  // Delete Key Object
  eliminarFunkoIronMan(id: string) {
    this.funkoRef = this._db.object('funkos/' + id);
    this.funkoRef.remove();
  }
}
