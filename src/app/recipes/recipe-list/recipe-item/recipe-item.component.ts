import {Component, Input} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipeServices} from "../../services/recipe.services";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent{
  @Input() recipe: Recipe;

  constructor(private recipeServices: RecipeServices) {
    this.recipe = new Recipe('','','',[])
  }

  onClick() {
    this.recipeServices.recipeSelected.emit(this.recipe)
  }
}
