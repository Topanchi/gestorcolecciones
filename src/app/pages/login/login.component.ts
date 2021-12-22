import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    email: '',
    password: ''
  }

  constructor(private route: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  ingresar() {
    const { email, password } = this.usuario;
    this.authService.login(email, password).then(res => {
      if(res.user.multiFactor !== null){
        this.route.navigate(['/home']);
      }
    }) 

  }

  ingresarConGoogle() {
    const { email, password } = this.usuario;
    this.authService.loginWithGoogle(email, password).then(res => {
      if(!res?.user?.isAnonymous){
        this.route.navigate(['/home']);
      }
    })

  }

 
  logout() {
    this.authService.logout();
  }

}
