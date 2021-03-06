import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeServices} from "../services/recipe.services";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [];

  constructor(private recipeServices:RecipeServices) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeServices.getRecipes();
  }
}
