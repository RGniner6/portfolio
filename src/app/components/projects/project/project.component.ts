import {AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Project} from '../Projects';
import {element} from 'protractor';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterViewInit {
  @Input() project: Project;
  @Input() isLeft: boolean;

  @ViewChild('card', { static: true }) private card: ElementRef;
  @ViewChild('details', { static: true }) private details: ElementRef;
  @ViewChild('builtWith', { static: true }) private builtWith: ElementRef;
  @ViewChildren('techList') private techList: QueryList<ElementRef>;
  @ViewChild('buttons') private buttons: ElementRef;
  tl: any;
  cardTl = gsap.timeline();

  constructor() {}

  ngAfterViewInit(): void {
     this.slideCardUp();
  }

  ngOnInit(): void {
    // Setup Scrolltrigger and timeline defaults
    this.tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.card.nativeElement,
        start: 'top 80%'
      },
      defaults: {
        duration: 0.8,
        autoAlpha: 0,
        ease: 'power1.inOut',
      },
    });

    // gsap.from(this.techList.nativeElement.childNodes, {
    //   translateY: 20,
    //   duration: 0.5,
    //   stagger: 0.2,
    //   delay: 2,
    // });

    // TODO: Make description retractable for mobile
  }

  getChildrenRefs(queryList: QueryList<ElementRef>) {
    return queryList.map((elementRef) => elementRef.nativeElement);
  }


  slideCardUp() {
    this.tl
      .from(this.card.nativeElement, {
        translateY: 50,
      })
      .from(this.builtWith.nativeElement, {
        translateY: 20,
        duration: 0.3,
      }, 'labels')
      .from(this.getChildrenRefs(this.techList), {
        translateY: 20,
        duration: 0.5,
        stagger: 0.2,
      })
      .from(Array.from(this.buttons.nativeElement.childNodes), {
        translateY: 20,
        duration: 0.5,
        stagger: 0.2
      })
    ;
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
}
