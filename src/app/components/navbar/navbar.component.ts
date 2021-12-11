import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userLogged = this.authService.getUserLogged();
  
  constructor(private route: Router,private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.route.navigate(['/login']);
  }

}
