import { EventEmitter } from "@angular/core";

export class ModalService {
  
  // Emit true or false, used to open or close Modal edit form
  toggleModal = new EventEmitter<boolean>();

}