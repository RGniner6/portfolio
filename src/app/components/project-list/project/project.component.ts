import {AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Project} from '../Projects';
import {NavigationService} from '../../../services/navigation.service';

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
  @ViewChild('cardTitle') private cardTitle: ElementRef;
  tl: any;
  detailsTl: any;
  hideDetails = true;
  constructor() {
  }

  ngAfterViewInit(): void {
     this.slideCardUp();
     this.slideDetailsIn();
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


    this.detailsTl = gsap.timeline({
        scrollTrigger: {
          trigger: this.details.nativeElement,
          start: 'top 80%'
        },
        defaults: {
          duration: 0.5,
          autoAlpha: 0,
          ease: 'power1.inOut',
        },
      });
  }

  getChildrenRefs(queryList: QueryList<ElementRef>) {
    return queryList.map((elementRef) => elementRef.nativeElement);
  }


  slideCardUp() {
    this.tl
      .from(this.card.nativeElement, {
        translateY: 50,
      }, 'first')
      .from(this.builtWith.nativeElement, {
        translateY: 20,
        duration: 0.3,
      }, 'second')
      .from(this.cardTitle.nativeElement, {
        translateY: 20,
        duration: 0.3,
      }, 'second')
      .from(this.getChildrenRefs(this.techList), {
        translateY: 20,
        duration: 0.3,
        stagger: 0.1,
      }, 'third')
      .from(Array.from(this.buttons.nativeElement.childNodes), {
        translateY: 20,
        duration: 0.3,
        stagger: 0.1
      }, 'third');
  }

  slideDetailsIn() {
      this.detailsTl
        .from(this.details?.nativeElement, {
          translateX: this.isMobile()? 0: this.isLeft? 30:-30,
          translateY: this.isMobile()? 30: 0,
          autoAlpha: 0,
        }, 'second')
        .from(this.details?.nativeElement.childNodes, {
          translateY: 20,
          stagger: 0.3,
        });
      return this.detailsTl;
  }


  hoverCard(reverse: boolean = false) {
    this.detailsTl.to(this.card.nativeElement, {
        duration: 0.3,
        boxShadow: '0 8px 16px 0 rgba(11,12,13,.08)',
        borderColor: 'transparent',
        translateY: -8,
      },
    );
  }

  @HostListener('window:resize', ['$event'])
  isMobile(): boolean {
    return window.innerWidth < 768.1;
  }

  get projectImage() {
    return this.project.imageName ?
      `assets/projects/${this.project.imageName}.png` : 'https://upload.wikimedia.org/wikipedia/commons/7/71/Black.png'
  }
}
