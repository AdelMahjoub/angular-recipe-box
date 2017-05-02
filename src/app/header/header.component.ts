import { RecipesService } from './../services/recipes.service';
import { ModalService } from './../services/modal.sevice';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: ModalService, private recipesService: RecipesService) { }

  ngOnInit() {
  }

  @ViewChild('collapse') mobileCollapse: ElementRef;

  toggleCollapse() {
    (<HTMLElement>this.mobileCollapse.nativeElement).classList.contains('collapse') ?
      (<HTMLElement>this.mobileCollapse.nativeElement).classList.remove('collapse')
      :
      (<HTMLElement>this.mobileCollapse.nativeElement).classList.add('collapse');
  }

  openModal() {
    this.modalService.toggleModal.emit(true);
    this.recipesService.selectedRecipe.emit(-1);
  }

}
