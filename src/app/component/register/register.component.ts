import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service'; 
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  passwordMismatch: boolean = false;

  constructor(private authService: AuthService,private router: Router) { }
  register(email: string, password: string, confirmPassword: string) {
    if(password !== confirmPassword) {
      this.passwordMismatch = true; // Active l'affichage du message d'erreur
      return; // Interrompt la méthode si les mots de passe ne correspondent pas
    }
    this.passwordMismatch = false; // Assurez-vous de réinitialiser l'indicateur d'erreur
    // Continuez avec l'inscription si les mots de passe correspondent
    this.authService.register(email, password).then(() => {
      this.router.navigate(['dashboard']); // Redirection en cas de succès
    }).catch(error => {
      console.error('Erreur lors de linscription', error);
    });
  }

}