import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavigationService} from '../../services/navigation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('contactRef', {static: true}) contactElement: ElementRef;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.addLink('contact', this.contactElement);
  }

}
