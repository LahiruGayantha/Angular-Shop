import {Recipe} from "../recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListServices} from "../../shopping-list/services/shopping-list.services";

@Injectable()
export class RecipeServices {

  recipes: Recipe[] = [
    new Recipe('Steamed Rice', 'test', 'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg', [new Ingredient('Meat', 1)]),
    new Recipe('Chicken Kurma', 'test', 'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg', [new Ingredient('Meat', 1), new Ingredient('Cabage', 1)]),
    new Recipe('Dal Curry', 'test', 'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg', [new Ingredient('Flour', 1), new Ingredient('Cucumber', 1)])
  ];
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListServices) {}

  getRecipes() {
    return this.recipes.slice();
  }

  sendIngredientsToShoppingList(ingredients: Ingredient[]) {
    for (let ingredient of ingredients) {
      this.shoppingListService.addNewIngredient(ingredient);
    }
  }

}
