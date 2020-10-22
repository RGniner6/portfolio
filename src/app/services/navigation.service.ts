import {ElementRef, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private links: {[elementName: string]: ElementRef} = {};

  constructor() { }

  addLink(name: string, link: ElementRef) {
    this.links[name] = link;
  }

  getLink(name: string) {
    return this.links[name];
  }

  scrollto(name: string) {
    this.links[name].nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  // toggleNavBarVisibility()

}
