import { Component, OnInit } from '@angular/core';
import { FormGroup,  Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: any = FormGroup;

  usuario = {
    email: '',
    password: ''
  }

  constructor(//private _notificationService: NotificationService,
              private _authService: AuthService,
              public fb: FormBuilder, 
              private route: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    /* 
    this.formRegister = new FormGroup({
      email: new FormControl('',  Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.compose(
        [
          // 1. Verifica que el password sea obligatorio
          Validators.required, 
          // 2. Verifica que el password tenga un mínimo de 5 caracteres
          Validators.minLength(5), 
          // 3. Verifica que el password tenga un máximo de 10 caracteres
          Validators.maxLength(10),
          // 4. Verifica que el password tenga al menos un numero
          Validators.pattern('/\d/, { hasNumber: true }'),
          // 5. Verifica que el password tenga al menos una letra mayúscula
          Validators.pattern('/[A-Z]/, { hasCapitalCase: true }'),
          // 6. Verifica que el password tenga al menos una letra minúscula
          Validators.pattern('/[a-z]/, { hasSmallCase: true }'),
          // 7. Verifica que el password tenga al menos un caracter especial
          Validators.pattern('/[!@#$%^&*()_+\-=\[\]{};\\|,.<>\/?]/, { hasSpecialCharacters: true }'),
        ])
      )
    });  
    */

    this.formRegister = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose(
        [
          // 1. Verifica que el password sea obligatorio
          Validators.required, 
          // 2. Verifica que el password tenga un mínimo de 5 caracteres
          Validators.minLength(5), 
          // 3. Verifica que el password tenga un máximo de 10 caracteres
          Validators.maxLength(10),
          // 4. Verifica que el password tenga al menos un numero
          Validators.pattern('/\d/, { hasNumber: true }'),
          // 5. Verifica que el password tenga al menos una letra mayúscula
          Validators.pattern('/[A-Z]/, { hasCapitalCase: true }'),
          // 6. Verifica que el password tenga al menos una letra minúscula
          Validators.pattern('/[a-z]/, { hasSmallCase: true }'),
          // 7. Verifica que el password tenga al menos un caracter especial
          Validators.pattern('/[!@#$%^&*()_+\-=\[\]{};\\|,.<>\/?]/, { hasSpecialCharacters: true }'),
        ])]
    });
  }

  // Accessing form control using getters
  get email() {
    return this.formRegister.get('email');
  }
  get password() {
    return this.formRegister.get('password');
  }  


  registrarse() {
    console.log("this.formRegister: ", this.formRegister)
    const { email, password } = this.usuario;
    this._authService.register(email, password).then(res => {
      console.log("se registró: ", res);
      //this._notificationService.showInfo("Usuario registrado con éxito",("Info"));
      if(!res?.user?.isAnonymous){
        this.route.navigate(['/login']);
      }
    }) 

  }

}
