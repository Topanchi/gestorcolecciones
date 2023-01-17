import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LlaverosService } from '../../services/llaveros.service';
import { Llavero } from '../../models/llavero';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-llavero-detail',
  templateUrl: './llavero-detail.component.html',
  styleUrls: ['./llavero-detail.component.css']
})
export class LlaveroDetailComponent implements OnInit {
  public llavero: Llavero;
  viewLlaveroForm: FormGroup;
  urlImage: string;

  constructor(private _llaveroService: LlaverosService,
              private actRoute: ActivatedRoute,
              private fb: FormBuilder,            // Inject Form Builder service for Reactive forms
              private location: Location,         // Location service to go back to previous component

    ) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.obtenerLlavero(id);
  }

  private obtenerLlavero(id: string) {
    this._llaveroService.obtenerLlaveroPorId(id).valueChanges().subscribe((llavero: Llavero) => {
      console.log(llavero);
      this.llavero = llavero;
      //this.urlImage = llavero.img;
      //this.initForm(llavero);
      //this.setFormValues(llavero);
    });
  }

  private setFormValues(llavero: any) {
    this.viewLlaveroForm.controls['nombre'].setValue(llavero.nombre);
    this.viewLlaveroForm.controls['material'].setValue(llavero.material);
    this.viewLlaveroForm.controls['numero'].setValue(llavero.numero);
    this.viewLlaveroForm.controls['pais'].setValue(llavero.pais);
    this.viewLlaveroForm.controls['comentarios'].setValue(llavero.comentarios);
  }

  // Contains Reactive Form logic
  private initForm(data: Llavero){
    this.viewLlaveroForm = this.fb.group({
      nombre: [data ? data.nombre : ''],
      material: [data ? data.material : ''],
      numero: [data ? data.numero : ''],
      pais: [data ? data.pais : ''],
      comentarios: [data ? data.comentarios : '']
    })
  }

  // Accessing form control using getters
  /*
  get nombre() {
    return this.viewLlaveroForm.get('nombre');
  }
  get material() {
    return this.viewLlaveroForm.get('material');
  }  
  get numero() {
    return this.viewLlaveroForm.get('numero');
  }
  get pais() {
    return this.viewLlaveroForm.get('pais');
  }
  get comentarios() {
    return this.viewLlaveroForm.get('comentarios');
  }
  */

}
