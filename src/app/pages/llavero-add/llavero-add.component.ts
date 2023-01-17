import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LlaverosService } from '../../services/llaveros.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-llavero-add',
  templateUrl: './llavero-add.component.html',
  styleUrls: ['./llavero-add.component.css']
})
export class LlaveroAddComponent implements OnInit {
  public llaveroForm: FormGroup;
  imagenes: any[] = [];


  constructor(private _formBuilder: FormBuilder,
    private _notificationService: NotificationService,  
    private _llaveroService: LlaverosService,   
    private router: Router,
    private afs: AngularFireStorage) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.llaveroForm = this._formBuilder.group({
      numero: ['', Validators.compose([Validators.required])],
      nombre: ['', Validators.compose([Validators.required])],
      material: ['', Validators.compose([Validators.required])],
      pais: [''],
      comentarios: [''],
      img: ['']
    });
  }

  // Accessing form control using getters
  get nombre() {
    return this.llaveroForm.get('nombre');
  }
  get material() {
    return this.llaveroForm.get('material');
  }  
  get numero() {
    return this.llaveroForm.get('numero');
  }
  get pais() {
    return this.llaveroForm.get('pais');
  }
  get comentarios() {
    return this.llaveroForm.get('comentarios');
  }
  get img(){
    return this.llaveroForm.get('img');
  }

  public onSubmit() {
    console.log(this.llaveroForm.value);
    //TODO: enviar json a firebase para luego enlazarle la imagen
    this._llaveroService.agregarLlavero(this.llaveroForm.value);
    this._notificationService.showSuccess('Llavero agregado correctamente',("Info"));
    this.router.navigate(['llavero-list']);
  }

  // Reset student form's values
  ResetForm() {
    this.llaveroForm.reset();
  }  
}
