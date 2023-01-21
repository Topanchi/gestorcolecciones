import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Llavero } from '../../models/llavero';
import { NotificationService } from '../../services/notification.service';
import { LlaverosService } from '../../services/llaveros.service';

@Component({
  selector: 'app-llavero-edit',
  templateUrl: './llavero-edit.component.html',
  styleUrls: ['./llavero-edit.component.css']
})
export class LlaveroEditComponent implements OnInit {
  public id: string;
  public llaveroEditForm: FormGroup;
  public llavero: Llavero;
  public existImage: boolean = false;
  public urlImage: string;
  imagenes: any[] = [];


  constructor(private _formBuilder: FormBuilder,
              private _llaveroService: LlaverosService,
              private _notificationService: NotificationService,     
              private router: Router,
              private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.obtenerLlavero(this.id);
  }

  private obtenerLlavero(id: string) {
    this._llaveroService.obtenerLlaveroPorId(id).valueChanges().subscribe((llavero: Llavero) => {
      console.log(llavero);
      if(llavero.img !== ""){
        this.urlImage = llavero.img;
        this.existImage = true;
      }
      this.llavero = llavero;
     
      this.initForm(llavero);
      this.setFormValues(llavero);
    });
  }

  private initForm(llavero: Llavero) {
    this.llaveroEditForm = this._formBuilder.group({
      numero: [llavero ? llavero.numero : '', Validators.compose([Validators.required])],
      nombre: [llavero ? llavero.nombre : '', Validators.compose([Validators.required])],
      material: [llavero ? llavero.material : '', Validators.compose([Validators.required])],
      pais: [llavero ? llavero.pais : '', Validators.compose([Validators.required])],
      comentarios: [llavero ? llavero.comentarios : '', Validators.compose([Validators.required])],
    });
  } 
  

  private setFormValues(llavero: any) {
    this.llaveroEditForm.controls['nombre'].setValue(llavero.nombre);
    this.llaveroEditForm.controls['material'].setValue(llavero.material);
    this.llaveroEditForm.controls['numero'].setValue(llavero.numero);
    this.llaveroEditForm.controls['pais'].setValue(llavero.pais);
    this.llaveroEditForm.controls['comentarios'].setValue(llavero.comentarios);
  }

  // Accessing form control using getters
  get nombre() {
    return this.llaveroEditForm.get('nombre');
  }
  get material() {
    return this.llaveroEditForm.get('material');
  }
  get numero() {
    return this.llaveroEditForm.get('numero');
  }  
  get pais() {
    return this.llaveroEditForm.get('pais');
  }
  get comentarios() {
    return this.llaveroEditForm.get('comentarios');
  }



  public onSubmit() {
    console.log(this.llaveroEditForm.value);
    //TODO: enviar json a firebase para luego enlazarle la imagen

    this.seteoObjetoFunko(this.llaveroEditForm.value);
  }

  private seteoObjetoFunko(value: any) {
    this.llavero = new Llavero(this.id,
                                value.nombre, 
                                value.material, 
                                value.numero, 
                                value.comentarios, 
                                value.pais,
                                this.urlImage);
                                
    this._llaveroService.actualizarLlavero(this.llavero);
    this._notificationService.showSuccess('Llavero editado correctamente',("Info"));
    this.router.navigate(['llavero-list']);
  }

}
