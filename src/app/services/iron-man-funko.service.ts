import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import {map, catchError} from "rxjs/operators";
import { environment } from '../../environments/environment';
import { FunkoEntity } from '../models/funko-entity';
import { FunkoIronMan } from '../models/funko-iron-man';

@Injectable({
  providedIn: 'root'
})
export class IronManFunkoService {

  private url = environment.urlSmcBackend + "/funko";
  private httpOptions = {headers: new HttpHeaders({'Content-type': 'application/json'})};

  funkosRef: AngularFireList<any>;    
  funkoRef: AngularFireObject<any>;   

  constructor(private _db: AngularFireDatabase,private http: HttpClient,) { }

  public obtenerTodos(): Observable<FunkoEntity[]> {
    console.log("url:: ", this.url+ "/findAll");
    return this.http.get<FunkoEntity[]>(this.url+ "/findAll", this.httpOptions);
    /*
    return this.http.get<FunkoEntity[]>(this.url+ "/findAll", this.httpOptions).pipe(
      map(response => response as FunkoEntity[])
    );
    */
  }

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
      personaje: funko.personaje,
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
      personaje: funko.personaje,
      description: funko.description,
      collectionNumber: funko.collectionNumber   
    });
  }

  // Delete Key Object
  eliminarFunkoIronMan(id: string) {
    this.funkoRef = this._db.object('funkos/' + id);
    this.funkoRef.remove();
  }
}
