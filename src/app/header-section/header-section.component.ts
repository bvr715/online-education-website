import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css']
})
export class HeaderSectionComponent {



  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.checkScroll();
  }

  toggleNav() {
    const faBars = this.el.nativeElement.querySelector('.fa-bars');
    const navbar = this.el.nativeElement.querySelector('.navbar');

    if (faBars.classList.contains('nav-toggle')) {
      this.renderer.removeClass(faBars, 'nav-toggle');
      this.renderer.removeClass(navbar, 'nav-toggle');
      this.renderer.removeClass(faBars,'fa-times')
    } else {
      this.renderer.addClass(faBars,'fa-times')
      this.renderer.addClass(faBars, 'nav-toggle');
      this.renderer.addClass(navbar, 'nav-toggle');
    }
  }

  @HostListener('window:scroll', [])
  @HostListener('window:load', [])
  checkScroll() {
    const header = this.el.nativeElement.querySelector('header');
    const faBars = this.el.nativeElement.querySelector('.fa-bars');
    const navbar = this.el.nativeElement.querySelector('.navbar');

     this.renderer.removeClass(faBars, 'fa-times');
    this.renderer.removeClass(navbar, 'nav-toggle');

    if (window.scrollY > 30) {
      this.renderer.addClass(header, 'header-active');
    } else {
      this.renderer.removeClass(header, 'header-active');
    }
  }

}
