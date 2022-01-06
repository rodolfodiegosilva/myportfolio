import { Component, OnInit, HostListener } from '@angular/core';
import { PROFILE } from '../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  nobackground = 'nobackground';
  navsize = 'large';
  elementinview = '';
  showscrolltotop = false;
  profile = PROFILE;
  router: Router;

  constructor(private routerI: Router) {
    this.router = routerI;
  }

  ngOnInit(): void {
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollOffset === 0) {
      this.nobackground = 'nobackground';
    } else {
      this.nobackground = '';
    }

    if (scrollOffset > 300) {
      // this.navsize = 'small';
      this.showscrolltotop = true;
    } else {
      this.navsize = 'large';
      this.showscrolltotop = false;
    }

    const navlinks = [
      'Projects',
      'Experience',
      'Education',
      'Skills',
      'About',
    ];
    this.elementinview = '';
    for (const navlink of navlinks){
      if (this.isElementInViewport(document.getElementById(navlink + '-Container'))){
        this.elementinview = navlink;
      }
    }
  }

  isElementInViewport(el) {
    if (!el){
      return false;
    }

    const rect = el.getBoundingClientRect();
    return (
        rect.top + window.outerHeight * 0.35 <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom + window.outerHeight * 0.35 >= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  scrollToTop(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
