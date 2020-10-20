import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild('logo', {static: true}) logo: ElementRef;
  @ViewChildren('navlist') menu: QueryList<ElementRef>;
  menuItems: string[] = ['Projects', 'Contact', 'Resume'];
  menuItemRefs: ElementRef[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.menuItemRefs = this.menu.map((elementRef) => elementRef.nativeElement);
    this.navbarAnimation();
  }

  navbarAnimation() {
    gsap.from(this.menuItemRefs, {
      duration: 0.5,
      translateY: -80,
      stagger: 0.2,
      ease: 'power3'
    });
  }
}
