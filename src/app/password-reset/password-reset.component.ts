import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service'; // Ajustez le chemin selon votre structure

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent {
  constructor(private authService: AuthService) { }

  resetPassword(email: string) {
    this.authService.resetPassword(email).then(() => {
      // Vous pouvez notifier l'utilisateur que l'email a été envoyé
    }).catch(error => {
      console.log('err');
    });
  }
}