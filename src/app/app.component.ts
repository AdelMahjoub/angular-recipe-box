import { Recipe } from './models/recipe.model';
import { RecipesService } from './services/recipes.service';
import { ModalService } from './services/modal.sevice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ModalService]
})
export class AppComponent implements OnInit{
  
  // Show or hide RecipeEditComponent <app-recipe-edit>
  isOpen: boolean = false;

  // Recipe to edit passed to RecipeEditComponent <app-recipe-edit>
  selectedRecipe: Recipe;

  /**
   * 
   * @param modalService : './services/modal.sevice'
   * @param recipesService : './services/modal.sevice'
   */
  constructor(private modalService: ModalService, private recipesService: RecipesService) {}

  ngOnInit() {
    // Update this.isOpen
    this.modalService.toggleModal.subscribe(bool => this.isOpen = bool)
    
    // Update this.selectedRecipe
    this.recipesService.selectedRecipe.subscribe((index) => {
      if(index !== -1) {
        this.selectedRecipe = this.recipesService.recipes[index];
      } else {
        this.selectedRecipe = null;
      }
      
    });
  }
}
