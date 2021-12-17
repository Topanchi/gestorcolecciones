import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FunkoIronMan } from 'src/app/models/funko-iron-man';
import { NotificationService } from 'src/app/services/notification.service';
import { IronManFunkoService } from '../../services/iron-man-funko.service'

@Component({
  selector: 'app-funko-edit',
  templateUrl: './funko-edit.component.html',
  styleUrls: ['./funko-edit.component.css']
})
export class FunkoEditComponent implements OnInit {
  public funkoEditForm: FormGroup;
  urlImage: string;
  imagenes: any[] = [];

  constructor(private _formBuilder: FormBuilder,
              private _ironManFunkoService: IronManFunkoService, 
              private _notificationService: NotificationService,     
              private router: Router,
              private actRoute: ActivatedRoute,
              private afs: AngularFireStorage) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.obtenerDatosFunko(id);
  }

  private obtenerDatosFunko(id: string) {
    this._ironManFunkoService.obtenerFunkoIronMan(id).valueChanges().subscribe(funko => {
      console.log(funko);
      this.urlImage = funko.imageComplete;
      this.initForm(funko);
      this.setFormValues(funko);
    });
  }
 
  /* private initForm(funko: FunkoIronMan) {
    this.funkoEditForm = new FormGroup({
      name: new FormControl(funko ? funko.name : '', Validators.compose([Validators.required])),
      personaje: new FormControl(funko ? funko.personaje : '', Validators.compose([Validators.required])),
      description: new FormControl(funko ? funko.description : '', Validators.compose([Validators.required])),
      collectionNumber: new FormControl(funko ? funko.collectionNumber : '', Validators.compose([Validators.required])),
    });
  } */

  /* */
  private initForm(funko: FunkoIronMan) {
    this.funkoEditForm = this._formBuilder.group({
      name: [funko ? funko.name : '', Validators.compose([Validators.required])],
      personaje: [funko ? funko.personaje : '', Validators.compose([Validators.required])],
      description: [funko ? funko.description : '', Validators.compose([Validators.required])],
      collectionNumber: [funko ? funko.collectionNumber : '', Validators.compose([Validators.required])],
    });
  } 
  

  private setFormValues(funko: any) {
    this.funkoEditForm.controls['name'].setValue(funko.name);
    this.funkoEditForm.controls['personaje'].setValue(funko.personaje);
    this.funkoEditForm.controls['description'].setValue(funko.description);
    this.funkoEditForm.controls['collectionNumber'].setValue(funko.collectionNumber);
  }

  // Accessing form control using getters
  get name() {
    return this.funkoEditForm.get('name');
  }
  get personaje() {
    return this.funkoEditForm.get('personaje');
  }
  get description() {
    return this.funkoEditForm.get('description');
  }  
  get collectionNumber() {
    return this.funkoEditForm.get('collectionNumber');
  }



  public onSubmit() {
    console.log(this.funkoEditForm.value);
    //TODO: enviar json a firebase para luego enlazarle la imagen
    this._ironManFunkoService.agregarFunkoIronMan(this.funkoEditForm.value);
    this._notificationService.showSuccess('Funko editado correctamente',("Info"));
    this.router.navigate(['funko-list']);
  }
}
