import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service'
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public authService: AuthService, private router: Router) { }

  
  }

  



