import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeServices} from "../services/recipe.services";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeServices: RecipeServices) {
    this.recipe = new Recipe('','','',[])
  }

  ngOnInit(): void {
  }


  sendItemsToShoppingList() {
    this.recipeServices.sendIngredientsToShoppingList(this.recipe.ingredients)
  }
}
