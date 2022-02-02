import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListServices} from "../services/shopping-list.services";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListServices) {
  }

  ngOnInit(): void {
  }

  addIngredients(ingredient: { name: string, amount: string }) {
    this.shoppingListService.addNewIngredient(new Ingredient(ingredient.name, parseInt(ingredient.amount)))
  }
}
