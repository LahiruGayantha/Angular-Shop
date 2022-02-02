import { Component } from '@angular/core';
import {ShoppingListServices} from "./shopping-list/services/shopping-list.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListServices]
})
export class AppComponent {
  title = 'shop';

  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
