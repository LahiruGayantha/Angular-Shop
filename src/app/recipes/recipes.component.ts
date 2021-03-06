import {Component, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeServices} from "./services/recipe.services";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeServices]
})
export class RecipesComponent implements OnInit {

  selectedItem: Recipe | undefined;

  constructor(private recipeServices:RecipeServices) {
  }

  ngOnInit(): void {
    this.recipeServices.recipeSelected.subscribe((recipe:Recipe)=>{
      this.selectedItem = recipe;
    })
  }

}
