import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {gsap} from 'gsap';
import {NavigationService} from '../../services/navigation.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @ViewChild('landing', {static: true}) landing: ElementRef;
  @ViewChild('projects', {static: true}) projects: ElementRef;
  @ViewChild('contact', {static: true}) contact: ElementRef;

  constructor(private elementRef: ElementRef,
              private navigationService: NavigationService) { }

  ngOnInit(): void {
    // this.navigationService.addLink('about', this.landing);
    // this.navigationService.addLink('projects', this.projects);
    // this.navigationService.addLink('contact', this.contact);
  }


}
