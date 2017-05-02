import { ModalService } from './../../services/modal.sevice';
import { RecipesService } from './../../services/recipes.service';
import { Recipe } from './../../models/recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // index of recipes, passed from RecipeListComponent
  @Input() recipeIndex: number;

  recipe: Recipe;
  /**
   * 
   * @param recipesService 
   * @param modalService 
   */
  constructor(private recipesService: RecipesService, private modalService: ModalService) { }

  ngOnInit() {
    // Get the recipe that correspond to the index passed from RecipeListComponent
    this.recipe = this.recipesService.recipes[this.recipeIndex];
  }

  editRecipe() {
    // Open the edit modal, Listened from AppComponent
    this.modalService.toggleModal.emit(true);
    // Emit the index of the recipe, Listened from AppComponent
    this.recipesService.selectedRecipe.emit(this.recipeIndex);
  }

  removeRecipe() {
    // Delete a recipe
    this.recipesService.recipes.splice(this.recipeIndex, 1);

    // Update the localStorage
    this.recipesService.updateLocalStorage();
  }

}
