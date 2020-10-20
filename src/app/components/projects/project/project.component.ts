import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Project} from '../Projects';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  @Input() isLeft: boolean;

  @ViewChild('card', { static: true }) private card: ElementRef;
  @ViewChild('details', { static: true }) private details: ElementRef;
  tl = gsap.timeline();
  cardTl = gsap.timeline();
  detailsTl = gsap.timeline();

  constructor() {}

  ngOnInit(): void {
    // this.tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: this.details.nativeElement,
    //     start: 'top top'
    //   }
    // });
    // this.setUpTimeline();
    gsap.from(this.details.nativeElement, {
      scrollTrigger: this.details.nativeElement,
      duration: 2,
      translateX: this.isLeft ? 100 : -100,
    });
    // TODO: Make description retractable for mobile
  }


  hoverCard(reverse: boolean = false) {
    this.cardTl.to(this.card.nativeElement, {
        duration: 0.3,
        boxShadow: '0 8px 16px 0 rgba(11,12,13,.08)',
        borderColor: 'transparent',
        translateY: -8,
      },
    );
    this.cardTl.pause();
    reverse ? this.cardTl.reverse() : this.cardTl.play();
  }

  // setUpTimeline() {
  //   this.tl.from(this.details.nativeElement, {
  //     duration: 1,
  //     translateX: 100,
  //     // opacity: 0
  //   });
  // }


}
