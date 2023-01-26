import { Component, OnInit } from '@angular/core';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { Llavero } from '../../models/llavero';
import { LlaverosService } from '../../services/llaveros.service';

@Component({
  selector: 'app-llavero-overview',
  templateUrl: './llavero-overview.component.html',
  styleUrls: ['./llavero-overview.component.css']
})
export class LlaveroOverviewComponent implements OnInit {
  faList = faList;
  totalLlaveros: number;
  llavero: Llavero[]; 
  llaveroGoma: Llavero[]; 
  llaveroPlastico: Llavero[]; 
  llaveroMetal: Llavero[]; 
  llaveroGomaDura: Llavero[];
  llaveroCuero: Llavero[];
  llaveroMadera: Llavero[];
  llaveroHueso: Llavero[];
  llaveroPeluche: Llavero[];
  llaveroLana: Llavero[];
  llaveroTipoChapa: Llavero[];
  llaveroGenero: Llavero[];

  llaveroChile: Llavero[];
  llaveroBrasil: Llavero[];
  llaveroEspana: Llavero[];
  llaveroInglaterra: Llavero[];
  llaveroItalia: Llavero[];
  llaveroCostaRica: Llavero[];
  llaveroAlemania: Llavero[];
  llaveroEeuu: Llavero[];
  llaveroPolonia: Llavero[];
  llaveroCuba: Llavero[];
  llaveroGrecia: Llavero[];
  llaveroArgentina: Llavero[];
  llaveroParaguay: Llavero[];
  llaveroUruguay: Llavero[];
  llaveroPeru: Llavero[];
  llaveroAustralia: Llavero[];
  llaveroColombia: Llavero[];  //
  llaveroBolivia: Llavero[];  //
  llaveroMexico: Llavero[];  //
  llaveroTurquia: Llavero[];  //
  llaveroEcuador: Llavero[];  //
  llaveroPuertoRico: Llavero[];  //
  llaveroCanada: Llavero[];  //

  constructor(public _llaveroService: LlaverosService) { }

  ngOnInit(): void {
    this.dataState();
    this.obtenerTotal();
    this.obtenerPorGoma('Goma');
    this.obtenerPorPlastico('Plástico');
    this.obtenerPorMetal('Metal');
    this.obtenerPorGomaDura('Goma Dura');
    this.obtenerPorCuero('Cuero');
    this.obtenerPorMadera('Madera');
    this.obtenerPorHueso('Hueso');
    this.obtenerPorPeluche('Peluche');
    this.obtenerPorLana('Lana');
    this.obtenerPorTipoChapa('Tipo Chapa');
    this.obtenerPorGenero('Género');

    this.obtenerPorChile('Chile');
    this.obtenerPorBrasil('Brasil');
    this.obtenerPorEspana('España');
    this.obtenerPorInglaterra('Inglaterra');
    this.obtenerPorItalia('Italia');
    this.obtenerPorCostaRica('Costa Rica');
    this.obtenerPorAlemania('Alemania');
    this.obtenerPorEeuu('Estados Unidos');
    this.obtenerPorPolonia('Polonia');
    this.obtenerPorCuba('Cuba');
    this.obtenerPorGrecia('Grecia');
    this.obtenerPorArgentina('Argentina');
    this.obtenerPorParaguay('Paraguay');
    this.obtenerPorUruguay('Uruguay');
    this.obtenerPorPeru('Perú');
    this.obtenerPorAustralia('Australia');
    this.obtenerPorColombia('Colombia');
    this.obtenerPorBolivia('Bolivia');
    this.obtenerPorMexico('México');
    this.obtenerPorTurquia('Turquía');
    this.obtenerPorEcuador('Ecuador');
    this.obtenerPorPuertoRico('Puerto Rico');
    this.obtenerPorCanada('Canadá');
  }

  private obtenerPorCanada(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroCanada = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroCanada.push(a as Llavero);
      })
    })
  }

  private obtenerPorPuertoRico(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroPuertoRico = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroPuertoRico.push(a as Llavero);
      })
    })
  }

  private obtenerPorEcuador(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroEcuador = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroEcuador.push(a as Llavero);
      })
    })
  }

  private obtenerPorTurquia(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroTurquia = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroTurquia.push(a as Llavero);
      })
    })
  }

  private obtenerPorMexico(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroMexico = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroMexico.push(a as Llavero);
      })
    })
  }

  private obtenerPorAustralia(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroAustralia = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroAustralia.push(a as Llavero);
      })
    })
  }

  private obtenerPorChile(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroChile = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroChile.push(a as Llavero);
      })
    })
  }

  private obtenerPorBrasil(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroBrasil = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroBrasil.push(a as Llavero);
      })
    })
  }

  private obtenerPorEspana(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroEspana = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroEspana.push(a as Llavero);
      })
    })
  }
  private obtenerPorInglaterra(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroInglaterra = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroInglaterra.push(a as Llavero);
      })
    })
  }
  private obtenerPorItalia(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroItalia = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroItalia.push(a as Llavero);
      })
    })
  }
  private obtenerPorCostaRica(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroCostaRica = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroCostaRica.push(a as Llavero);
      })
    })
  }
  private obtenerPorAlemania(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroAlemania = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroAlemania.push(a as Llavero);
      })
    })
  }
  private obtenerPorEeuu(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroEeuu = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroEeuu.push(a as Llavero);
      })
    })
  }
  private obtenerPorPolonia(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroPolonia = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroPolonia.push(a as Llavero);
      })
    })
  }
  private obtenerPorCuba(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroCuba = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroCuba.push(a as Llavero);
      })
    })
  }
  private obtenerPorGrecia(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroGrecia = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroGrecia.push(a as Llavero);
      })
    })
  }
  private obtenerPorArgentina(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroArgentina = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroArgentina.push(a as Llavero);
      })
    })
  }
  private obtenerPorParaguay(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroParaguay = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroParaguay.push(a as Llavero);
      })
    })
  }
  private obtenerPorUruguay(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroUruguay = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroUruguay.push(a as Llavero);
      })
    })
  }
  private obtenerPorPeru(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroPeru = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroPeru.push(a as Llavero);
      })
    })
  }
  private obtenerPorColombia(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroColombia = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroColombia.push(a as Llavero);
      })
    })
  }
  private obtenerPorBolivia(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorPais(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroBolivia = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroBolivia.push(a as Llavero);
      })
    })
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

  private obtenerPorMadera(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorMaterial(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroMadera = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroMadera.push(a as Llavero);
      })
    })
  }

  private obtenerPorHueso(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorMaterial(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroHueso = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroHueso.push(a as Llavero);
      })
    })
  }

  private obtenerPorPeluche(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorMaterial(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroPeluche = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroPeluche.push(a as Llavero);
      })
    })
  }

  private obtenerPorLana(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorMaterial(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroLana = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroLana.push(a as Llavero);
      })
    })
  }

  private obtenerPorTipoChapa(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorMaterial(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroTipoChapa = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroTipoChapa.push(a as Llavero);
      })
    })
  }

  private obtenerPorGenero(arg0: string) {
    let s = this._llaveroService.obtenerLlaverosPorMaterial(arg0);
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.llaveroGenero = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.llaveroGenero.push(a as Llavero);
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
