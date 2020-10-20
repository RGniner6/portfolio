import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { gsap } from 'gsap';
import {NavigationService} from '../../services/navigation.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @ViewChild('landingRef', {static: true}) landingRef: ElementRef;
  @ViewChild('arm', {static: true}) arm: ElementRef;
  @ViewChild('rahul', {static: true}) illustration: ElementRef;
  @ViewChild('greeting', {static: true}) greeting: ElementRef;
  @ViewChild('intro', {static: true}) intro: ElementRef;
  // @ViewChild('pitch', {static: true}) pitch: ElementRef;
  tl = gsap.timeline();
  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.addLink('about', this.landingRef);
    this.heroAnimation();
    this.rahulAnimation();
  }

  rahulAnimation() {
    // const wave = gsap.timeline({repeat: 5});

    this.tl
      .set(this.arm.nativeElement, {transformOrigin : '0 70%'})
      .from(this.illustration.nativeElement, {duration: 1.5, translateX: '150%', ease: 'power3'})
      .to(this.arm.nativeElement, {duration: 0.3, yoyo: true, repeat: 5, rotation: 10, ease: 'power1.inOut'});
  }

  heroAnimation() {
    this.tl
      .from(this.greeting.nativeElement, {duration: 1, translateX: -160, opacity: 0, ease: 'power1.inOut'}, 'intro-text')
      .from(this.intro.nativeElement, {duration: 1.5, translateX: 130, scale: 1.2, opacity: 0,  }, 'intro-text');
  }
}
