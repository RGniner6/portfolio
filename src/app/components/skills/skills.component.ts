import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavigationService} from '../../services/navigation.service';
import {gsap} from 'gsap'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @ViewChild('sectionHeader', {static: true}) sectionHeader: ElementRef;
  @ViewChild('sectionDescription', {static: true}) sectionDesc: ElementRef;
  @ViewChild('skillsRef', {static: true}) skillsRef: ElementRef;
  @ViewChild('languages', {static: true}) languages: ElementRef;
  @ViewChild('frontend', {static: true}) frontend: ElementRef;
  @ViewChild('backend', {static: true}) backend: ElementRef;
  @ViewChild('misc', {static: true}) misc: ElementRef;
  @ViewChild('miscList', {static: true}) miscList: ElementRef;
  @ViewChild('backendList', {static: true}) backendList: ElementRef;
  @ViewChild('frontendList', {static: true}) frontendList: ElementRef;
  @ViewChild('languagesList', {static: true}) languagesList: ElementRef;
  tl;
  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.addLink('skills', this.skillsRef);
    this.tl = gsap.timeline({
      scrollTrigger: {
        start: 'top 80%',
        trigger: this.sectionHeader.nativeElement,
      },
      defaults: {
        duration: 0.8,
        autoAlpha: 0,
        ease: 'power1.inOut',
      },
    });
    this.sectionHeaderAnimation();
    this.skillsAnimation();
  }

  sectionHeaderAnimation() {
    this.tl
      .from(this.sectionHeader.nativeElement, {duration: 1, translateX: -160, opacity: 0, ease: 'power1.inOut'}, 'intro-text')
      .from(this.sectionDesc.nativeElement, {duration: 1.5, translateX: 130, scale: 1.2, opacity: 0,  }, 'intro-text');
  }

  skillsAnimation() {
    const listRefs = [
      [this.languages, this.languagesList],
      [this.frontend, this.frontendList],
      [this.backend, this.backendList],
      [this.misc, this.miscList],
    ]
    listRefs.forEach((listRef) => {
      gsap.from(listRef[0].nativeElement, {
        scrollTrigger: {
          trigger: listRef[0].nativeElement,
          start: 'top 80%',
        },
        translateY: 20,
        duration: 0.8,
        autoAlpha: 0,
        ease: 'power1.inOut',
      })
      gsap.from(listRef[1].nativeElement.childNodes, {
        scrollTrigger: {
          trigger: listRef[0].nativeElement,
          start: 'top 80%',
        },
        translateY: 20,
        duration: 0.8,
        autoAlpha: 0,
        ease: 'power1.inOut',
        stagger: 0.1,
      })
    })
  }



}
