import {Ingredient} from "../../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListServices {

  getIngredients = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 5),
  ];

  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.getIngredients.emit(this.ingredients);
  }


  removeIngredient(position: number) {
    this.ingredients.splice(position, 1);
  }
}
