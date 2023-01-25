import { Component, OnInit } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { Llavero } from '../../models/llavero';
import { LlaverosService } from '../../services/llaveros.service';

@Component({
  selector: 'app-llavero-overview',
  templateUrl: './llavero-overview.component.html',
  styleUrls: ['./llavero-overview.component.css']
})
export class LlaveroOverviewComponent implements OnInit {
  faAdd = faAdd;
  totalLlaveros: number;
  llavero: Llavero[]; 
  llaveroGoma: Llavero[]; 
  llaveroPlastico: Llavero[]; 
  llaveroMetal: Llavero[]; 
  llaveroGomaDura: Llavero[];
  llaveroCuero: Llavero[];

  constructor(public _llaveroService: LlaverosService) { }

  ngOnInit(): void {
    this.dataState();
    this.obtenerTotal();
    this.obtenerPorGoma('Goma');
    this.obtenerPorPlastico('Plástico');
    this.obtenerPorMetal('Metal');
    this.obtenerPorGomaDura('Goma Dura');
    this.obtenerPorCuero('Cuero');
  }

  
  private obtenerTotal() {
    let s = this._llaveroService.obtenerLlaveros()
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llavero = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llavero.push(a as Llavero);
      })
    })

  }

  private obtenerPorGoma(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorMaterial(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroPlastico = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroPlastico.push(a as Llavero);
      })
    })
  }

  private obtenerPorPlastico(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorMaterial(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroGoma = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroGoma.push(a as Llavero);
      })
    })
  }

  private obtenerPorMetal(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorMaterial(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroMetal = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroMetal.push(a as Llavero);
      })
    })
  }

  private obtenerPorGomaDura(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorMaterial(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroGomaDura = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroGomaDura.push(a as Llavero);
      })
    })
  }

  private obtenerPorCuero(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorMaterial(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroCuero = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroCuero.push(a as Llavero);
      })
    })
  }

  dataState() {     
    this._llaveroService.obtenerLlaveros().valueChanges().subscribe(data => {
      if(data.length <= 0){
        console.log("NO HAY LLAVEROS. ", data.length)
      } else {
        console.log("SÍ HAY LLAVEROS. ", data.length)
      }
    })
  }

}
