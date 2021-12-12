import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-funko-add',
  templateUrl: './funko-add.component.html',
  styleUrls: ['./funko-add.component.css']
})
export class FunkoAddComponent implements OnInit {
  public funkoForm: any = FormGroup;
  imagenes: any[] = [];

  constructor(private _formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.funkoForm = this._formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      image: ['', Validators.compose([Validators.required])],
    });
  }

  public onSubmit() {
    console.log(this.funkoForm);
    //TODO: enviar json a firebase para luego enlazarle la imagen
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
