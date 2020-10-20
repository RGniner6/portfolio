import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { gsap } from 'gsap';
import {NavigationService} from '../../services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('navButton', {static: true}) navButton: ElementRef;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    gsap.from('.nav-list li', {
      duration: 0.5,
      translateY: -80,
      stagger: 0.2,
      ease: 'power3'
    });
  }

  navigateTo(name: string) {
    this.navigationService.scrollto(name);
  }
}
