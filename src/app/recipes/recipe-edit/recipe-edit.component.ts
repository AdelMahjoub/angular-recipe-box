import { Recipe } from './../../models/recipe.model';
import { RecipesService } from './../../services/recipes.service';
import { ModalService } from './../../services/modal.sevice';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})

export class RecipeEditComponent implements OnInit {

  // Selected recipe, passed from AppComponent
  @Input() selectedRecipe: Recipe;

  // Modal form, two way binded properties
  recipeName: string = '';
  ingredients: string = '';

  /**
   * 
   * @param modalService 
   * @param recipesService 
   */
  constructor(private modalService: ModalService, private recipesService: RecipesService) {}

  ngOnInit() {
    // Upadate the modal 
    if(this.selectedRecipe) {
      this.recipeName = this.selectedRecipe.name;
      this.ingredients = this.selectedRecipe.ingredients.join(',');
    }
  }

  closeModal() {
    this.modalService.toggleModal.emit(false);
    this.recipesService.updateLocalStorage();
  }

  saveRecipe(e: Event) {
    e.preventDefault();
    // Edit recipe
    if(this.selectedRecipe) {
      this.selectedRecipe.name = this.recipeName;
      this.selectedRecipe.ingredients = this.ingredients.split(',');
      return this.closeModal();
    } else {
      // New recipe
      this.recipesService.recipes.unshift(new Recipe(this.recipeName, this.ingredients.split(',')));
      return this.closeModal();
    }
  }

}
