import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { FunkoIronMan } from '../models/funko-iron-man';

@Injectable({
  providedIn: 'root'
})
export class IronManFunkoService {

  funkosRef: AngularFireList<any>;    
  funkoRef: AngularFireObject<any>;   

  constructor(private _db: AngularFireDatabase) { }

  obtenerFunkosIronMan() {
    this.funkosRef = this._db.list('funkos');
    return this.funkosRef;
  }

  obtenerFunkoIronMan(id: string) {
    this.funkoRef = this._db.object('funkos/' + id);
    return this.funkoRef;
  }

  agregarFunkoIronMan(funko: FunkoIronMan) {
    this.funkosRef.push({
      name: funko.name,
      description: funko.description,
      collectionNumber: funko.collectionNumber,
      imageComplete: funko.imageComplete,
      imageSolo: funko.imageSolo
    });
  }

  actualizarFunkoIronMan(funko: FunkoIronMan) {
    this.funkoRef.update({
      name: funko.name,
      description: funko.description,
      collectionNumber: funko.collectionNumber,
      imageComplete: funko.imageComplete,
      imageSolo: funko.imageSolo
    });
  }

  eliminarFunkoIronMan(id: string) {
    this.funkoRef = this._db.object('funkos/' + id);
    this.funkoRef.remove();
  }
}
