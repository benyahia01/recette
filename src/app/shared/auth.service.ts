import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Import from '@angular/fire/compat/auth'
import { Router } from '@angular/router'; 
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
public userEmail: string | null = null;
private userEmailSubject = new BehaviorSubject<string | null>(null);
  userEmail$ = this.userEmailSubject.asObservable();
  constructor(private afAuth: AngularFireAuth, private router: Router) { 
    this.afAuth.authState.subscribe(user => {
      this.userEmailSubject.next(user ? user.email : null)
      if (user) {
       
        console.log(user.email)
        this.userEmail = user.email; // Stocker l'email de l'utilisateur
      } else {
        this.userEmail = 'null'; // Réinitialiser si aucun utilisateur n'est connecté
      }
      
    }
    
    );
  }

  // Méthode pour se connecter
  async login(email: string, password: string): Promise<void> {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['dashboard']); 
      
  
      console.log('Connexion réussie');
      // Redirection ou gestion de l'état de l'utilisateur connecté
    } catch (error) {
      console.error('Erreur lors de la connexion', error);
      throw error;
    }
  }

  async register(email: string, password: string): Promise<void> {
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);
      console.log('Inscription réussie');
      // Autres actions post-inscription, comme la redirection
    } catch (error) {
      console.error('Erreur lors de linscription', error);
      throw error;
    }
  }
async logout(): Promise<void> {
  await this.afAuth.signOut(); // Pour Firebase, utilisez signOut()
}
async resetPassword(email: string): Promise<void> {
  await this.afAuth.sendPasswordResetEmail(email); // Exemple avec Firebase
}
}

