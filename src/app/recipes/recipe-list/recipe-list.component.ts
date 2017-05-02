import { Recipe } from './../../models/recipe.model';
import { RecipesService } from './../../services/recipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    // Get the recipes from the RecipesService
    this.recipes = this.recipesService.recipes;
  }

}
