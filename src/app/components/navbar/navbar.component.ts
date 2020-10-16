import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('logo', {static: true}) logo: ElementRef;

  constructor() { }

  ngOnInit(): void {
    gsap.from('.nav-list li', {
      duration: 0.5,
      translateY: -80,
      stagger: 0.2,
      ease: 'power3'
    });
  }

}
