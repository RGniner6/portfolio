import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { gsap } from 'gsap';
import {NavigationService} from '../../services/navigation.service';
import {icon} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('navButton', {static: true}) navButton: ElementRef;
  @ViewChild('topLine', {static: true}) topLine: ElementRef;
  @ViewChild('bottomLine', {static: true}) bottomLine: ElementRef;
  @ViewChild('navBox', {static: true}) navBox: ElementRef;

  tl = gsap.timeline({
    defaults: {
      duration: 0.2,
      ease: 'power1.inOut'
    },
    paused: true,
    reversed: true
  });
  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    // gsap.from('.nav-list li', {
    //   duration: 0.5,
    //   translateY: -80,
    //   stagger: 0.2,
    //   ease: 'power3'
    // });
    this.menuIconAnimation();
    this.navBarAnimation();
  }

  menuIconAnimation() {
    this.tl
      .to(this.topLine.nativeElement, {
        rotate: 45,
        top: '50%',
        backgroundColor: 'white'
      }, 'toggle-menu')
      .to(this.bottomLine.nativeElement, {
        rotate: -45,
        top: '50%',
        backgroundColor: 'white'
      }, 'toggle-menu');
  }

  navBarAnimation() {
    this.tl
      .to(this.navBox.nativeElement, {
        right: 0
      }, 'toggle-menu');
  }

  navigateTo(name: string) {
    this.toggleMenu();
    this.navigationService.scrollto(name);
  }

  toggleMenu() {
    this.tl.reversed() ? this.tl.play() : this.tl.reverse();
  }
}
