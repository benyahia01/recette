import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  implements OnInit {
  public userEmail: string | null = null;

  constructor(public authService: AuthService, private router: Router) { }
  ngOnInit() {
    
    this.userEmail = this.authService.userEmail; // Récupérer l'email depuis AuthService
    }
  
  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']); // Redirige vers le formulaire de connexion
    }).catch(error => {
      console.error('Erreur lors de la déconnexion', error);
    });
  }



}
