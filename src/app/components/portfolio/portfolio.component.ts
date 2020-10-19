import {Component, ElementRef, OnInit} from '@angular/core';
import {gsap} from 'gsap';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  button: any;
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {}


}
