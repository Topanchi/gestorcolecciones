import { Component, OnInit } from '@angular/core';
import { FormGroup,  Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private authService: AuthService,
              private route: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
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
  }

  registrarse() {
    console.log("this.formRegister: ", this.formRegister)
    const { email, password } = this.usuario;
    this.authService.register(email, password).then(res => {
      console.log("se registró: ", res);
      if(!res?.user?.isAnonymous){
        this.route.navigate(['/login']);
      }
    }) 

  }

}
