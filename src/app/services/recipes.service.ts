import { EventEmitter } from '@angular/core';
import { Recipe } from './../models/recipe.model';

export class RecipesService {
  
  // Array of recipes
  recipes: Recipe[] = [];
  
  constructor() {
    if(window.localStorage) {
      // No recipes are saved on localStorage
      if(!window.localStorage.getItem('recipes')) {
        // New recipes
        this.initRecipes();
        // Update localStorage
        this.updateLocalStorage();
      } else {
        // Get recipes from localStorage
        this.recipes = JSON.parse(window.localStorage.getItem('recipes'))
      }
    } else {
      // localStorage not supported
      this.initRecipes();
    }
  }

  // Recipes data
  initRecipes() {
    this.recipes = [
      new Recipe(
        'Ginger Champagne', 
        ['champagne', 'ginger', 'ice', 'vodka']
      ),
      new Recipe(
        'Potato and Cheese Frittata',
        ['cheddar cheese', 'eggs', 'olive oil', 'onions', 'potato', 'salt']
      ),
      new Recipe(
        'Eggnog Thumbprints',
        ['brown sugar', 'butter', 'powdered sugar', 'eggs', 'flour', 'nutmeg', 'rum', 'salt', 'vanilla extract', 'sugar']
      ),
      new Recipe(
        'Succulent Pork Roast',
        ['brown sugar', 'garlic', 'pork chops', 'water']
      ),
      new Recipe(
        'Irish Champ',
        ['black pepper', 'butter', 'green onion', 'milk', 'potato', 'salt']
      ),
      new Recipe(
        'Chocolate-Cherry Thumbprints',
        ['cocoa powder', 'baking powder', 'butter', 'eggs', 'flour', 'oats', 'salt', 'sugar', 'vanilla extract']
      )
    ];
  }

  // Update localStorage
  updateLocalStorage() {
    window.localStorage.setItem('recipes', JSON.stringify(this.recipes));
  }

  // Emit a number, used as the recipe's index for the recipe to edit 
  selectedRecipe = new EventEmitter<number>();

}
