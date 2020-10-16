import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @ViewChild('arm', {static: true}) arm: ElementRef;
  @ViewChild('rahul', {static: true}) illustration: ElementRef;
  tl = gsap.timeline();
  constructor() { }

  ngOnInit(): void {
    this.setRahulAnimation();
  }

  setRahulAnimation() {
    this.tl
      .set(this.arm.nativeElement, {transformOrigin : '0 70%'})
      .from(this.illustration.nativeElement, {duration: 1.5, delay: 1, translateX: 700, ease: 'power3'})
      .to(this.arm.nativeElement, {duration: 0.3, yoyo: true, repeat: 5, rotation: 10, ease: 'power1.inOut'});
  }
}
