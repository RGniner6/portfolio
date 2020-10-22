import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Project, projects} from './Projects';
import {NavigationService} from '../../services/navigation.service';
import {gsap} from 'gsap';

@Component({
  selector: 'app-projects',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  @ViewChild('projectRef', {static: true}) projectElement: ElementRef;
  @ViewChild('sectionHeader', {static: true}) sectionHeader: ElementRef;
  @ViewChild('sectionDescription', {static: true}) sectionDesc: ElementRef;

  projects: Project[];
  tl: any;

  constructor(private navigationService: NavigationService) {
    this.projects = projects;
  }

  ngOnInit(): void {
    this.navigationService.addLink('projects', this.projectElement);
    this.tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.sectionHeader.nativeElement,
        start: 'top 80%'
      },
      defaults: {
        duration: 0.8,
        autoAlpha: 0,
        ease: 'power1.inOut',
      },
    });
    this.sectionHeaderAnimation();
  }

  sectionHeaderAnimation() {
    this.tl
      .from(this.sectionHeader.nativeElement, {duration: 1, translateX: -160, opacity: 0, ease: 'power1.inOut'}, 'intro-text')
      .from(this.sectionDesc.nativeElement, {duration: 1.5, translateX: 130, scale: 1.2, opacity: 0,  }, 'intro-text');
  }

}
