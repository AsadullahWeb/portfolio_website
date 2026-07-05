import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isMenuOpen = false;

  isSticky = false;
  scrollProgress = 0;
  activeSection = 'hero';

  toggleMenu(){

    this.isMenuOpen = !this.isMenuOpen;

  }

  closeMenu(){

    this.isMenuOpen = false;

  }

  @HostListener('window:scroll')

  onScroll(){

    this.isSticky = window.pageYOffset > 30;
    const scrollTop =
  window.pageYOffset ||
  document.documentElement.scrollTop;

const documentHeight =
  document.documentElement.scrollHeight -
  document.documentElement.clientHeight;

this.scrollProgress =
  (scrollTop / documentHeight) * 100;
  const sections = [
  'hero',
  'about',
  'skills',
  'services',
  'projects',
  'contact'
];

for (const section of sections) {

  const element = document.getElementById(section);

  if (element) {

    const top = element.offsetTop - 120;

    const height = element.offsetHeight;

    if (window.scrollY >= top &&
        window.scrollY < top + height) {

      this.activeSection = section;

    }

  }

}

  }
  

}