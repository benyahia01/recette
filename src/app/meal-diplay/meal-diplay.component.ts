import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Themealdb } from '../themealdb'; // Assurez-vous que le chemin est correct
import { Router } from '@angular/router';
import { AuthService } from '../../app/shared/auth.service';

@Component({
  selector: 'app-meal-diplay',
  templateUrl: './meal-diplay.component.html',
  styleUrls: ['./meal-diplay.component.css'] // La propriété devrait être styleUrls
})
export class MealDisplayComponent implements OnInit {
  meal: Themealdb | null = null;

  constructor(public authService: AuthService, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.getRandomMeal();
  }

  getRandomMeal(): void {
    const mealId = -1; // Mettez l'ID du repas que vous souhaitez récupérer, ou une autre logique pour obtenir un ID
    this.apiService.getRandomMeal(mealId).subscribe(response => {
      if (response.meals && response.meals.length) {
        this.meal = response.meals[0];
        console.log(this.meal);
      }
    });
  }

  getIngredients(meal: Themealdb): string[] {
    const ingredients: string[] = [];
      
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}` as keyof Themealdb]; // Utilisation de backticks (`) et correction de la syntaxe
      const measure = meal[`strMeasure${i}` as keyof Themealdb]; // Utilisation de backticks (`) et correction de la syntaxe
      
      if (ingredient && measure) {
        ingredients.push(`${ingredient} - ${measure}`); // Utilisation de backticks (`) et correction de la syntaxe
      }
    }
      
    return ingredients.filter(ingredient => ingredient.trim()); // Filtre pour éliminer les strings vides
  }


  /*searchMeal(mealName: string): void {
    this.apiService.searchMealByName(mealName).subscribe(meals => {
      if (meals ) {
        this.meal = meals;
        console.log(meals);
      } else {
        // Gérer le cas où aucun repas n'est trouvé
        this.meal = null;
        console.log("null")
      }
    });
  }*/

  searchMeal(mealName: string): void {
    this.apiService.searchMealByName(mealName).subscribe(response => {
      if (response.meals && response.meals.length > 0) {
        this.meal = response.meals[0]; // Accéder au premier élément du tableau meals
        console.log(this.meal);
      } else {
        // Gérer le cas où aucun repas n'est trouvé
        this.meal = null;
        console.log('No meal found.');
      }
    }, error => {
      console.error('Error fetching meal:', error);
      this.meal = null; // Assurez-vous également de gérer les erreurs
    });
  }
  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']); // Redirige vers le formulaire de connexion
    }).catch((error: any) => {
      console.error('Erreur lors de la déconnexion', error);
    });
  }
}
