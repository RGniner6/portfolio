import {ElementRef, Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private links: {[elementName: string]: ElementRef} = {};

  constructor(private router: Router) { }

  addLink(name: string, link: ElementRef) {
    this.links[name] = link;
  }

  getLink(name: string) {
    return this.links[name];
  }

  scrollto(name: string) {
    if (this.router.url !== '') {
      this.router.navigate(['/']);
      setTimeout(() => {this.links[name].nativeElement.scrollIntoView({ behavior: 'smooth'});});
    } else {
      this.links[name].nativeElement.scrollIntoView({behavior: 'smooth'});
    }
  }

  // toggleNavBarVisibility()

}
