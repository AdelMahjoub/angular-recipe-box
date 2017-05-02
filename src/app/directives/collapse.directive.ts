import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCollapse]'
})

// This directive is only used in mobile view to collapse the navbar
export class CollapseDirective {

  constructor(private elRef: ElementRef) { }

  @HostListener('click') toggleCollapse() {
    let details = (<HTMLElement>this.elRef.nativeElement).nextElementSibling;
    details.classList.contains('collapse') ?
      details.classList.remove('collapse')
      :
      details.classList.add('collapse');
  }

}
