import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { IronManFunkoService } from '../../services/iron-man-funko.service';

@Component({
  selector: 'app-funko-add',
  templateUrl: './funko-add.component.html',
  styleUrls: ['./funko-add.component.css']
})
export class FunkoAddComponent implements OnInit {
  public funkoForm: FormGroup;
  imagenes: any[] = [];

  constructor(private _formBuilder: FormBuilder,
              private _ironManFunkoService: IronManFunkoService, 
              private _notificationService: NotificationService,     
              private router: Router,
              private afs: AngularFireStorage) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.funkoForm = this._formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      personaje: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      collectionNumber: ['', Validators.compose([Validators.required])],
      imageComplete: ['', Validators.compose([Validators.required])],
      imageSolo: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])]
    });
  }

  // Accessing form control using getters
  get name() {
    return this.funkoForm.get('name');
  }
  get personaje() {
    return this.funkoForm.get('personaje');
  }
  get description() {
    return this.funkoForm.get('description');
  }  
  get collectionNumber() {
    return this.funkoForm.get('collectionNumber');
  }
  get price() {
    return this.funkoForm.get('price');
  }
  get imageComplete() {
    return this.funkoForm.get('imageComplete');
  }
  get imageSolo() {
    return this.funkoForm.get('imageSolo');
  }

  public onSubmit() {
    console.log(this.funkoForm.value);
    //TODO: enviar json a firebase para luego enlazarle la imagen
    this._ironManFunkoService.agregarFunkoIronMan(this.funkoForm.value);
    this._notificationService.showSuccess('Funko agregado correctamente',("Info"));
    this.router.navigate(['funko-list']);
  }

  public cargarImagen(event: any){
    console.log("cargar imagen");
    let archivos = event.target.files;
    let nombre = "jonathan";

    for (let i = 0; i < archivos.length; i++) {

      let reader = new FileReader();
      reader.readAsDataURL(archivos[0]);
      reader.onloadend = () => {
        console.log(reader.result);
        this.imagenes.push(reader.result);
        /*
        this.storageService.subirImagen(nombre + "_" + Date.now(), reader.result).then(urlImagen => {
          let usuario = {
            name: "jonathan",
            nickName: "yonykikok",
            password: "401325",
            imgProfile: urlImagen
          }
          console.log(urlImagen);
        });
        */
      }
    }
  }

}
