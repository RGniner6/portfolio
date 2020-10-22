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
  @ViewChild('infoPanel', {static: true}) infoPanel: ElementRef;
  @ViewChild('info', {static: true}) info: ElementRef;
  @ViewChild('card', {static: true}) card: ElementRef;
  @ViewChild('formRef', {static: true}) formRef: ElementRef;

  form: FormGroup;
  tl: any;
  cardTl: any;
  infoTl: any;
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
        duration: 0.3,
        autoAlpha: 0,
        ease: 'power1.inOut',
      },
    });

    this.cardTl = gsap.timeline({
      scrollTrigger: {
        trigger: this.card.nativeElement,
        start: 'top 80%'
      },
      defaults: {
        duration: 0.3,
        autoAlpha: 0,
        ease: 'power1.inOut',
      },
    });

    this.infoTl = gsap.timeline({
      scrollTrigger: {
        trigger: this.infoPanel.nativeElement,
        start: 'top 80%'
      },
      defaults: {
        duration: 0.3,
        autoAlpha: 0,
        ease: 'power1.inOut',
      },
    });
    this.sectionHeaderAnimation();
    this.setCardAnimation();
    this.setInfoAnimation();
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

  setCardAnimation() {
    this.cardTl
      .from(this.card.nativeElement, {
        duration: 0.8,
        translateY: 50,
      })
      .from(this.formRef.nativeElement.childNodes, {
        translateY: 20,
        stagger: 0.2
      });
  }

  setInfoAnimation() {
    this.infoTl
      .from(this.infoPanel.nativeElement, {
        duration: 0.8,
        translateY: 50,
      })
      .from(this.info.nativeElement.childNodes, {
        translateY: 20,
        stagger: 0.2
      });
  }

  @HostListener('window:resize', ['$event'])
  get isMobile(): boolean {
    return window.innerWidth < 768.1;
  }

}
