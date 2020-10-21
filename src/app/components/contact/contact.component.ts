import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {NavigationService} from '../../services/navigation.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {gsap} from 'gsap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('contactRef', {static: true}) contactElement: ElementRef;
  @ViewChild('sectionHeader', {static: true}) sectionHeader: ElementRef;
  @ViewChild('sectionDescription', {static: true}) sectionDesc: ElementRef;
  form: FormGroup;
  tl: any;
  sectionTl: any;
  constructor(private navigationService: NavigationService,
              private http: HttpClient,
              private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['']
    });
  }

  ngOnInit(): void {
    this.navigationService.addLink('contact', this.contactElement);
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

    this.sectionTl = gsap.timeline({
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

  onSubmit() {
    if (this.form.valid) {
      const email = this.form.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/moqpddwv',
        { name: email.name, replyto: email.email, message: email.message },
        { headers }).subscribe(
        response => {
          console.log(response);
          this.form.reset();
        }
      );
    }
  }

  sectionHeaderAnimation() {
    this.tl
      .from(this.sectionHeader.nativeElement, {duration: 1, translateX: -160, opacity: 0, ease: 'power1.inOut'}, 'intro-text')
      .from(this.sectionDesc.nativeElement, {duration: 1.5, translateX: 130, scale: 1.2, opacity: 0,  }, 'intro-text');
  }

  @HostListener('window:resize', ['$event'])
  get isMobile(): boolean {
    return window.innerWidth < 768.1;
  }

}
